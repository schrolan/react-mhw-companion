const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        //This makes sure that the user gives a username.
        required: "A username is required",
        //This ensures that each username is true.
        unique: true,
        //This gets rid of the white space
        trim: true
    },
    email: {
        type: String,
        required: "An email is required",
        unique: true,
        //This ensures that random characters are not punched in. It must follow this format.The first half in the array is regular expression, regex. Anything followed by an at symbol followed by anything followed by a period followed by anything.
        match: [/.+@.+\..+/, "Must match an emal format"]
    },
    password: {
        type: String,
        required: "A password is required",
        minlength: 8
    },
    //This is an association we are setting up
    ailment: [
        {
            type: Schema.Types.ObjectID,
            ref: 'Ailment'
        }
    ],
    armor: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Armor'
        }
    ],
    armorSet: [
        {
            type: Schema.Types.ObjectId,
            ref: 'ArmorSet'
        }
    ],
    charm: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Charm'
        }
    ],
    decoration: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Decoration'
        }
    ],
    event: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Event'
        }
    ],
    item: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Item'
        }
    ],
    location: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Location'
        }
    ],
    monster: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Monster'
        }
    ],
    skill: [
        {
            type: Schema.Types.ObjectId,
            ref: 'skill'
        }
    ],
    weapon: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Weapon'
        }
    ],
})

//Setting up a middleware to hook into different stages of a model. We will be using the pre middleware to hook into before this gets saved.
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
        console.log("Hashed password:", this.password); // Log after hashing
    }
    next();
});


userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema)

module.exports = User