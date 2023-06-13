const { Quest } = require(`../models`)
const questSchema = require(`../models/quest`)

const getQuests = async (req, res) => {
    const quest = await Quest.find({})
    res.json(quest)
}

const getQuestsById = async (req, res) => {
    try {
        const { id } = req.params
        const quest = await Quest.findById(id)
        if(!quest) throw Error(`quest not found`)
        res.json(quest)
    } catch (e){
        console.log(e)
        res.send(`quest not found`)
    }
}

module.exports = {
    getQuests,
    getQuestsById
}