const fetch = require('node-fetch')
const connection = require('../config/connection')

const { Ailment, Armor, ArmorSet, Charm, Decoration, Event, Item, Location, Monster, Skill, User, Weapon } = require('../models')

connection.once('open', async () => {
    await Ailment.deleteMany()
    await Armor.deleteMany()
    await ArmorSet.deleteMany()
    await Charm.deleteMany()
    await Decoration.deleteMany()
    await Event.deleteMany()
    await Item.deleteMany()
    await Location.deleteMany()
    await Monster.deleteMany()
    await Skill.deleteMany()
    await Weapon.deleteMany()
    await User.deleteMany()

        //Seed the ailment
        for (const id of [1]) {
            const response = await fetch(`https://mhw-db.com/ailments/${id}`)            

            const {
                    name,
                    description,
                    recovery,
                    protection
            } = await response.json()

                await Ailment.create({
                    name,
                    description,
                    recovery,
                    protection
                })
            }

            //Armor seed
            for (const id of [1]) {
                const response = await fetch(`https://mhw-db.com/armor/${id}`)

                const {
                    slug,
                    name,
                    type,
                    rank,
                    rarity,
                    defense,
                    resistances,
                    slots,
                    skills,
                    armorSet,
                    assets,
                    crafting
                } = await response.json()

                    await Armor.create({
                        slug,
                        name,
                        type,
                        rank,
                        rarity,
                        defense,
                        resistances,
                        slots,
                        skills,
                        armorSet,
                        assets,
                        crafting
                    })
            }

            //ArmorSet seed
            for (const id of [1]) {
                const response = await fetch(`https://mhw-db.com/armor/sets/${id}`)

                const {
                    name,
                    rank,
                    pieces,
                    bonus
                } = await response.json()

                    await ArmorSet.create({
                        name,
                        rank,
                        pieces,
                        bonus 
                    })
            }

            //Charm seed
            for (const id of [1]) {
                const response = await fetch(`https://mhw-db.com/charms/${id}`)

                const {
                    slug,
                    name,
                    rarity,
                    skill,
                    slot
                } = await response.json()

                    await Charm.create({
                        slug,
                        name,
                        rarity,
                        skill,
                        slot
                    })
            }

            //Decoration seed
            for (const id of [1]) {
                const response = await fetch(`https://mhw-db.com/decorations/${id}`)

                const {
                    slug,
                    name,
                    rarity,
                    skill,
                    slot
                } = await response.json()

                    await Decoration.create({
                        slug,
                        name,
                        rarity,
                        skill,
                        slot
                    })
            }

            //Event seed
            for (const id of [1]) {
                const response = await fetch(`https://mhw-db.com/events/${id}`) 

                const {
                    name,
                    platform,
                    exclusive,
                    type,
                    expansion,
                    description,
                    requirements,
                    questRank,
                    successConditions,
                    startTimestamp,
                    endTimestamp,
                    location
                } = await response.json()

                    await Event.create({
                        name,
                        platform,
                        exclusive,
                        type,
                        expansion,
                        description,
                        requirements,
                        questRank,
                        successConditions,
                        startTimestamp,
                        endTimestamp,
                        location
                    })
            }

            //Item seed
            for (const id of [1]) {
                const response = await fetch(`https://mhw-db.com/items/${id}`)

                const {
                    name,
                    description,
                    rarity,
                    carryLimit,
                    value
                } = await response.json()

                    await Item.create({
                        name,
                        description,
                        rarity,
                        carryLimit,
                        value
                    })
                }

             //Location seed
            for (const id of [1]) {
                const response = await fetch(`https://mhw-db.com/locations/${id}`)

                const {
                    name,
                    zoneCount,
                    camps
                } = await response.json()

                    await Location.create({
                        name,
                        zoneCount,
                        camps
                    })
            }

            //Monster seed
            for (const id of [30]) {
                const response = await fetch(`https://mhw-db.com/monsters/${id}`)

                const {
                    name,
                    type,
                    species,
                    description,
                    elements,
                    ailments,
                    location,
                    resistances,
                    weakness,
                    rewards
                } = await response.json()

                    await Monster.create({
                        name,
                        type,
                        species,
                        description,
                        elements,
                        ailments,
                        location,
                        resistances,
                        weakness,
                        rewards
                    })
        }

            //Skill seed
            for (const id of [1]) {
                const response = await fetch(`https://mhw-db.com/skills/${id}`)
        
                const {
                    slug,
                    name,
                    description,
                    ranks
                } = await response.json()
        
                    await Skill.create({
                        slug,
                        name,
                        description,
                        ranks
                    })
            }


            //Weapon seed
            for (const id of [1]) {
                const response = await fetch(`https://mhw-db.com/weapons/${id}`)

                const {
                    slug,
                    name,
                    type,
                    rarity,
                    attack,
                    slots,
                    elements,
                    crafting,
                    assets,
                    durability,
                    elderseal,
                    damageType,
                    attributes
                } = await response.json()

                    await Weapon.create({
                        slug,
                        name,
                        type,
                        rarity,
                        attack,
                        slots,
                        elements,
                        crafting,
                        assets,
                        durability,
                        elderseal,
                        damageType,
                        attributes
                    })
            }

            
            //User seed
            const allAilment = await Ailment.find()
            const allAilmentIds = allAilment.map(ailment => ailment._id)
            const allArmor = await Armor.find()
            const allArmorIds = allArmor.map(armor => armor._id)
            const allArmorSet = await ArmorSet.find()
            const allArmorSetIds = allArmorSet.map(armorSet => armorSet._id)
            const allCharm = await Charm.find()
            const allCharmIds = allCharm.map(charm => charm._id)
            const allDecoration = await Decoration.find()
            const allDecorationIds = allDecoration.map(decoration => decoration._id)
            const allEvent = await Event.find()
            const allEventIds = allEvent.map(event => event._id)
            const allItem = await Item.find()
            const allItemIds = allItem.map(item => item._id)
            const allLocation = await Location.find()
            const allLocationIds = allLocation.map(location => location._id)
            const allMonster = await Monster.find()
            const allMonsterIds = allMonster.map(monster => monster._id)
            const allSkill = await Skill.find()
            const allSkillIds = allSkill.map(skill => skill._id)
            const allWeapon = await Weapon.find()
            const allWeaponIds = allWeapon.map(weapon => weapon._id)

            await User.create({
                username: 'MonsterHunter',
                email: 'RankOneHunter@gmail.com',
                password: 'GottaHunt',
                ailment: allAilmentIds,
                armor: allArmorIds,
                armorSet: allArmorSetIds,
                charm: allCharmIds,
                decoration: allDecorationIds,
                event: allEventIds,
                item: allItemIds,
                location: allLocationIds,
                monster: allMonsterIds,
                skill: allSkillIds,
                weapon: allWeaponIds
            })

            console.log('Time to hunt!')
            process.exit(0)
        })