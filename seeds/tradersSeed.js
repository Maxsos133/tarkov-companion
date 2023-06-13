const db = require('../db')
const { Trader } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const traders = [
        {
            name: `Prapor`,
            image: `https://assets.tarkov.dev/54cb50c76803fa8b248b4571.webp`,
            quests: [`Debut`, `Checking`]
        },
        {
            name: `Therapist`,
            image: `https://assets.tarkov.dev/54cb57776803fa99248b456e.webp`,
            quests: [`Shortage`, `Operation Aquarius - Part 1`]
        },
        {
            name: `Fence`,
            image: `https://assets.tarkov.dev/579dc571d53a0658a154fbec.webp`,
            quests: [``]
        },
        {
            name: `Skier`,
            image: `https://assets.tarkov.dev/58330581ace78e27b8b10cee.webp`,
            quests: [`Supplier`]
        },
        {
            name: `Peacekeeper`,
            image: `https://assets.tarkov.dev/5935c25fb3acc3127c3d8cd9.webp`,
            quests: [`Fishing Gear`]
        },
        {
            name: `Mechanic`,
            image: `https://assets.tarkov.dev/5a7c2eca46aef81a7ca2145d.webp`,
            quests: [`Introduction`]
        },
        {
            name: `Ragman`,
            image: `https://assets.tarkov.dev/5ac3b934156ae10c4430e83c.webp`,
            quests: [`Only Business`, `Make ULTRA Great Again`]
        },
        {
            name: `Jaeger`,
            image: `https://assets.tarkov.dev/5c0647fdd443bc2504c2d371.webp`,
            quests: [`The Tarkov Shooter - Part 1`]
        },
        {
            name: `Lightkeeper`,
            image: `https://assets.tarkov.dev/638f541a29ffd1183d187f57.webp`,
            quests: [``]
        },               
    ]
    await Trader.insertMany(traders)
    console.log(`Created traders!`)
}

const run = async () => {
    await main()
    db.close()
}

run()