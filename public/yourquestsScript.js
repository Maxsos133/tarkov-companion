const yourQuestsDiv = document.querySelector(`.your-quests`)
const mapFactoryBtn = document.querySelector(`#factory-btn`)
const mapCustomsBtn = document.querySelector(`#customs-btn`)
const mapShorelineBtn = document.querySelector(`#shoreline-btn`)
const mapWoodsBtn = document.querySelector(`#woods-btn`)
const mapInterchangeBtn = document.querySelector(`#interchange-btn`)
const mapReserveBtn = document.querySelector(`#reserve-btn`)
const mapLighthouseBtn = document.querySelector(`#lighthouse-btn`)
const mapLabsBtn = document.querySelector(`#labs-btn`)
const mapStreetsBtn = document.querySelector(`#streets-btn`)

mapSelectButtons = [mapFactoryBtn, mapCustomsBtn, mapShorelineBtn, mapWoodsBtn, mapInterchangeBtn, mapReserveBtn, mapLighthouseBtn, mapLabsBtn, mapStreetsBtn]

const mapDiv = document.querySelector(`#map`)


async function drawYourQuests() {
    let loggedInUserId = localStorage.getItem('userId')         //   localStorage.getItem(`userId`)  `648b1ee00ce04c132ed8c501`
    if (loggedInUserId != null) {
        let response = await axios.get(`${BASE_URL}users/${loggedInUserId}`)
        let yourQuestData = ``
        for (let i = 0; i < response.data.quests.length; i++) {
            let quest = response.data.quests[i]
            yourQuestData += `
            <button class="remove-btn" data-quest-id="${quest._id}">X</button>
            <h3>${quest.name}</h3>
            <div>Map: ${quest.map}</div>
            <div>Objectives:</div>
            `
            for (let j = 0; j < quest.objectives.length; j++) {
                let objective = quest.objectives[j]
                yourQuestData += `
                <div>${objective.description} - 0/${objective.finish}</div>
                `
            }
            yourQuestData += `
            <div id="line"></div>
            `
        }
        yourQuestsDiv.innerHTML = yourQuestData

        const removeBtns = document.querySelectorAll(`.remove-btn`)
        removeBtns.forEach(button => {
            button.addEventListener(`click`, async () => {
                const questId = button.dataset.questId
                await removeQuest(loggedInUserId, questId)
                await drawYourQuests()
            })
        })

    } else if (loggedInUserId === null) {
        let yourQuestData = `
        <h2 id="notLoggedIn">You are not Logged In</h2>
        `
        yourQuestsDiv.innerHTML = yourQuestData
    }
}

async function removeQuest(userId, questId) {
    try {
        await axios.delete(`${BASE_URL}users/${userId}/quests/${questId}`)
        console.log(`quest removed`)
    } catch (error) {
        console.error(`error removing quest:`, error)
    }
}

drawYourQuests()


