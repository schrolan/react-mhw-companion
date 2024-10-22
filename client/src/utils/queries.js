import { gql } from "@apollo/client";

export const GET_AILMENTS = gql`
    query ALL_AILMENTS {
        ailments {
            _id
            name
            description
            recovery {
                actions
                items {
                    _id
                    name
                    description
                    rarity
                    carryLimit
                    value
                }
            }
            protection {
                items {
                    _id
                    name
                    description
                    rarity
                    carryLimit
                    value
                }
                skills {
                    _id
                    name
                    slug
                    name
                    description
                    ranks {
                        slug
                        skill
                        level
                        description
                        modifiers {
                            affinity
                            attack
                            damageFire
                            damageWater
                            damageIce
                            damageThunder
                            damageDragon
                            defense
                            health
                            sharpnessBonus
                            resistAll
                            resistFire
                            resistWater
                            resistIce
                            resistThunder
                            resistDragon
                        }
                    }
                }
            }
        }
    }
`

export const GET_AILMENT = gql`
    query GET_AILMENT($id: ID!) {
        ailment(_id: $id) {
            _id
            name
            description
            recovery {
                actions
                items {
                    _id
                    name
                    description
                    rarity
                    carryLimit
                    value
                }
            }
            protection {
                items {
                    _id
                    name
                    description
                    rarity
                    carryLimit
                    value
                }
                skills {
                    _id
                    name
                    slug
                    name
                    description
                    ranks {
                        slug
                        skill
                        level
                        description
                        modifiers {
                            affinity
                            attack
                            damageFire
                            damageWater
                            damageIce
                            damageThunder
                            damageDragon
                            defense
                            health
                            sharpnessBonus
                            resistAll
                            resistFire
                            resistWater
                            resistIce
                            resistThunder
                            resistDragon
                        }
                    }
                }
            }
        }
    }
`

export const ALL_ARMORS = gql `
    query ALL_ARMORS {
        armors {
            _id
            slug
            name
            type
            rank
            rarity
            defense {
                base
                max
                augmented
            }
            resistances {
                fire
                water
                ice
                thunder
                dragon
            }
            slots {
                rank
            }
            skills {
                _id
                name
                slug
                name
                description
                ranks {
                    slug
                    skill
                    level
                    description
                    modifiers {
                        affinity
                        attack
                        damageFire
                        damageWater
                        damageIce
                        damageThunder
                        damageDragon
                        defense
                        health
                        sharpnessBonus
                        resistAll
                        resistFire
                        resistWater
                        resistIce
                        resistThunder
                        resistDragon
                    }
                }
            }
            armorSet {
                name
                rank
                pieces
            }
            assets {
                imageMale: String
                imageFemale: String
            }
            crafting {
                craftable
                materials {
                    quantity
                    item {
                        _id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                }
            }
        }
    }
`

export const GET_ARMOR = gql`
    query GET_ARMOR($id: ID!) {
        armor(_id: $id) {
            _id
            slug
            name
            type
            rank
            rarity
            defense {
                base
                max
                augmented
            }
            resistances {
                fire
                water
                ice
                thunder
                dragon
            }
            slots {
                rank
            }
            skills {
                _id
                name
                slug
                name
                description
                ranks {
                    slug
                    skill
                    level
                    description
                    modifiers {
                        affinity
                        attack
                        damageFire
                        damageWater
                        damageIce
                        damageThunder
                        damageDragon
                        defense
                        health
                        sharpnessBonus
                        resistAll
                        resistFire
                        resistWater
                        resistIce
                        resistThunder
                        resistDragon
                    }
                }
            }
            armorSet {
                name
                rank
                pieces
            }
            assets {
                imageMale: String
                imageFemale: String
            }
            crafting {
                craftable
                materials {
                    quantity
                    item {
                        _id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                }
            }
        }
    }
`

