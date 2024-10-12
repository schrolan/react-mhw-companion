const { Schema, model } = require('mogoose')

const monsterSchema = new Schema({
    name: String,
    type: String,
    species: String,
    description: String,
    elements: [String],
    ailments: {
        type: [Schema.Types.ObjectId],
        ref: "Ailment"
    },
    location: {
        type: [Schema.Types.ObjectId],
        ref: "Location"
    },
    resistances: [
        {
            element: String,
            condition: Boolean
        }
    ],
    weaknesses: [
        {
            element: String,
            stars: Number,
            condition: Boolean
        }
    ],
    reward: [
        {
            id: Number,
            item: { 
                type: [Schema.Types.ObjectId],
                ref: "Item"
             },
             conditions: [
                {
                    type: String,
                    subtype: String,
                    rank: String,
                    quantity: Number,
                    chance: Number
                }
             ]
        }
    ]
})

const Monster = model('Monster', monsterSchema)

module.exports = Monster