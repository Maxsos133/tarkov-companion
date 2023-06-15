const yourQuestsDiv = document.querySelector(`.your-quests`)


async function drawYourQuests() {
    let loggedInUserId = localStorage.getItem(`userId`)
    if (loggedInUserId == null) {
        let response = await axios.get(`${BASE_URL}users/648b1ee00ce04c132ed8c501`)
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