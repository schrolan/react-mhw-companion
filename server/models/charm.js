const { Schema, model } = require('mongoose')

const charmSchema = new Schema({
    slug: String,
    name: String,
    ranks: {
        level: Number,
        rarity: Number,
        skill: { 
            type: [Schema.Types.ObjectId],
            ref: "Skill"
         },
         crafting: {
            craftable: Boolean,
            materials:[
                {
                    quantity: Number,
                    item: { 
                        type: [Schema.Types.ObjectId],
                        ref: "Item"
                     }
                }
            ]
         }
    }
})

const Charm = model('Charm', charmSchema)

module.exports = Charm