export const ALL_ARMORSETS = gql`
    query ALL_ARMORSETS {
        armorsets {
            _id
            rank
            name
            pieces {
                _id
                slug
                name
                type
                rank
                rarity
                defense {
                    base
                    max
                    augmented
                }
                resistances {
                    fire
                    water
                    ice
                    thunder
                    dragon
                }
                slots {
                    rank
                }
                skills {
                    _id
                    slug
                    name
                    description
                    ranks {
                        slug
                        skill
                        level
                        description
                        modifiers {
                            affinity
                            attack
                            damageFire
                            damageWater
                            damageIce
                            damageThunder
                            damageDragon
                            defense
                            health
                            sharpnessBonus
                            resistAll
                            resistFire
                            resistWater
                            resistIce
                            resistThunder
                            resistDragon
                        }
                    }
                }
                assets {
                    imageMale
                    imageFemale
                }
            }
            crafting {
                craftable
                materials {
                    quantity
                    item {
                        _id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                }
                previous
                branches
                craftingMaterials {
                    quantity
                    item {
                        _id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                }
                upgradeMaterials {
                    quantity
                    item {
                        _id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                }
                assets {
                    icon
                    image
                }
            }
            bonus {
                name
                ranks {
                    pieces
                    skills {
                        _id
                        slug
                        name
                        description
                        ranks {
                            slug
                            skill
                            level
                            description
                            modifiers {
                                affinity
                                attack
                                damageFire
                                damageWater
                                damageIce
                                damageThunder
                                damageDragon
                                defense
                                health
                                sharpnessBonus
                                resistAll
                                resistFire
                                resistWater
                                resistIce
                                resistThunder
                                resistDragon
                            }
                        }
                    }
                    skill
                    skillName
                }
            }
        }
    }
`;


export const GET_ARMORSET = gql`
    query GET_ARMORSET($id: ID!) {
        armorset(_id: $id) {
             _id
            rank
            name
            pieces {
                _id
                slug
                name
                type
                rank
                rarity
                defense {
                    base
                    max
                    augmented
                }
                resistances {
                    fire
                    water
                    ice
                    thunder
                    dragon
                }
                slots {
                    rank
                }
                skills {
                    _id
                    slug
                    name
                    description
                    ranks {
                        slug
                        skill
                        level
                        description
                        modifiers {
                            affinity
                            attack
                            damageFire
                            damageWater
                            damageIce
                            damageThunder
                            damageDragon
                            defense
                            health
                            sharpnessBonus
                            resistAll
                            resistFire
                            resistWater
                            resistIce
                            resistThunder
                            resistDragon
                        }
                    }
                }
                assets {
                    imageMale
                    imageFemale
                }
            }
            crafting {
                craftable
                materials {
                    quantity
                    item {
                        _id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                }
                previous
                branches
                craftingMaterials {
                    quantity
                    item {
                        _id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                }
                upgradeMaterials {
                    quantity
                    item {
                        _id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                }
                assets {
                    icon
                    image
                }
            }
            bonus {
                name
                ranks {
                    pieces
                    skills {
                        _id
                        slug
                        name
                        description
                        ranks {
                            slug
                            skill
                            level
                            description
                            modifiers {
                                affinity
                                attack
                                damageFire
                                damageWater
                                damageIce
                                damageThunder
                                damageDragon
                                defense
                                health
                                sharpnessBonus
                                resistAll
                                resistFire
                                resistWater
                                resistIce
                                resistThunder
                                resistDragon
                            }
                        }
                    }
                    skill
                    skillName
                }
            }
        }
    }
`

export const ALL_CHARMS = gql`
    query ALL_CHARMS {
        charms {
            _id
            slug
            name
            ranks {
                _id
                id
                slug
                name
                description
                ranks {
                    slug
                    skill
                    level
                    description
                    modifiers {
                        affinity
                        attack
                        damageFire
                        damageWater
                        damageIce
                        damageThunder
                        damageDragon
                        defense
                        health
                        sharpnessBonus
                        resistAll
                        resistFire
                        resistWater
                        resistIce
                        resistThunder
                        resistDragon
                    }
                }
            }
            crafting {
                craftable
                materials {
                    quantity
                    item {
                        _id
                        id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                }
                previous
                branches
                craftingMaterials {
                    quantity
                    item {
                        _id
                        id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                }
                upgradeMaterials {
                    quantity
                    item {
                        _id
                        id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                }
                assets {
                    icon
                    image
                }
            }
        }
    }
`;


