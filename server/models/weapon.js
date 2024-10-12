const { Schema, model } = require('mongoose')

const weaponSchema = new Schema({
    name: String,
    type: String,
    rarity: Number,
    attack: {
        display: Number,
        raw: Number
    },
    elderseal: Boolean,
    attributes: {
        damageType: String
    },
    damageType: String,
    durability: [
        {
            red: Number,
            orange: Number,
            yellow: Number,
            green: Number,
            blue: Number,
            white: Number,
            purple: Number
        }
    ],
    slots: [
        {
            rank: Number
        }
    ],
    elements: [
        {
            type: String,
            damage: Number,
            hidden: Boolean
        }
    ],
    crafting: {
        craftable: Boolean,
        previous: Number | null,
        branches: [Number],
        craftingMaterials: [
            {
                quantity: Number,
                item: { 
                    type: [Schema.Types.ObjectId],
                    ref: "Item"
                 }
            }
        ],
        upgradeMaterials: [
            {
                quantity: Number,
                item: { 
                    type: [Schema.Types.ObjectId],
                    ref: "Item"
                 }
            }
        ],
        assets: {
            icon: Number,
            image: Number
        }
    }
})

const Weapon = model('Weapon', weaponSchema)

module.exports = Weapon