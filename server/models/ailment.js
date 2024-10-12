const { Schema, model } = require('mongoose')

const ailmentSchema = new Schema({
    ailmentId: Number,
    name: {
        type: String,
        required: "A name is required",
        trim: true
    },
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