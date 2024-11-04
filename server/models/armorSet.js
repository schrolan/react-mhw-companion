//Use this for running the app
// const { Schema, model } = require('mongoose');

// const armorSetSchema = new Schema({
//     rank: String,
//     name: String,
//     pieces: [
//         {
//             slug: String,
//             name: String,
//             type: String,
//             rank: String,
//             rarity: Number,
//             armorSet: Number,
//             attributes: {
//                 defense: Number,
//                 resistFire: Number,
//                 resistWater: Number,
//                 resistThunder: Number,
//                 resistIce: Number
//             },
//             skills: [
//                 {
//                     slug: String,
//                     level: Number,
//                     description: String,
//                     modifiers: [
//                         {
//                             affinity: Number,
//                             attack: Number,
//                             damageFire: Number,
//                             damageWater: Number,
//                             damageIce: Number,
//                             damageThunder: Number,
//                             damageDragon: Number,
//                             defense: Number,
//                             health: Number,
//                             sharpnessBonus: Number,
//                             resistAll: Number,
//                             resistFire: Number,
//                             resistWater: Number,
//                             resistIce: Number,
//                             resistThunder: Number,
//                             resistDragon: Number 
//                         }
//                     ],
//                     skill: Number,
//                     skillName: String 
//                 }
//             ],
//             assets: {
//                 imageMale: String,
//                 imageFemale: String
//             }
//         }
//     ],
//     bonus: {
//         name: String,
//         ranks: [
//             {
//                 pieces: Number,
//                 skill: [
//                     {
//                         slug: String,
//                         level: Number,
//                         description: String,
//                         modifiers: [
//                             {
//                                 affinity: Number,
//                                 attack: Number,
//                                 damageFire: Number,
//                                 damageWater: Number,
//                                 damageIce: Number,
//                                 damageThunder: Number,
//                                 damageDragon: Number,
//                                 defense: Number,
//                                 health: Number,
//                                 sharpnessBonus: Number,
//                                 resistAll: Number,
//                                 resistFire: Number,
//                                 resistWater: Number,
//                                 resistIce: Number,
//                                 resistThunder: Number,
//                                 resistDragon: Number
//                             }
//                         ],
//                         skill: Number,
//                         skillName: String
//                     }
//                 ]
//             }
//         ]
//     }
// })

// const ArmorSet = model('ArmorSet', armorSetSchema);

// module.exports = ArmorSet

// Use this for seeding the data
const { Schema, model } = require('mongoose');

const armorSetPiecesAttributesSchema = new Schema({
    defense: Number,
    resistFire: Number,
    resistWater: Number,
    resistThunder: Number,
    resistIce: Number
})

const modifiersSchema = new Schema({
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
})

const armorSetPiecesSkillsSchema = new Schema({
    slug: String,
    level: Number,
    description: String,
    modifiers: [modifiersSchema],
    skill: Number,
    skillName: String
})

const armorSetPiecesAssetsSchema = new Schema({
    imageMale: String,
    imageFemale: String
})

const armorSetPiecesSchema = new Schema({
    slug: String,
    name: String,
    type: String,
    rank: String,
    rarity: Number,
    armorSet: Number,
    attributes: armorSetPiecesAttributesSchema,
    skills: [armorSetPiecesSkillsSchema],
    assets: armorSetPiecesAssetsSchema
})

const armorSetBonusRanksSkillSchema = new Schema({
    slug: String,
    level: Number,
    description: String,
    modifiers: [modifiersSchema],
    skill: Number,
    skillName: String
})

const armorSetBonusRanksSchema = new Schema({
    pieces: Number,
    skill: [armorSetBonusRanksSkillSchema]
})

const armorSetBonusSchema = new Schema({
    name: String,
    ranks: [armorSetBonusRanksSchema]
})

const armorSetSchema = new Schema({
    name: String,
    rank: String,
    pieces: [armorSetPiecesSchema],
    bonus: armorSetBonusSchema
})

const ArmorSet = model('ArmorSet', armorSetSchema);

module.exports = ArmorSet;