const praporDiv = document.querySelector(`#Prapor`)
const therapistDiv = document.querySelector(`#Therapist`)
const fenceDiv = document.querySelector(`#Fence`)
const skierDiv = document.querySelector(`#Skier`)
const peacekeeperDiv = document.querySelector(`#Peacekeeper`)
const mechanicDiv = document.querySelector(`#Mechanic`)
const ragmanDiv = document.querySelector(`#Ragman`)
const jaegerDiv = document.querySelector(`#Jaeger`)
const lightkeeperDiv = document.querySelector(`#Lightkeeper`)
const questDiv = document.querySelector(`#selectedQuest`)
const traderDiv = document.querySelector('.traderDiv');
const questList = document.querySelector('.quest-list');

traderDiv.addEventListener('mouseenter', () => {
  questList.classList.add('active')
})

traderDiv.addEventListener('mouseleave', () => {
  questList.classList.remove('active')
})


const tradersArray = [
    { element: praporDiv, name: 'Prapor' },
    { element: therapistDiv, name: 'Therapist' },
    { element: fenceDiv, name: 'Fence' },
    { element: skierDiv, name: 'Skier' },
    { element: peacekeeperDiv, name: 'Peacekeeper' },
    { element: mechanicDiv, name: 'Mechanic' },
    { element: ragmanDiv, name: 'Ragman' },
    { element: jaegerDiv, name: 'Jaeger' },
    { element: lightkeeperDiv, name: 'Lightkeeper' }
  ]

async function questClick(quest) {
    let response = await axios.get(`${BASE_URL}quests/${quest}`)
    
    let questData = `
    <button id="addQuest">ADD</button>
    <h3>${response.data.name}</h3>
    <div>Trader: ${response.data.trader}</div>
    <div>Location: ${response.data.map}</div>
    <div id="objectives"><div>Objectives:</div></div>
    `
    questDiv.innerHTML = questData
    let objectivesDiv = document.querySelector(`#objectives`)
    const addQuestButton = document.querySelector(`#addQuest`)
    addQuestButton.addEventListener(`click`, async () => {
        const selectedQuest = response.data
        let loggedInUserId = localStorage.getItem(`userId`)                //  `648b1ee00ce04c132ed8c501` 
        try {
            const updateResponse = await axios.post(`${BASE_URL}users/${loggedInUserId}`, {
                quest: selectedQuest
            })
            const updatedUser = updateResponse.data
            const updatedQuests = updatedUser.quests
            console.log(`Quest added successfully! Updated quests:`, updatedQuests)
        } catch (error) {
            console.error(`failed to add quest:`, error)
        }
    })

    for (let i = 0; i < response.data.objectives.length; i++) {
        let objective = response.data.objectives[i]
        let oneObjectiveData = `
        <div>${objective.description} - 0/${objective.finish}<div>
        
        `
        objectivesDiv.innerHTML += oneObjectiveData
    }
}


async function drawTraders() {
    let response = await axios.get(`${BASE_URL}traders`);
    let tradersData = response.data;
  
    for (let i = 0; i < tradersData.length; i++) {
      let trader = tradersData[i];
      let traderData = `
        <img class="traderImg" src="${trader.image}" />
        <h4>${trader.name}</h4>
      `;
      tradersArray[i].element.innerHTML = traderData;
  
      let questsDiv = document.createElement('div');
      questsDiv.classList.add('quest-list');
  
      for (let j = 0; j < trader.quests.length; j++) {
        const quest = trader.quests[j];
        const questElement = document.createElement('div');
        questElement.textContent = quest;
        questElement.classList.add('quest');
        questElement.addEventListener('click', () => questClick(quest));
        questsDiv.appendChild(questElement);
      }
  
      tradersArray[i].element.appendChild(questsDiv);
  
      // Add event listener for hover effect
      
    }
  }
  
  drawTraders();