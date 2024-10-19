const { GraphQLError } = require('graphql')
const { Ailment, Armor, ArmorSet, Charm, Decoration, Event, Item, Location, Monster, Skill, User, Weapon } = require('../models')

const resolvers = {
    Query: {
        ailments: async (parent, args, context, info) => {
            return await Ailment.find()
        },
        ailment: async (parent, args, context, info) => {
            return await Ailment.findById(args._id)
        },
        armors: async (parent, args, context, info) => {
            return await Armor.find()
        },
        armor: async (parent, args, context, info) => {
            return await Armor.findById(args._id)
        },
        armorSets: async (parent, args, context, info) => {
            return await ArmorSet.find()
        },
        armorSet: async (parent, args, context, info) => {
            return await ArmorSet.findById(args._id)
        },
        charms: async (parent, args, context, info) => {
            return await Charm.find()
        },
        charm: async (parent, args, context, info) => {
            return await Charm.findById(args._id)
        },
        decorations: async (parent, args, context, info) => {
            return await Decoration.find()
        },
        decoration: async (parent, args, context, info) => {
            return await Decoration.findById(args._id)
        },
        events: async (parent, args, context, info) => {
            return await Event.find()
        },
        event: async (parent, args, context, info) => {
            return await Event.findById(args._id)
        },
        items: async (parent, args, context, info) => {
            return await Item.find()
        },
        item: async (parent, args, context, info) => {
            return await Item.findById(args._id)
        },
        locations: async (parent, args, context, info) => {
            return await Location.find()
        },
        location: async (parent, args, context, info) => {
            return await Location.findById(args._id)
        },
        monsters: async (parent, args, context, info) => {
            return await Monster.find()
        },
        Monster: async (parent, args, context, info) => {
            return await Monster.find()
        },
        ailments: async (parent, args, context, info) => {
            return await Ailment.find()
        },
        ailments: async (parent, args, context, info) => {
            return await Ailment.find()
        },
        ailments: async (parent, args, context, info) => {
            return await Ailment.find()
        },
        ailments: async (parent, args, context, info) => {
            return await Ailment.find()
        },
        ailments: async (parent, args, context, info) => {
            return await Ailment.find()
        },
        ailments: async (parent, args, context, info) => {
            return await Ailment.find()
        },
    }
}