const yourQuestsDiv = document.querySelector(`.your-quests`)
const BASE_URL = `https://tarkov-companion.vercel.app/`


async function drawYourQuests() {
    await checkLogin()
    let loggedInUserId = localStorage.getItem(`userId`)
    if (loggedInUserId != null) {
        let response = await axios.get(`https://tarkov-companion.vercel.app/users/${loggedInUserId}`)
        let yourQuestData = ``
        for (let i = 0; i < response.data.quests.length; i++) {
            let quest = response.data.quests[i]
            yourQuestData += `
            <button class="remove-btn" data-quest-id="${quest._id}">X</button>
            <h3>${quest.name}</h3>
            <div>Objectives:</div>
            `
            for (let j = 0; j < quest.objectives.length; j++) {
                let objective = quest.objectives[j]
                yourQuestData += `
                <div>${objective.description} - 0/${objective.finish}</div>
                `
            }
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
        <h2>You are not Logged In</h2>
        `
        yourQuestsDiv.innerHTML = yourQuestData
    }
}

async function removeQuest(userId, questId) {
    try {
        await axios.delete(`https://tarkov-companion.vercel.app/users/${userId}/quests/${questId}`)
        console.log(`quest removed`)
    } catch (error) {
        console.error(`error removing quest:`, error)
    }
}

drawYourQuests()