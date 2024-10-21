const { GraphQLError } = require('graphql')
const { Ailment, Armor, ArmorSet, Charm, Decoration, Event, Item, Location, Monster, Skill, User, Weapon } = require('../models')
const { Query } = require('mongoose')
const { signToken } = require('../utils/auth')

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
        armor: async (_, { _id }) => {
            try {
                const armor = await Armor.findById(_id)
                if (!armor) {
                    throw new Error('Armor not found');
                }
                return armor;
            } catch (error) {
                throw new Error('Error fetching armor');
            }
        },
        armorSets: async () => {
            try {
                return await ArmorSet.find()
            } catch (err) {
                throw new Error('Could not fetch armorSets.')
            }
        },
        armorSet: async (_, { _id }) => {
            try {
                const armorSet = await ArmorSet.findById(_id)
                if (!armorSet) {
                    throw new Error('ArmorSet not found');
                }
                return armorSet;
            } catch (error) {
                throw new Error('Error fetching armorSet');
            }
        },
        charms: async () => {
            try {
                return await Charm.find()
            } catch (err) {
                throw new Error('Could not fetch charms.')
            }
        },
        charm: async (_, { _id }) => {
            try {
                const charm = await Charm.findById(_id)
                if (!charm) {
                    throw new Error('Charm not found');
                }
                return charm;
            } catch (error) {
                throw new Error('Error fetching charm');
            }
        },
        decorations: async () => {
            try {
                return await Decoration.find()
            } catch (err) {
                throw new Error('Could not fetch decorations.')
            }
        },
        decoration: async (_, { _id }) => {
            try {
                const decoration = await Decoration.findById(_id)
                if (!decoration) {
                    throw new Error('Decoration not found');
                }
                return decoration;
            } catch (error) {
                throw new Error('Error fetching decoration');
            }
        },
        events: async () => {
            try {
                return await Event.find()
            } catch (err) {
                throw new Error('Could not fetch events.')
            }
        },
        event: async (_, { _id }) => {
            try {
                const event = await Event.findById(_id)
                if (!event) {
                    throw new Error('Event not found');
                }
                return event;
            } catch (error) {
                throw new Error('Error fetching event');
            }
        },
        items: async () => {
            try {
                return await Item.find()
            } catch (err) {
                throw new Error('Could not fetch items.')
            }
        },
        item: async (_, { _id }) => {
            try {
                const item = await Item.findById(_id)
                if (!item) {
                    throw new Error('Item not found');
                }
                return item;
            } catch (error) {
                throw new Error('Error fetching item');
            }
        },
        locations: async () => {
            try {
                return await Location.find()
            } catch (err) {
                throw new Error('Could not fetch locations.')
            }
        },
        location: async (_, { _id }) => {
            try {
                const location = await Location.findById(_id)
                if (!location) {
                    throw new Error('Location not found');
                }
                return location;
            } catch (error) {
                throw new Error('Error fetching location');
            }
        },
        monsters: async () => {
            try {
                return await Monster.find()
            } catch (err) {
                throw new Error('Could not fetch monsters.')
            }
        },
        monster: async (_, { _id }) => {
            try {
                const monster = await Monster.findById(_id)
                if (!monster) {
                    throw new Error('Monster not found');
                }
                return monster;
            } catch (error) {
                throw new Error('Error fetching monster');
            }
        },
        skills: async () => {
            try {
                return await Skill.find()
            } catch (err) {
                throw new Error('Could not fetch skills.')
            }
        },
        skill: async (_, { _id }) => {
            try {
                const skill = await Skill.findById(_id)
                if (!skill) {
                    throw new Error('Skill not found');
                }
                return skill;
            } catch (error) {
                throw new Error('Error fetching skill');
            }
        },
        weapons: async () => {
            try {
                return await Weapon.find()
            } catch (err) {
                throw new Error('Could not fetch weapons.')
            }
        },
        weapon: async (_, { _id }) => {
            try {
                const weapon = await Weapon.findById(_id)
                if (!weapon) {
                    throw new Error('Weapon not found');
                }
                return weapon;
            } catch (error) {
                throw new Error('Error fetching weapon');
            }
        },
        users: async () => {
            try {
                return await User.find()
            } catch (err) {
                throw new Error('Could not fetch users.')
            }
        },
        user: async (_, { _id }) => {
            try {
                const user = await User.findById(_id)
                if (!user) {
                    throw new Error('User not found');
                }
                return user;
            } catch (error) {
                throw new Error('Error fetching user');
            }
        }
    },
    Mutation: {
        login: async (parent, { email, password }, context, info) => {
            //find the user based on email
            const user = await User.findOne({ email })
            if (!user) {
                throw new GraphQLError('User not found', {
                    extensions: {
                        code: 'USER NOT FOUND',
                        http: { status: 404 }
                    }
                })
            }
            //verify the password
            const isCorrectPassword = await user.isCorrectPassword(password)
            if (!isCorrectPassword) {
                throw new GraphQLError('Password incorrect', {
                    extensions: {
                        code: 'INCORRECT PASSWORD',
                        http: { status: 401 }
                    }
                })
            }
            //sign the token
            const token = signToken(user)
            //return object that resembles Auth
            return {
                token,
                user
            }
        },
        addAilment: async(parent, args, context, info) => {
            const ailment = await Ailment.create(args)
            if (args.userId) {
                await User.findByIdAndUpdate(args.userId, {
                    $addToSet: {
                        ailment: ailment._id
                    }
                })
            }
            return ailment
        },
        addArmor: async(parent, args, context, info) => {
            const armor = await Armor.create(args)
            if (args.userId) {
                await User.findByIdAndUpdate(args.userId, {
                    $addToSet: {
                        armor: armor._id
                    }
                })
            }
            return armor
        },
        addArmorSet: async(parent, args, context, info) => {
            const armorSet = await ArmorSet.create(args)
            if (args.userId) {
                await User.findByIdAndUpdate(args.userId, {
                    $addToSet: {
                        armorSet: armorSet._id
                    }
                })
            }
            return armorSet
        },
        addCharm: async(parent, args, context, info) => {
            const charm = await Charm.create(args)
            if (args.userId) {
                await User.findByIdAndUpdate(args.userId, {
                    $addToSet: {
                        charm: charm._id
                    }
                })
            }
            return charm
        },
        addDecoration: async(parent, args, context, info) => {
            const decoration = await Decoration.create(args)
            if (args.userId) {
                await User.findByIdAndUpdate(args.userId, {
                    $addToSet: {
                        decoration: decoration._id
                    }
                })
            }
            return decoration
        },
        addEvent: async(parent, args, context, info) => {
            const event = await Event.create(args)
            if (args.userId) {
                await User.findByIdAndUpdate(args.userId, {
                    $addToSet: {
                        event: event._id
                    }
                })
            }
            return event
        },
        addItem: async(parent, args, context, info) => {
            const item = await Item.create(args)
            if (args.userId) {
                await User.findByIdAndUpdate(args.userId, {
                    $addToSet: {
                        item: item._id
                    }
                })
            }
            return item
        },
        addLocation: async(parent, args, context, info) => {
            const location = await Location.create(args)
            if (args.userId) {
                await User.findByIdAndUpdate(args.userId, {
                    $addToSet: {
                        location: location._id
                    }
                })
            }
            return location
        },
        addMonster: async(parent, args, context, info) => {
            const monster = await Monster.create(args)
            if (args.userId) {
                await User.findByIdAndUpdate(args.userId, {
                    $addToSet: {
                        monster: monster._id
                    }
                })
            }
            return monster
        },
        addSkill: async(parent, args, context, info) => {
            const skill = await Skill.create(args)
            if (args.userId) {
                await User.findByIdAndUpdate(args.userId, {
                    $addToSet: {
                        skill: skill._id
                    }
                })
            }
            return skill
        },
        addWeapon: async(parent, args, context, info) => {
            const weapon = await Weapon.create(args)
            if (args.userId) {
                await User.findByIdAndUpdate(args.userId, {
                    $addToSet: {
                        weapon: weapon._id
                    }
                })
            }
            return weapon
        },
        addUser: async (parent, args, context, info) => {
            const user = await User.create(args)
            const token = signToken(user);
            return { token, user };
        },
        deleteAilment: async (parent, { userId, ailmentId }, context, info) => {
            const user = await User.findById(userId);
            user.ailment.pull(ailmentId);
            await user.save();
            await Ailment.findByIdAndDelete(ailmentId);
            return user;
        },
        deleteArmor: async (parent, { userId, armorId }, context, info) => {
            const user = await User.findById(userId);
            user.armor.pull(armorId);
            await user.save();
            await Armor.findByIdAndDelete(armorId);
            return user;
        },
        deleteArmorSet: async (parent, { userId, armorSetId }, context, info) => {
            const user = await User.findById(userId);
            user.armorSet.pull(armorSetId);
            await user.save();
            await ArmorSet.findByIdAndDelete(armorSetId);
            return user;
        },
        deleteCharm: async (parent, { userId, charmId }, context, info) => {
            const user = await User.findById(userId);
            user.charm.pull(charmId);
            await user.save();
            await Charm.findByIdAndDelete(charmId);
            return user;
        },
        deleteDecoration: async (parent, { userId, decorationId }, context, info) => {
            const user = await User.findById(userId);
            user.decoration.pull(decorationId);
            await user.save();
            await Decoration.findByIdAndDelete(decorationId);
            return user;
        },
        deleteEvent: async (parent, { userId, eventId }, context, info) => {
            const user = await User.findById(userId);
            user.event.pull(eventId);
            await user.save();
            await Event.findByIdAndDelete(eventId);
            return user;
        },
        deleteItem: async (parent, { userId, itemId }, context, info) => {
            const user = await User.findById(userId);
            user.item.pull(itemId);
            await user.save();
            await Item.findByIdAndDelete(itemId);
            return user;
        },
        deleteLocation: async (parent, { userId, locationId }, context, info) => {
            const user = await User.findById(userId);
            user.location.pull(locationId);
            await user.save();
            await Location.findByIdAndDelete(locationId);
            return user;
        },
        deleteMonster: async (parent, { userId, monsterId }, context, info) => {
            const user = await User.findById(userId);
            user.monster.pull(monsterId);
            await user.save();
            await Monster.findByIdAndDelete(monsterId);
            return user;
        },
        deleteSkill: async (parent, { userId, skillId }, context, info) => {
            const user = await User.findById(userId);
            user.skill.pull(skillId);
            await user.save();
            await Skill.findByIdAndDelete(skillId);
            return user;
        },
        deleteWeapon: async (parent, { userId, weaponId }, context, info) => {
            const user = await User.findById(userId);
            user.weapon.pull(weaponId);
            await user.save();
            await Weapon.findByIdAndDelete(weaponId);
            return user;
        }
    }
}

module.exports = resolvers