export const GET_CHARM = gql`
    query GET_CHARM($id: ID!) {
        charm(_id: $id) {
            _id
            slug
            name
            ranks {
                _id
                id
                slug
                name
                description
                ranks {
                    slug
                    skill
                    level
                    description
                    modifiers {
                        affinity
                        attack
                        damageFire
                        damageWater
                        damageIce
                        damageThunder
                        damageDragon
                        defense
                        health
                        sharpnessBonus
                        resistAll
                        resistFire
                        resistWater
                        resistIce
                        resistThunder
                        resistDragon
                    }
                }
            }
            crafting {
                craftable
                materials {
                    quantity
                    item {
                        _id
                        id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                }
                previous
                branches
                craftingMaterials {
                    quantity
                    item {
                        _id
                        id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                }
                upgradeMaterials {
                    quantity
                    item {
                        _id
                        id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                }
                assets {
                    icon
                    image
                }
            }
        }
    }
`

export const ALL_DECORATIONS = gql`
    query ALL_DECORATIONS {
        decorations {
            _id
            id
            slug
            name
            rarity
            skill {
                _id
                id
                slug
                name
                description
                ranks {
                    slug
                    skill
                    level
                    description
                    modifiers {
                        affinity
                        attack
                        damageFire
                        damageWater
                        damageIce
                        damageThunder
                        damageDragon
                        defense
                        health
                        sharpnessBonus
                        resistAll
                        resistFire
                        resistWater
                        resistIce
                        resistThunder
                        resistDragon
                    }
                }
            }
            slot
        }
    }
`;


export const GET_DECORATION = gql`
    query GET_DECORATION($id: ID!) {
        decoration(_id: $id) {
            _id
            id
            slug
            name
            rarity
            skill {
                _id
                id
                slug
                name
                description
                ranks {
                    slug
                    skill
                    level
                    description
                    modifiers {
                        affinity
                        attack
                        damageFire
                        damageWater
                        damageIce
                        damageThunder
                        damageDragon
                        defense
                        health
                        sharpnessBonus
                        resistAll
                        resistFire
                        resistWater
                        resistIce
                        resistThunder
                        resistDragon
                    }
                }
            }
            slot
        }
    }
`

export const ALL_EVENTS = gql`
    query ALL_EVENTS {
        events {
            _id
            id
            name
            platform
            exclusive
            type
            expansion
            description
            requirements
            questRank
            successConditions
            startTimestamp
            endTimestamp
            location {
                _id
                id
                name
                zoneCount
                camps {
                    id
                    name
                    zone
                }
            }
        }
    }
`;

export const GET_EVENT = gql`
    query GET_EVENT($id: ID!) {
        event(_id: $id) {
            _id
            id
            name
            platform
            exclusive
            type
            expansion
            description
            requirements
            questRank
            successConditions
            startTimestamp
            endTimestamp
            location {
                _id
                id
                name
                zoneCount
                camps {
                    id
                    name
                    zone
                }
            }
        }
    }
`

export const ALL_ITEMS = gql `
    query ALL_ITEMS {
        items {
            _id
            id
            name
            description
            rarity
            carryLimit
            value
        }
    }
`

export const GET_ITEM = gql`
    query GET_ITEM($id: ID!) {
        item(_id: $id) {
           _id
            id
            name
            description
            rarity
            carryLimit
            value
        }
    }
`

export const ALL_LOCATIONS = gql `
    query ALL_LOCATIONS {
        locations {
            _id
            id
            name
            zoneCount
            camps {
                id
                name
                zone
            }
        }
    }
`

export const GET_LOCATION = gql`
    query GET_LOCATION($id: ID!) {
        location(_id: $id) {
            _id
            id
            name
            zoneCount
            camps {
                id
                name
                zone
            }
        }
    }
`

