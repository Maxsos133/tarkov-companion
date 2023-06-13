const db = require('../db')
const { Quest } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const quests = [
        {
            name: `Debut`,
            trader: `Prapor`,
            map: `Any location`,
            objectives: [
                {
                    type: `shoot`,
                    description: `Eliminate Scavs all over the Tarkov territory`,
                    finish: `5`
                },
                {
                    type: `give item`,
                    description: `Obtain and hand over MP-133 12ga shotguns`,
                    finish: `2`
                }
            ]
        },
        {
            name: `Shortage`,
            trader: `Therapist`,
            map: `Any location`,
            objectives: [
                {
                    type: `find item`,
                    description: `Find Salewa first aid kits in raid`,
                    finish: `3`
                },
                {
                    type: `give item`,
                    description: `Hand over the first aid kits`,
                    finish: `3`
                }
            ]
        }, 
        {
            name: `Checking`,
            trader: `Prapor`,
            map: `Customs`,
            objectives: [
                {
                    type: `find quest item`,
                    description: `Obtain the Bronze pocket watch on a chain on Customs`,
                    finish: `1`
                },
                {
                    type: `give quest item`,
                    description: `Hand over the pocket watch`,
                    finish: `1`
                }
            ]
        },
        {
            name: `The Tarkov Shooter - Part 1`,
            trader: `Jaeger`,
            map: `Any location`,
            objectives: [
                {
                    type: `shoot`,
                    description: `Eliminate Scavs from over 40 meters away while using a bolt-action rifle with iron sights`,
                    finish: `5`
                }
            ]
        },
        {
            name: `Introduction`,
            trader: `Mechanic`,
            map: `Woods`,
            objectives: [
                {
                    type: `visit`,
                    description: `Find Jaeger's camp at the specified spot on Woods`,
                    finish: `1`
                },
                {
                    type: `find quest item`,
                    description: `Obtain Jaeger's encrypted message`,
                    finish: `1`
                },
                {
                    type: `give quest item`,
                    description: `Hand over the message`,
                    finish: `1`
                }
            ]
        },
        {
            name: `Supplier`,
            trader: `Skier`,
            map: `Any location`,
            objectives: [
                {
                    type: `give item`,
                    description: `Hand over the found in raid BNTI Module-3M body armor`,
                    finish: `1`
                },
                {
                    type: `give item`,
                    description: `Hand over the found in raid TOZ-106 shotgun`,
                    finish: `1`
                }
            ]
        },
        {
            name: `Operation Aquarius - Part 1`,
            trader: `Therapist`,
            map: `Customs`,
            objectives: [
                {
                    type: `visit`,
                    description: `Locate the water stockpile hidden inside of the dorms on Customs`,
                    finish: `1`
                },
                {
                    type: `extract`,
                    description: `Survive and extract from the location`,
                    finish: `1`
                }
            ]
        },
        {
            name: `Fishing Gear`,
            trader: `Peacekeeper`,
            map: `Shoreline`,
            objectives: [
                {
                    type: `visit`,
                    description: `Locate the boat hidden next to the breakwater on Shoreline`,
                    finish: `1`
                },
                {
                    type: `plant item`,
                    description: `Stash the SV-98 sniper rifle in the boat`,
                    finish: `1`
                },
                {
                    type: `plant item`,
                    description: `Stash the multitool in the boat`,
                    finish: `1`
                },
                {
                    type: `extract`,
                    description: `Survive and extract from the location`,
                    finish: `1`
                }
            ]
        },
        {
            name: `Only Business`,
            trader: `Ragman`,
            map: `Any location`,
            objectives: [
                {
                    type: `reach trader level`,
                    description: `Reach level 2 loyalty with Ragman`,
                    finish: `1`
                },
                {
                    type: `extract`,
                    description: `Survive and extract from the location`,
                    finish: `1`
                }
            ]
        },
        {
            name: `Make ULTRA Great Again`,
            trader: `Ragman`,
            map: `Interchange`,
            objectives: [
                {
                    type: `shoot`,
                    description: `Eliminate Scavs on Interchange`,
                    finish: `25`
                }
            ]
        }      
    ]
    await Quest.insertMany(quests)
    console.log(`Created quests!`)
}

const run = async () => {
    await main()
    db.close()
}

run()