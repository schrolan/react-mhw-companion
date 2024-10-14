const { Schema, model } = require('mongoose');

const skillSchema = new Schema({
    level: Number,
    modifiers: {
        affinity: Number,
        attack: Number,
        damageFire: Number,
        damageWater: Number,
        damageIce: Number,
        damageThunder: Number,
        damageDragon: Number,
        defense: Number,
        health: Number,
        sharpnessBonus: Number,
        resistAll: Number,
        resistFire: Number,
        resistWater: Number,
        resistIce: Number,
        resistThunder: Number,
        resistDragon: Number 
    },
    skill: Number,
    description: String,
    skillName: String
})

const itemSchema = new Schema({
    rarity: Number,
    carryLimit: Number,
    value: Number,
    name: String,
    description: String
})

const craftingSchema = new Schema({
    materials: [
        {
            quantity: Number,
            item: itemSchema
        }
    ]
})

const pieceSchema = new Schema({
    type: String,
    rank: String,
    rarity: Number,
    attributes: {},
    defense: {
        base: Number,
        max: Number,
        augmented: Number
    },
    resistances: {
        fire: Number,
        water: Number,
        ice: Number,
        thunder: Number,
        dragon: Number
    },
    name: String,
    slots: [
        {
            rank: Number
        }
    ],
    skills: [skillSchema],
    armorSet: Number,
    assets: {
        imageMale: String,
        imageFemale: String
    },
    crafting: craftingSchema
})

const bonusSkillSchema = new Schema({
    slug: String,
    level: Number,
    description: String,
    modifiers: [
        {
            affinity: Number,
            attack: Number,
            damageFire: Number,
            damageWater: Number,
            damageIce: Number,
            damageThunder: Number,
            damageDragon: Number,
            defense: Number,
            health: Number,
            sharpnessBonus: Number,
            resistAll: Number,
            resistFire: Number,
            resistWater: Number,
            resistIce: Number,
            resistThunder: Number,
            resistDragon: Number
        }
    ],
    skill: Number,
    skillName: String
})

const bonusRankSchema = new Schema({
    pieces: Number,
    skill: [bonusSkillSchema]
})

const bonusSchema = new Schema({
    name: String,
    ranks: [bonusRankSchema]
})

const armorSetSchema = new Schema({
    rank: String,
    name: String,
    pieces: [pieceSchema],
    bonus: bonusSchema
})

const ArmorSet = model('ArmorSet', armorSetSchema);

module.exports = ArmorSet;