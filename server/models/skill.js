const { Schema, model } = require('mongoose')

const skillSchema = new Schema({
    slug: String,
    name: String,
    description: String,
    ranks: [
        {
            id: Number,
            slug: String,
            skill: Number,
            level: Number,
            description: String,
            modifiers: {
                attack: Number
            }
        }
    ]
})

const Skill = model('Skill', skillSchema)

module.exports = Skill