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
  query GET_AILMENT($_id: ID!) {
    ailment(_id: $_id) {
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
export const GET_ARMORS = gql`
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
          imageMale
          imageFemale
      }
      crafting {
        materials {
          quantity
          item {
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
  query GET_ARMOR($_id: ID!) {
    armor(_id: $_id) {
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
      armorSet {
        name
        rank
        pieces
      }
      assets {
          imageMale
          imageFemale
      }
      crafting {
        materials {
          quantity
          item {
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

export const GET_ARMORSETS = gql`
  query ALL_ARMORSETS {
    armorsets {
      _id
      name
      rank
      pieces {
        slug
        name
        type
        rank
        rarity
        armorSet
        attributes {
          defense
          resistFire
          resistWater
          resistThunder
          resistIce
        }
        skills {
          slug
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
          skill
          skillName
        }
        assets {
          imageMale
          imageFemale
        }
      }
      bonus {
        name
        ranks {
          pieces
          skill {
            slug
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
            skill
            skillName
          }
        }
      }
    }
  }
`

export const GET_CHARMS = gql`
  query ALL_CHARMS {
    charms {
      _id
      slug
      name
      ranks {
        level
        rarity
        skills {
          slug
          level
          description
          skill
          skillName
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
        crafting {
          craftable
          materials {
            quantity
            item {
              name
              description
              rarity
              carryLimit
              sellPrice
              buyPrice
            }
          }
        }
      }
    }
  }
`

export const GET_CHARM = gql`
  query GET_CHARM($_id: ID!) {
    charm(_id: $_id) {
      _id
      slug
      name
      ranks {
        level
        rarity
        skills {
          slug
          level
          description
          skill
          skillName
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
        crafting {
          craftable
          materials {
            quantity
            item {
              name
              description
              rarity
              carryLimit
              sellPrice
              buyPrice
            }
          }
        }
      }
    }
  }
`

export const GET_DECORATIONS = gql`
  query ALL_DECORATIONS {
    decorations {
      _id
      slug
      name
      rarity
      skills {
        slug
        description
        level
        skill
        skillName
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
      slot
    }
  }
`

export const GET_DECORATION = gql`
  query GET_DECORATION($_id: ID!) {
    decoration(_id: $_id) {
      _id
      slug
      name
      rarity
      skills {
        slug
        description
        level
        skill
        skillName
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
      slot
    }
  }
`

export const GET_EVENTS = gql`
  query ALL_EVENTS {
    events {
      _id
      name
      platform
      exclusive
      type
      expansion
      description
      requirements
      questRank
      successConditions
      location {
        name
        zoneCount
        camps {
          name
          zone
        }
      }
    }
  }
`

export const GET_EVENT = gql`
  query GET_EVENTS($_id: ID!) {
    event(_id: $_id) {
      _id
      name
      platform
      exclusive
      type
      expansion
      description
      requirements
      questRank
      successConditions
      location {
        name
        zoneCount
        camps {
          name
          zone
        }
      }
    }
  }
`

export const GET_ITEMS = gql`
  query ALL_ITEMS {
    items {
      name
      description
      rarity
      carryLimit
      value
    }
  }
`

export const GET_ITEM = gql`
  query GET_ITEM($_id: ID!) {
    ITEM(_id: $_id) {
      name
      description
      rarity
      carryLimit
      value
    }
  }
`

export const GET_LOCATIONS = gql`
  query ALL_LOCATIONS {
    locations {
      name
      zoneCount
      camps {
        name
        zone
      }
    }
  }
`

export const GET_LOCATION = gql`
  query GET_LOCATION($_id: ID!) {
    location(_id: $_id) {
      name
      zoneCount
      camps {
        name
        zone
      }
    }
  }
`

export const GET_MONSTERS = gql`
  query ALL_MONSTERS {
    monsters {
      name
      type
      species
      description
      elements
      ailments {
        name
        description
        recovery {
          actions
          items {
            name
            description
            rarity
            carryLimit
            value
          }
        }
        protection {
          items {
            name
            description
            rarity
            carryLimit
            value
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
        }
      }
      locations {
        name
        zoneCount
        camps {
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
        item {
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

export const GET_MONSTER = gql`
  query GET_MONSTER($_id: ID!) {
    monster(_id: $_id) {
      name
      type
      species
      description
      elements
      ailments {
        name
        description
        recovery {
          actions
          items {
            name
            description
            rarity
            carryLimit
            value
          }
        }
        protection {
          items {
            name
            description
            rarity
            carryLimit
            value
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
        }
      }
      locations {
        name
        zoneCount
        camps {
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
        item {
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

export const GET_SKILLS = gql`
  query ALL_SKILLS {
    skills {
      name
      type
      species
      description
      elements
      ailments {
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
      locations {
        name
        zoneCount
        camps {
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
        item {
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

export const GET_SKILL = gql`
  query GET_SKILL($_id: ID!) {
    SKILL(_id: $_id) {
      skill {
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
    }
  }
`

export const GET_WEAPONS = gql`
  query ALL_WEAPONS {
    weapons {
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
        previous
        branches
        craftingMaterials {
          quantity
          item {
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

export const GET_WEAPON = gql`
  query GET_WEAPON($_id: ID!) {
    weapon(_id: $_id) {
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
        previous
        branches
        craftingMaterials {
          quantity
          item {
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
  query ALL_USERS{
    users {
      _id
      username
      email
      ailment {
        _id
        name
        description
        recovery {
          actions
          items {
            name
            description
            rarity
            carryLimit
            value
          }
        }
        protection {
          items {
            name
            description
            rarity
            carryLimit
            value
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
        }
      }
      armor {
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
        armorSet {
          name
          rank
          pieces
        }
        assets {
            imageMale
            imageFemale
        }
        crafting {
          materials {
            quantity
            item {
              name
              description
              rarity
              carryLimit
              value
            }
          }
        }
      }
      armorSet {
        _id
        name
        rank
        pieces {
          slug
          name
          type
          rank
          rarity
          armorSet
          attributes {
            defense
            resistFire
            resistWater
            resistThunder
            resistIce
          }
          skills {
            slug
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
            skill
            skillName
          }
          assets {
            imageMale
            imageFemale
          }
        }
        bonus {
          name
          ranks {
            pieces
            skill {
              slug
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
              skill
              skillName
            }
          }
        }
      }
      charm {
        _id
        slug
        name
        ranks {
          level
          rarity
          skills {
            slug
            level
            description
            skill
            skillName
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
          crafting {
            craftable
            materials {
              quantity
              item {
                name
                description
                rarity
                carryLimit
                sellPrice
                buyPrice
              }
            }
          }
        }
      }
      decoration {
        _id
        slug
        name
        rarity
        skills {
          slug
          description
          level
          skill
          skillName
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
        slot
      }
      event {
        _id
        name
        platform
        exclusive
        type
        expansion
        description
        requirements
        questRank
        successConditions
        location {
          name
          zoneCount
          camps {
            name
            zone
          }
        }
      }
      item {
        name
        description
        rarity
        carryLimit
        value
      }
      location {
        name
        zoneCount
        camps {
          name
          zone
        }
      }
      monster {
        name
        type
        species
        description
        elements
        ailments {
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
        locations {
          name
          zoneCount
          camps {
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
          item {
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
        name
        type
        species
        description
        elements
        ailments {
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
        locations {
          name
          zoneCount
          camps {
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
        rewards {
          item {
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
      weapon {
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
          previous
          branches
          craftingMaterials {
            quantity
            item {
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
`

export const GET_USER = gql`
  query GET_USER($_id: ID!) {
    user(_id: $_id) {
      _id
      username
      email
      ailment {
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
        armorSet {
          name
          rank
          pieces
        }
        assets {
            imageMale
            imageFemale
        }
        crafting {
          materials {
            quantity
            item {
              name
              description
              rarity
              carryLimit
              value
            }
          }
        }
      }
      armorSet {
        _id
        name
        rank
        pieces {
          slug
          name
          type
          rank
          rarity
          armorSet
          attributes {
            defense
            resistFire
            resistWater
            resistThunder
            resistIce
          }
          skills {
            slug
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
            skill
            skillName
          }
          assets {
            imageMale
            imageFemale
          }
        }
        bonus {
          name
          ranks {
            pieces
            skill {
              slug
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
              skill
              skillName
            }
          }
        }
      }
      charm {
        _id
        slug
        name
        ranks {
          level
          rarity
          skills {
            slug
            level
            description
            skill
            skillName
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
          crafting {
            craftable
            materials {
              quantity
              item {
                name
                description
                rarity
                carryLimit
                sellPrice
                buyPrice
              }
            }
          }
        }
      }
      decoration {
        _id
        slug
        name
        rarity
        skills {
          slug
          description
          level
          skill
          skillName
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
        slot
      }
      event {
        _id
        name
        platform
        exclusive
        type
        expansion
        description
        requirements
        questRank
        successConditions
        location {
          name
          zoneCount
          camps {
            name
            zone
          }
        }
      }
      item {
        _id
        name
        description
        rarity
        carryLimit
        value
      }
      location {
        _id
        name
        zoneCount
        camps {
          name
          zone
        }
      }
      monster {
        _id
        name
        type
        species
        description
        elements
        ailments {
          name
          description
          recovery {
            actions
            items {
              name
              description
              rarity
              carryLimit
              value
            }
          }
          protection {
            items {
              name
              description
              rarity
              carryLimit
              value
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
          }
        }
        locations {
          name
          zoneCount
          camps {
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
        rewards {
          item {
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
          previous
          branches
          craftingMaterials {
            quantity
            item {
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
`