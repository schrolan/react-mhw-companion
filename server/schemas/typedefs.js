const typeDefs = `
    type Auth{
        token: String
        user: User
    }

    type Ailment {
        _id: ID
        name: String
        description: String
        recovery: {
            action: [String]
            item: [Item]
        }
        protection: {
            item: [Item]
            skill: [Skill]
        }

    }

    type Armor {
        _id: ID
        slug: String
        name: String
        type: String
        rank: String
        rarity: Number
        defense: [
            {
                base: Number
                max: Number
                augmented: Number
            }
        ]
        resistances: {
            fire: Number
            water: Number
            ice: Number
            thunder: Number
            dragon: Number
        }
        slots: {
            rank: Number
        }
        skills: [Skill]
        armorSet: {
            name: String
            rank: String
            pieces: [Number]
        }
        assets: {
            imageMale: String
            imageFemale: String
        }
        crafting: {
            materials: [
                {
                    quantity: Number
                    item: [Item]
                }
            ]
        }
    }

    type ArmorSet {
        rank: String
        name: String
        pieces: [Armor]
        bonus: {
            name: String
            ranks: [
                {
                    pieces: Number
                    skill: [
                        {
                            slug: String
                            level: Number
                            description: String
                            modifiers: [
                                {
                                    affinity: Number
                                    attack: Number
                                    damageFire: Number
                                    damageWater: Number
                                    damageIce: Number
                                    damageThunder: Number
                                    damageDragon: Number
                                    defense: Number
                                    health: Number
                                    sharpnessBonus: Number
                                    resistAll: Number
                                    resistFire: Number
                                    resistWater: Number
                                    resistIce: Number
                                    resistThunder: Number
                                    resistDragon: Number
                                }
                            ]
                            skill: Number
                            skillName: String
                        }
                    ]
                }
            ]
        }
    }

    type Charm {
        slug: String
        name: String
        ranks: {
            skill: [Skill]
        }
        crafting: {
            craftable: Boolean
            materials: [
                {
                    quantity: Number
                    item: [Item]
                }
            ]
        }
    }

    type Decoration {
        slug: String
        name: String
        rarity: Number
        skill: [Skill]
        slot: Number
    }

    type Event {
        name: String
        platform: String
        exclusive: Boolean
        type: String
        expansion: String
        description: String
        requirements: String
        questRank: Number
        successConditions: String
        startTimestamp: Date
        endTimestamp: Date
        location: [Location]
    }

    type Item {
        name: String
        description: String
        rarity: Number
        carryLimit: Number
        value: Number
    }

    type Location {
        name: String
        zoneCount: Number
        camps: [
            {
                id: Number
                name: String
                zone: Number
            }
        ]
    }

    type Monster {
        name: String
        type: String
        species: String
        description: String
        elements: [String]
        ailments: [Ailment]
        location: [Location]
        resistances: [
            {
                element: String,
                condition: Boolean
            }
        ]
        weaknesses: [
            {
                element: String
                stars: Number
                condition: Boolean
            }
        ]
        reward: [
            {
                id: Number
                item: [Item]
                conditions: [
                    {
                        type: String
                        subtype: String
                        rank: String
                        quantity: Number
                        chance: Number
                    }
                ]
            }
        ]
    }

    type Skill {
        id: Number
        slug: String
        name: String
        description: String
        ranks: [
            {
                slug: String,
                skill: Number
                level: Number
                description: String
                modifiers: [
                    {
                        affinity: Number
                        attack: Number
                        damageFire: Number
                        damageWater: Number
                        damageIce: Number
                        damageThunder: Number
                        damageDragon: Number
                        defense: Number
                        health: Number
                        sharpnessBonus: Number
                        resistAll: Number
                        resistFire: Number
                        resistWater: Number
                        resistIce: Number
                        resistThunder: Number
                        resistDragon: Number 
                    }
                ]
            }
        ]
    }

    type User {
        _id: ID
        username: String
        email: String
        ailment: [Ailment]
        armor: [Armor]
        armorSet: [ArmorSet]
        charm: [Charm]
        decoration: [Decoration]
        event: [Event]
        item: [Item]
        location: [Location]
        monster: [Monster]
        skill: [Skill]
        weapon: [Weapon]
    }

    type Weapon {
        name: String
        type: String
        rarity: Number
        attack: {
            display: Number
            raw: Number
        }
        elderseal: Boolean
        attributes: {
            damageType: String
        }
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
        ]
        slots: [
            {
                rank: Number
            }
        ]
        elements: [
            {
                type: String
                damage: Number
                hidden: Boolean
            }
        ]
        crafting: {
            craftable: Boolean,
            previous: Number || null
            branches: [Number]
            craftingMaterials: [
                {
                    quantity: Number,
                    item: [Item]
                }
            ]
            upgradeMaterials: [
                {
                    quantity: Number,
                    item: [Item]
                }
            ],
            assets: {
                icon: Number
                image: String
            }
        }
    }

    type Query {
        ailments: [Ailment]
        armors: [Armor]
        armorSets: [ArmorSet]
        charms: [Charm]
        decorations: [Decoration]
        events: [Event]
        items: [Item]
        locations: [Location]
        monsters: [Monster]
        skills: [Skill]
        weapons: [Weapon]
        users: [User]
    }

    type Mutation {
        login(email: String!, password: String!): Auth

        addAilemt(
            user: ID!
            _id: ID
            name: String
            description: String
            recovery: {
                action: [String]
                item: [Item]
            }
            protection: {
                item: [Item]
                skill: [Skill]
            }
        ): Ailment
        addArmor(
            user: ID!
            _id: ID
            slug: String
            name: String
            type: String
            rank: String
            rarity: Number
            defense: [
                {
                    base: Number
                    max: Number
                    augmented: Number
                }
            ]
            resistances: {
                fire: Number
                water: Number
                ice: Number
                thunder: Number
                dragon: Number
            }
            slots: {
                rank: Number
            }
            skills: [Skill]
            armorSet: {
                name: String
                rank: String
                pieces: [Number]
            }
            assets: {
                imageMale: String
                imageFemale: String
            }
            crafting: {
                materials: [
                    {
                        quantity: Number
                        item: [Item]
                    }
                ]
            }
        ): Armor
        addArmorSet(
            user: ID!
            rank: String
            name: String
            pieces: [Armor]
            bonus: {
                name: String
                ranks: [
                    {
                        pieces: Number
                        skill: [
                            {
                                slug: String
                                level: Number
                                description: String
                                modifiers: [
                                    {
                                        affinity: Number
                                        attack: Number
                                        damageFire: Number
                                        damageWater: Number
                                        damageIce: Number
                                        damageThunder: Number
                                        damageDragon: Number
                                        defense: Number
                                        health: Number
                                        sharpnessBonus: Number
                                        resistAll: Number
                                        resistFire: Number
                                        resistWater: Number
                                        resistIce: Number
                                        resistThunder: Number
                                        resistDragon: Number
                                    }
                                ]
                                skill: Number
                                skillName: String
                            }
                        ]
                    }
                ]
            }
        ): ArmorSet
        addCharm(
            user: ID!
            slug: String
            name: String
            ranks: {
                skill: [Skill]
            }
            crafting: {
                craftable: Boolean
                materials: [
                    {
                        quantity: Number
                        item: [Item]
                    }
                ]
            }
        ): Charm
        addDecoration(
            user: ID!
            slug: String
            name: String
            rarity: Number
            skill: [Skill]
            slot: Number
        ): Decoration
        addEvent(
            user: ID!
            name: String
            platform: String
            exclusive: Boolean
            type: String
            expansion: String
            description: String
            requirements: String
            questRank: Number
            successConditions: String
            startTimestamp: Date
            endTimestamp: Date
            location: [Location]
        ): Event
        addItem(
            user: ID!
            name: String
            description: String
            rarity: Number
            carryLimit: Number
            value: Number
        ): Item
        addLocation(
            user: ID!
            name: String
            description: String
            rarity: Number
            carryLimit: Number
            value: Number
        ): Location
        addMonster(
            user: ID!
            name: String
            type: String
            species: String
            description: String
            elements: [String]
            ailments: [Ailment]
            location: [Location]
            resistances: [
                {
                    element: String,
                    condition: Boolean
                }
            ]
            weaknesses: [
                {
                    element: String
                    stars: Number
                    condition: Boolean
                }
            ]
            reward: [
                {
                    id: Number
                    item: [Item]
                    conditions: [
                        {
                            type: String
                            subtype: String
                            rank: String
                            quantity: Number
                            chance: Number
                        }
                    ]
                }
            ]
        ): Monster
        addSkill(
            user: ID!
            id: Number
            slug: String
            name: String
            description: String
            ranks: [
                {
                    slug: String,
                    skill: Number
                    level: Number
                    description: String
                    modifiers: [
                        {
                            affinity: Number
                            attack: Number
                            damageFire: Number
                            damageWater: Number
                            damageIce: Number
                            damageThunder: Number
                            damageDragon: Number
                            defense: Number
                            health: Number
                            sharpnessBonus: Number
                            resistAll: Number
                            resistFire: Number
                            resistWater: Number
                            resistIce: Number
                            resistThunder: Number
                            resistDragon: Number 
                        }
                    ]
                }
            ]
        ): Skill
        addWeapon(
            user: ID!
            name: String
            type: String
            rarity: Number
            attack: {
                display: Number
                raw: Number
            }
            elderseal: Boolean
            attributes: {
                damageType: String
            }
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
            ]
            slots: [
                {
                    rank: Number
                }
            ]
            elements: [
                {
                    type: String
                    damage: Number
                    hidden: Boolean
                }
            ]
            crafting: {
                craftable: Boolean,
                previous: Number || null
                branches: [Number]
                craftingMaterials: [
                    {
                        quantity: Number,
                        item: [Item]
                    }
                ]
                upgradeMaterials: [
                    {
                        quantity: Number,
                        item: [Item]
                    }
                ],
                assets: {
                    icon: Number
                    image: String
                }
            }
        ): Weapon
        addUser(
            usernam: String!
            email: String!
            password: String!
        ):
        deleteAilment(userId: ID!, ailmentId: ID!): User
        deleteArmor(userId: ID!, armorId: ID!): User
        deleteArmorSet(userId: ID!, armorSetId: ID!): User
        deleteCharm(userId: ID!, CharmId: ID!): User
        deleteDecoration(userId: ID!, decorationId: ID!): User
        deleteEvent(userId: ID!, eventId: ID!): User
        deleteItem(userId: ID!, itemId: ID!): User
        deleteLocation(userId: ID!, locationId: ID!): User
        deleteMonster(userId: ID!, monsterId: ID!): User
        deleteSkill(userId: ID!, skillId: ID!): User
        deleteWeapon(userId: ID!, weaponId: ID!): User
    }
`

module.exports = typeDefs