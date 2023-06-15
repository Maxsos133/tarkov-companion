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
const BASE_URL = `https://tarkov-companion-api.vercel.app/`

const tradersArray = [praporDiv, therapistDiv, fenceDiv, skierDiv, peacekeeperDiv, mechanicDiv, ragmanDiv, jaegerDiv, lightkeeperDiv]

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
        let loggedInUserId = localStorage.getItem(`userId`)
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
    let response = await axios.get(`${BASE_URL}traders`)
    for (let i = 0; i < response.data.length; i++) {
        let traderData = `
        <img src="${response.data[i].image}"/>
        <h4>${response.data[i].name}</h4>
        <div>Quests:</div>
        `
        tradersArray[i].innerHTML += traderData
        for (let j = 0; j < response.data[i].quests.length; j++) {
            const quest = response.data[i].quests[j];
            const questElement = document.createElement('div');
            questElement.textContent = quest;
            questElement.classList.add('quest');
            questElement.addEventListener('click', () => questClick(quest));
            tradersArray[i].appendChild(questElement);
          }


        
    }

}

drawTraders()