export const ALL_MONSTERS = gql`
    query ALL_MONSTERS {
        monsters {
            _id
            id
            name
            type
            species
            description
            elements
            ailments {
                _id
                id
                name
                description
                recovery {
                    actions
                    items {
                        _id
                        id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                }
                protection {
                    items {
                        _id
                        id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                    skills {
                        _id
                        id
                        slug
                        name
                        description
                        ranks {
                            slug
                            skill
                            level
                            description
                            modifiers {
                                affinity
                                attack
                                damageFire
                                damageWater
                                damageIce
                                damageThunder
                                damageDragon
                                defense
                                health
                                sharpnessBonus
                                resistAll
                                resistFire
                                resistWater
                                resistIce
                                resistThunder
                                resistDragon
                            }
                        }
                    }
                }
            }
            location {
                _id
                id
                name
                zoneCount
                camps {
                    id
                    name
                    zone
                }
            }
            resistances {
                element
                condition
            }
            weaknesses {
                element
                stars
                condition
            }
            reward {
                id
                item {
                    _id
                    id
                    name
                    description
                    rarity
                    carryLimit
                    value
                }
                conditions {
                    type
                    subtype
                    rank
                    quantity
                    chance
                }
            }
        }
    }
`;


export const GET_MONSTER = gql`
    query GET_MONSTER($id: ID!) {
        monster(_id: $id) {
            _id
            id
            name
            type
            species
            description
            elements
            ailments {
                _id
                id
                name
                description
                recovery {
                    actions
                    items {
                        _id
                        id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                }
                protection {
                    items {
                        _id
                        id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                    skills {
                        _id
                        id
                        slug
                        name
                        description
                        ranks {
                            slug
                            skill
                            level
                            description
                            modifiers {
                                affinity
                                attack
                                damageFire
                                damageWater
                                damageIce
                                damageThunder
                                damageDragon
                                defense
                                health
                                sharpnessBonus
                                resistAll
                                resistFire
                                resistWater
                                resistIce
                                resistThunder
                                resistDragon
                            }
                        }
                    }
                }
            }
            location {
                _id
                id
                name
                zoneCount
                camps {
                    id
                    name
                    zone
                }
            }
            resistances {
                element
                condition
            }
            weaknesses {
                element
                stars
                condition
            }
            reward {
                id
                item {
                    _id
                    id
                    name
                    description
                    rarity
                    carryLimit
                    value
                }
                conditions {
                    type
                    subtype
                    rank
                    quantity
                    chance
                }
            }
        }
    }
`

export const ALL_SKILLS = gql`
    query ALL_SKILLS {
        skills {
            _id
            id
            slug
            name
            description
            ranks {
                slug
                skill
                level
                description
                modifiers {
                    affinity
                    attack
                    damageFire
                    damageWater
                    damageIce
                    damageThunder
                    damageDragon
                    defense
                    health
                    sharpnessBonus
                    resistAll
                    resistFire
                    resistWater
                    resistIce
                    resistThunder
                    resistDragon
                }
            }
        }
    }
`;


export const GET_SKILL = gql`
    query GET_SKILL($id: ID!) {
        skill(_id: $id) {
           _id 
           id
            slug
            name
            description
            ranks {
                slug
                skill
                level
                description
                modifiers {
                    affinity
                    attack
                    damageFire
                    damageWater
                    damageIce
                    damageThunder
                    damageDragon
                    defense
                    health
                    sharpnessBonus
                    resistAll
                    resistFire
                    resistWater
                    resistIce
                    resistThunder
                    resistDragon
                }
            }
        }
    }
`

export const ALL_WEAPONS = gql`
    query ALL_WEAPONS {
        weapons {
            _id
            id
            name
            type
            rarity
            attack {
                display
                raw
            }
            elderseal
            attributes {
                damageType
            }
            damageType
            durability {
                red
                orange
                yellow
                green
                blue
                white
                purple
            }
            slots {
                rank
            }
            elements {
                type
                damage
                hidden
            }
            crafting {
                craftable
                materials {
                    quantity
                    item {
                        _id
                        id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                }
                previous
                branches
                craftingMaterials {
                    quantity
                    item {
                        _id
                        id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                }
                upgradeMaterials {
                    quantity
                    item {
                        _id
                        id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                }
                assets {
                    icon
                    image
                }
            }
        }
    }
`;


