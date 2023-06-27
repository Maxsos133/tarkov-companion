const { Quest } = require(`../models`)
const questSchema = require(`../models/quest`)

const getQuests = async (req, res) => {
    const quest = await Quest.find({})
    res.json(quest)
}



const getQuestsByName = async (req, res) => {
    try {
        const { name } = req.params
        const quest = await Quest.findOne({ name: name})
        if(!quest) throw Error(`quest not found`)
        res.json(quest)
    } catch (e){
        console.log(e)
        res.send(`quest not found`)
    }
}

module.exports = {
    getQuests,

    getQuestsByName
}