mapSelectButtons.forEach(button => {
    
    button.addEventListener(`click`, async function() {
        buttonText = button.textContent.trim()
        let mapHtmlData = `
        <div id="mapWindow">
            <div id="mapImageContainer">
                <img src="imgs/${buttonText}-map.png" id="mapImg"/>
                <div id="pinContainer"></div>
            </div>

        </div>
        `
        mapDiv.innerHTML = mapHtmlData

        const mapWindow = document.querySelector(`#mapWindow`)
        const mapImg = document.querySelector(`#mapImageContainer`)
        const pinContainer = document.querySelector(`#pinContainer`)
        const panzoomInstance = panzoom(mapImg, {
            maxZoom: 5,
             minZoom: 0.8,
             contain: `outside`,
             cursor: `move`,
        })
        mapImg.addEventListener(`mousedown`, function (e) {
            e.preventDefault()
        })

        let loggedInUserId = localStorage.getItem('userId')             //   `648b1ee00ce04c132ed8c501`   localStorage.getItem(`userId`)
        let response = await axios.get(`${BASE_URL}users/${loggedInUserId}`)
        let quests = response.data.quests

        quests.forEach(quest => {
            const questName = quest.name
            if(quest.location) {
                const longitude = quest.location.longitude
                const latitude = quest.location.latitude
                const map = quest.map
                if (map === buttonText) {
                    addPinMark(longitude, latitude, questName)
                }
            }

            if (quest.objectives) {
                quest.objectives.forEach(objective => {
                    if (objective.location) {
                        const longitude = objective.location.longitude
                        const latitude = objective.location.latitude
                        const map = objective.location.map
                        const objectiveOne = objective.description
                        const finish = objective.finish
                        const items = objective.itemsRequired
                        if (map === buttonText) {
                        addPinMark(longitude, latitude, questName, objectiveOne, finish, items)
                        }
                    }
                })
            }
        })

        async function addPinMark(longitude, latitude, questName, objectiveOne, finish, items) {
            const pinElement = document.createElement('div')
            pinElement.classList.add('pin')
            pinElement.classList.add('red')
            pinElement.style.top = `${latitude}%`
            pinElement.style.left = `${longitude}%`
            pinContainer.appendChild(pinElement)
        
            const tooltip = document.createElement(`div`)
            tooltip.classList.add(`tooltip`)
            const tooltipData = `
                <h3 class="tooltip-name">${questName}</h3>
                <div class="tooltip-description">${objectiveOne} 0/${finish}</div>
                <div class="items-required"></div>
            `
            tooltip.innerHTML = tooltipData
            pinElement.appendChild(tooltip)
        
            const itemsRequiredDiv = tooltip.querySelector('.items-required')
            if (items && items.length > 0) {
                for (const item of items) {
                    const itemResponse = await axios.get(`${BASE_URL}items/${item.name}`)
                    const itemDiv = document.createElement('div')
                    itemDiv.innerHTML = `
                        <img class="item-required-image" src="${itemResponse.data.image}"/>
                        <div class="item-required-name" >${itemResponse.data.name} 0/${item.quantity}</div>
                    `
                    itemsRequiredDiv.appendChild(itemDiv)
                }
            }
        
            pinElement.addEventListener('click', function () {
                console.log(`--------------------`)
                console.log(`Left: ${pinElement.style.left}`)
                console.log(`Top: ${pinElement.style.top}`)
        
                pinElement.classList.toggle('red')
                pinElement.classList.toggle('green')
                const currentColor = pinElement.classList.contains('red') ? 'red' : 'green'
                console.log('Current color:', currentColor)
            })
        }
        

        mapImg.addEventListener(`panzoomzoom`, updatePinMarks)
        mapImg.addEventListener(`panzoompan`, updatePinMarks)
        
        function updatePinMarks() {
            const zoomLevel =panzoomInstance.getScale ()
            const { x, y } = panzoomInstance.getPan()

            const pins = pinContainer.querySelectorAll(`.pin`)
            pins.forEach(pin => {
                const longitude = parseFloat(pin.style.left)
                const latitude = parseFloat(pin.style.top)

                const adjustedLongitude = longitude * zoomLevel
                const adjustedLatitude = latitude * zoomLevel

                const adjustedX = adjustedLongitude - x
                const adjustedY = adjustedLatitude - y

                pin.style.top = `${adjustedY}px`
                pin.style.left = `${adjustedX}px`
            })
        }





        function drawPinGrid() {
            const questName = "Quest Name";
            const objectiveOne = "Objective 1";
            const finish = 10;
       

            for (let i = 0; i < 100; i++) {
                for(let j = 0; j < 100; j++) {
                    addPinMark(i, j, questName, objectiveOne, finish)
             }
         }
        }
        
        const longitudeInput = document.querySelector(`#longitude-input`)
        const latitudeInput = document.querySelector(`#latitude-input`)

        const addPinButton = document.querySelector('#add-pin-button');
addPinButton.addEventListener('click', function() {
    const longitude = parseFloat(longitudeInput.value);
    const latitude = parseFloat(latitudeInput.value);
    const questName = "Quest Name";
    const objectiveOne = "Objective 1";
    const finish = 10;

    addPinMark(longitude, latitude, questName, objectiveOne, finish);
    drawPinGrid()
});

        const longitudeMinus = document.querySelector(`#longitude-minus`)
        const longitudePlus = document.querySelector(`#longitude-plus`)
        const latitudeMinus = document.querySelector(`#latitude-minus`)
        const latitudePlus = document.querySelector(`#latitude-plus`)
        longitudeMinus.addEventListener('click', function() {
            const currentLongitude = parseFloat(longitudeInput.value);
            longitudeInput.value = (currentLongitude - 1);
            const longitude = parseFloat(longitudeInput.value);
              const latitude = parseFloat(latitudeInput.value);
             const questName = "Quest Name";
             const objectiveOne = "Objective 1";
             const finish = 10;

              addPinMark(longitude, latitude, questName, objectiveOne, finish);
          });
          
          longitudePlus.addEventListener('click', function() {
            const currentLongitude = parseFloat(longitudeInput.value);
            longitudeInput.value = (currentLongitude + 1)
            const longitude = parseFloat(longitudeInput.value);
              const latitude = parseFloat(latitudeInput.value);
             const questName = "Quest Name";
             const objectiveOne = "Objective 1";
             const finish = 10;

              addPinMark(longitude, latitude, questName, objectiveOne, finish);
          });
          
          latitudeMinus.addEventListener('click', function() {
            const currentLatitude = parseFloat(latitudeInput.value);
            latitudeInput.value = (currentLatitude - 1)
            const longitude = parseFloat(longitudeInput.value);
              const latitude = parseFloat(latitudeInput.value);
             const questName = "Quest Name";
             const objectiveOne = "Objective 1";
             const finish = 10;

              addPinMark(longitude, latitude, questName, objectiveOne, finish);
          });
          
          latitudePlus.addEventListener('click', function() {
            const currentLatitude = parseFloat(latitudeInput.value);
            latitudeInput.value = (currentLatitude + 1)
            const longitude = parseFloat(longitudeInput.value);
              const latitude = parseFloat(latitudeInput.value);
             const questName = "Quest Name";
             const objectiveOne = "Objective 1";
             const finish = 10;

              addPinMark(longitude, latitude, questName, objectiveOne, finish);
          });


    })
})


















