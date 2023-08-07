const itemsNeededDiv = document.querySelector(".items-needed");
const loggedInUserId = localStorage.getItem('userId'); // localStorage.getItem('userId')  '648b1ee00ce04c132ed8c501'

async function drawItems() {
  if (loggedInUserId != null) {
    let response = await axios.get(`${BASE_URL}users/${loggedInUserId}`);
    let itemsNeededData = "";
    let itemsRequiredMap = new Map(); // Use Map to store items and their quantities

    // Fetch all items from the /items endpoint
    let itemsResponse = await axios.get(`${BASE_URL}items`);
    let itemsData = itemsResponse.data;
    let foundItemsData = response.data.items || [];

    for (let i = 0; i < response.data.quests.length; i++) {
      let quest = response.data.quests[i];
      for (let j = 0; j < quest.objectives.length; j++) {
        let objective = quest.objectives[j];
        if (objective.itemsRequired != null) {
          for (let k = 0; k < objective.itemsRequired.length; k++) {
            let item = objective.itemsRequired[k];
            let itemData = itemsData.find(
              (itemData) => itemData.name === item.name
            );
            if (itemData) {
              let quantity = parseInt(item.quantity) || 1;
              let foundItem = foundItemsData.find(
                (foundItem) => foundItem.name === item.name
              );
              let found = foundItem ? parseInt(foundItem.found) : 0;
              // Update the item's quantity and found status in the itemsRequiredMap
              if (itemsRequiredMap.has(itemData.name)) {
                let existingItem = itemsRequiredMap.get(itemData.name);
                existingItem.requiredQuantity += quantity;
                existingItem.foundQuantity = found;
              } else {
                itemsRequiredMap.set(itemData.name, {
                  requiredQuantity: quantity,
                  foundQuantity: found,
                });
              }
            }
          }
        }
      }
    }

    // Display items and their quantities
    for (let [itemName, itemDetails] of itemsRequiredMap) {
      let itemData = itemsData.find((itemData) => itemData.name === itemName);
      if (itemData) {
        itemsNeededData += `
        <div class="item-needed">
        <img src="${itemData.image}" />
        <div>${itemName}</div>
        <div style="display: flex; justify-content: center;">
          <div style="position: absolute; bottom: 12px; left: 37%;">
            <button class="btn-minus" data-item="${itemName}" data-change="-1" style="position: absolute; bottom: -5px; left: -60px;">-</button>
            ${itemDetails.foundQuantity} /
            <button class="btn-plus" data-item="${itemName}" data-change="1" style="position: absolute; bottom: -5px; right: -90px;" >+</button>
          </div>
          <div style="color: red; position: absolute; bottom: 12px; left: 56%;">${itemDetails.requiredQuantity}</div>
        </div>
      </div>
        `;
      }
    }

    itemsNeededDiv.innerHTML = itemsNeededData;

    const minusButtons = document.querySelectorAll(".btn-minus");
    const plusButtons = document.querySelectorAll(".btn-plus");

    minusButtons.forEach((btn) => {
      btn.removeEventListener("click", updateFoundQuantity);
      btn.addEventListener("click", updateFoundQuantity);
    });

    plusButtons.forEach((btn) => {
      btn.removeEventListener("click", updateFoundQuantity);
      btn.addEventListener("click", updateFoundQuantity);
    });

    async function updateFoundQuantity(event) {
      const itemName = event.target.dataset.item;
      const change = parseInt(event.target.dataset.change);

      let itemDetails = itemsRequiredMap.get(itemName);
      if (itemDetails) {
        let newFound = itemDetails.foundQuantity + change;
        if (newFound < 0) {
          newFound = 0;
        }

        // Make API call to update the found quantity in the database
        try {
          // Use the global loggedInUserId variable here, no need to redefine it
          console.log("New found value:", newFound.toString());

          await axios.patch(
            `${BASE_URL}users/${loggedInUserId}/items/${itemName}`,
            { found: newFound.toString() }
          );

          // Update the local state immediately after the API call is successful
          itemDetails.foundQuantity = newFound;

          // Re-render the UI with the updated local state
          renderItems();
        } catch (error) {
          console.error("Error updating item found quantity:", error);
        }
      }
    }

    function renderItems() {
      let itemsNeededData = "";
      for (let [itemName, itemDetails] of itemsRequiredMap) {
        let itemData = itemsData.find((itemData) => itemData.name === itemName);
        if (itemData) {
          itemsNeededData += `
            <div class="item-needed">
              <img src="${itemData.image}" />
              <div>${itemName}</div>
              <div style="display: flex; justify-content: center;">
                <div style="position: absolute; bottom: 12px; left: 37%;">
                  <button class="btn-minus" data-item="${itemName}" data-change="-1" style="position: absolute; bottom: -5px; left: -60px;">-</button>
                  ${itemDetails.foundQuantity} /
                  <button class="btn-plus" data-item="${itemName}" data-change="1" style="position: absolute; bottom: -5px; right: -90px;" >+</button>
                </div>
                <div style="color: red; position: absolute; bottom: 12px; left: 56%;">${itemDetails.requiredQuantity}</div>
              </div>
            </div>
          `;
        }
      }

      itemsNeededDiv.innerHTML = itemsNeededData;

      const minusButtons = document.querySelectorAll(".btn-minus");
      const plusButtons = document.querySelectorAll(".btn-plus");

      minusButtons.forEach((btn) => {
        btn.removeEventListener("click", updateFoundQuantity);
        btn.addEventListener("click", updateFoundQuantity);
      });

      plusButtons.forEach((btn) => {
        btn.removeEventListener("click", updateFoundQuantity);
        btn.addEventListener("click", updateFoundQuantity);
      });
    }
  } else if (loggedInUserId === null) {
    let itemsNeededData = `
      <h2 id="notLoggedIn">You are not Logged In</h2>
    `;
    itemsNeededDiv.innerHTML = itemsNeededData;
  }
}

drawItems();