export const GET_WEAPON = gql`
    query GET_WEAPON($id: ID!) {
        weapon(_id: $id) {
            _id
            id
            name
            type
            rarity
            attack {
                display
                raw
            }
            elderseal
            attributes {
                damageType
            }
            damageType
            durability {
                red
                orange
                yellow
                green
                blue
                white
                purple
            }
            slots {
                rank
            }
            elements {
                type
                damage
                hidden
            }
            crafting {
                craftable
                materials {
                    quantity
                    item {
                        _id
                        id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                }
                previous
                branches
                craftingMaterials {
                    quantity
                    item {
                        _id
                        id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                }
                upgradeMaterials {
                    quantity
                    item {
                        _id
                        id
                        name
                        description
                        rarity
                        carryLimit
                        value
                    }
                }
                assets {
                    icon
                    image
                }
            }
        }
    }
`





export const GET_USERS = gql`
  query ALL_USERS {
    users {
      _id
      username
      email
      ailment {
        _id
        id
        name
        description
        recovery {
          actions
          items {
            _id
            id
            name
            description
            rarity
            carryLimit
            value
          }
        }
        protection {
          items {
            _id
            id
            name
            description
            rarity
            carryLimit
            value
          }
          skills {
            _id
            id
            slug
            name
            description
            ranks {
              slug
              skill
              level
              description
              modifiers {
                affinity
                attack
                damageFire
                damageWater
                damageIce
                damageThunder
                damageDragon
                defense
                health
                sharpnessBonus
                resistAll
                resistFire
                resistWater
                resistIce
                resistThunder
                resistDragon
              }
            }
          }
        }
      }
      armor {
        _id
        id
        slug
        name
        type
        rank
        rarity
        defense {
          base
          max
          augmented
        }
        resistances {
          fire
          water
          ice
          thunder
          dragon
        }
        slots {
          rank
        }
        skills {
          _id
          id
          slug
          name
          description
          ranks {
            slug
            skill
            level
            description
            modifiers {
              affinity
              attack
              damageFire
              damageWater
              damageIce
              damageThunder
              damageDragon
              defense
              health
              sharpnessBonus
              resistAll
              resistFire
              resistWater
              resistIce
              resistThunder
              resistDragon
            }
          }
        }
      }
      armorSet {
        _id
        id
        name
        rank
        pieces {
          _id
          id
          slug
          name
          type
          rank
          rarity
          defense {
            base
            max
            augmented
          }
          resistances {
            fire
            water
            ice
            thunder
            dragon
          }
          slots {
            rank
          }
          skills {
            _id
            id
            slug
            name
            description
            ranks {
              slug
              skill
              level
              description
              modifiers {
                affinity
                attack
                damageFire
                damageWater
                damageIce
                damageThunder
                damageDragon
                defense
                health
                sharpnessBonus
                resistAll
                resistFire
                resistWater
                resistIce
                resistThunder
                resistDragon
              }
            }
          }
          assets {
            imageMale
            imageFemale
          }
          crafting {
            craftable
            materials {
              quantity
              item {
                _id
                id
                name
                description
                rarity
                carryLimit
                value
              }
            }
            previous
            branches
            craftingMaterials {
              quantity
              item {
                _id
                id
                name
                description
                rarity
                carryLimit
                value
              }
            }
            upgradeMaterials {
              quantity
              item {
                _id
                id
                name
                description
                rarity
                carryLimit
                value
              }
            }
            assets {
              icon
              image
            }
          }
        }
        bonus {
          name
          ranks {
            pieces
            skills {
              _id
              id
              slug
              name
              description
              ranks {
                slug
                skill
                level
                description
                modifiers {
                  affinity
                  attack
                  damageFire
                  damageWater
                  damageIce
                  damageThunder
                  damageDragon
                  defense
                  health
                  sharpnessBonus
                  resistAll
                  resistFire
                  resistWater
                  resistIce
                  resistThunder
                  resistDragon
                }
              }
            }
            skill
            skillName
          }
        }
      }
      charm {
        _id
        id
        slug
        name
        ranks {
          _id
          id
          slug
          name
          description
          ranks {
            slug
            skill
            level
            description
            modifiers {
              affinity
              attack
              damageFire
              damageWater
              damageIce
              damageThunder
              damageDragon
              defense
              health
              sharpnessBonus
              resistAll
              resistFire
              resistWater
              resistIce
              resistThunder
              resistDragon
            }
          }
        }
        crafting {
          craftable
          materials {
            quantity
            item {
              _id
              id
              name
              description
              rarity
              carryLimit
              value
            }
          }
          previous
          branches
          craftingMaterials {
            quantity
            item {
              _id
              id
              name
              description
              rarity
              carryLimit
              value
            }
          }
          upgradeMaterials {
            quantity
            item {
              _id
              id
              name
              description
              rarity
              carryLimit
              value
            }
          }
          assets {
            icon
            image
          }
        }
      }
      decoration {
        _id
        id
        slug
        name
        rarity
        skill {
          _id
          id
          slug
          name
          description
          ranks {
            slug
            skill
            level
            description
            modifiers {
              affinity
              attack
              damageFire
              damageWater
              damageIce
              damageThunder
              damageDragon
              defense
              health
              sharpnessBonus
              resistAll
              resistFire
              resistWater
              resistIce
              resistThunder
              resistDragon
            }
          }
        }
        slot
      }
      event {
        _id
        id
        name
        platform
        exclusive
        type
        expansion
        description
        requirements
        questRank
        successConditions
        startTimestamp
        endTimestamp
        location {
          _id
          id
          name
          zoneCount
          camps {
            id
            name
            zone
          }
        }
      }
      item {
        _id
        id
        name
        description
        rarity
        carryLimit
        value
      }
      location {
        _id
        id
        name
        zoneCount
        camps {
          id
          name
          zone
        }
      }
      monster {
        _id
        id
        name
        type
        species
        description
        elements
        ailments {
          _id
          id
          name
          description
          recovery {
            actions
            items {
              _id
              id
              name
              description
              rarity
              carryLimit
              value
            }
          }
          protection {
            items {
              _id
              id
              name
              description
              rarity
              carryLimit
              value
            }
            skills {
              _id
              id
              slug
              name
              description
              ranks {
                slug
                skill
                level
                description
                modifiers {
                  affinity
                  attack
                  damageFire
                  damageWater
                  damageIce
                  damageThunder
                  damageDragon
                  defense
                  health
                  sharpnessBonus
                  resistAll
                  resistFire
                  resistWater
                  resistIce
                  resistThunder
                  resistDragon
                }
              }
            }
          }
        }
        location {
          _id
          id
          name
          zoneCount
          camps {
            id
            name
            zone
          }
        }
        resistances {
          element
          condition
        }
        weaknesses {
          element
          stars
          condition
        }
        reward {
          id
          item {
            _id
            id
            name
            description
            rarity
            carryLimit
            value
          }
          conditions {
            type
            subtype
            rank
            quantity
            chance
          }
        }
      }
      skill {
        _id
        id
        slug
        name
        description
        ranks {
          slug
          skill
          level
          description
          modifiers {
            affinity
            attack
            damageFire
            damageWater
            damageIce
            damageThunder
            damageDragon
            defense
            health
            sharpnessBonus
            resistAll
            resistFire
            resistWater
            resistIce
            resistThunder
            resistDragon
          }
        }
      }
      weapon {
        _id
        id
        name
        type
        rarity
        attack {
          display
          raw
        }
        elderseal
        attributes {
          damageType
        }
        damageType
        durability {
          red
          orange
          yellow
          green
          blue
          white
          purple
        }
        slots {
          rank
        }
        elements {
          type
          damage
          hidden
        }
        crafting {
          craftable
          materials {
            quantity
            item {
              _id
              id
              name
              description
              rarity
              carryLimit
              value
            }
          }
          previous
          branches
          craftingMaterials {
            quantity
            item {
              _id
              id
              name
              description
              rarity
              carryLimit
              value
            }
          }
          upgradeMaterials {
            quantity
            item {
              _id
              id
              name
              description
              rarity
              carryLimit
              value
            }
          }
          assets {
            icon
            image
          }
        }
      }
    }
  }
`;

