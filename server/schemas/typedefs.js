const typeDefs = `
    type Auth{
        token: String
        user: User
    }

    input RecoveryInput {
        action: [String]
        item: [ItemInput]
    }

    input ProtectionInput {
        item: [ItemInput]
        skill: [SkillInput]
    }

    input DefenseInput {
        base: Int
        max: Int
        augmented: Int
    }

    input ResistancesInput {
        fire: Int
        water: Int
        ice: Int
        thunder: Int
        dragon: Int
    }

    input SlotsInput {
        rank: Int
    }

    input ArmorSetArmorInput {
        name: String
        rank: String
        pieces: [Int]
    }

    input AssetsInput {
        imageMale: String
        imageFemale: String
    }

    input MaterialsInput {
        quantity: Int
        item: [ItemInput]
    }

    input CraftingInput {
        craftable: Boolean
        materials: [MaterialsInput]
    }

    input RanksInput {
        pieces: Int
        skills: [SkillInput]
        skill: Int
        skillName: String
    }

    input BonusInput {
        name: String
        ranks: [RanksInput]

    }

    input CampsInput {
        id: Int
        name: String
        zone: Int
    }

    input MonsterResistancesInput {
        element: String
        condition: Boolean
    }

    input WeaknessesInput {
        element: String
        stars: Int
        condition: Boolean
    }

    input ConditionsInput {
        type: String
        subtype: String
        rank: String
        quantity: Int
        chance: Int
    }

    input RewardInput {
        id: Int
        item: [ItemInput]
        conditions: [ConditionsInput]
    }

    input ModifiersInput {
        affinity: Int
        attack: Int
        damageFire: Int
        damageWater: Int
        damageIce: Int
        damageThunder: Int
        damageDragon: Int
        defense: Int
        health: Int
        sharpnessBonus: Int
        resistAll: Int
        resistFire: Int
        resistWater: Int
        resistIce: Int
        resistThunder: Int
        resistDragon: Int
    }

    input SkillRanksInput {
        slug: String
        skill: Int
        level: Int
        description: String
        modifiers: [ModifiersInput]
    }

    input AttackInput {
        display: Int
        raw: Int
    }

    input AttributesInput {
        damageType: String
    }

    input DurabilityInput {
        red: Int
        orange: Int
        yellow: Int
        green: Int
        blue: Int
        white: Int
        purple: Int
    }

    input ElementsInput {
        type: String
        damage: Int
        hidden: Boolean
    }

    input CraftingMaterialsInput {
        quantity: Int
        item: [ItemInput]
    }

    input UpgradeMaterialsInput {
        quantity: Int
        item: [ItemInput]
    }

    input WeaponAssetsInput {
        icon: Int
        image: String
    }

    input CraftingInput {
        craftable: Boolean
        previous: Int
        branches: [Int]
        craftingMaterials: [CraftingMaterialsInput]
        upgradeMaterials: [UpgradeMaterialsInput]
        assets: WeaponAssetsInput
    }

    input AilmentInput {
        _id: ID
        name: String
        description: String
        recovery: RecoveryInput
        protection: ProtectionInput

    }

    input ArmorInput {
        _id: ID
        slug: String
        name: String
        type: String
        rank: String
        rarity: Int
        defense: [DefenseInput]
        resistances: ResistancesInput
        slots: SlotsInput
        skills: [SkillInput]
        armorSet: ArmorSetArmorInput
        assets: AssetsInput
        crafting: CraftingInput
    }

    input ArmorSetInput {
        rank: String
        name: String
        pieces: [ArmorInput]
        bonus: BonusInput
    }

    input CharmInput {
        slug: String
        name: String
        ranks: [SkillInput]
        crafting: CraftingInput
    }

    input DecorationInput {
        slug: String
        name: String
        rarity: Int
        skill: [SkillInput]
        slot: Int
    }

    input EventInput {
        name: String
        platform: String
        exclusive: Boolean
        type: String
        expansion: String
        description: String
        requirements: String
        questRank: Int
        successConditions: String
        startTimestamp: Int
        endTimestamp: Int
        location: [LocationInput]
    }

    input ItemInput {
        name: String
        description: String
        rarity: Int
        carryLimit: Int
        value: Int
    }

    input LocationInput {
        name: String
        zoneCount: Int
        camps: [CampsInput]
    }

    input MonsterInput {
        name: String
        type: String
        species: String
        description: String
        elements: [String]
        ailments: [AilmentInput]
        location: [LocationInput]
        resistances: [MonsterResistancesInput]
        weaknesses: [WeaknessesInput]
        reward: [RewardInput]
    }

    input SkillInput {
        id: Int
        slug: String
        name: String
        description: String
        ranks: [SkillRanksInput]
    }

    input UserInput {
        _id: ID
        username: String
        email: String
        ailment: [AilmentInput]
        armor: [ArmorInput]
        armorSet: [ArmorSetInput]
        charm: [CharmInput]
        decoration: [DecorationInput]
        event: [EventInput]
        item: [ItemInput]
        location: [LocationInput]
        monster: [MonsterInput]
        skill: [SkillInput]
        weapon: [WeaponInput]
    }

    input WeaponInput {
        name: String
        type: String
        rarity: Int
        attack: AttackInput
        elderseal: Boolean
        attributes: AttributesInput
        damageType: String
        durability: [DurabilityInput]
        slots: [SlotsInput]
        elements: [ElementsInput]
        crafting: CraftingInput
    }

    type Recovery {
        action: [String]
        item: [Item]
    }


    type Protection {
        item: [Item]
        skill: [Skill]
    }


    type Defense {
        base: Int
        max: Int
        augmented: Int
    }


    type Resistances {
        fire: Int
        water: Int
        ice: Int
        thunder: Int
        dragon: Int
    }


    type Slots {
        rank: Int
    }


    type ArmorSetArmor {
        name: String
        rank: String
        pieces: [Int]
    }


    type Assets {
        imageMale: String
        imageFemale: String
    }


    type Materials {
        quantity: Int
        item: [Item]
    }


    type Crafting {
        craftable: Boolean
        materials: [Materials]
    }


    type Ranks {
        pieces: Int
        skills: [Skill]
        skill: Int
        skillName: String
    }


    type Bonus {
        name: String
        ranks: [Ranks]


    }


    type Camps {
        id: Int
        name: String
        zone: Int
    }


    type MonsterResistances {
        element: String
        condition: Boolean
    }


    type Weaknesses {
        element: String
        stars: Int
        condition: Boolean
    }


    type Conditions {
        type: String
        subtype: String
        rank: String
        quantity: Int
        chance: Int
    }


    type Reward {
        id: Int
        item: [Item]
        conditions: [Conditions]
    }


    type Modifiers {
        affinity: Int
        attack: Int
        damageFire: Int
        damageWater: Int
        damageIce: Int
        damageThunder: Int
        damageDragon: Int
        defense: Int
        health: Int
        sharpnessBonus: Int
        resistAll: Int
        resistFire: Int
        resistWater: Int
        resistIce: Int
        resistThunder: Int
        resistDragon: Int
    }


    type SkillRanks {
        slug: String
        skill: Int
        level: Int
        description: String
        modifiers: [Modifiers]
    }


    type Attack {
        display: Int
        raw: Int
    }


    type Attributes {
        damageType: String
    }


    type Durability {
        red: Int
        orange: Int
        yellow: Int
        green: Int
        blue: Int
        white: Int
        purple: Int
    }


    type Elements {
        type: String
        damage: Int
        hidden: Boolean
    }


    type CraftingMaterials {
        quantity: Int
        item: [Item]
    }


    type UpgradeMaterials {
        quantity: Int
        item: [Item]
    }


    type WeaponAssets {
        icon: Int
        image: String
    }


    type Crafting {
        craftable: Boolean
        previous: Int
        branches: [Int]
        craftingMaterials: [CraftingMaterials]
        upgradeMaterials: [UpgradeMaterials]
        assets: WeaponAssets
    }


    type Ailment {
        _id: ID
        name: String
        description: String
        recovery: Recovery
        protection: Protection
    }


    type Armor {
        _id: ID
        slug: String
        name: String
        type: String
        rank: String
        rarity: Int
        defense: [Defense]
        resistances: Resistances
        slots: Slots
        skills: [Skill]
        armorSet: ArmorSetArmor
        assets: Assets
        crafting: Crafting
    }


    type ArmorSet {
        rank: String
        name: String
        pieces: [Armor]
        bonus: Bonus
    }


    type Charm {
        slug: String
        name: String
        ranks: [Skill]
        crafting: Crafting
    }


    type Decoration {
        slug: String
        name: String
        rarity: Int
        skill: [Skill]
        slot: Int
    }


    type Event {
        name: String
        platform: String
        exclusive: Boolean
        type: String
        expansion: String
        description: String
        requirements: String
        questRank: Int
        successConditions: String
        startTimestamp: Int
        endTimestamp: Int
        location: [Location]
    }


    type Item {
        name: String
        description: String
        rarity: Int
        carryLimit: Int
        value: Int
    }


    type Location {
        name: String
        zoneCount: Int
        camps: [Camps]
    }


    type Monster {
        name: String
        type: String
        species: String
        description: String
        elements: [String]
        ailments: [Ailment]
        location: [Location]
        resistances: [MonsterResistances]
        weaknesses: [Weaknesses]
        reward: [Reward]
    }


    type Skill {
        id: Int
        slug: String
        name: String
        description: String
        ranks: [SkillRanks]
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
        rarity: Int
        attack: Attack
        elderseal: Boolean
        attributes: Attributes
        damageType: String
        durability: [Durability]
        slots: [Slots]
        elements: [Elements]
        crafting: Crafting
    }


    type Query {
        ailments: [Ailment]
        ailment(_id: ID!): Ailment
        armors: [Armor]
        armor(_id: ID!): Armor
        armorSets: [ArmorSet]
        armorSet(_id: ID!): ArmorSet
        charms: [Charm]
        charm(_id: ID!): Charm
        decorations: [Decoration]
        decoration(_id: ID!): Decoration
        events: [Event]
        event(_id: ID!): Event
        items: [Item]
        item(_id: ID!): Item
        locations: [Location]
        location(_id: ID!): Location
        monsters: [Monster]
        monster(_id: ID!): Monster
        skills: [Skill]
        skill(_id: ID!): Skill
        weapons: [Weapon]
        weapon(_id: ID!): Weapon
        users: [User]
        user(_id: ID!): User
    }

    type Mutation {
        login(email: String!, password: String!): Auth

        addAilment(
            user: ID!
            _id: ID
            name: String
            description: String
            recovery: RecoveryInput
            protection: ProtectionInput
        ): Ailment
        addArmor(
            user: ID!
            _id: ID
            slug: String
            name: String
            type: String
            rank: String
            rarity: Int
            defense: [DefenseInput]
            resistances: ResistancesInput
            slots: SlotsInput
            skills: [SkillInput]
            armorSet: ArmorSetArmorInput
            assets: AssetsInput
            crafting: CraftingInput
        ): Armor
        addArmorSet(
            user: ID!
            rank: String
            name: String
            pieces: [ArmorInput]
            bonus: BonusInput
        ): ArmorSet
        addCharm(
            user: ID!
            slug: String
            name: String
            ranks: [SkillInput]
            crafting: CraftingInput
        ): Charm
        addDecoration(
            user: ID!
            slug: String
            name: String
            rarity: Int
            skill: [SkillInput]
            slot: Int
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
            questRank: Int
            successConditions: String
            startTimestamp: Int
            endTimestamp: Int
            location: [LocationInput]
        ): Event
        addItem(
            user: ID!
            name: String
            description: String
            rarity: Int
            carryLimit: Int
            value: Int
        ): Item
        addLocation(
            user: ID!
            name: String
            description: String
            rarity: Int
            carryLimit: Int
            value: Int
        ): Location
        addMonster(
            user: ID!
            name: String
            type: String
            species: String
            description: String
            elements: [String]
            ailments: [AilmentInput]
            location: [LocationInput]
            resistances: [MonsterResistancesInput]
            weaknesses: [WeaknessesInput]
            reward: [RewardInput]
        ): Monster
        addSkill(
            user: ID!
            id: Int
            slug: String
            name: String
            description: String
            ranks: [SkillRanksInput]
        ): Skill
        addWeapon(
            user: ID!
            name: String
            type: String
            rarity: Int
            attack: AttackInput
            elderseal: Boolean
            attributes: AttributesInput
            damageType: String
            durability: [DurabilityInput]
            slots: [SlotsInput]
            elements: [ElementsInput]
            crafting: CraftingInput
        ): Weapon
        addUser(
            username: String!
            email: String!
            password: String!
        ): User
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