// async function drawYourQuests() {
//     let loggedInUserId = localStorage.getItem(`userId`)
//     if (loggedInUserId != null) {
//         let response = await axios.get(`${BASE_URL}users/${loggedInUserId}`)
//         let yourQuestData = ``
//         for (let i = 0; i < response.data.quests.length; i++) {
//             let quest = response.data.quests[i]
//             yourQuestData += `
//             <button class="remove-btn" data-quest-id="${quest._id}">X</button>
//             <h3>${quest.name}</h3>
//             <div>Objectives:</div>
//             `
//             for (let j = 0; j < quest.objectives.length; j++) {
//                 let objective = quest.objectives[j]
//                 yourQuestData += `
//                 <div>${objective.description} - 0/${objective.finish}</div>
//                 `
//             }
//             yourQuestData += `
//             <div id="line"></div>
//             `
//         }
//         yourQuestsDiv.innerHTML = yourQuestData

//         const removeBtns = document.querySelectorAll(`.remove-btn`)
//         removeBtns.forEach(button => {
//             button.addEventListener(`click`, async () => {
//                 const questId = button.dataset.questId
//                 await removeQuest(loggedInUserId, questId)
//                 await drawYourQuests()
//             })
//         })

//     } else if (loggedInUserId === null) {
//         let yourQuestData = `
//         <h2 id="notLoggedIn">You are not Logged In</h2>
//         `
//         yourQuestsDiv.innerHTML = yourQuestData
//     }
// }

// async function removeQuest(userId, questId) {
//     try {
//         await axios.delete(`${BASE_URL}users/${userId}/quests/${questId}`)
//         console.log(`quest removed`)
//     } catch (error) {
//         console.error(`error removing quest:`, error)
//     }
// }

// drawYourQuests()