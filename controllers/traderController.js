const { Trader } = require(`../models`)
const traderSchema = require(`../models/trader`)

const getTraders = async (req, res) => {
    const trader = await Trader.find({})
    res.json(trader)
}

const getTradersById = async (req, res) => {
    try {
        const { id } = req.params
        const trader = await Trader.findById(id)
        if(!trader) throw Error(`trader not found`)
        res.json(trader)
    } catch (e){
        console.log(e)
        res.send(`trader not found`)
    }
}

module.exports = {
    getTraders,
    getTradersById
}