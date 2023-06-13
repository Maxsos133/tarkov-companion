const { User } = require(`../models`)
const userSchema = require(`../models/user`)

const getUsers = async (req, res) => {
    const user = await User.find({})
    res.json(user)
}

const getUsersById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        if(!user) throw Error(`user not found`)
        res.json(user)
    } catch (e){
        console.log(e)
        res.send(`user not found`)
    }
}

module.exports = {
    getUsers,
    getUsersById
}