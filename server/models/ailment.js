const { Schema, model } = require('mongoose')

const ailmentSchema = new Schema({
    id: Number,
    name: String,
    description: String,
    recovery: {
        action: [String],
        item: { 
            type: [Schema.Types.ObjectId],
            ref: "Item"
         }
    },
    protection: {
        item: { 
            type: [Schema.Types.ObjectId],
            ref: "Item"
         },
        skill: { 
            type: [Schema.Types.ObjectId],
            ref: "Skill"
         }
    }
    
})

const Ailment = model('Ailment', ailmentSchema)

module.exports = Ailment