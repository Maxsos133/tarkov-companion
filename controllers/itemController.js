const { Item } = require(`../models`)
const itemSchema = require(`../models/item`)

const getItems = async (req, res) => {
    const item = await Item.find({})
    res.json(item)
}



const getItemsByName = async (req, res) => {
    try {
        const { name } = req.params
        const item = await Item.findOne({ name: name})
        if(!item) throw Error(`item not found`)
        res.json(item)
    } catch (e){
        console.log(e)
        res.send(`item not found`)
    }
}

module.exports = {
    getItems,

    getItemsByName
}