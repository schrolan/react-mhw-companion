const { Schema, model } = require('mongoose');

const armorSetSchema = new Schema({
    rank: String,
    name: String,
    pieces: [
        {
            slug: String,
            name: String,
            type: String,
            rank: String,
            rarity: Number,
            armorSet: Number,
            attributes: {
                defense: Number,
                resistFire: Number,
                resistWater: Number,
                resistThunder: Number,
                resistIce: Number
            },
            skills: [
                {
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
                }
            ],
            assets: {
                imageMale: String,
                imageFemale: String
            }
        }
    ],
    bonus: {
        name: String,
        ranks: [
            {
                pieces: Number,
                skill: [
                    {
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
                    }
                ]
            }
        ]
    }
})

const ArmorSet = model('ArmorSet', armorSetSchema);

module.exports = ArmorSet