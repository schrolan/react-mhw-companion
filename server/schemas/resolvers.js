const { GraphQLError } = require('graphql')
const { Ailment, Armor, ArmorSet, Charm, Decoration, Event, Item, Location, Monster, Skill, User, Weapon } = require('../models')
const { Query } = require('mongoose')

const resolvers = {
    Query: {
        ailments: async () => {
            try {
                return await Ailment.find()
            } catch (err) {
                throw new Error('Could not fetch ailments.')
            }
        },
        ailment: async (_, { _id }) => {
            try {
                const ailment = await Ailment.findById(_id)
                if (!ailment) {
                    throw new Error('Ailment not found');
                }
                return ailment;
            } catch (error) {
                throw new Error('Error fetching ailment');
            }
        },
        armors: async () => {
            try {
                return await Armor.find()
            } catch (err) {
                throw new Error('Could not fetch armors.')
            }
        },
        armorSets: async () => {
            try {
                return await ArmorSet.find()
            } catch (err) {
                throw new Error('Could not fetch armorSets.')
            }
        },
        charms: async () => {
            try {
                return await Charm.find()
            } catch (err) {
                throw new Error('Could not fetch charms.')
            }
        },
        decorations: async () => {
            try {
                return await Decoration.find()
            } catch (err) {
                throw new Error('Could not fetch decorations.')
            }
        },
        events: async () => {
            try {
                return await Event.find()
            } catch (err) {
                throw new Error('Could not fetch events.')
            }
        },
        items: async () => {
            try {
                return await Item.find()
            } catch (err) {
                throw new Error('Could not fetch items.')
            }
        },
        locations: async () => {
            try {
                return await Location.find()
            } catch (err) {
                throw new Error('Could not fetch locations.')
            }
        },
        monsters: async () => {
            try {
                return await Monster.find()
            } catch (err) {
                throw new Error('Could not fetch monsters.')
            }
        },
        skills: async () => {
            try {
                return await Skill.find()
            } catch (err) {
                throw new Error('Could not fetch skills.')
            }
        },
        weapons: async () => {
            try {
                return await Weapon.find()
            } catch (err) {
                throw new Error('Could not fetch weapons.')
            }
        },
        users: async () => {
            try {
                return await User.find()
            } catch (err) {
                throw new Error('Could not fetch users.')
            }
        }
    },
    Mutation: {
        login: async (_, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new Error('User not found');
            }
            const token = generateToken(user);
            return { token, user };
        },
        addAilment: async(_, { user, name, description, recovery, protection }) => {
            const newAilment = new Ailment({ name, description, recovery, protection })
            return await newAilment.save()
        },
        addArmor: async(_, { slug, name, type, rank, rarity, defense, resistances, slots, skils, armorSet, assets, crafting
         }) => {
            const newArmor = new Armor({ slug, name, type, rank, rarity, defense, resistances, slots, skils, armorSet, assets, crafting })
            return await newArmor.save()
         }
    }
}

module.exports = resolvers