export const GET_USER = gql`
  query GET_USER($_id: ID!) {
    user(_id: $_id) {
      _id
      username
      email
      ailment {
        _id
        id
        name
        description
        recovery {
          actions
          items {
            _id
            id
            name
            description
            rarity
            carryLimit
            value
          }
        }
        protection {
          items {
            _id
            id
            name
            description
            rarity
            carryLimit
            value
          }
          skills {
            _id
            id
            slug
            name
            description
            ranks {
              slug
              skill
              level
              description
              modifiers {
                affinity
                attack
                damageFire
                damageWater
                damageIce
                damageThunder
                damageDragon
                defense
                health
                sharpnessBonus
                resistAll
                resistFire
                resistWater
                resistIce
                resistThunder
                resistDragon
              }
            }
          }
        }
      }
      armor {
        _id
        id
        slug
        name
        type
        rank
        rarity
        defense {
          base
          max
          augmented
        }
        resistances {
          fire
          water
          ice
          thunder
          dragon
        }
        slots {
          rank
        }
        skills {
          _id
          id
          slug
          name
          description
          ranks {
            slug
            skill
            level
            description
            modifiers {
              affinity
              attack
              damageFire
              damageWater
              damageIce
              damageThunder
              damageDragon
              defense
              health
              sharpnessBonus
              resistAll
              resistFire
              resistWater
              resistIce
              resistThunder
              resistDragon
            }
          }
        }
      }
      armorSet {
        _id
        id
        name
        rank
        pieces {
          _id
          id
          slug
          name
          type
          rank
          rarity
          defense {
            base
            max
            augmented
          }
          resistances {
            fire
            water
            ice
            thunder
            dragon
          }
          slots {
            rank
          }
          skills {
            _id
            id
            slug
            name
            description
            ranks {
              slug
              skill
              level
              description
              modifiers {
                affinity
                attack
                damageFire
                damageWater
                damageIce
                damageThunder
                damageDragon
                defense
                health
                sharpnessBonus
                resistAll
                resistFire
                resistWater
                resistIce
                resistThunder
                resistDragon
              }
            }
          }
          assets {
            imageMale
            imageFemale
          }
          crafting {
            craftable
            materials {
              quantity
              item {
                _id
                id
                name
                description
                rarity
                carryLimit
                value
              }
            }
            previous
            branches
            craftingMaterials {
              quantity
              item {
                _id
                id
                name
                description
                rarity
                carryLimit
                value
              }
            }
            upgradeMaterials {
              quantity
              item {
                _id
                id
                name
                description
                rarity
                carryLimit
                value
              }
            }
            assets {
              icon
              image
            }
          }
        }
        bonus {
          name
          ranks {
            pieces
            skills {
              _id
              id
              slug
              name
              description
              ranks {
                slug
                skill
                level
                description
                modifiers {
                  affinity
                  attack
                  damageFire
                  damageWater
                  damageIce
                  damageThunder
                  damageDragon
                  defense
                  health
                  sharpnessBonus
                  resistAll
                  resistFire
                  resistWater
                  resistIce
                  resistThunder
                  resistDragon
                }
              }
            }
            skill
            skillName
          }
        }
      }
      charm {
        _id
        id
        slug
        name
        ranks {
          _id
          id
          slug
          name
          description
          ranks {
            slug
            skill
            level
            description
            modifiers {
              affinity
              attack
              damageFire
              damageWater
              damageIce
              damageThunder
              damageDragon
              defense
              health
              sharpnessBonus
              resistAll
              resistFire
              resistWater
              resistIce
              resistThunder
              resistDragon
            }
          }
        }
        crafting {
          craftable
          materials {
            quantity
            item {
              _id
              id
              name
              description
              rarity
              carryLimit
              value
            }
          }
          previous
          branches
          craftingMaterials {
            quantity
            item {
              _id
              id
              name
              description
              rarity
              carryLimit
              value
            }
          }
          upgradeMaterials {
            quantity
            item {
              _id
              id
              name
              description
              rarity
              carryLimit
              value
            }
          }
          assets {
            icon
            image
          }
        }
      }
      decoration {
        _id
        id
        slug
        name
        rarity
        skill {
          _id
          id
          slug
          name
          description
          ranks {
            slug
            skill
            level
            description
            modifiers {
              affinity
              attack
              damageFire
              damageWater
              damageIce
              damageThunder
              damageDragon
              defense
              health
              sharpnessBonus
              resistAll
              resistFire
              resistWater
              resistIce
              resistThunder
              resistDragon
            }
          }
        }
        slot
      }
      event {
        _id
        id
        name
        platform
        exclusive
        type
        expansion
        description
        requirements
        questRank
        successConditions
        startTimestamp
        endTimestamp
        location {
          _id
          id
          name
          zoneCount
          camps {
            id
            name
            zone
          }
        }
      }
      item {
        _id
        id
        name
        description
        rarity
        carryLimit
        value
      }
      location {
        _id
        id
        name
        zoneCount
        camps {
          id
          name
          zone
        }
      }
      monster {
        _id
        id
        name
        type
        species
        description
        elements
        ailments {
          _id
          id
          name
          description
          recovery {
            actions
            items {
              _id
              id
              name
              description
              rarity
              carryLimit
              value
            }
          }
          protection {
            items {
              _id
              id
              name
              description
              rarity
              carryLimit
              value
            }
            skills {
              _id
              id
              slug
              name
              description
              ranks {
                slug
                skill
                level
                description
                modifiers {
                  affinity
                  attack
                  damageFire
                  damageWater
                  damageIce
                  damageThunder
                  damageDragon
                  defense
                  health
                  sharpnessBonus
                  resistAll
                  resistFire
                  resistWater
                  resistIce
                  resistThunder
                  resistDragon
                }
              }
            }
          }
        }
        location {
          _id
          id
          name
          zoneCount
          camps {
            id
            name
            zone
          }
        }
        resistances {
          element
          condition
        }
        weaknesses {
          element
          stars
          condition
        }
        reward {
          id
          item {
            _id
            id
            name
            description
            rarity
            carryLimit
            value
          }
          conditions {
            type
            subtype
            rank
            quantity
            chance
          }
        }
      }
      skill {
        _id
        id
        slug
        name
        description
        ranks {
          slug
          skill
          level
          description
          modifiers {
            affinity
            attack
            damageFire
            damageWater
            damageIce
            damageThunder
            damageDragon
            defense
            health
            sharpnessBonus
            resistAll
            resistFire
            resistWater
            resistIce
            resistThunder
            resistDragon
          }
        }
      }
      weapon {
        _id
        id
        name
        type
        rarity
        attack {
          display
          raw
        }
        elderseal
        attributes {
          damageType
        }
        damageType
        durability {
          red
          orange
          yellow
          green
          blue
          white
          purple
        }
        slots {
          rank
        }
        elements {
          type
          damage
          hidden
        }
        crafting {
          craftable
          materials {
            quantity
            item {
              _id
              id
              name
              description
              rarity
              carryLimit
              value
            }
          }
          previous
          branches
          craftingMaterials {
            quantity
            item {
              _id
              id
              name
              description
              rarity
              carryLimit
              value
            }
          }
          upgradeMaterials {
            quantity
            item {
              _id
              id
              name
              description
              rarity
              carryLimit
              value
            }
          }
          assets {
            icon
            image
          }
        }
      }
    }
  }
`;