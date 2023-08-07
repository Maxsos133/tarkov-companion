const db = require("../db");
const { Quest } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const quests = [
    {
      name: "Debut",
      trader: "Prapor",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Scavs all over the Tarkov territory",
          finish: "5",
        },
        {
          type: "giveItem",
          description: "Obtain and hand over MP-133 12ga shotguns",
          finish: "2",
          itemsRequired: [
            {
              name: "MP-133 12ga pump-action shotgun",
              found: "0",
              quantity: "2",
            },
          ],
        },
      ],
    },
    {
      name: "Shortage",
      trader: "Therapist",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find Salewa first aid kits in raid",
          finish: "3",
        },
        {
          type: "giveItem",
          description: "Hand over the first aid kits",
          finish: "3",
          itemsRequired: [
            {
              name: "Salewa first aid kit",
              found: "0",
              quantity: "3",
            },
          ],
        },
      ],
    },
    {
      name: "Checking",
      trader: "Prapor",
      map: "Customs",
      objectives: [
        {
          type: "findQuestItem",
          description: "Obtain the Bronze pocket watch on a chain on Customs",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "55.5",
            latitude: "49",
          },
          itemsRequired: [
            {
              name: "Machinery key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the pocket watch",
          finish: "1",
        },
      ],
    },
    {
      name: "The Tarkov Shooter - Part 1",
      trader: "Jaeger",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate Scavs from over 40 meters away while using a bolt-action rifle with iron sights",
          finish: "5",
        },
      ],
    },
    {
      name: "Introduction",
      trader: "Mechanic",
      map: "Woods",
      objectives: [
        {
          type: "visit",
          description: "Find Jaeger's camp at the specified spot on Woods",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description: "Obtain Jaeger's encrypted message",
          finish: "1",
          location: {
            map: "Woods",
            longitude: "63.5",
            latitude: "66.5",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the message",
          finish: "1",
        },
      ],
    },
    {
      name: "Supplier",
      trader: "Skier",
      map: "Any location",
      objectives: [
        {
          type: "giveItem",
          description: "Hand over the found in raid BNTI Module-3M body armor",
          finish: "1",
          itemsRequired: [
            {
              name: "BNTI Module-3M body armor",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the found in raid TOZ-106 shotgun",
          finish: "1",
          itemsRequired: [
            {
              name: "TOZ-106 20ga bolt-action shotgun",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Operation Aquarius - Part 1",
      trader: "Therapist",
      map: "Customs",
      objectives: [
        {
          type: "visit",
          description:
            "Locate the water stockpile hidden inside of the dorms on Customs",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "61.5",
            latitude: "82.5",
          },
          itemsRequired: [
            {
              name: "Dorm room 206 key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Fishing Gear",
      trader: "Peacekeeper",
      map: "Shoreline",
      objectives: [
        {
          type: "visit",
          description:
            "Locate the boat hidden next to the breakwater on Shoreline",
          finish: "1",
        },
        {
          type: "plantItem",
          description:
            "Stash the SV-98 sniper rifle and the multitool in the boat",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "34.3",
            latitude: "83.3",
          },
          itemsRequired: [
            {
              name: "SV-98 7.62x54R bolt-action sniper rifle",
              found: "0",
              quantity: "1",
            },
            {
              name: "Leatherman Multitool",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Only Business",
      trader: "Ragman",
      map: "Any location",
      objectives: [
        {
          type: "reach trader level",
          description: "Reach level 2 loyalty with Ragman",
          finish: "1",
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Make ULTRA Great Again",
      trader: "Ragman",
      map: "Interchange",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Scavs on Interchange",
          finish: "25",
        },
      ],
    },
    {
      name: "Network Provider - Part 1",
      trader: "Lightkeeper",
      map: "Any location",
      objectives: [
        {
          type: "giveItem",
          description: "Hand over the found in raid Electronic components",
          finish: "4",
          itemsRequired: [
            {
              name: "Electronic components",
              found: "0",
              quantity: "4",
            },
          ],
        },
        {
          type: "giveItem",
          description:
            "Hand over the found in raid Military COFDM Wireless Signal Transmitters",
          finish: "4",
          itemsRequired: [
            {
              name: "Military COFDM Wireless Signal Transmitter",
              found: "0",
              quantity: "4",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the found in raid Gas analyzers",
          finish: "4",
          itemsRequired: [
            {
              name: "Gas analyzer",
              found: "0",
              quantity: "4",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the found in raid Broken GPhone smartphones",
          finish: "4",
          itemsRequired: [
            {
              name: "Broken GPhone smartphone",
              found: "0",
              quantity: "4",
            },
          ],
        },
      ],
    },
    {
      name: "The Choice",
      trader: "Fence",
      map: "Any location",
      objectives: [
        {
          type: "giveItem",
          description: "Handover Secure container Epsilon",
          finish: "1",
          itemsRequired: [
            {
              name: "Secure container Epsilon",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Gunsmith - Part 1",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "build weapon",
          description:
            "Modify an MP-133 to comply with the given specifications",
          finish: "1",
        },
      ],
    },
    {
      name: "Acquaintance",
      trader: "Jaeger",
      map: "Any location",
      objectives: [
        {
          type: "giveItem",
          description: "Find Iskra ration packs in raid",
          finish: "3",
          itemsRequired: [
            {
              name: "Iskra ration pack",
              found: "0",
              quantity: "3",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Find Emelya rye croutons in raid",
          finish: "2",
          itemsRequired: [
            {
              name: "Emelya rye croutons",
              found: "0",
              quantity: "2",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Find Cans of beef stew (Large) in raid",
          finish: "2",
          itemsRequired: [
            {
              name: "Can of beef stew (Large)",
              found: "0",
              quantity: "2",
            },
          ],
        },
      ],
    },
    {
      name: "The Survivalist Path - Thrifty",
      trader: "Jaeger",
      map: "Woods",
      objectives: [
        {
          type: "plantItem",
          description:
            "Stash an Iskra ration pack and Bottle of water in the ZB-016 bunker on Woods",
          finish: "1",
          location: {
            map: "Woods",
            longitude: "73.1",
            latitude: "67.2",
          },
          itemsRequired: [
            {
              name: "Iskra ration pack",
              found: "0",
              quantity: "1",
            },
            {
              name: "Bottle of water (0.6L)",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "plantItem",
          description:
            "Stash an Iskra ration pack and Bottle of water in the ZB-014 bunker on Woods",
          finish: "1",
          location: {
            map: "Woods",
            longitude: "16.5",
            latitude: "70",
          },
          itemsRequired: [
            {
              name: "Iskra ration pack",
              found: "0",
              quantity: "1",
            },
            {
              name: "Bottle of water (0.6L)",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "The Survivalist Path - Zhivchik",
      trader: "Jaeger",
      map: "Any location",
      objectives: [
        {
          type: "experience",
          description:
            "Survive for 5 minutes while suffering from complete dehydration (Excluding Factory)",
          finish: "1",
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "The Survivalist Path - Wounded Beast",
      trader: "Jaeger",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Scavs while suffering from the pain effect",
          finish: "3",
        },
      ],
    },
    {
      name: "The Survivalist Path - Tough Guy",
      trader: "Jaeger",
      map: "Woods",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate Scavs in a single raid without using any medicine on Woods",
          finish: "3",
        },
      ],
    },
    {
      name: "The Survivalist Path - Cold Blooded",
      trader: "Jaeger",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate PMC operatives with headshots while suffering from the tremor effect",
          finish: "2",
        },
      ],
    },
    {
      name: "The Survivalist Path - Junkie",
      trader: "Jaeger",
      map: "Woods",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate Scavs while under any stimulant effect on Woods",
          finish: "15",
        },
      ],
    },
    {
      name: "The Survivalist Path - Eagle-Owl",
      trader: "Jaeger",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate Scavs in the time period of 21:00-04:00 without using any NVGs or thermal sights (Excluding Factory)",
          finish: "6",
        },
      ],
    },
    {
      name: "The Survivalist Path - Combat Medic",
      trader: "Jaeger",
      map: "Any location",
      objectives: [
        {
          type: "skill",
          description: "Reach the required Vitality skill level",
          finish: "5",
        },
      ],
    },
    {
      name: "The Huntsman Path - Trophy",
      trader: "Jaeger",
      map: "Customs",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Reshala",
          finish: "1",
        },
        {
          type: "findItem",
          description: "Find Reshala's Golden TT in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over Reshala's Golden TT",
          finish: "1",
          itemsRequired: [
            {
              name: "TT-33 7.62x25 TT pistol (Golden)",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "The Huntsman Path - Forest Cleaning",
      trader: "Jaeger",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Scavs all over the Tarkov territory",
          finish: "30",
        },
      ],
    },
    {
      name: "The Huntsman Path - Controller",
      trader: "Jaeger",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate PMC operatives while they are suffering from the stun effect",
          finish: "2",
        },
      ],
    },
    {
      name: "The Huntsman Path - Justice",
      trader: "Jaeger",
      map: "Customs",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate Scavs dressed in police uniform (Reshala's bodyguards",
          finish: "3",
        },
      ],
    },
    {
      name: "The Huntsman Path - Evil Watchman",
      trader: "Jaeger",
      map: "Customs",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate PMC operatives in the Dorms area on Customs",
          finish: "5",
          location: {
            map: "Customs",
            longitude: "46",
            latitude: "78",
          },
        },
      ],
    },
    {
      name: "Stray Dogs",
      trader: "Jaeger",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description: "Locate and eliminate Death Knight",
          finish: "1",
        },
        {
          type: "shoot",
          description: "Locate and eliminate Big Pipe",
          finish: "1",
        },
        {
          type: "shoot",
          description: "Locate and eliminate Birdeye",
          finish: "1",
        },
      ],
    },
    {
      name: "The Huntsman Path - Outcasts",
      trader: "Jaeger",
      map: "Lighthouse",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Rogue USEC operatives",
          finish: "10",
          location: {
            map: "Lighthouse",
            longitude: "32",
            latitude: "47",
          },
        },
      ],
    },
    {
      name: "The Tarkov Shooter - Part 2",
      trader: "Jaeger",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description:
            "Shoot any target in the legs from over 40 meters away while using a bolt-action rifle",
          finish: "3",
        },
        {
          type: "shoot",
          description:
            "Shoot any target in the head from over 40 meters away while using a bolt-action rifle",
          finish: "2",
        },
      ],
    },
    {
      name: "The Tarkov Shooter - Part 3",
      trader: "Jaeger",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate PMC operatives from less than 25 meters away while using a bolt-action rifle",
          finish: "3",
        },
      ],
    },
    {
      name: "The Tarkov Shooter - Part 4",
      trader: "Jaeger",
      map: "Any location",
      objectives: [
        {
          type: "skill",
          description: "Reach the required Sniper Rifles skill level",
          finish: "3",
        },
      ],
    },
    {
      name: "The Tarkov Shooter - Part 5",
      trader: "Jaeger",
      map: "Customs",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate Scavs while using a bolt-action rifle in the time period of 21:00-05:00 on Customs",
          finish: "8",
        },
      ],
    },
    {
      name: "The Tarkov Shooter - Part 6",
      trader: "Jaeger",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Sniper Scavs while using a bolt-action rifle",
          finish: "5",
        },
      ],
    },
    {
      name: "The Tarkov Shooter - Part 7",
      trader: "Jaeger",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate PMC operatives from over 45 meters away while using a suppressed bolt-action rifle",
          finish: "5",
        },
      ],
    },
    {
      name: "The Tarkov Shooter - Part 8",
      trader: "Jaeger",
      map: "Woods",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate 3 PMC operatives in a single raid while using a bolt-action rifle on Woods",
          finish: "5",
        },
      ],
    },
    {
      name: "The Huntsman Path - Secured Perimeter",
      trader: "Jaeger",
      map: "Factory",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate PMC operatives in the office area (any floor) on Factory",
          finish: "6",
          location: {
            map: "Factory",
            longitude: "12.5",
            latitude: "45",
          },
        },
      ],
    },
    {
      name: "Shootout Picnic",
      trader: "Prapor",
      map: "Woods",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Scavs on Woods",
          finish: "15",
        },
      ],
    },
    {
      name: "Search Mission",
      trader: "Prapor",
      map: "Woods",
      objectives: [
        {
          type: "visit",
          description: "Locate Prapor's missing convoy on Woods",
          finish: "1",
          location: {
            map: "Woods",
            longitude: "33",
            latitude: "24",
          },
        },
        {
          type: "visit",
          description: "Locate the temporary USEC camp",
          finish: "1",
          location: {
            map: "Woods",
            longitude: "27",
            latitude: "35",
          },
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Gunsmith - Part 2",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "build weapon",
          description:
            "Modify an AKS-74U to comply with the given specifications",
          finish: "1",
        },
      ],
    },
    {
      name: "Delivery from the Past",
      trader: "Prapor",
      map: "Any location",
      objectives: [
        {
          type: "findQuestItem",
          description:
            "Obtain the secure folder in the Tarcone Director's office at the Customs terminal warehouse",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "89.5",
            latitude: "65",
          },
          itemsRequired: [
            {
              name: "Tarcone Director's office key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "plantQuestItem",
          description:
            "Stash the package in the Factory break room (2nd floor near Gate 3)",
          finish: "1",
          location: {
            map: "Factory",
            longitude: "24.5",
            latitude: "35.5",
          },
        },
        {
          type: "extract",
          description: "Survive and extract from Factory",
          finish: "1",
        },
      ],
    },
    {
      name: "The Delicious Sausage",
      trader: "Jaeger",
      map: "Streets",
      objectives: [
        {
          type: "visit",
          description: "Scout the Shestyorochka store at Nikitskaya street",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "66",
            latitude: "39",
          },
        },
        {
          type: "visit",
          description: "Scout the Sparja store at Primorsky ave",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "34",
            latitude: "55",
          },
        },
        {
          type: "visit",
          description: "Scout the Sparja store in Pinewood hotel",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "55",
            latitude: "37",
          },
        },
        {
          type: "visit",
          description: "Scout the Goshan store in Concordia",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "22",
            latitude: "66.5",
          },
        },
        {
          type: "giveItem",
          description: "Hand over the found in raid Salty Dog beef sausage",
          finish: "1",
          itemsRequired: [
            {
              name: "Salty Dog beef sausage",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "BP Depot",
      trader: "Prapor",
      map: "Customs",
      objectives: [
        {
          type: "mark",
          description:
            "Locate and mark the first fuel tank with an MS2000 Marker on Customs",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "97",
            latitude: "20",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the second fuel tank with an MS2000 Marker on Customs",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "55.5",
            latitude: "48",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the third fuel tank with an MS2000 Marker on Customs",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "33",
            latitude: "15",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the fourth fuel tank with an MS2000 Marker on Customs",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "24",
            latitude: "53.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Bad Rep Evidence",
      trader: "Prapor",
      map: "Any location",
      objectives: [
        {
          type: "visit",
          description:
            "Gain access to the locked room in the office hallway on the third floor on Factory",
          finish: "1",
        },
        {
          type: "findItem",
          description: "Obtain the Portable bunkhouse key",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description: "Obtain Secure Folder 0031 in the bunkhouse on Customs",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "45.8",
            latitude: "52.7",
          },
          itemsRequired: [
            {
              name: "Portable bunkhouse key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the folder",
          finish: "1",
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Operation Aquarius - Part 2",
      trader: "Therapist",
      map: "Customs",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Scavs on Customs",
          finish: "15",
        },
      ],
    },
    {
      name: "Gunsmith - Part 3",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "build weapon",
          description: "Modify an MP5 to comply with the given specifications",
          finish: "1",
        },
      ],
    },
    {
      name: "The Extortionist",
      trader: "Skier",
      map: "Customs",
      objectives: [
        {
          type: "findQuestItem",
          description: "Obtain the valuable cargo on Customs",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "29.7",
            latitude: "41",
          },
          itemsRequired: [
            {
              name: "Unknown key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the valuable cargo",
          finish: "1",
        },
        {
          type: "visit",
          description: "Locate the messenger's body",
          finish: "1",
        },
        {
          type: "visit",
          description: "Locate the place where the messenger hid the cargo",
          finish: "1",
        },
      ],
    },
    {
      name: "Stirrup",
      trader: "Skier",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate PMC operatives while using pistols",
          finish: "3",
        },
      ],
    },
    {
      name: "What is on the Flash Drive",
      trader: "Skier",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find Secure Flash drives in raid",
          finish: "2",
        },
        {
          type: "giveItem",
          description: "Hand over the Flash drives",
          finish: "2",
          itemsRequired: [
            {
              name: "Secure Flash drive",
              found: "0",
              quantity: "2",
            },
          ],
        },
      ],
    },
    {
      name: "Golden Swag",
      trader: "Skier",
      map: "Customs",
      objectives: [
        {
          type: "findQuestItem",
          description: "Find the Golden Zibbo lighter on Customs",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "78",
            latitude: "78",
          },
          itemsRequired: [
            {
              name: "Dorm room 303 key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "plantQuestItem",
          description:
            "Stash the lighter in the bunkhouse at the trailer parking lot on Customs",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "83.5",
            latitude: "12",
          },
          itemsRequired: [
            {
              name: "Trailer park portable cabin key",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Painkiller",
      trader: "Therapist",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find Morphine injectors in raid",
          finish: "4",
        },
        {
          type: "giveItem",
          description: "Hand over the injectors",
          finish: "4",
          itemsRequired: [
            {
              name: "Morphine injector",
              found: "0",
              quantity: "4",
            },
          ],
        },
      ],
    },
    {
      name: "Sanitary Standards - Part 2",
      trader: "Therapist",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find Gas analyzers in raid",
          finish: "2",
        },
        {
          type: "giveItem",
          description: "Hand over the gas analyzers",
          finish: "2",
          itemsRequired: [
            {
              name: "Gas analyzer",
              found: "0",
              quantity: "2",
            },
          ],
        },
      ],
    },
    {
      name: "Friend from the West - Part 1",
      trader: "Skier",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate USEC PMC operatives",
          finish: "7",
        },
        {
          type: "findItem",
          description: "Obtain USEC PMC dogtags",
          finish: "7",
        },
        {
          type: "giveItem",
          description: "Hand over the dogtags",
          finish: "7",
        },
      ],
    },
    {
      name: "Ice Cream Cones",
      trader: "Prapor",
      map: "Woods",
      objectives: [
        {
          type: "findItem",
          description: "Find AK-74 5.45x39 6L31 60-round magazines in raid",
          finish: "3",
        },
        {
          type: "giveItem",
          description: "Hand over the magazines",
          finish: "3",
          itemsRequired: [
            {
              name: "AK-74 5.45x39 6L31 60-round magazine",
              found: "0",
              quantity: "3",
            },
          ],
        },
      ],
    },
    {
      name: "Friend from the West - Part 2",
      trader: "Skier",
      map: "Any location",
      objectives: [
        {
          type: "giveItem",
          description: "Hand over USD",
          finish: "6000",
          itemsRequired: [
            {
              name: "Dollars",
              found: "0",
              quantity: "6000",
            },
          ],
        },
      ],
    },
    {
      name: "Gunsmith - Part 4",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "build weapon",
          description:
            "Modify an OP-SKS to comply with the given specifications",
          finish: "1",
        },
      ],
    },
    {
      name: "The Bunker - Part 1",
      trader: "Prapor",
      map: "Reserve",
      objectives: [
        {
          type: "visit",
          description: "Locate the underground bunker on Reserve",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "90",
            latitude: "21",
          },
        },
        {
          type: "visit",
          description:
            "Locate the control room in the underground bunker on Reserve",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "91.5",
            latitude: "18.5",
          },
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Cease Fire",
      trader: "Jaeger",
      map: "Streets",
      objectives: [
        {
          type: "extract",
          description:
            "Survive and extract from Streets of Tarkov through Klimov Street",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "62",
            latitude: "21",
          },
          itemsRequired: [
            {
              name: "RSP-30 reactive signal cartridge (Green)",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Chemical - Part 1",
      trader: "Skier",
      map: "Customs",
      objectives: [
        {
          type: "findQuestItem",
          description:
            "Obtain information about the Deputy Chief past life on Customs",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "17.6",
            latitude: "24.2",
          },
          itemsRequired: [
            {
              name: "Dorm room 220 key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the information",
          finish: "1",
        },
        {
          type: "findItem",
          description: "Obtain items that can help with the investigation",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the items",
          finish: "1",
        },
      ],
    },
    {
      name: "Pharmacist",
      trader: "Therapist",
      map: "Customs",
      objectives: [
        {
          type: "findQuestItem",
          description: "Obtain the case containing the device on Customs",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "67",
            latitude: "93.5",
          },
          itemsRequired: [
            {
              name: "Dorm room 14 key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the case",
          finish: "1",
        },
      ],
    },
    {
      name: "Gunsmith - Part 5",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "build weapon",
          description:
            "Modify a Remington Model 870 to comply with the given specifications",
          finish: "1",
        },
      ],
    },
    {
      name: "Postman Pat - Part 1",
      trader: "Prapor",
      map: "Factory",
      objectives: [
        {
          type: "findQuestItem",
          description: "Obtain the letter on the messenger's body on Factory",
          finish: "1",
          location: {
            map: "Factory",
            longitude: "43.8",
            latitude: "68",
          },
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
        {
          type: "task status",
          description: "Hand over the letter to Therapist",
          finish: "1",
        },
      ],
    },
    {
      name: "Drug Trafficking",
      trader: "Therapist",
      map: "Lighthouse",
      objectives: [
        {
          type: "visit",
          description: "Locate the hidden drug lab on Lighthouse",
          finish: "1",
        },
        {
          type: "plantItem",
          description: "Stash a WI-FI Camera in the drug lab",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "18.2",
            latitude: "39",
          },
          itemsRequired: [
            {
              name: "WI-FI Camera",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Chemical - Part 2",
      trader: "Skier",
      map: "Customs",
      objectives: [
        {
          type: "findQuestItem",
          description:
            "Find any evidence that could help with the investigation on Customs",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "83",
            latitude: "89.3",
          },
          itemsRequired: [
            {
              name: "Dorm room 220 key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the evidence",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description:
            "Find any information that could help with the investigation on Customs",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "83",
            latitude: "90.6",
          },
          itemsRequired: [
            {
              name: "Dorm room 220 key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the info",
          finish: "1",
        },
      ],
    },
    {
      name: "Tigr Safari",
      trader: "Peacekeeper",
      map: "Customs",
      objectives: [
        {
          type: "mark",
          description:
            "Locate and mark the first Tigr vehicle with an MS2000 Marker on Customs",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "11",
            latitude: "45.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the second Tigr vehicle with an MS2000 Marker on Customs",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "17.5",
            latitude: "48",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the third Tigr vehicle with an MS2000 Marker on Customs",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "63.6",
            latitude: "50.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Scrap Metal",
      trader: "Peacekeeper",
      map: "Shoreline",
      objectives: [
        {
          type: "mark",
          description:
            "Locate and mark the first T-90 tank with an MS2000 Marker on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "5",
            latitude: "55",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the second T-90 tank with an MS2000 Marker on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "43",
            latitude: "56.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the third T-90 tank with an MS2000 Marker on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "33",
            latitude: "11.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Polikhim Hobo",
      trader: "Prapor",
      map: "Customs",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Scavs on Customs",
          finish: "25",
        },
      ],
    },
    {
      name: "Lost Contact",
      trader: "Therapist",
      map: "Lighthouse",
      objectives: [
        {
          type: "visit",
          description: "Find the lost group in the chalet area on Lighthouse",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "69.5",
            latitude: "44",
          },
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "General Wares",
      trader: "Therapist",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find Cans of beef stew (Small) in raid",
          finish: "15",
        },
        {
          type: "giveItem",
          description: "Hand over the cans",
          finish: "15",
          itemsRequired: [
            {
              name: "Can of beef stew (Small)",
              found: "0",
              quantity: "15",
            },
          ],
        },
      ],
    },
    {
      name: "Postman Pat - Part 2",
      trader: "Therapist",
      map: "Any location",
      objectives: [
        {
          type: "giveQuestItem",
          description: "Hand over the letter from the messenger to Therapist",
          finish: "1",
        },
      ],
    },
    {
      name: "Car Repair",
      trader: "Therapist",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find Car batteries in raid",
          finish: "4",
        },
        {
          type: "findItem",
          description: "Find Spark plugs in raid",
          finish: "8",
        },
        {
          type: "giveItem",
          description: "Hand over the batteries",
          finish: "4",
          itemsRequired: [
            {
              name: "Rechargeable battery",
              found: "0",
              quantity: "4",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the spark plugs",
          finish: "8",
          itemsRequired: [
            {
              name: "Spark plug",
              found: "0",
              quantity: "8",
            },
          ],
        },
      ],
    },
    {
      name: "Health Care Privacy - Part 1",
      trader: "Therapist",
      map: "Shoreline",
      objectives: [
        {
          type: "mark",
          description:
            "Locate and mark the first ambulance with an MS2000 Marker on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "7.5",
            latitude: "69",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the second ambulance with an MS2000 Marker on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "9",
            latitude: "68.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the third ambulance with an MS2000 Marker on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "38.5",
            latitude: "30",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Health Care Privacy - Part 2",
      trader: "Therapist",
      map: "Shoreline",
      objectives: [
        {
          type: "findQuestItem",
          description:
            "Search the room in the Health Resort for any documents about TerraGroup's research",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "90.5",
            latitude: "7",
          },
          itemsRequired: [
            {
              name: "Health Resort west wing room 306 key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the retrieved information",
          finish: "1",
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Health Care Privacy - Part 3",
      trader: "Therapist",
      map: "Woods",
      objectives: [
        {
          type: "visit",
          description:
            "Locate the van that belonged to the head of the health resort Medical Services",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description: "Take a sample of the blood",
          finish: "1",
          location: {
            map: "Woods",
            longitude: "52.5",
            latitude: "81.5",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the blood sample",
          finish: "1",
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "An Apple a Day Keeps the Doctor Away",
      trader: "Therapist",
      map: "Any location",
      objectives: [
        {
          type: "giveItem",
          description: "Hand over RUB",
          finish: "400000",
          itemsRequired: [
            {
              name: "Roubles",
              found: "0",
              quantity: "400000",
            },
          ],
        },
      ],
    },
    {
      name: "Health Care Privacy - Part 4",
      trader: "Therapist",
      map: "Any location",
      objectives: [
        {
          type: "skill",
          description: "Reach the required Health skill level",
          finish: "4",
        },
      ],
    },
    {
      name: "Health Care Privacy - Part 5",
      trader: "Therapist",
      map: "Factory",
      objectives: [
        {
          type: "visit",
          description: "Locate the drop spot on night-time Factory",
          finish: "1",
        },
        {
          type: "plantItem",
          description:
            "Obtain 3 packs of Gunpowder Kite and stash them in the designated spot",
          finish: "3",
          location: {
            map: "Factory",
            longitude: "11.5",
            latitude: "44.5",
          },
          itemsRequired: [
            {
              name: "Gunpowder Kite",
              found: "0",
              quantity: "3",
            },
          ],
        },
      ],
    },
    {
      name: "You've Got Mail",
      trader: "Prapor",
      map: "Streets",
      objectives: [
        {
          type: "findQuestItem",
          description: "Obtain the registered mail on Streets of Tarkov",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "43.5",
            latitude: "30",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the letter",
          finish: "1",
        },
      ],
    },
    {
      name: "Hippocratic Oath",
      trader: "Therapist",
      map: "Any location",
      objectives: [
        {
          type: "giveItem",
          description: "Hand over USD",
          finish: "500",
          itemsRequired: [
            {
              name: "Dollars",
              found: "0",
              quantity: "500",
            },
          ],
        },
      ],
    },
    {
      name: "Chemical - Part 3",
      trader: "Skier",
      map: "Factory",
      objectives: [
        {
          type: "findQuestItem",
          description: "Obtain the chemical-filled syringe hidden in Factory",
          finish: "1",
          location: {
            map: "Factory",
            longitude: "11.5",
            latitude: "44",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the syringe",
          finish: "1",
        },
      ],
    },
    {
      name: "Eagle Eye",
      trader: "Peacekeeper",
      map: "Shoreline",
      objectives: [
        {
          type: "visit",
          description: "Locate the first UAV crash site on Shoreline",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description: "Obtain the SAS disk from the first crashed drone",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "28",
            latitude: "9",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the first SAS disk",
          finish: "1",
        },
        {
          type: "visit",
          description: "Locate the second UAV crash site on Shoreline",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description: "Obtain the SAS disk from the second crashed drone",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "62.5",
            latitude: "61",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the second SAS disk",
          finish: "1",
        },
      ],
    },
    {
      name: "The Bunker - Part 2",
      trader: "Prapor",
      map: "Reserve",
      objectives: [
        {
          type: "visit",
          description:
            "Locate the hermetic door leading to the hospital (White Bishop)",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "88",
            latitude: "14",
          },
        },
        {
          type: "visit",
          description:
            "Locate one of the two hermetic doors leading to the academy building (Black Bishop)",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "95",
            latitude: "15",
          },
        },
        {
          type: "visit",
          description:
            "Locate one of the two hermetic doors leading to barracks #1 (Black Pawn)",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "96",
            latitude: "23.5",
          },
        },
        {
          type: "visit",
          description:
            "Locate one of the two hermetic doors leading to barracks #2 (White Pawn)",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "90",
            latitude: "27",
          },
        },
        {
          type: "visit",
          description:
            "Locate the hermetic door leading to the building of the air control center (King)",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "87.5",
            latitude: "20.5",
          },
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Chemical - Part 4",
      trader: "Skier",
      map: "Customs",
      objectives: [
        {
          type: "visit",
          description: "Locate the transport with the chemicals on Customs",
          finish: "1",
        },
        {
          type: "mark",
          description: "Mark the vehicle with an MS2000 Marker",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "19",
            latitude: "37",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Loyalty Buyout",
      trader: "Skier",
      map: "Any location",
      objectives: [
        {
          type: "giveItem",
          description: "Hand over 1,000,000 RUB to Skier",
          finish: "1000000",
          itemsRequired: [
            {
              name: "Roubles",
              found: "0",
              quantity: "1000000",
            },
          ],
        },
      ],
    },
    {
      name: "Humanitarian Supplies",
      trader: "Peacekeeper",
      map: "Shoreline",
      objectives: [
        {
          type: "mark",
          description: "Locate and mark the first truck with an MS2000 Marker",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "37",
            latitude: "22.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description: "Locate and mark the second truck with an MS2000 Marker",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "56",
            latitude: "84.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "findItem",
          description: "Obtain MRE ration packs",
          finish: "5",
        },
        {
          type: "giveItem",
          description: "Hand over the ration packs",
          finish: "5",
          itemsRequired: [
            {
              name: "MRE ration pack",
              found: "0",
              quantity: "5",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
        {
          type: "shoot",
          description:
            "Eliminate Scavs while wearing a UN uniform (MF-UNTAR body armor and UNTAR helmet) on Shoreline",
          finish: "10",
        },
      ],
    },
    {
      name: "Big Customer",
      trader: "Prapor",
      map: "Customs",
      objectives: [
        {
          type: "visit",
          description: "Locate the transport with the chemicals on Customs",
          finish: "1",
        },
        {
          type: "mark",
          description: "Mark the vehicle with an MS2000 Marker",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "19",
            latitude: "37",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "No Offence",
      trader: "Prapor",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Obtain M67 hand grenades",
          finish: "10",
        },
        {
          type: "giveItem",
          description: "Hand over the grenades",
          finish: "10",
          itemsRequired: [
            {
              name: "M67 hand grenade",
              found: "0",
              quantity: "10",
            },
          ],
        },
      ],
    },
    {
      name: "Out of Curiosity",
      trader: "Therapist",
      map: "Customs",
      objectives: [
        {
          type: "visit",
          description: "Locate the transport with the chemicals on Customs",
          finish: "1",
        },
        {
          type: "mark",
          description: "Mark the vehicle with an MS2000 Marker",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "19",
            latitude: "37",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Trust Regain",
      trader: "Therapist",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Obtain the Dorm room 303 key",
          finish: "1",
        },
        {
          type: "findItem",
          description: "Obtain the ZB-014 key",
          finish: "1",
        },
        {
          type: "findItem",
          description: "Obtain the Military checkpoint key",
          finish: "1",
        },
        {
          type: "findItem",
          description: "Obtain the Gas station storage room key",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the Dorm room 303 key",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the ZB-014 key",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the Military checkpoint key",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the Gas station storage room key",
          finish: "1",
        },
      ],
    },
    {
      name: "Farming - Part 1",
      trader: "Mechanic",
      map: "Factory",
      objectives: [
        {
          type: "plantItem",
          description: "Fix the first control board with a Toolset on Factory",
          finish: "1",
          location: {
            map: "Factory",
            longitude: "65",
            latitude: "25",
          },
          itemsRequired: [
            {
              name: "Toolset",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "plantItem",
          description: "Fix the second control board with a Toolset on Factory",
          finish: "1",
          location: {
            map: "Factory",
            longitude: "53.5",
            latitude: "21",
          },
          itemsRequired: [
            {
              name: "Toolset",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Signal - Part 1",
      trader: "Mechanic",
      map: "Shoreline",
      objectives: [
        {
          type: "visit",
          description: "Locate the first signal source on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "37",
            latitude: "30",
          },
        },
        {
          type: "visit",
          description: "Locate the second signal source on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "50",
            latitude: "63",
          },
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Population Census",
      trader: "Therapist",
      map: "Streets",
      objectives: [
        {
          type: "findQuestItem",
          description: "Obtain the journal containing resident details",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "39.5",
            latitude: "32",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the journal",
          finish: "1",
        },
      ],
    },
    {
      name: "No Place for Renegades",
      trader: "Prapor",
      map: "Reserve",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Raiders in the command bunker on Reserve",
          finish: "5",
          location: {
            map: "Reserve",
            longitude: "89",
            latitude: "21",
          },
        },
      ],
    },
    {
      name: "Scout",
      trader: "Mechanic",
      map: "Factory",
      objectives: [
        {
          type: "visit",
          description: "Locate the first Factory extraction",
          finish: "1",
          location: {
            map: "Factory",
            longitude: "93.2",
            latitude: "22",
          },
          itemsRequired: [
            {
              name: "Factory emergency exit key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "visit",
          description: "Locate the second Factory extraction",
          finish: "1",
          location: {
            map: "Factory",
            longitude: "67",
            latitude: "67",
          },
          itemsRequired: [
            {
              name: "Factory emergency exit key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "visit",
          description: "Locate the third Factory extraction",
          finish: "1",
          location: {
            map: "Factory",
            longitude: "34",
            latitude: "89",
          },
          itemsRequired: [
            {
              name: "Factory emergency exit key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "visit",
          description: "Locate the fourth Factory extraction",
          finish: "1",
          location: {
            map: "Factory",
            longitude: "32",
            latitude: "26",
          },
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Farming - Part 2",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find Power cords in raid",
          finish: "2",
        },
        {
          type: "giveItem",
          description: "Hand over the cords",
          finish: "2",
          itemsRequired: [
            {
              name: "Power cord",
              found: "0",
              quantity: "2",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find T-Shaped Plugs in raid",
          finish: "4",
        },
        {
          type: "giveItem",
          description: "Hand over the plugs",
          finish: "4",
          itemsRequired: [
            {
              name: "T-Shaped plug",
              found: "0",
              quantity: "4",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Printed circuit boards in raid",
          finish: "2",
        },
        {
          type: "giveItem",
          description: "Hand over the PCBs",
          finish: "2",
          itemsRequired: [
            {
              name: "Printed circuit board",
              found: "0",
              quantity: "2",
            },
          ],
        },
      ],
    },
    {
      name: "Signal - Part 2",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find PC CPUs in raid",
          finish: "3",
        },
        {
          type: "giveItem",
          description: "Hand over the CPUs",
          finish: "3",
          itemsRequired: [
            {
              name: "PC CPU",
              found: "0",
              quantity: "3",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Rechargeable batteries in raid",
          finish: "3",
        },
        {
          type: "giveItem",
          description: "Hand over the batteries",
          finish: "3",
          itemsRequired: [
            {
              name: "Rechargeable battery",
              found: "0",
              quantity: "3",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Printed circuit boards in raid",
          finish: "3",
        },
        {
          type: "giveItem",
          description: "Hand over the PCBs",
          finish: "3",
          itemsRequired: [
            {
              name: "Printed circuit board",
              found: "0",
              quantity: "3",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Broken GPhone smartphones in raid",
          finish: "3",
        },
        {
          type: "giveItem",
          description: "Hand over the phones",
          finish: "3",
          itemsRequired: [
            {
              name: "Broken GPhone smartphone",
              found: "0",
              quantity: "3",
            },
          ],
        },
      ],
    },
    {
      name: "Bad Habit",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find Malboro cigarettes in raid",
          finish: "5",
        },
        {
          type: "giveItem",
          description: "Hand over the Malboro cigarettes",
          finish: "5",
          itemsRequired: [
            {
              name: "Malboro Cigarettes",
              found: "0",
              quantity: "5",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Strike cigarettes in raid",
          finish: "5",
        },
        {
          type: "giveItem",
          description: "Hand over the Strike cigarettes",
          finish: "5",
          itemsRequired: [
            {
              name: "Strike Cigarettes",
              found: "0",
              quantity: "5",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Wilston cigarettes in raid",
          finish: "5",
        },
        {
          type: "giveItem",
          description: "Hand over the Wilston cigarettes",
          finish: "5",
          itemsRequired: [
            {
              name: "Wilston cigarettes",
              found: "0",
              quantity: "5",
            },
          ],
        },
      ],
    },
    {
      name: "Broadcast - Part 1",
      trader: "Mechanic",
      map: "Lighthouse",
      objectives: [
        {
          type: "visit",
          description: "Locate the hidden recording studio on Lighthouse",
          finish: "1",
        },
        {
          type: "plantItem",
          description: "Place a Signal Jammer inside the studio",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "30",
            latitude: "53",
          },
          itemsRequired: [
            {
              name: "Operating room key",
              found: "0",
              quantity: "1",
            },
            {
              name: "Signal Jammer",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "The Cult - Part 2",
      trader: "Peacekeeper",
      map: "Any location",
      objectives: [
        {
          type: "mark",
          description:
            "Locate and mark the first ritual spot with an MS2000 Marker on Woods",
          finish: "1",
          location: {
            map: "Woods",
            longitude: "32",
            latitude: "66",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the ritual spot with an MS2000 Marker on Customs",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "78",
            latitude: "95.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
            {
              name: "Dorm room 314 marked key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the second ritual spot with an MS2000 Marker on Woods",
          finish: "1",
          location: {
            map: "Woods",
            longitude: "52",
            latitude: "15",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the ritual spot with an MS2000 Marker on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "94",
            latitude: "67",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Spa Tour - Part 2",
      trader: "Peacekeeper",
      map: "Shoreline",
      objectives: [
        {
          type: "mark",
          description: "Mark the helicopter with an MS2000 Marker on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "38",
            latitude: "34",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description: "Mark the safe road with an MS2000 Marker on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "39",
            latitude: "34",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Spa Tour - Part 3",
      trader: "Peacekeeper",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find WD-40 (100ml) in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the WD-40",
          finish: "1",
          itemsRequired: [
            {
              name: "WD-40 (100ml)",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Clin window cleaners in raid",
          finish: "2",
        },
        {
          type: "giveItem",
          description: "Hand over the cleaners",
          finish: "2",
          itemsRequired: [
            {
              name: "Clin window cleaner",
              found: "0",
              quantity: "2",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Corrugated hoses in raid",
          finish: "2",
        },
        {
          type: "giveItem",
          description: "Hand over the hoses",
          finish: "2",
          itemsRequired: [
            {
              name: "Corrugated hose",
              found: "0",
              quantity: "2",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Ox bleach in raid",
          finish: "2",
        },
        {
          type: "giveItem",
          description: "Hand over the bleach",
          finish: "2",
          itemsRequired: [
            {
              name: "Ox bleach",
              found: "0",
              quantity: "2",
            },
          ],
        },
      ],
    },
    {
      name: "Spa Tour - Part 4",
      trader: "Peacekeeper",
      map: "Shoreline",
      objectives: [
        {
          type: "visit",
          description:
            "Locate the generators in the east wing of the Health Resort",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "92",
            latitude: "84",
          },
        },
        {
          type: "visit",
          description:
            "Locate the generators in the west wing of the Health Resort",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "82",
            latitude: "25.5",
          },
          itemsRequired: [
            {
              name: "Health Resort west wing room 219 key",
              found: "0",
              quantity: "1",
            },
            {
              name: "Health Resort west wing room 220 key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Spa Tour - Part 5",
      trader: "Peacekeeper",
      map: "Shoreline",
      objectives: [
        {
          type: "findQuestItem",
          description:
            "Obtain the key to the closed premises of the Sanatorium",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "33",
            latitude: "9.5",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the key",
          finish: "1",
        },
      ],
    },
    {
      name: "Spa Tour - Part 6",
      trader: "Peacekeeper",
      map: "Any location",
      objectives: [
        {
          type: "giveItem",
          description: "and over USD",
          finish: "8000",
          itemsRequired: [
            {
              name: "Dollars",
              found: "0",
              quantity: "8000",
            },
          ],
        },
      ],
    },
    {
      name: "Spa Tour - Part 7",
      trader: "Peacekeeper",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find Morphine injectors in raid",
          finish: "4",
        },
        {
          type: "giveItem",
          description: "Hand over the injectors",
          finish: "4",
          itemsRequired: [
            {
              name: "Morphine injector",
              found: "0",
              quantity: "4",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Alkaline cleaners for heat exchangers in raid",
          finish: "2",
        },
        {
          type: "giveItem",
          description: "Hand over the cleaners",
          finish: "2",
          itemsRequired: [
            {
              name: "Alkaline cleaner for heat exchangers",
              found: "0",
              quantity: "2",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Corrugated hoses in raid",
          finish: "2",
        },
        {
          type: "giveItem",
          description: "Hand over the hoses",
          finish: "2",
          itemsRequired: [
            {
              name: "Corrugated hose",
              found: "0",
              quantity: "2",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Propane tanks (5L) in raid",
          finish: "2",
        },
        {
          type: "giveItem",
          description: "Hand over the tanks",
          finish: "2",
          itemsRequired: [
            {
              name: "Propane tank (5L)",
              found: "0",
              quantity: "2",
            },
          ],
        },
      ],
    },
    {
      name: "Cargo X - Part 1",
      trader: "Peacekeeper",
      map: "Shoreline",
      objectives: [
        {
          type: "findQuestItem",
          description:
            "Obtain the data in the computer room in the east wing of the Health Resort",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "83",
            latitude: "67",
          },
          itemsRequired: [
            {
              name: "Health Resort east wing room 306 key",
              found: "0",
              quantity: "1",
            },
            {
              name: "Health Resort east wing room 308 key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the retrieved data",
          finish: "1",
        },
      ],
    },
    {
      name: "Cargo X - Part 2",
      trader: "Peacekeeper",
      map: "Shoreline",
      objectives: [
        {
          type: "visit",
          description: "Locate the room with reservoirs in the Health Resort",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description:
            "Obtain any information about the second part of the cargo shipment",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "91",
            latitude: "90",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the retrieved information",
          finish: "1",
        },
      ],
    },
    {
      name: "Cargo X - Part 3",
      trader: "Peacekeeper",
      map: "Shoreline",
      objectives: [
        {
          type: "visit",
          description: "Locate the hidden TerraGroup cargo on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "82",
            latitude: "47",
          },
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Documents",
      trader: "Prapor",
      map: "Reserve",
      objectives: [
        {
          type: "findQuestItem",
          description:
            "Obtain Military documents #1 in the command bunker offices on Reserve",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "91.5",
            latitude: "20.5",
          },
        },
        {
          type: "findQuestItem",
          description:
            "Obtain Military documents #2 in the command bunker offices on Reserve",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "92",
            latitude: "19.5",
          },
        },
        {
          type: "findQuestItem",
          description:
            "Obtain Military documents #3 in the command bunker offices on Reserve",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "91",
            latitude: "18",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the first documents",
          finish: "1",
        },
        {
          type: "giveQuestItem",
          description: "Hand over the second documents",
          finish: "1",
        },
        {
          type: "giveQuestItem",
          description: "Hand over the third documents",
          finish: "1",
        },
      ],
    },
    {
      name: "Cargo X - Part 4",
      trader: "Peacekeeper",
      map: "Lighthouse",
      objectives: [
        {
          type: "mark",
          description:
            "Locate and mark the TerraGroup cargo with an MS2000 Marker on Lighthouse",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "65",
            latitude: "63",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Overpopulation",
      trader: "Peacekeeper",
      map: "Lighthouse",
      objectives: [
        {
          type: "shoot",
          description: "Secure the cottage area from Scavs on Lighthouse",
          finish: "12",
          location: {
            map: "Lighthouse",
            longitude: "63.5",
            latitude: "39.5",
          },
        },
      ],
    },
    {
      name: "Counteraction",
      trader: "Peacekeeper",
      map: "Lighthouse",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate BEAR PMC operatives all over the Lighthouse territory",
          finish: "20",
        },
        {
          type: "giveItem",
          description: "Hand over the found in raid BEAR PMC dogtags",
          finish: "20",
        },
      ],
    },
    {
      name: "The Huntsman Path - Factory Chief",
      trader: "Jaeger",
      map: "Factory",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Tagilla",
          finish: "1",
        },
        {
          type: "findItem",
          description: "Find Tagilla's BOSS cap in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the BOSS cap",
          finish: "1",
          itemsRequired: [
            {
              name: "BOSS cap",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Insider",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "traderLevel",
          description: "Reach level 3 loyalty with Prapor",
          finish: "3",
        },
      ],
    },
    {
      name: "The Cult - Part 1",
      trader: "Peacekeeper",
      map: "Shoreline",
      objectives: [
        {
          type: "visit",
          description: "Locate the missing informant on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "10",
            latitude: "34",
          },
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Spa Tour - Part 1",
      trader: "Peacekeeper",
      map: "Shoreline",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate Scavs with headshots while using a 12ga shotgun on Shoreline",
          finish: "7",
        },
        ,
      ],
    },
    {
      name: "Supply Plans",
      trader: "Therapist",
      map: "Woods",
      objectives: [
        {
          type: "findQuestItem",
          description:
            "Obtain Secure Folder 0052 in the sawmill cabin on Woods",
          finish: "1",
          location: {
            map: "Woods",
            longitude: "46.5",
            latitude: "60",
          },
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
        {
          type: "giveQuestItem",
          description: "Hand over the folder",
          finish: "1",
        },
      ],
    },
    {
      name: "Kind of Sabotage",
      trader: "Skier",
      map: "Any location",
      objectives: [
        {
          type: "giveQuestItem",
          description: "Hand over Secure Folder 0052 to Skier",
          finish: "1",
        },
      ],
    },
    {
      name: "The Huntsman Path - Woods Keeper",
      trader: "Jaeger",
      map: "Woods",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Shturman",
          finish: "1",
          location: {
            map: "Woods",
            longitude: "45",
            latitude: "65",
          },
        },
        {
          type: "findItem",
          description: "Find Shturman's stash key in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over Shturman's stash key",
          finish: "1",
          itemsRequired: [
            {
              name: "Shturman's stash key",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Gunsmith - Part 6",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "buildWeapon",
          description: "Modify an AKM to comply with the given specifications",
          finish: "1",
        },
      ],
    },
    {
      name: "Farming - Part 3",
      trader: "Mechanic",
      map: "Customs",
      objectives: [
        {
          type: "visit",
          description: "Locate the warehouse of seized goods on Customs",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description: "Obtain the package of graphics cards",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "89.5",
            latitude: "66.7",
          },
          itemsRequired: [
            {
              name: "Tarcone Director's office key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the package",
          finish: "1",
        },
      ],
    },
    {
      name: "Back Door",
      trader: "Mechanic",
      map: "Reserve",
      objectives: [
        {
          type: "visit",
          description: "Find the unpowered secret exit on Reserve",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "97",
            latitude: "40",
          },
        },
        {
          type: "extract",
          description: "Extract through that exit",
          finish: "1",
        },
      ],
    },
    {
      name: "Wet Job - Part 1",
      trader: "Peacekeeper",
      map: "Shoreline",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate Scavs while using a suppressed M4A1, ADAR, or TX-15 on Shoreline",
          finish: "10",
        },
      ],
    },
    {
      name: "Farming - Part 4",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find Graphics cards in raid",
          finish: "3",
        },
        {
          type: "giveItem",
          description: "Hand over the GPUs",
          finish: "3",
          itemsRequired: [
            {
              name: "Graphics card",
              found: "0",
              quantity: "3",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find CPU Fans in raid",
          finish: "8",
        },
        {
          type: "giveItem",
          description: "Hand over the CPU Fans",
          finish: "8",
          itemsRequired: [
            {
              name: "PC CPU",
              found: "0",
              quantity: "8",
            },
          ],
        },
      ],
    },
    {
      name: "A Shooter Born in Heaven",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate PMC operatives with headshots from over 100 meters away on Woods",
          finish: "3",
        },
        {
          type: "shoot",
          description:
            "Eliminate PMC operatives with headshots from over 100 meters away on Reserve",
          finish: "3",
        },
        {
          type: "shoot",
          description:
            "Eliminate PMC operatives with headshots from over 100 meters away on Shoreline",
          finish: "3",
        },
        {
          type: "shoot",
          description:
            "Eliminate PMC operatives with headshots from over 100 meters away on Customs",
          finish: "3",
        },
        {
          type: "shoot",
          description:
            "Eliminate PMC operatives with headshots from over 100 meters away on Lighthouse",
          finish: "3",
        },
        {
          type: "shoot",
          description:
            "Eliminate PMC operatives with headshots from over 100 meters away on Streets of Tarkov",
          finish: "3",
        },
      ],
    },
    {
      name: "Surplus Goods",
      trader: "Mechanic",
      map: "Reserve",
      objectives: [
        {
          type: "findQuestItem",
          description: "Obtain the MBT Integrated Navigation System on Reserve",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "27",
            latitude: "66",
          },
          itemsRequired: [
            {
              name: "RB-ST key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the navigation complex",
          finish: "1",
        },
      ],
    },
    {
      name: "Wet Job - Part 2",
      trader: "Peacekeeper",
      map: "Shoreline",
      objectives: [
        {
          type: "visit",
          description: "Locate the fishermen's dwelling on Shoreline",
          finish: "1",
        },
        {
          type: "mark",
          description: "Mark the fishing table with an MS2000 Marker",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "12",
            latitude: "80.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Wet Job - Part 3",
      trader: "Peacekeeper",
      map: "Shoreline",
      objectives: [
        {
          type: "visit",
          description: "Find Artyom car on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "21",
            latitude: "72.5",
          },
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Wet Job - Part 4",
      trader: "Peacekeeper",
      map: "Shoreline",
      objectives: [
        {
          type: "findQuestItem",
          description: "Obtain a list of the resort's tenants on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "61.5",
            latitude: "9",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the list of tenants",
          finish: "1",
        },
      ],
    },
    {
      name: "Mentor",
      trader: "Peacekeeper",
      map: "Any location",
      objectives: [
        {
          type: "giveItem",
          description: "Hand over EUR",
          finish: "50000",
          itemsRequired: [
            {
              name: "Euros",
              found: "0",
              quantity: "50000",
            },
          ],
        },
      ],
    },
    {
      name: "Wet Job - Part 5",
      trader: "Peacekeeper",
      map: "Shoreline",
      objectives: [
        {
          type: "findQuestItem",
          description: "Obtain information on Artyom work on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "98",
            latitude: "72",
          },
          itemsRequired: [
            {
              name: "Health Resort east wing room 328 key",
              found: "0",
              quantity: "1",
            },
            {
              name: "Health Resort universal utility room key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the information",
          finish: "1",
        },
      ],
    },
    {
      name: "Wet Job - Part 6",
      trader: "Peacekeeper",
      map: "Any location",
      objectives: [
        {
          type: "skill",
          description: "Reach the required Sniper Rifles skill level",
          finish: "7",
        },
      ],
    },
    {
      name: "Classified Technologies",
      trader: "Peacekeeper",
      map: "Reserve",
      objectives: [
        {
          type: "findQuestItem",
          description:
            "Obtain the package with T-90M Commander control panel on Reserve",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "93",
            latitude: "38",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the package",
          finish: "1",
        },
      ],
    },
    {
      name: "Revision - Lighthouse",
      trader: "Peacekeeper",
      map: "Lighthouse",
      objectives: [
        {
          type: "mark",
          description:
            "Locate and mark the first BRDM with an MS2000 Marker on Lighthouse",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "36",
            latitude: "51.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the second BRDM with an MS2000 Marker on Lighthouse",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "26",
            latitude: "44",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the first Stryker with an MS2000 Marker on Lighthouse",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "63.5",
            latitude: "46.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the second Stryker with an MS2000 Marker on Lighthouse",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "90",
            latitude: "56.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Revision - Reserve",
      trader: "Peacekeeper",
      map: "Reserve",
      objectives: [
        {
          type: "visit",
          description: "Locate and inspect the first BMP-2 on Reserve",
          finish: "1",
        },
        {
          type: "mark",
          description: "Mark the first BMP-2 with an MS2000 Marker",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "34",
            latitude: "75",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "visit",
          description: "Locate and inspect the second BMP-2 on Reserve",
          finish: "1",
        },
        {
          type: "mark",
          description: "Mark the second BMP-2 with an MS2000 Marker",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "27",
            latitude: "66",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "visit",
          description: "Locate and inspect the third BMP-2 on Reserve",
          finish: "1",
        },
        {
          type: "mark",
          description: "Mark the third BMP-2 with an MS2000 Marker",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "27",
            latitude: "48",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "visit",
          description: "Locate and inspect the fourth BMP-2 on Reserve",
          finish: "1",
        },
        {
          type: "mark",
          description: "Mark the fourth BMP-2 with an MS2000 Marker",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "26.5",
            latitude: "18",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "visit",
          description: "Locate and inspect the first LAV III on Reserve",
          finish: "1",
        },
        {
          type: "mark",
          description: "Mark the first LAV III with an MS2000 Marker",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "42.5",
            latitude: "18",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "visit",
          description: "Locate and inspect the second LAV III on Reserve",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "50",
            latitude: "22",
          },
        },
        {
          type: "mark",
          description: "Locate and inspect the T-90 tank on Reserve",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "46",
            latitude: "33",
          },
        },
      ],
    },
    {
      name: "Shaking up the Teller",
      trader: "Prapor",
      map: "Customs",
      objectives: [
        {
          type: "findQuestItem",
          description: "Obtain the valuable item in dorm room 203 on Customs",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "86",
            latitude: "78",
          },
          itemsRequired: [
            {
              name: "Dorm room 203 key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the valuable item",
          finish: "1",
        },
        {
          type: "visit",
          description: "Gain access to dorm room 214",
          finish: "1",
        },
      ],
    },
    {
      name: "Disease History",
      trader: "Therapist",
      map: "Reserve",
      objectives: [
        {
          type: "findQuestItem",
          description: "Obtain Medical record #1 on Reserve",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "74.3",
            latitude: "86.5",
          },
          itemsRequired: [
            {
              name: "RB-KSM key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "findQuestItem",
          description: "Obtain Medical record #2 on Reserve",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "76.3",
            latitude: "86",
          },
          itemsRequired: [
            {
              name: "RB-SMP key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the first journal",
          finish: "1",
        },
        {
          type: "giveQuestItem",
          description: "Hand over the second journal",
          finish: "1",
        },
      ],
    },
    {
      name: "Glory to CPSU",
      trader: "Prapor",
      map: "Streets",
      objectives: [
        {
          type: "visit",
          description:
            "Locate the apartment of Prapor's friend on Streets of Tarkov",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "4",
            latitude: "34",
          },
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Safe Corridor",
      trader: "Skier",
      map: "Reserve",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate Scavs in the underground warehouse on Reserve",
          finish: "10",
          location: {
            map: "Reserve",
            longitude: "74.5",
            latitude: "27",
          },
        },
      ],
    },
    {
      name: "Signal - Part 3",
      trader: "Mechanic",
      map: "Shoreline",
      objectives: [
        {
          type: "mark",
          description:
            "Place the Signal jammer on the first specified place on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "37",
            latitude: "30",
          },
          itemsRequired: [
            {
              name: "Signal Jammer",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Place the Signal jammer on the second specified place on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "50",
            latitude: "63",
          },
          itemsRequired: [
            {
              name: "Signal Jammer",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Place the Signal jammer on the third specified place on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "62",
            latitude: "48",
          },
          itemsRequired: [
            {
              name: "Signal Jammer",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Broadcast - Part 2",
      trader: "Mechanic",
      map: "Streets",
      objectives: [
        {
          type: "visit",
          description:
            "Locate the place of bloody broadcast inside the grocery store on Streets of Tarkov",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "33",
            latitude: "57",
          },
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Dangerous Road",
      trader: "Therapist",
      map: "Streets",
      objectives: [
        {
          type: "extract",
          description:
            "Survive and extract from Streets of Tarkov through Primorsky Ave Taxi V-Ex",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "47",
            latitude: "78",
          },
        },
      ],
    },
    {
      name: "Gunsmith - Part 7",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "buildWeapon",
          description: "Modify an M4A1 to comply with the given specifications",
          finish: "1",
        },
      ],
    },
    {
      name: "Signal - Part 4",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "skill",
          description: "Reach the required Memory skill level",
          finish: "4",
        },
      ],
    },
    {
      name: "Urban Medicine",
      trader: "Therapist",
      map: "Streets",
      objectives: [
        {
          type: "visit",
          description: "Locate the chemical laboratory on Streets of Tarkov",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description: "Obtain the container with drug samples",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "38",
            latitude: "58",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the container",
          finish: "1",
        },
      ],
    },
    {
      name: "Corporate Secrets",
      trader: "Mechanic",
      map: "Lighthouse",
      objectives: [
        {
          type: "findQuestItem",
          description:
            "Find the data on the water pump operation on Lighthouse",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "29",
            latitude: "55.5",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the extracted data",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description:
            "Find the data on the pumping station operation on Lighthouse",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "23",
            latitude: "40",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the extracted data",
          finish: "1",
        },
      ],
    },
    {
      name: "Revision - Streets of Tarkov",
      trader: "Peacekeeper",
      map: "Streets",
      objectives: [
        {
          type: "mark",
          description:
            "Locate and mark the first Stryker with an MS2000 Marker on Streets of Tarkov",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "60.5",
            latitude: "74.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the second Stryker with an MS2000 Marker on Streets of Tarkov",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "33.5",
            latitude: "70",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the third Stryker with an MS2000 Marker on Streets of Tarkov",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "47",
            latitude: "18",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Big Sale",
      trader: "Ragman",
      map: "Interchange",
      objectives: [
        {
          type: "visit",
          description: "Locate and check the AVOKADO store on Interchange",
          finish: "1",
          location: {
            map: "Interchange",
            longitude: "61.5",
            latitude: "58.5",
          },
        },
        {
          type: "visit",
          description: "Locate and check the KOSTIN store on Interchange",
          finish: "1",
          location: {
            map: "Interchange",
            longitude: "61",
            latitude: "45",
          },
        },
        {
          type: "visit",
          description: "Locate and check the tRend store on Interchange",
          finish: "1",
          location: {
            map: "Interchange",
            longitude: "56",
            latitude: "39.5",
          },
        },
        {
          type: "visit",
          description: "Locate and check the DINO CLOTHES store on Interchange",
          finish: "1",
          location: {
            map: "Interchange",
            longitude: "54",
            latitude: "43",
          },
        },
        {
          type: "visit",
          description: "Locate and check the TOP BRAND store on Interchange",
          finish: "1",
          location: {
            map: "Interchange",
            longitude: "54",
            latitude: "57",
          },
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Gunsmith - Part 8",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "buildWeapon",
          description:
            "Modify an AKS-74N to comply with the given specifications",
          finish: "1",
        },
      ],
    },
    {
      name: "The Punisher - Part 1",
      trader: "Prapor",
      map: "Shoreline",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate Scavs while using an AKM series weapon on Shoreline",
          finish: "15",
        },
      ],
    },
    {
      name: "Seaside Vacation",
      trader: "Therapist",
      map: "Lighthouse",
      objectives: [
        {
          type: "findQuestItem",
          description: "Find the informant's briefcase on Lighthouse",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "55.5",
            latitude: "63.5",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the found package",
          finish: "1",
        },
      ],
    },
    {
      name: "Audit",
      trader: "Ragman",
      map: "Streets",
      objectives: [
        {
          type: "findQuestItem",
          description: "Obtain the financial records on Streets of Tarkov",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "64",
            latitude: "45",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the journal",
          finish: "1",
        },
      ],
    },
    {
      name: "Dressed to Kill",
      trader: "Ragman",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find Kinda Cowboy hats in raid",
          finish: "2",
        },
        {
          type: "findItem",
          description: "Find Ushanka ear-flap hats in raid",
          finish: "2",
        },
        {
          type: "giveItem",
          description: "Hand over the ushanka-hats",
          finish: "2",
          itemsRequired: [
            {
              name: "Ushanka ear flap hat",
              found: "0",
              quantity: "2",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the hats",
          finish: "2",
          itemsRequired: [
            {
              name: "Cowboy hat",
              found: "0",
              quantity: "2",
            },
          ],
        },
      ],
    },
    {
      name: "Database - Part 2",
      trader: "Ragman",
      map: "Interchange",
      objectives: [
        {
          type: "findQuestItem",
          description: "Obtain the OLI cargo route documents on Interchange",
          finish: "1",
          location: {
            map: "Interchange",
            longitude: "54.5",
            latitude: "68.5",
          },
          itemsRequired: [
            {
              name: "OLI logistics department office key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the documents",
          finish: "1",
        },
      ],
    },

    {
      name: "A Fuel Matter",
      trader: "Ragman",
      map: "Reserve",
      objectives: [
        {
          type: "mark",
          description:
            "Mark the first group of fuel tanks with an MS2000 Marker on Reserve",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "16",
            latitude: "41",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Mark the second group of fuel tanks with an MS2000 Marker on Reserve",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "39.5",
            latitude: "65",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Inventory Check",
      trader: "Ragman",
      map: "Reserve",
      objectives: [
        {
          type: "visit",
          description:
            "Check the first arsenal in the eastern barracks (Black Pawn) on Reserve",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "93",
            latitude: "63.5",
          },
        },
        {
          type: "visit",
          description:
            "Check the duty room in the eastern barracks (Black Pawn) on Reserve",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "90",
            latitude: "64",
          },
          itemsRequired: [
            {
              name: "RB-OB key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "visit",
          description:
            "Check the second arsenal in the eastern barracks (Black Pawn) on Reserve",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "88",
            latitude: "63.5",
          },
          itemsRequired: [
            {
              name: "RB-ORB3 key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "visit",
          description:
            "Check the first arsenal in the southern barracks (White Pawn) on Reserve",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "96.5",
            latitude: "80",
          },
          itemsRequired: [
            {
              name: "RB-ORB1 key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "visit",
          description:
            "Check the second arsenal in the southern barracks (White Pawn) on Reserve",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "96.5",
            latitude: "88",
          },
          itemsRequired: [
            {
              name: "RB-ORB2 key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Database - Part 1",
      trader: "Ragman",
      map: "Interchange",
      objectives: [
        {
          type: "findQuestItem",
          description: "Obtain the Goshan cargo manifests on Interchange",
          finish: "1",
          location: {
            map: "Interchange",
            longitude: "64",
            latitude: "40",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the Goshan cargo manifests",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description: "Obtain the OLI cargo manifests on Interchange",
          finish: "1",
          location: {
            map: "Interchange",
            longitude: "57",
            latitude: "72",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the OLI cargo manifests",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description: "Obtain the IDEA cargo manifests on Interchange",
          finish: "1",
          location: {
            map: "Interchange",
            longitude: "59.5",
            latitude: "25",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the IDEA cargo manifests",
          finish: "1",
        },
      ],
    },
    {
      name: "Gratitude",
      trader: "Ragman",
      map: "Woods",
      objectives: [
        {
          type: "plantItem",
          description:
            "Stash Ghost balaclava, Shemang (Green), RayBench Hipster Reserve sunglasses and Round frame sunglasses in the specified place",
          finish: "4",
          location: {
            map: "Woods",
            longitude: "44.5",
            latitude: "72.5",
          },
          itemsRequired: [
            {
              name: "Ghost balaclava",
              found: "0",
              quantity: "1",
            },
            {
              name: "Shemagh (Green)",
              found: "0",
              quantity: "1",
            },
            {
              name: "RayBench Hipster Reserve sunglasses",
              found: "0",
              quantity: "1",
            },
            {
              name: "Round frame sunglasses",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "The Blood of War - Part 1",
      trader: "Ragman",
      map: "Interchange",
      objectives: [
        {
          type: "mark",
          description:
            "Mark the first fuel tank with an MS2000 Marker on Interchange",
          finish: "1",
          location: {
            map: "Interchange",
            longitude: "70",
            latitude: "18.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Mark the second fuel tank with an MS2000 Marker on Interchange",
          finish: "1",
          location: {
            map: "Interchange",
            longitude: "71.5",
            latitude: "43.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Mark the third fuel tank with an MS2000 Marker on Interchange",
          finish: "1",
          location: {
            map: "Interchange",
            longitude: "43.5",
            latitude: "53.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "The Punisher - Part 2",
      trader: "Prapor",
      map: "Shoreline",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate Scavs while using a suppressed weapon on Shoreline",
          finish: "12",
        },
        {
          type: "findItem",
          description: "Find Lower half-masks in raid",
          finish: "7",
        },
        {
          type: "giveItem",
          description: "Hand over the half-masks",
          finish: "7",
          itemsRequired: [
            {
              name: "Lower half-mask",
              found: "0",
              quantity: "7",
            },
          ],
        },
      ],
    },
    {
      name: "Reconnaissance",
      trader: "Prapor",
      map: "Lighthouse",
      objectives: [
        {
          type: "visit",
          description:
            "Recon the roof of the first office building on Lighthouse",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "29.5",
            latitude: "54.5",
          },
        },
        {
          type: "visit",
          description:
            "Recon the roof of the second office building on Lighthouse",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "23.5",
            latitude: "41.5",
          },
        },
        {
          type: "visit",
          description:
            "Recon the roof of the third office building on Lighthouse",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "27.5",
            latitude: "33.5",
          },
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Easy Job - Part 1",
      trader: "Prapor",
      map: "Lighthouse",
      objectives: [
        {
          type: "visit",
          description:
            "Locate the helicopter at the water treatment plant on Lighthouse",
          finish: "1",
        },
        {
          type: "mark",
          description: "Mark the helicopter with an MS2000 Marker",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "33.5",
            latitude: "41.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Easy Job - Part 2",
      trader: "Prapor",
      map: "Lighthouse",
      objectives: [
        {
          type: "shoot",
          description:
            "Secure the area around the helicopter at the water treatment plant on Lighthouse",
          finish: "20",
          location: {
            map: "Lighthouse",
            longitude: "33",
            latitude: "45",
          },
        },
      ],
    },
    {
      name: "Gunsmith - Part 9",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "buildWeapon",
          description:
            "Modify an P226R to comply with the given specifications",
          finish: "1",
        },
      ],
    },
    {
      name: "The Punisher - Part 3",
      trader: "Prapor",
      map: "Customs",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Scavs while using an AKS-74U on Customs",
          finish: "25",
        },
      ],
    },
    {
      name: "Courtesy Visit",
      trader: "Jaeger",
      map: "Shoreline",
      objectives: [
        {
          type: "visit",
          description:
            "Locate the chairman's house in the abandoned village on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "4",
            latitude: "34",
          },
        },
        {
          type: "visit",
          description:
            "Locate the fisherman's house in the abandoned village on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "10",
            latitude: "34",
          },
        },
        {
          type: "visit",
          description:
            "Locate the priest's house in the abandoned village on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "5",
            latitude: "26",
          },
        },
        {
          type: "extract",
          description:
            "Survive and extract from Shoreline with the Survived exit status",
          finish: "1",
        },
      ],
    },
    {
      name: "Reserve",
      trader: "Jaeger",
      map: "Reserve",
      objectives: [
        {
          type: "visit",
          description: "Locate the food storage location on Reserve",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "74",
            latitude: "23",
          },
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Shady Business",
      trader: "Jaeger",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find Secure Flash drives in raid",
          finish: "3",
        },
        {
          type: "giveItem",
          description: "Hand over the Flash drives",
          finish: "3",
          itemsRequired: [
            {
              name: "Secure Flash drive",
              found: "0",
              quantity: "3",
            },
          ],
        },
      ],
    },
    {
      name: "Long Road",
      trader: "Skier",
      map: "Lighthouse",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Scavs along the main road on Lighthouse",
          finish: "15",
          location: {
            map: "Lighthouse",
            longitude: "51",
            latitude: "50",
          },
        },
      ],
    },
    {
      name: "Road Closed",
      trader: "Peacekeeper",
      map: "Streets",
      objectives: [
        {
          type: "visit",
          description: "Locate the cargo convoy on Streets of Tarkov",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "45",
            latitude: "46",
          },
        },
        {
          type: "visit",
          description: "Determine the ambush spot",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "41",
            latitude: "51",
          },
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Green Corridor",
      trader: "Prapor",
      map: "Streets",
      objectives: [
        {
          type: "visit",
          description: "Locate the cargo convoy on Streets of Tarkov",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "45",
            latitude: "46",
          },
        },
        {
          type: "visit",
          description: "Determine the ambush spot",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "41",
            latitude: "51",
          },
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Grenadier",
      trader: "Prapor",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate PMC operatives while using hand grenades",
          finish: "8",
        },
      ],
    },
    {
      name: "Watching You",
      trader: "Mechanic",
      map: "Streets",
      objectives: [
        {
          type: "visit",
          description: "Locate the surveillance spot on Streets of Tarkov",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description: "Obtain the observation results",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "79",
            latitude: "29",
          },
          itemsRequired: [
            {
              name: "Hotel room 215 key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the data",
          finish: "1",
        },
      ],
    },
    {
      name: "Broadcast - Part 3",
      trader: "Jaeger",
      map: "Streets",
      objectives: [
        {
          type: "visit",
          description:
            "Locate the place of bloody broadcast inside the old house on Streets of Tarkov",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "66",
            latitude: "48",
          },
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Ballet Lover",
      trader: "Ragman",
      map: "Streets",
      objectives: [
        {
          type: "visit",
          description:
            "Locate the balletmeister's apartment on Streets of Tarkov",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "16",
            latitude: "35",
          },
          itemsRequired: [
            {
              name: "Primorsky 46-48 skybridge key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Gunsmith - Part 10",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "buildWeapon",
          description:
            "Modify an AK-105 to comply with the given specifications",
          finish: "1",
        },
      ],
    },
    {
      name: "The Punisher - Part 4",
      trader: "Prapor",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Scavs while using a 12ga shotgun on Woods",
          finish: "10",
        },
        {
          type: "shoot",
          description:
            "Eliminate PMC operatives while wearing a balaclava (any type) and Scav vest on Shoreline",
          finish: "10",
        },
        {
          type: "findItem",
          description: "Find Bars A-2607 95H18 knives in raid",
          finish: "5",
        },
        {
          type: "giveItem",
          description: "Hand over the knives",
          finish: "5",
          itemsRequired: [
            {
              name: "Bars A-2607 95Kh18 knife",
              found: "0",
              quantity: "5",
            },
          ],
        },
      ],
    },
    {
      name: "Pest Control",
      trader: "Jaeger",
      map: "Reserve",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Scavs in the barracks area on Reserve",
          finish: "10",
          location: {
            map: "Reserve",
            longitude: "50",
            latitude: "53",
          },
        },
      ],
    },
    {
      name: "The Huntsman Path - Eraser - Part 1",
      trader: "Jaeger",
      map: "Reserve",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Glukhar",
          finish: "1",
        },
      ],
    },
    {
      name: "The Punisher - Part 5",
      trader: "Prapor",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find a Kalashnikov AK-74N assault rifle in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the AK-74N",
          finish: "1",
          itemsRequired: [
            {
              name: "Kalashnikov AK-74N 5.45x39 assault rifle",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find a Colt M4A1 assault rifle in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the M4A1",
          finish: "1",
          itemsRequired: [
            {
              name: "Colt M4A1 5.56x45 assault rifle Standard",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Makarov PM pistols in raid",
          finish: "2",
        },
        {
          type: "giveItem",
          description: "Hand over the pistols",
          finish: "2",
          itemsRequired: [
            {
              name: "Makarov PM 9x18PM pistol",
              found: "0",
              quantity: "2",
            },
          ],
        },
        {
          type: "shoot",
          description:
            "Eliminate PMC operatives while wearing a PACA body armor and 6B47 helmet",
          finish: "10",
        },
      ],
    },
    {
      name: "Insomnia",
      trader: "Prapor",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate PMC operatives in the time period of 22:00-05:00 (Excluding Factory)",
          finish: "30",
        },
      ],
    },
    {
      name: "Missing Cargo",
      trader: "Skier",
      map: "Lighthouse",
      objectives: [
        {
          type: "visit",
          description: "Locate the crashed helicopter on Lighthouse",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description: "Find the informant's intelligence folder",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "78.5",
            latitude: "39",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the folder",
          finish: "1",
        },
      ],
    },
    {
      name: "The Hermit",
      trader: "Jaeger",
      map: "Lighthouse",
      objectives: [
        {
          type: "visit",
          description: "Locate the hideout of Jaeger's friend on Lighthouse",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description: "Find and obtain the message for Jaeger",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "45",
            latitude: "29",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the message",
          finish: "1",
        },
      ],
    },
    {
      name: "Our Own Land",
      trader: "Prapor",
      map: "Lighthouse",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate USEC PMC operatives all over the Lighthouse territory",
          finish: "20",
        },
        {
          type: "giveItem",
          description: "Hand over the found in raid USEC PMC dogtags",
          finish: "20",
        },
      ],
    },
    {
      name: "Colleagues - Part 1",
      trader: "Therapist",
      map: "Shoreline",
      objectives: [
        {
          type: "visit",
          description: "Locate the group that was sent to the Health Resort",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "38.5",
            latitude: "30",
          },
        },
        {
          type: "visit",
          description: "Locate the group that was sent to the pier",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "41",
            latitude: "87",
          },
        },
        {
          type: "visit",
          description: "Locate the group that was sent to the cottages",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "20",
            latitude: "45",
          },
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Anesthesia",
      trader: "Prapor",
      map: "Shoreline",
      objectives: [
        {
          type: "mark",
          description:
            "Mark the first trading post with an MS2000 Marker on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "38.5",
            latitude: "30",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Mark the second trading post with an MS2000 Marker on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "41",
            latitude: "87",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Mark the third trading post with an MS2000 Marker on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "20",
            latitude: "48",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "The Punisher - Part 6",
      trader: "Prapor",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate PMC operatives while using an SVD rifle (Excluding Factory)",
          finish: "15",
        },
        {
          type: "findItem",
          description: "Find BEAR PMC dogtags in raid",
          finish: "7",
        },
        {
          type: "giveItem",
          description: "Hand over the BEAR dogtags",
          finish: "7",
        },
        {
          type: "findItem",
          description: "Find USEC PMC dogtags in raid",
          finish: "7",
        },
        {
          type: "giveItem",
          description: "Hand over the USEC dogtags",
          finish: "7",
        },
      ],
    },
    {
      name: "Rigged Game",
      trader: "Skier",
      map: "Shoreline",
      objectives: [
        {
          type: "plantItem",
          description:
            "Mark the medical container at the Health Resort with an MS2000 Marker on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "38.5",
            latitude: "30",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "plantItem",
          description:
            "Mark the medical container by cottages with an MS2000 Marker on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "20",
            latitude: "48",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "plantItem",
          description:
            "Mark the medical container at the river pier with an MS2000 Marker on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "41",
            latitude: "87",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Colleagues - Part 2",
      trader: "Therapist",
      map: "Shoreline",
      objectives: [
        {
          type: "findQuestItem",
          description: "Obtain Sanitar's surgery kit marked with a blue symbol",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "41.5",
            latitude: "86",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over Sanitar's surgery kit",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description: "Obtain Sanitar's ophthalmoscope",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "20",
            latitude: "49.5",
          },
          itemsRequired: [
            {
              name: "Cottage back door key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over Sanitar's ophthalmoscope",
          finish: "1",
        },
      ],
    },
    {
      name: "Samples",
      trader: "Peacekeeper",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find M.U.L.E. stimulant injector in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the injector",
          finish: "1",
          itemsRequired: [
            {
              name: "M.U.L.E. stimulant injector",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Obdolbos cocktail injector in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the injector",
          finish: "1",
          itemsRequired: [
            {
              name: "Obdolbos cocktail injector",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Meldonin stimulant injector in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the injector",
          finish: "1",
          itemsRequired: [
            {
              name: "Meldonin injector",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find AHF1-M stimulant injector in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the injector",
          finish: "1",
          itemsRequired: [
            {
              name: "AHF1-M stimulant injector",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find P22 stimulant injector in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the injector",
          finish: "1",
          itemsRequired: [
            {
              name: "P22 (Product 22) stimulant injector",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find L1 (Norepinephrine) stimulant injector in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the injector",
          finish: "1",
          itemsRequired: [
            {
              name: "L1 (Norepinephrine) injector",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find 3-(b-TG) stimulant injector in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the injector",
          finish: "1",
          itemsRequired: [
            {
              name: "3-(b-TG) stimulant injector",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Vitamins - Part 1",
      trader: "Skier",
      map: "Any location",
      objectives: [
        {
          type: "findQuestItem",
          description: "Obtain the first Chemical container on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "87.5",
            latitude: "30",
          },
          itemsRequired: [
            {
              name: "Health Resort west wing office room 112 key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the first container",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description: "Obtain the second Chemical container on Interchange",
          finish: "1",
          location: {
            map: "Interchange",
            longitude: "58.5",
            latitude: "44.5",
          },
          itemsRequired: [
            {
              name: "EMERCOM medical unit key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the second container",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description: "Obtain the third Chemical container on Interchange",
          finish: "1",
          location: {
            map: "Interchange",
            longitude: "58.5",
            latitude: "48.5",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the third container",
          finish: "1",
        },
      ],
    },
    {
      name: "Gunsmith - Part 11",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "buildWeapon",
          description:
            "Modify a KRISS Vector 9x19 to comply with the given specifications",
          finish: "1",
        },
      ],
    },
    {
      name: "Kings of the Rooftops",
      trader: "Prapor",
      map: "Streets",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate the snipers on the rooftops on Streets of Tarkov",
          finish: "10",
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Vitamins - Part 2",
      trader: "Skier",
      map: "Any location",
      objectives: [
        {
          type: "giveItem",
          description: "Hand over the respirators",
          finish: "4",
          itemsRequired: [
            {
              name: "Respirator",
              found: "0",
              quantity: "4",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Respirators in raid",
          finish: "4",
        },
        {
          type: "findItem",
          description: "Find Medical bloodsets in raid",
          finish: "3",
        },
        {
          type: "giveItem",
          description: "Hand over the bloodsets",
          finish: "3",
          itemsRequired: [
            {
              name: "Medical bloodset",
              found: "0",
              quantity: "3",
            },
          ],
        },
      ],
    },
    {
      name: "Colleagues - Part 3",
      trader: "Therapist",
      map: "Any location",
      objectives: [
        {
          type: "taskStatus",
          description: "Do not kill Sanitar",
          finish: "1",
        },
        {
          type: "findItem",
          description: "Find TerraGroup Labs access keycards in raid",
          finish: "10",
        },
        {
          type: "giveItem",
          description: "Hand over the keycards",
          finish: "10",
        },
        {
          type: "findItem",
          description: "Find AHF1-M stimulant injector in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the injector",
          finish: "1",
        },
        {
          type: "findItem",
          description: "Find 3-(b-TG) stimulant injector in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the injector",
          finish: "1",
        },
      ],
    },
    {
      name: "Chemistry Closet",
      trader: "Mechanic",
      map: "Shoreline",
      objectives: [
        {
          type: "visit",
          description: "Locate Sanitar's office in the health resort",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "87",
            latitude: "95",
          },
          itemsRequired: [
            {
              name: "Health Resort office key with a blue tape",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "The Huntsman Path - Sadist",
      trader: "Jaeger",
      map: "Shoreline",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Sanitar",
          finish: "1",
        },
      ],
    },
    {
      name: "The Huntsman Path - Administrator",
      trader: "Jaeger",
      map: "Streets",
      objectives: [
        {
          type: "shoot",
          description:
            "Deal with the looters at the Pinewood hotel on Streets of Tarkov",
          finish: "20",
          location: {
            map: "Streets",
            longitude: "52",
            latitude: "28",
          },
        },
        {
          type: "useItem",
          description: "Shoot a yellow signal flare in the hotel's courtyard",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "54",
            latitude: "28",
          },
          itemsRequired: [
            {
              name: "RSP-30 reactive signal cartridge (Yellow)",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Gunsmith - Part 12",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "buildWeapon",
          description:
            "Modify a SIG MPX to comply with the given specifications",
          finish: "1",
        },
      ],
    },
    {
      name: "TerraGroup Employee",
      trader: "Peacekeeper",
      map: "Labs",
      objectives: [
        {
          type: "visit",
          description: "Find Sanitar's workplace in The Lab",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description: "Obtain information about Sanitar's work",
          finish: "1",
          location: {
            map: "Labs",
            longitude: "81",
            latitude: "47",
          },
          itemsRequired: [
            {
              name: "Keycard with a blue marking",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the Flash drive marked with blue tape",
          finish: "1",
        },
      ],
    },
    {
      name: "Informed Means Armed",
      trader: "Skier",
      map: "Any location",
      objectives: [
        {
          type: "plantItem",
          description:
            "Install a WI-FI Camera to watch the sawmill dock on Woods",
          finish: "1",
          location: {
            map: "Woods",
            longitude: "44",
            latitude: "71",
          },
          itemsRequired: [
            {
              name: "WI-FI Camera",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "plantItem",
          description:
            "Install a WI-FI Camera to watch the road to the port on Customs",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "63",
            latitude: "66",
          },
          itemsRequired: [
            {
              name: "WI-FI Camera",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "plantItem",
          description:
            "Install a WI-FI Camera to watch the Kiba Arms store entrance on Interchange",
          finish: "1",
          location: {
            map: "Interchange",
            longitude: "46",
            latitude: "50",
          },
          itemsRequired: [
            {
              name: "WI-FI Camera",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Minibus",
      trader: "Ragman",
      map: "Interchange",
      objectives: [
        {
          type: "mark",
          description:
            "Locate and mark the first yellow minibus with an MS2000 Marker on Interchange",
          finish: "1",
          location: {
            map: "Interchange",
            longitude: "53.5",
            latitude: "86",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the second yellow minibus with an MS2000 Marker on Interchange",
          finish: "1",
          location: {
            map: "Interchange",
            longitude: "17",
            latitude: "61.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the third yellow minibus with an MS2000 Marker on Interchange",
          finish: "1",
          location: {
            map: "Interchange",
            longitude: "13",
            latitude: "54",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Hint",
      trader: "Skier",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description: "Locate and eliminate Reshala",
          finish: "1",
        },
        {
          type: "shoot",
          description: "Locate and eliminate Glukhar",
          finish: "1",
        },
        {
          type: "shoot",
          description: "Locate and eliminate Killa",
          finish: "1",
        },
        {
          type: "shoot",
          description: "Locate and eliminate Shturman",
          finish: "1",
        },
        {
          type: "shoot",
          description: "Locate and eliminate Knight",
          finish: "1",
        },
        {
          type: "shoot",
          description: "Locate and eliminate Big Pipe",
          finish: "1",
        },
        {
          type: "shoot",
          description: "Locate and eliminate Birdeye",
          finish: "1",
        },
        {
          type: "shoot",
          description: "Locate and eliminate Sanitar",
          finish: "1",
        },
        {
          type: "shoot",
          description: "Locate and eliminate Tagilla",
          finish: "1",
        },
        {
          type: "shoot",
          description: "Eliminate Raiders",
          finish: "1",
        },
        {
          type: "shoot",
          description: "Eliminate Rogues",
          finish: "1",
        },
        {
          type: "shoot",
          description: "Locate and eliminate Priest",
          finish: "1",
        },
      ],
    },
    {
      name: "Regulated Materials",
      trader: "Prapor",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find 6-STEN-140-M military battery in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the military battery",
          finish: "1",
          itemsRequired: [
            {
              name: "6-STEN-140-M military battery",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find OFZ 30x160mm shells in raid",
          finish: "5",
        },
        {
          type: "giveItem",
          description: "Hand over the OFZ shells",
          finish: "5",
          itemsRequired: [
            {
              name: "OFZ 30x160mm shell",
              found: "0",
              quantity: "5",
            },
          ],
        },
      ],
    },
    {
      name: "Lend-Lease - Part 1",
      trader: "Skier",
      map: "Any location",
      objectives: [
        {
          type: "findQuestItem",
          description: "Obtain the first Motor Controller on Woods",
          finish: "1",
          location: {
            map: "Woods",
            longitude: "30",
            latitude: "60.5",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the first controller",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description: "Obtain the second Motor Controller on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "64.5",
            latitude: "55.5",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the second controller",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description: "Obtain the third Motor Controller on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "83.5",
            latitude: "69",
          },
          itemsRequired: [
            {
              name: "Health Resort east wing room 306 key",
              found: "0",
              quantity: "1",
            },
            {
              name: "Health Resort east wing room 308 key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the third controller",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description:
            "Obtain the first Single-axis Fiber Optic Gyroscope on Woods",
          finish: "1",
          location: {
            map: "Woods",
            longitude: "42",
            latitude: "62",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the first gyroscope",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description:
            "Obtain the second Single-axis Fiber Optic Gyroscope on Shoreline",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "84",
            latitude: "24",
          },
          itemsRequired: [
            {
              name: "Health Resort west wing room 216 key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the second gyroscope",
          finish: "1",
        },
      ],
    },
    {
      name: "Energy Crisis",
      trader: "Mechanic",
      map: "Lighthouse",
      objectives: [
        {
          type: "mark",
          description:
            "Find and mark the group of fuel tanks with an MS2000 Marker on Lighthouse",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "14",
            latitude: "40",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Find and mark the first tanker truck with an MS2000 Marker on Lighthouse",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "16.5",
            latitude: "44",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Find and mark the second tanker truck with an MS2000 Marker on Lighthouse",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "30.5",
            latitude: "36",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Find and mark the third tanker truck with an MS2000 Marker on Lighthouse",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "40.3",
            latitude: "53",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Sew it Good - Part 1",
      trader: "Ragman",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find Ski hat with holes for eyes in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the ski hat",
          finish: "1",
          itemsRequired: [
            {
              name: "Ski hat with holes for eyes",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Pilgrim tourist backpack in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the backpack",
          finish: "1",
          itemsRequired: [
            {
              name: "Pilgrim tourist backpack",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Ambulance",
      trader: "Jaeger",
      map: "Any location",
      objectives: [
        {
          type: "giveItem",
          description: "Hand over the defibrillator",
          finish: "1",
          itemsRequired: [
            {
              name: "Portable defibrillator",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find CMS surgical kits in raid",
          finish: "2",
        },
        {
          type: "findItem",
          description: "Find Portable defibrillator in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the CMS kits",
          finish: "2",
          itemsRequired: [
            {
              name: "CMS surgical kit",
              found: "0",
              quantity: "2",
            },
          ],
        },
      ],
    },
    {
      name: "Gunsmith - Part 13",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "buildWeapon",
          description:
            "Modify an R11 RSASS to comply with the given specifications",
          finish: "1",
        },
      ],
    },
    {
      name: "Sew it Good - Part 2",
      trader: "Ragman",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Obtain BNTI Gzhel-K armor in 0-50% durability",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the armor",
          finish: "1",
          itemsRequired: [
            {
              name: "BNTI Gzhel-K body armor",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "findItem",
          description: "Obtain BNTI Gzhel-K armor in 50-100% durability",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the armor",
          finish: "1",
          itemsRequired: [
            {
              name: "BNTI Gzhel-K body armor",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Sew it Good - Part 3",
      trader: "Ragman",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description:
            "Obtain 6B43 6A Zabralo-Sh body armor in 0-50% durability",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the armor",
          finish: "1",
          itemsRequired: [
            {
              name: "6B43 6A Zabralo-Sh body armor",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "findItem",
          description:
            "Obtain 6B43 6A Zabralo-Sh body armor in 50-100% durability",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the armor",
          finish: "1",
          itemsRequired: [
            {
              name: "6B43 6A Zabralo-Sh body armor",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Sew it Good - Part 4",
      trader: "Ragman",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find WARTECH TV-109 + TV-106 chest rigs in raid",
          finish: "2",
        },
        {
          type: "giveItem",
          description: "Hand over the chest rigs",
          finish: "2",
          itemsRequired: [
            {
              name: "WARTECH TV-109 + TV-106 chest rig",
              found: "0",
              quantity: "2",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find BlackRock chest rigs in raid",
          finish: "2",
        },
        {
          type: "giveItem",
          description: "Hand over the chest rigs",
          finish: "2",
          itemsRequired: [
            {
              name: "BlackRock chest rig",
              found: "0",
              quantity: "2",
            },
          ],
        },
      ],
    },
    {
      name: "Charisma Brings Success",
      trader: "Ragman",
      map: "Any location",
      objectives: [
        {
          type: "skill",
          description: "Reach the required Charisma skill level",
          finish: "10",
        },
      ],
    },
    {
      name: "The Blood of War - Part 2",
      trader: "Ragman",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find Fuel conditioners in raid",
          finish: "4",
        },
        {
          type: "giveItem",
          description: "Hand over the Fuel conditioners",
          finish: "4",
          itemsRequired: [
            {
              name: "Fuel conditioner",
              found: "0",
              quantity: "4",
            },
          ],
        },
      ],
    },
    {
      name: "Worst Job in the World",
      trader: "Peacekeeper",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate any hostile from over 100 meters away while using AR-15 platform weapons",
          finish: "30",
        },
      ],
    },
    {
      name: "Surveillance",
      trader: "Mechanic",
      map: "Streets",
      objectives: [
        {
          type: "findQuestItem",
          description:
            "Obtain the data on vehicle movement at the Concordia residential complex parking lot on Streets of Tarkov",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "21.5",
            latitude: "83",
          },
          itemsRequired: [
            {
              name: "Concordia security room key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the information",
          finish: "1",
        },
      ],
    },
    {
      name: "Best Job in the World",
      trader: "Prapor",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate any hostile from over 100 meters away while using AK-74 series weapons",
          finish: "30",
        },
      ],
    },
    {
      name: "Audiophile",
      trader: "Ragman",
      map: "Streets",
      objectives: [
        {
          type: "visit",
          description:
            "Locate the musician gathering spot on Streets of Tarkov",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description: "Obtain the engraved guitar pick",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "16",
            latitude: "35",
          },
          itemsRequired: [
            {
              name: "Primorsky 46-48 skybridge key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the guitar pick",
          finish: "1",
        },
      ],
    },
    {
      name: "The Key to Success",
      trader: "Ragman",
      map: "Interchange",
      objectives: [
        {
          type: "findQuestItem",
          description:
            "Obtain the Clothes design handbook - Part 1 on Interchange",
          finish: "1",
          location: {
            map: "Interchange",
            longitude: "86",
            latitude: "55",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the first book",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description:
            "Obtain the Clothes design handbook - Part 2 on Interchange",
          finish: "1",
          location: {
            map: "Interchange",
            longitude: "62",
            latitude: "42",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the second book",
          finish: "1",
        },
      ],
    },
    {
      name: "No Fuss Needed",
      trader: "Ragman",
      map: "Any location",
      objectives: [
        {
          type: "traderLevel",
          description: "Reach level 3 loyalty with Therapist",
          finish: "3",
        },
      ],
    },
    {
      name: "Broadcast - Part 4",
      trader: "Jaeger",
      map: "Streets",
      objectives: [
        {
          type: "visit",
          description: "Locate the cultist meeting spot on Streets of Tarkov",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "91",
            latitude: "63",
          },
          itemsRequired: [
            {
              name: "Abandoned factory marked key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Chumming",
      trader: "Skier",
      map: "Any location",
      objectives: [
        {
          type: "plantItem",
          description:
            "Stash Golden neck chains under the mattress next to BTR-80A in Generic Store on Interchange",
          finish: "3",
          location: {
            map: "Interchange",
            longitude: "61.5",
            latitude: "56",
          },
        },
        {
          type: "plantItem",
          description:
            "Stash Golden neck chains in the microwave on the 3rd floor of the dorm on Customs",
          finish: "3",
          location: {
            map: "Customs",
            longitude: "80",
            latitude: "90",
          },
        },
        {
          type: "plantItem",
          description:
            "Stash Golden neck chains in the middle wooden cabin at the sawmill on Woods",
          finish: "3",
          location: {
            map: "Woods",
            longitude: "46.5",
            latitude: "60.5",
          },
        },
        {
          type: "shoot",
          description:
            "Eliminate PMC operatives in the time period of 22:00-10:00 on Interchange",
          finish: "5",
        },
      ],
    },
    {
      name: "Living High is Not a Crime - Part 1",
      trader: "Ragman",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find Bronze lions in raid",
          finish: "2",
        },
        {
          type: "giveItem",
          description: "Hand over the Bronze lions",
          finish: "2",
          itemsRequired: [
            {
              name: "Bronze lion figurine",
              found: "0",
              quantity: "2",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Horse figurines in raid",
          finish: "2",
        },
        {
          type: "giveItem",
          description: "Hand over the Horse figurines",
          finish: "2",
          itemsRequired: [
            {
              name: "Horse figurine",
              found: "0",
              quantity: "2",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Cat figurine in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the Cat figurine",
          finish: "1",
          itemsRequired: [
            {
              name: "Cat figurine",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Roler Submariner gold wrist watch in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the wrist watch",
          finish: "1",
          itemsRequired: [
            {
              name: "Roler Submariner gold wrist watch",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Golden egg in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the Golden egg",
          finish: "1",
          itemsRequired: [
            {
              name: "Golden egg",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Gunsmith - Part 14",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "buildWeapon",
          description:
            "Modify an HK 416A5 to comply with the given specifications",
          finish: "1",
        },
      ],
    },
    {
      name: "Harley Forever",
      trader: "Ragman",
      map: "Streets",
      objectives: [
        {
          type: "mark",
          description:
            "Locate and mark the first motorcycle with an MS2000 Marker on Lighthouse",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "68.5",
            latitude: "37.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the second motorcycle with an MS2000 Marker on Lighthouse",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "61.5",
            latitude: "39",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from Lighthouse",
          finish: "1",
        },
        {
          type: "mark",
          description:
            "Locate and mark the motorcycle with an MS2000 Marker on Streets of Tarkov",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "38",
            latitude: "63",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from Streets of Tarkov",
          finish: "1",
        },
      ],
    },
    {
      name: "Nostalgia",
      trader: "Jaeger",
      map: "Shoreline",
      objectives: [
        {
          type: "visit",
          description:
            "Locate Jaeger's room with a view of a bay in the Health Resort",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description: "Obtain Jaeger's photo album",
          finish: "1",
          location: {
            map: "Shoreline",
            longitude: "93",
            latitude: "7",
          },
        },
        {
          type: "giveQuestItem",
          description: "Hand over the photo album",
          finish: "1",
        },
      ],
    },
    {
      name: "Fishing Place",
      trader: "Jaeger",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find TerraGroup Labs access keycards in raid",
          finish: "2",
        },
        {
          type: "giveItem",
          description: "Hand over the access keycards",
          finish: "2",
          itemsRequired: [
            {
              name: "TerraGroup Labs access keycard",
              found: "0",
              quantity: "2",
            },
          ],
        },
      ],
    },
    {
      name: "Hot Delivery",
      trader: "Ragman",
      map: "Interchange",
      objectives: [
        {
          type: "plantItem",
          description:
            "Stash 2 Peltor ComTac and 2 6B47 Helmets in the specified place",
          finish: "4",
          location: {
            map: "Interchange",
            longitude: "62.5",
            latitude: "58.5",
          },
          itemsRequired: [
            {
              name: "Peltor ComTac 2 headset",
              found: "0",
              quantity: "2",
            },
            {
              name: "6B47 Ratnik-BSh helmet",
              found: "0",
              quantity: "2",
            },
          ],
        },
        {
          type: "plantItem",
          description: "Stash BNTI Gzhel-K armor in the specified place",
          finish: "2",
          location: {
            map: "Interchange",
            longitude: "49",
            latitude: "51.5",
          },
          itemsRequired: [
            {
              name: "BNTI Gzhel-K body armor",
              found: "0",
              quantity: "2",
            },
          ],
        },
      ],
    },
    {
      name: "Gunsmith - Part 15",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "buildWeapon",
          description:
            "Modify an AS VAL to comply with the given specifications",
          finish: "1",
        },
      ],
    },
    {
      name: "Scavenger",
      trader: "Ragman",
      map: "Any location",
      objectives: [
        {
          type: "skill",
          description: "Reach the required Search skill level",
          finish: "9",
        },
      ],
    },
    {
      name: "Athlete",
      trader: "Therapist",
      map: "Any location",
      objectives: [
        {
          type: "skill",
          description: "Reach the required Health skill level",
          finish: "10",
        },
      ],
    },
    {
      name: "Hunting Trip",
      trader: "Jaeger",
      map: "Woods",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate Shturman from over 50 meters away while using an M700 sniper rifle with the specified scope",
          finish: "1",
        },
      ],
    },
    {
      name: "Fertilizers",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find Bundles of wires in raid",
          finish: "5",
        },
        {
          type: "findItem",
          description: "Find Capacitors in raid",
          finish: "5",
        },
        {
          type: "giveItem",
          description: "Hand over the wires",
          finish: "5",
          itemsRequired: [
            {
              name: "Bundle of wires",
              found: "0",
              quantity: "5",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the capacitors",
          finish: "5",
          itemsRequired: [
            {
              name: "Capacitors",
              found: "0",
              quantity: "5",
            },
          ],
        },
      ],
    },
    {
      name: "Sales Night",
      trader: "Ragman",
      map: "Interchange",
      objectives: [
        {
          type: "extract",
          description: "Survive and extract from Interchange",
          finish: "7",
        },
      ],
    },
    {
      name: "The Huntsman Path - Eraser - Part 2",
      trader: "Jaeger",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Raiders",
          finish: "6",
        },
      ],
    },
    {
      name: "Test Drive - Part 1",
      trader: "Prapor",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate PMC operatives from over 60 meters away while using an M1A rifle with Hybrid 46 suppressor and REAP-IR scope",
          finish: "5",
        },
      ],
    },
    {
      name: "The Blood of War - Part 3",
      trader: "Ragman",
      map: "Woods",
      objectives: [
        {
          type: "mark",
          description:
            "Locate and mark the first fuel stash with an MS2000 Marker on Woods",
          finish: "1",
          location: {
            map: "Woods",
            longitude: "22",
            latitude: "59.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the second fuel stash with an MS2000 Marker on Woods",
          finish: "1",
          location: {
            map: "Woods",
            longitude: "68.5",
            latitude: "67.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the third fuel stash with an MS2000 Marker on Woods",
          finish: "1",
          location: {
            map: "Woods",
            longitude: "60",
            latitude: "51",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Lend-Lease - Part 2",
      trader: "Peacekeeper",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find Virtex programmable processors in raid",
          finish: "2",
        },
        {
          type: "findItem",
          description:
            "Find Military COFDM Wireless Signal Transmitter in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the processors",
          finish: "2",
          itemsRequired: [
            {
              name: "Virtex programmable processor",
              found: "0",
              quantity: "2",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the transmitter",
          finish: "1",
          itemsRequired: [
            {
              name: "Military COFDM Wireless Signal Transmitter",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Silent Caliber",
      trader: "Skier",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Scavs while using a suppressed 12ga shotgun",
          finish: "20",
        },
        {
          type: "shoot",
          description:
            "Eliminate PMC operatives while using a suppressed 12ga shotgun",
          finish: "10",
        },
      ],
    },
    {
      name: "Gunsmith - Part 16",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "buildWeapon",
          description:
            "Modify a DVL-10 to comply with the given specifications",
          finish: "1",
        },
      ],
    },
    {
      name: "Bullshit",
      trader: "Skier",
      map: "Customs",
      objectives: [
        {
          type: "findQuestItem",
          description:
            "Obtain the False flash drive from the specified spot on Customs",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "73.5",
            latitude: "51",
          },
        },
        {
          type: "plantQuestItem",
          description:
            "Stash the False flash drive, wrist watch and SV-98 in the trash opposite of stairs on the 3rd floor or the dorm",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "78",
            latitude: "84",
          },
          itemsRequired: [
            {
              name: "SV-98 7.62x54R bolt-action sniper rifle",
              found: "0",
              quantity: "1",
            },
            {
              name: "Roler Submariner gold wrist watch",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Setup",
      trader: "Skier",
      map: "Customs",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate PMC operatives while wearing the specified gear on Customs",
          finish: "15",
        },
      ],
    },
    {
      name: "Peacekeeping Mission",
      trader: "Peacekeeper",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate Scavs while wearing a UN uniform (UNTAR helmet, MF-UNTAR body armor, M4A1 rifle) on Woods",
          finish: "12",
        },
        {
          type: "shoot",
          description:
            "Eliminate Scavs while wearing a UN uniform (UNTAR helmet, MF-UNTAR body armor, M4A1 rifle) on Customs",
          finish: "12",
        },
        {
          type: "shoot",
          description:
            "Eliminate Scavs while wearing a UN uniform (UNTAR helmet, MF-UNTAR body armor, M4A1 rifle) on Interchange",
          finish: "12",
        },
        {
          type: "shoot",
          description:
            "Eliminate Scavs while wearing a UN uniform (UNTAR helmet, MF-UNTAR body armor, M4A1 rifle) on Shoreline",
          finish: "12",
        },
        {
          type: "shoot",
          description:
            "Eliminate Scavs while wearing a UN uniform (UNTAR helmet, MF-UNTAR body armor, M4A1 rifle) on Streets of Tarkov",
          finish: "12",
        },
      ],
    },
    {
      name: "Test Drive - Part 2",
      trader: "Prapor",
      map: "Streets",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate PMC operatives while using an SR-2M Veresk with a suppressor and KP-SR2 reflex sight on Streets of Tarkov",
          finish: "20",
        },
      ],
    },
    {
      name: "The Huntsman Path - Sellout",
      trader: "Jaeger",
      map: "Interchange",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Killa",
          finish: "1",
        },
        {
          type: "findItem",
          description: "Find Killa's Maska-1SCh bulletproof helmet in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over Killa's helmet",
          finish: "1",
          itemsRequired: [
            {
              name: "Maska-1SCh bulletproof helmet (Killa)",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "The Stylish One",
      trader: "Ragman",
      map: "Interchange",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Killa",
          finish: "100",
        },
      ],
    },
    {
      name: "Living High is Not a Crime - Part 2",
      trader: "Ragman",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find Antique teapots in raid",
          finish: "3",
        },
        {
          type: "findItem",
          description: "Find Antique vases in raid",
          finish: "2",
        },
        {
          type: "findItem",
          description: "Find Axel parrot figurine in raid",
          finish: "1",
        },
        {
          type: "findItem",
          description: "Find Raven figurines in raid",
          finish: "2",
        },
        {
          type: "giveItem",
          description: "Hand over the teapots",
          finish: "3",
          itemsRequired: [
            {
              name: "Antique teapot",
              found: "0",
              quantity: "3",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the vases",
          finish: "2",
          itemsRequired: [
            {
              name: "Antique vase",
              found: "0",
              quantity: "2",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the Axel parrot figurine",
          finish: "1",
          itemsRequired: [
            {
              name: "Axel parrot figurine",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the Raven figurines",
          finish: "2",
          itemsRequired: [
            {
              name: "Raven figurine",
              found: "0",
              quantity: "2",
            },
          ],
        },
      ],
    },
    {
      name: "The Huntsman Path - Relentless",
      trader: "Jaeger",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Tagilla",
          finish: "1",
        },
        {
          type: "shoot",
          description: "Eliminate Killa",
          finish: "1",
        },
        {
          type: "shoot",
          description: "Eliminate Reshala",
          finish: "1",
        },
        {
          type: "shoot",
          description: "Eliminate Shturman",
          finish: "1",
        },
        {
          type: "shoot",
          description: "Eliminate Glukhar",
          finish: "1",
        },
        {
          type: "shoot",
          description: "Eliminate Sanitar",
          finish: "1",
        },
      ],
    },
    {
      name: "Debtor",
      trader: "Skier",
      map: "Streets",
      objectives: [
        {
          type: "visit",
          description: "Find the debtor on Streets of Tarkov",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "80",
            latitude: "27",
          },
          itemsRequired: [
            {
              name: "Hotel room 206 key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Gunsmith - Part 17",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "buildWeapon",
          description:
            "Modify an AK-102 to comply with the given specifications",
          finish: "1",
        },
      ],
    },
    {
      name: "Hunter",
      trader: "Jaeger",
      map: "Woods",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Shturman",
          finish: "1",
        },
      ],
    },
    {
      name: "Gunsmith - Part 18",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "buildWeapon",
          description: "Modify an AKMN to comply with the given specifications",
          finish: "1",
        },
      ],
    },
    {
      name: "House Arrest - Part 1",
      trader: "Skier",
      map: "Streets",
      objectives: [
        {
          type: "visit",
          description:
            "Locate where the missing group was held captive on Streets of Tarkov",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "4.6",
            latitude: "40.5",
          },
          itemsRequired: [
            {
              name: "Iron gate key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "House Arrest - Part 2",
      trader: "Skier",
      map: "Streets",
      objectives: [
        {
          type: "visit",
          description:
            "Locate the improvised jail warden's apartment on Streets of Tarkov",
          finish: "1",
        },
        {
          type: "visit",
          description: "Find out what happened to the warden",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "6.5",
            latitude: "32.5",
          },
          itemsRequired: [
            {
              name: "Chekannaya 15 apartment key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Private Clinic",
      trader: "Therapist",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find Ophthalmoscope in raid",
          finish: "1",
        },
        {
          type: "findItem",
          description: "Find LEDX Skin Transilluminator in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the Ophthalmoscope",
          finish: "1",
          itemsRequired: [
            {
              name: "Ophthalmoscope",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the LEDX Skin Transilluminator",
          finish: "1",
          itemsRequired: [
            {
              name: "LEDX Skin Transilluminator",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Your Car Needs a Service",
      trader: "Peacekeeper",
      map: "Streets",
      objectives: [
        {
          type: "findQuestItem",
          description:
            "Obtain the digital storage device from the car dealership manager's office on Streets of Tarkov",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "41",
            latitude: "88",
          },
          itemsRequired: [
            {
              name: "Car dealership closed section key",
              found: "0",
              quantity: "1",
            },
            {
              name: "Car dealership director's office room key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the storage device",
          finish: "1",
        },
      ],
    },
    {
      name: "Import",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find UHF RFID Reader in raid",
          finish: "1",
        },
        {
          type: "findItem",
          description: "Find VPX Flash Storage Module in raid",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the reader",
          finish: "1",
          itemsRequired: [
            {
              name: "UHF RFID Reader",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the storage module",
          finish: "1",
          itemsRequired: [
            {
              name: "VPX Flash Storage Module",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Psycho Sniper",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "skill",
          description: "Reach the required Sniper Rifles skill level",
          finish: "8",
        },
      ],
    },
    {
      name: "Perfect Mediator",
      trader: "Prapor",
      map: "Any location",
      objectives: [
        {
          type: "traderLevel",
          description: "Reach level 4 loyalty with Ragman",
          finish: "4",
        },
        {
          type: "traderLevel",
          description: "Reach level 4 loyalty with Skier",
          finish: "4",
        },
        {
          type: "traderLevel",
          description: "Reach level 4 loyalty with Mechanic",
          finish: "4",
        },
        {
          type: "traderLevel",
          description: "Reach level 4 loyalty with Peacekeeper",
          finish: "4",
        },
        {
          type: "traderLevel",
          description: "Reach level 4 loyalty with Prapor",
          finish: "4",
        },
        {
          type: "traderLevel",
          description: "Reach level 4 loyalty with Therapist",
          finish: "4",
        },
      ],
    },
    {
      name: "Flint",
      trader: "Skier",
      map: "Any location",
      objectives: [
        {
          type: "skill",
          description: "Reach the required Stress Resistance skill level",
          finish: "5",
        },
      ],
    },
    {
      name: "Information Source",
      trader: "Lightkeeper",
      map: "Any location",
      objectives: [
        {
          type: "extract",
          description: "Survive and extract from Woods through Bridge V-Ex",
          finish: "1",
          location: {
            map: "Woods",
            longitude: "79.5",
            latitude: "30",
          },
        },
        {
          type: "extract",
          description: "Survive and extract from Customs through Dorms V-Ex",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "47.5",
            latitude: "89.5",
          },
        },
        {
          type: "extract",
          description:
            "Survive and extract from Interchange through Power Station V-Ex",
          finish: "1",
          location: {
            map: "Interchange",
            longitude: "74.5",
            latitude: "18",
          },
        },
        {
          type: "extract",
          description:
            "Survive and extract from Streets of Tarkov through Primorsky Ave Taxi V-Ex",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "47",
            latitude: "78",
          },
        },
        {
          type: "mark",
          description:
            "Locate and mark the first Patrol-A armored vehicle with an MS2000 Marker on Streets of Tarkov",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "31",
            latitude: "71",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the second Patrol-A armored vehicle with an MS2000 Marker on Streets of Tarkov",
          finish: "1",
          location: {
            map: "Streets",
            longitude: "53.5",
            latitude: "63",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Snatch",
      trader: "Lightkeeper",
      map: "Any location",
      objectives: [
        {
          type: "extract",
          description: "Extract from Lighthouse",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description:
            "Obtain the forged intelligence at the Rogue base on Lighthouse",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "39",
            latitude: "52",
          },
        },
        {
          type: "findQuestItem",
          description:
            "Obtain the original intelligence in the repair station on Reserve",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "27",
            latitude: "65",
          },
          itemsRequired: [
            {
              name: "RB-ST key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "plantQuestItem",
          description:
            "Stash the forged intelligence under the BMP-2 in place of the original",
          finish: "1",
          location: {
            map: "Reserve",
            longitude: "27",
            latitude: "66",
          },
          itemsRequired: [
            {
              name: "RB-ST key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Bring the original intelligence to Lightkeeper",
          finish: "1",
        },
      ],
    },
    {
      name: "Network Provider - Part 2",
      trader: "Mechanic",
      map: "Lighthouse",
      objectives: [
        {
          type: "mark",
          description:
            "Set up the retransmitter inside the MI-8 helicopter at the water treatment plant",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "33.5",
            latitude: "41.5",
          },
          itemsRequired: [
            {
              name: "Radio repeater",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Set up the retransmitter inside the abandoned USEC cottage",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "68",
            latitude: "39",
          },
          itemsRequired: [
            {
              name: "Radio repeater",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Set up the retransmitter at a high elevation overlooking the lighthouse",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "83.5",
            latitude: "57",
          },
          itemsRequired: [
            {
              name: "Radio repeater",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Set up the retransmitter on the roof of the sunken building at the shore",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "78",
            latitude: "62",
          },
          itemsRequired: [
            {
              name: "Radio repeater",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Assessment - Part 1",
      trader: "Mechanic",
      map: "Lighthouse",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate PMC operatives at the Lighthouse premises",
          finish: "20",
        },
      ],
    },
    {
      name: "Assessment - Part 2",
      trader: "Mechanic",
      map: "Woods",
      objectives: [
        {
          type: "mark",
          description:
            "Locate and mark the first bunker with an MS2000 marker on Woods",
          finish: "1",
          location: {
            map: "Woods",
            longitude: "16",
            latitude: "70",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the second bunker with an MS2000 marker on Woods",
          finish: "1",
          location: {
            map: "Woods",
            longitude: "58",
            latitude: "49.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the third bunker with an MS2000 marker on Woods",
          finish: "1",
          location: {
            map: "Woods",
            longitude: "56.5",
            latitude: "46.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "mark",
          description:
            "Locate and mark the fourth bunker with an MS2000 marker on Woods",
          finish: "1",
          location: {
            map: "Woods",
            longitude: "30.5",
            latitude: "16.5",
          },
          itemsRequired: [
            {
              name: "MS2000 Marker",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Assessment - Part 3",
      trader: "Mechanic",
      map: "s",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Raiders in The Lab",
          finish: "10",
        },
        {
          type: "giveItem",
          description:
            "Hand over the found in raid SJ1 TGLabs combat stimulant injector",
          finish: "20",
          itemsRequired: [
            {
              name: "SJ1 TGLabs combat stimulant injector",
              found: "0",
              quantity: "20",
            },
          ],
        },
        {
          type: "giveItem",
          description:
            "Hand over the found in raid SJ6 TGLabs combat stimulant injector",
          finish: "8",
          itemsRequired: [
            {
              name: "SJ6 TGLabs combat stimulant injector",
              found: "0",
              quantity: "8",
            },
          ],
        },
        {
          type: "giveItem",
          description:
            "Hand over the found in raid SJ9 TGLabs combat stimulant injector",
          finish: "2",
          itemsRequired: [
            {
              name: "SJ9 TGLabs combat stimulant injector",
              found: "0",
              quantity: "2",
            },
          ],
        },
      ],
    },
    {
      name: "Key to the Tower",
      trader: "Mechanic",
      map: "Lighthouse",
      objectives: [
        {
          type: "giveItem",
          description: "Hand over the found in raid Piece of plexiglass",
          finish: "2",
          itemsRequired: [
            {
              name: "Piece of plexiglass",
              found: "0",
              quantity: "2",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the found in raid Insulating tape",
          finish: "1",
          itemsRequired: [
            {
              name: "Insulating tape",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the found in raid Military circuit board",
          finish: "2",
          itemsRequired: [
            {
              name: "Military circuit board",
              found: "0",
              quantity: "2",
            },
          ],
        },
        {
          type: "giveItem",
          description:
            "Hand over the found in raid Military COFDM Wireless Signal Transmitter",
          finish: "1",
          itemsRequired: [
            {
              name: "Military COFDM Wireless Signal Transmitter",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the found in raid Working LCD",
          finish: "1",
          itemsRequired: [
            {
              name: "Working LCD",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "findQuestItem",
          description: "Obtain the Radio transmitter body on Lighthouse",
          finish: "1",
        },
        {
          type: "giveQuestItem",
          description: "Hand over the Radio transmitter body",
          finish: "1",
        },
      ],
    },
    {
      name: "Knock-Knock",
      trader: "Mechanic",
      map: "Lighthouse",
      objectives: [
        {
          type: "visit",
          description: "Check if the transponder works",
          finish: "1",
        },
        {
          type: "extract",
          description: "Escape Lighthouse alive",
          finish: "1",
        },
      ],
    },
    {
      name: "Getting Acquainted",
      trader: "Mechanic",
      map: "Lighthouse",
      objectives: [
        {
          type: "findQuestItem",
          description: "Obtain the V3 Flash drive on Lighthouse",
          finish: "1",
        },
        {
          type: "findItem",
          description: "Reflash the Radio transmitter",
          finish: "1",
        },
        {
          type: "giveQuestItem",
          description: "Hand over the flash drive",
          finish: "1",
        },
        {
          type: "visit",
          description: "Visit the Lighthouse building",
          finish: "1",
        },
      ],
    },
    {
      name: "Missing Informant",
      trader: "Lightkeeper",
      map: "Streets",
      objectives: [
        {
          type: "visit",
          description: "Locate the informant's hideout on Streets of Tarkov",
          finish: "1",
        },
        {
          type: "visit",
          description: "Locate the informant's backup hideout",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description: "Obtain the informant's journal",
          finish: "1",
        },
        {
          type: "giveQuestItem",
          description: "Bring the information to Lightkeeper",
          finish: "1",
        },
        {
          type: "findItem",
          description: "Obtain the key to the second hideout",
          finish: "1",
        },
      ],
    },
    {
      name: "Return the Favor",
      trader: "Lightkeeper",
      map: "Woods",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate PMC operatives around the mountain area on Woods",
          finish: "15",
        },
        {
          type: "plantItem",
          description:
            "Hide the TerraGroup Blue Folders materials folder inside the black SUV in the USEC camp",
          finish: "1",
        },
        {
          type: "plantItem",
          description:
            "Hide the TerraGroup Blue Folders materials in the crates near the satellite antenna in the USEC camp",
          finish: "1",
        },
      ],
    },
    {
      name: "Payback",
      trader: "Lightkeeper",
      map: "Reserve",
      objectives: [
        {
          type: "shoot",
          description: "Locate and eliminate Glukhar",
          finish: "1",
        },
        {
          type: "shoot",
          description: "Eliminate Glukhar's guards",
          finish: "6",
        },
        {
          type: "useItem",
          description: "Shoot a yellow signal flare at the radar station",
          finish: "1",
        },
        {
          type: "extract",
          description: "Survive and extract from Reserve through Cliff Descent",
          finish: "1",
        },
      ],
    },
    {
      name: "Provocation",
      trader: "Lightkeeper",
      map: "Interchange",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate any enemy around the Kiba Arms store while using an ASh-12 on Interchange",
          finish: "20",
        },
        {
          type: "plantItem",
          description:
            "Stash a Salty Dog beef sausage inside the Kiba Arms store",
          finish: "1",
        },
        {
          type: "plantItem",
          description:
            "Stash a Bottle of Fierce Hatchling moonshine inside the secret secure hideout",
          finish: "1",
        },
        {
          type: "plantItem",
          description: "Stash a Toilet paper inside the secret container stash",
          finish: "1",
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Following the Bread Crumbs",
      trader: "Lightkeeper",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Raiders",
          finish: "20",
        },
        {
          type: "visit",
          description: "Search the weapon testing area",
          finish: "1",
        },
        {
          type: "visit",
          description: "Search the human experiment room",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description: "Obtain the secured tape inside the manager's office",
          finish: "1",
        },
        {
          type: "giveQuestItem",
          description: "Bring the tape to Lightkeeper",
          finish: "1",
        },
      ],
    },
    {
      name: "Spotter",
      trader: "Lightkeeper",
      map: "Streets",
      objectives: [
        {
          type: "visit",
          description:
            "Locate a good sniping position in Concordia overlooking the construction site",
          finish: "1",
        },
        {
          type: "plantItem",
          description:
            "Hide AI Tactical Sound Moderator .338 LM near the red table",
          finish: "1",
        },
        {
          type: "visit",
          description:
            "Locate a good sniping position at Primorsky overlooking the movie theater",
          finish: "1",
        },
        {
          type: "plantItem",
          description: "Hide Trijicon REAP-IR thermal scope under Makhors' bed",
          finish: "1",
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Make an Impression",
      trader: "Lightkeeper",
      map: "Any location",
      objectives: [
        {
          type: "skill",
          description: "Reach the required Sniper Rifles skill level",
          finish: "10",
        },
        {
          type: "shoot",
          description: "Eliminate Sniper Scavs from over 350 meters away",
          finish: "10",
        },
      ],
    },
    {
      name: "Trouble in the Big City",
      trader: "Lightkeeper",
      map: "Streets",
      objectives: [
        {
          type: "visit",
          description:
            "Locate the transport holding the cargo on Streets of Tarkov",
          finish: "1",
        },
        {
          type: "shoot",
          description: "Secure the area from hostile PMC operatives",
          finish: "50",
        },
        {
          type: "mark",
          description: "Mark the cargo area with an MS2000 Marker",
          finish: "1",
        },
        {
          type: "useItem",
          description:
            "Launch a yellow flare near the armored convoy to confirm that the job is done",
          finish: "1",
        },
        {
          type: "extract",
          description: "Survive and extract from the location",
          finish: "1",
        },
      ],
    },
    {
      name: "Decontamination Service",
      trader: "Therapist",
      map: "Interchange",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate Scavs from less than 60 meters away while wearing specific gear on Interchange",
          finish: "40",
        },
      ],
    },
    {
      name: "Top Secret",
      trader: "Skier",
      map: "Lighthouse",
      objectives: [
        {
          type: "visit",
          description:
            "Locate the radar station commandant's office on Lighthouse",
          finish: "1",
        },
        {
          type: "findQuestItem",
          description: "Obtain the military HDD with archived flight routes",
          finish: "1",
          location: {
            map: "Lighthouse",
            longitude: "91.5",
            latitude: "82",
          },
          itemsRequired: [
            {
              name: "Radar station commandant room key",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "giveQuestItem",
          description: "Hand over the drive",
          finish: "1",
        },
      ],
    },
    {
      name: "Gunsmith - Part 19",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "buildWeapon",
          description: "Modify an SVDS to comply with the given specifications",
          finish: "1",
        },
      ],
    },
    {
      name: "Gunsmith - Part 20",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "buildWeapon",
          description: "Modify an M1A to comply with the given specifications",
          finish: "1",
        },
      ],
    },
    {
      name: "Gunsmith - Part 21",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "buildWeapon",
          description: "Modify an M700 to comply with the given specifications",
          finish: "1",
        },
        {
          type: "buildWeapon",
          description:
            "Modify an M1911 to comply with the given specifications",
          finish: "1",
        },
      ],
    },
    {
      name: "Gunsmith - Part 22",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "buildWeapon",
          description: "Modify an M4A1 to comply with the given specifications",
          finish: "1",
        },
      ],
    },
    {
      name: "The Guide",
      trader: "Peacekeeper",
      map: "Any location",
      objectives: [
        {
          type: "extract",
          description:
            "Survive and extract from Woods with the Survived exit status",
          finish: "1",
        },
        {
          type: "extract",
          description:
            "Survive and extract from Customs with the Survived exit status",
          finish: "1",
        },
        {
          type: "extract",
          description:
            "Survive and extract from Interchange with the Survived exit status",
          finish: "1",
        },
        {
          type: "extract",
          description:
            "Survive and extract from Shoreline with the Survived exit status",
          finish: "1",
        },
        {
          type: "extract",
          description:
            "Survive and extract from Factory with the Survived exit status",
          finish: "1",
        },
        {
          type: "extract",
          description:
            "Survive and extract from The Lab with the Survived exit status",
          finish: "1",
        },
        {
          type: "extract",
          description:
            "Survive and extract from Reserve with the Survived exit status",
          finish: "1",
        },
        {
          type: "extract",
          description:
            "Survive and extract from Lighthouse with the Survived exit status",
          finish: "1",
        },
        {
          type: "extract",
          description:
            "Survive and extract from Streets of Tarkov with the Survived exit status",
          finish: "1",
        },
      ],
    },
    {
      name: "Slaughterhouse",
      trader: "Jaeger",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate Scavs while using melee weapons on daytime Factory",
          finish: "10",
        },
        {
          type: "shoot",
          description:
            "Eliminate Scavs while using melee weapons on Streets of Tarkov",
          finish: "10",
        },
        {
          type: "shoot",
          description:
            "Eliminate Scavs while using melee weapons on Lighthouse",
          finish: "10",
        },
        {
          type: "shoot",
          description: "Eliminate Scavs while using melee weapons on Woods",
          finish: "10",
        },
        {
          type: "shoot",
          description: "Eliminate Scavs while using melee weapons on Shoreline",
          finish: "10",
        },
        {
          type: "shoot",
          description:
            "Eliminate Scavs while using melee weapons on Interchange",
          finish: "10",
        },
        {
          type: "shoot",
          description: "Eliminate Scavs while using melee weapons on Customs",
          finish: "10",
        },
        {
          type: "shoot",
          description: "Eliminate Scavs while using melee weapons on Reserve",
          finish: "10",
        },
      ],
    },
    {
      name: "Supervisor",
      trader: "Ragman",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Obtain the Goshan cash register key",
          finish: "1",
        },
        {
          type: "giveItem",
          description: "Hand over the key",
          finish: "1",
          itemsRequired: [
            {
              name: "Goshan cash register key",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Capturing Outposts",
      trader: "Prapor",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate PMC operatives at the Scav base on Customs",
          finish: "8",
          location: {
            map: "Customs",
            longitude: "46",
            latitude: "28",
          },
        },
        {
          type: "shoot",
          description: "Eliminate PMC operatives at the Scav base on Woods",
          finish: "8",
          location: {
            map: "Woods",
            longitude: "59",
            latitude: "82",
          },
        },
        {
          type: "shoot",
          description: "Eliminate PMC operatives at the pier on Shoreline",
          finish: "8",
          location: {
            map: "Shoreline",
            longitude: "41",
            latitude: "87",
          },
        },
      ],
    },
    {
      name: "Textile - Part 1",
      trader: "Ragman",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find Aramid fabrics in raid",
          finish: "5",
        },
        {
          type: "giveItem",
          description: "Hand over the fabrics",
          finish: "5",
          itemsRequired: [
            {
              name: "Aramid fiber fabric",
              found: "0",
              quantity: "10",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Ripstop fabrics in raid",
          finish: "10",
        },
        {
          type: "giveItem",
          description: "Hand over the fabrics",
          finish: "10",
          itemsRequired: [
            {
              name: "Ripstop fabric",
              found: "0",
              quantity: "10",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Paracords in raid",
          finish: "3",
        },
        {
          type: "giveItem",
          description: "Hand over the paracords",
          finish: "3",
          itemsRequired: [
            {
              name: "Paracord",
              found: "0",
              quantity: "3",
            },
          ],
        },
      ],
    },
    {
      name: "Textile - Part 2",
      trader: "Ragman",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find Fleece fabrics in raid",
          finish: "10",
        },
        {
          type: "giveItem",
          description: "Hand over the fabrics",
          finish: "10",
          itemsRequired: [
            {
              name: "Fleece fabric",
              found: "0",
              quantity: "10",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find Cordura polyamide fabrics in raid",
          finish: "10",
        },
        {
          type: "giveItem",
          description: "Hand over the fabrics",
          finish: "10",
          itemsRequired: [
            {
              name: "Cordura polyamide fabric",
              found: "0",
              quantity: "10",
            },
          ],
        },
        {
          type: "findItem",
          description: "Find KEKTAPE duct tapes in raid",
          finish: "5",
        },
        {
          type: "giveItem",
          description: "Hand over the duct tapes",
          finish: "5",
          itemsRequired: [
            {
              name: "KEKTAPE duct tape",
              found: "0",
              quantity: "5",
            },
          ],
        },
      ],
    },
    {
      name: "Intimidator",
      trader: "Prapor",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Scavs with headshots",
          finish: "40",
        },
      ],
    },
    {
      name: "Long Line",
      trader: "Ragman",
      map: "Interchange",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate PMC operatives inside the ULTRA mall on Interchange",
          finish: "30",
          location: {
            map: "Interchange",
            longitude: "60",
            latitude: "50",
          },
        },
      ],
    },
    {
      name: "The Cleaner",
      trader: "Peacekeeper",
      map: "Reserve",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate Raiders on Reserve",
          finish: "40",
        },
      ],
    },
    {
      name: "Calibration",
      trader: "Mechanic",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate PMC operatives from over 100 meters away",
          finish: "20",
        },
      ],
    },
    {
      name: "Crisis",
      trader: "Therapist",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find Portable defibrillators in raid",
          finish: "5",
        },
        {
          type: "findItem",
          description: "Find Ophthalmoscopes in raid",
          finish: "5",
        },
        {
          type: "findItem",
          description: "Find LEDX Skin Transilluminators in raid",
          finish: "3",
        },
        {
          type: "findItem",
          description: "Find Piles of meds in raid",
          finish: "20",
        },
        {
          type: "findItem",
          description: "Find Bottles of OLOLO Multivitamins in raid",
          finish: "10",
        },
        {
          type: "giveItem",
          description: "Hand over the defibrillators",
          finish: "5",
          itemsRequired: [
            {
              name: "Portable defibrillator",
              found: "0",
              quantity: "5",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the ophthalmoscopes",
          finish: "5",
          itemsRequired: [
            {
              name: "Ophthalmoscope",
              found: "0",
              quantity: "5",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the LEDX",
          finish: "3",
          itemsRequired: [
            {
              name: "LEDX Skin Transilluminator",
              found: "0",
              quantity: "3",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the Piles of meds",
          finish: "20",
          itemsRequired: [
            {
              name: "Pile of meds",
              found: "0",
              quantity: "20",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the multivitamins",
          finish: "10",
          itemsRequired: [
            {
              name: "Bottle of OLOLO Multivitamins",
              found: "0",
              quantity: "10",
            },
          ],
        },
      ],
    },
    {
      name: "Night Sweep",
      trader: "Skier",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find the unusual knives in raid",
          finish: "12",
        },
        {
          type: "giveItem",
          description: "Hand over the knives",
          finish: "12",
          itemsRequired: [
            {
              name: "Cultist knife",
              found: "0",
              quantity: "12",
            },
          ],
        },
      ],
    },
    {
      name: "Swift One",
      trader: "Jaeger",
      map: "Woods",
      objectives: [
        {
          type: "shoot",
          description:
            "Eliminate PMC operatives without using any armor or helmets on Woods",
          finish: "15",
        },
      ],
    },
    {
      name: "Booze",
      trader: "Ragman",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find Bottles of Tarkovskaya vodka in raid",
          finish: "10",
        },
        {
          type: "findItem",
          description: "Find Bottles of Dan Jackiel whiskey in raid",
          finish: "10",
        },
        {
          type: "findItem",
          description: "Find Canisters with purified water in raid",
          finish: "3",
        },
        {
          type: "findItem",
          description: "Find Bottles of beer Pevko Light in raid",
          finish: "20",
        },
        {
          type: "giveItem",
          description: "Hand over the vodka",
          finish: "10",
          itemsRequired: [
            {
              name: "Bottle of Tarkovskaya vodka",
              found: "0",
              quantity: "10",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the whiskey",
          finish: "10",
          itemsRequired: [
            {
              name: "Bottle of Dan Jackiel whiskey",
              found: "0",
              quantity: "10",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the superwater",
          finish: "3",
          itemsRequired: [
            {
              name: "Canister with purified water",
              found: "0",
              quantity: "3",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the beer",
          finish: "20",
          itemsRequired: [
            {
              name: "Bottle of Pevko Light beer",
              found: "0",
              quantity: "20",
            },
          ],
        },
      ],
    },
    {
      name: "The Courier",
      trader: "Mechanic",
      map: "Customs",
      objectives: [
        {
          type: "plantItem",
          description:
            "Stash a Trijicon REAP-IR scope under the base of the yellow crane at the construction site on Customs",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "49",
            latitude: "29",
          },
          itemsRequired: [
            {
              name: "Trijicon REAP-IR thermal scope",
              found: "0",
              quantity: "1",
            },
          ],
        },
        {
          type: "plantItem",
          description:
            "Stash a Trijicon REAP-IR scope behind the trash containers at the new gas station on Customs",
          finish: "1",
          location: {
            map: "Customs",
            longitude: "24.3",
            latitude: "55.5",
          },
          itemsRequired: [
            {
              name: "Trijicon REAP-IR thermal scope",
              found: "0",
              quantity: "1",
            },
          ],
        },
      ],
    },
    {
      name: "Trophies",
      trader: "Peacekeeper",
      map: "Any location",
      objectives: [
        {
          type: "giveItem",
          description:
            "Find in raid and hand over BEAR PMC dogtags of level 50+",
          finish: "20",
        },
        {
          type: "giveItem",
          description:
            "Find in raid and hand over USEC PMC dogtags of level 50+",
          finish: "20",
        },
      ],
    },
    {
      name: "Special Equipment",
      trader: "Peacekeeper",
      map: "Any location",
      objectives: [
        {
          type: "findItem",
          description: "Find VPX Flash Storage Modules in raid",
          finish: "5",
        },
        {
          type: "findItem",
          description: "Find UHF RFID Readers in raid",
          finish: "5",
        },
        {
          type: "findItem",
          description: "Find Virtex programmable processors in raid",
          finish: "5",
        },
        {
          type: "findItem",
          description:
            "Find Military COFDM Wireless Signal Transmitters in raid",
          finish: "5",
        },
        {
          type: "findItem",
          description: "Find Military flash drives in raid",
          finish: "4",
        },
        {
          type: "giveItem",
          description: "Hand over the flash storage modules",
          finish: "5",
          itemsRequired: [
            {
              name: "VPX Flash Storage Module",
              found: "0",
              quantity: "5",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the RFID readers",
          finish: "5",
          itemsRequired: [
            {
              name: "UHF RFID Reader",
              found: "0",
              quantity: "5",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the programmable processors",
          finish: "5",
          itemsRequired: [
            {
              name: "Virtex programmable processor",
              found: "0",
              quantity: "5",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the signal transmitters",
          finish: "5",
          itemsRequired: [
            {
              name: "Military COFDM Wireless Signal Transmitter",
              found: "0",
              quantity: "5",
            },
          ],
        },
        {
          type: "giveItem",
          description: "Hand over the flash drives",
          finish: "4",
          itemsRequired: [
            {
              name: "Military flash drive",
              found: "0",
              quantity: "4",
            },
          ],
        },
      ],
    },
    {
      name: "Escort",
      trader: "Prapor",
      map: "Any location",
      objectives: [
        {
          type: "shoot",
          description: "Eliminate PMC operatives on daytime Factory",
          finish: "4",
        },
        {
          type: "shoot",
          description: "Eliminate PMC operatives on Customs",
          finish: "4",
        },
        {
          type: "shoot",
          description: "Eliminate PMC operatives on Shoreline",
          finish: "4",
        },
        {
          type: "shoot",
          description: "Eliminate PMC operatives on Reserve",
          finish: "4",
        },
        {
          type: "shoot",
          description: "Eliminate PMC operatives on Woods",
          finish: "4",
        },
        {
          type: "shoot",
          description: "Eliminate PMC operatives on Interchange",
          finish: "4",
        },
        {
          type: "shoot",
          description: "Eliminate PMC operatives on The Lab",
          finish: "4",
        },
      ],
    },
  ];
  await Quest.insertMany(quests);
  console.log("Created quests!");
};

const run = async () => {
  await main();
  db.close();
};

run();
