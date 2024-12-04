import { gql } from "@apollo/client";

// User Mutations
export const ADD_USER = gql`
  mutation ADD_USER($username: String!, $email: String!, $password: String!) 
    {
      addUser(username: $username, email: $email, password: $password) {
        _id
        email
        username
      }
    }
`;

export const LOGIN = gql`
  mutation LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

// Ailment Mutations]
//This came from the apollo playground
export const ADD_AILMENT = gql`
  mutation AddAilment($userId: ID!, $id: ID, $name: String, $description: String, $recovery: RecoveryInput, $protection: ProtectionInput) {
  addAilment(userId: $userId, _id: $id, name: $name, description: $description, recovery: $recovery, protection: $protection) {
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

export const DELETE_AILMENT = gql`
  mutation DELETE_AILMENT($userId: ID!, $ailmentId: ID!) {
    deleteAilment(userId: $userId, ailmentId: $ailmentId) {
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
  }
`;

// Armor Mutations
export const ADD_ARMOR = gql`
  mutation AddArmor($userId: ID!, $id: ID, $slug: String, $name: String, $type: String, $rank: String, $rarity: Int, $defense: [DefenseInput], $resistances: ResistancesInput, $slots: SlotsInput, $skills: [SkillInput], $armorSet: ArmorSetArmorInput, $assets: AssetsInput, $crafting: ArmorCraftingInput) {
    addArmor(userId: $userId, _id: $id, slug: $slug, name: $name, type: $type, rank: $rank, rarity: $rarity, defense: $defense, resistances: $resistances, slots: $slots, skills: $skills, armorSet: $armorSet, assets: $assets, crafting: $crafting) {
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
`;

export const DELETE_ARMOR = gql`
  mutation DELETE_ARMOR($userId: ID!, $armorId: ID!) {
    deleteArmor(userId: $userId, armorId: $armorId) {
      _id
      username
      email
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
  }
`;

// ArmorSet Mutations
export const ADD_ARMORSET = gql`
  mutation AddArmorSet($userId: ID!, $id: ID, $rank: String, $name: String, $pieces: [ArmorSetPiecesInput], $bonus: ArmorSetBonusInput) {
  addArmorSet(userId: $userId, _id: $id, rank: $rank, name: $name, pieces: $pieces, bonus: $bonus) {
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
`;

export const DELETE_ARMORSET = gql`
  mutation DELETE_ARMORSET($userId: ID!, $armorSetId: ID!) {
    deleteArmorSet(userId: $userId, armorSetId: $armorSetId) {
      _id
      username
      email
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
    }
  }
`;

// Charm Mutations
export const ADD_CHARM = gql`
  mutation AddCharm($userId: ID!, $id: ID, $slug: String, $name: String, $ranks: [CharmRanksInput], $crafting: CraftingInput) {
  addCharm(userId: $userId, _id: $id, slug: $slug, name: $name, ranks: $ranks, crafting: $crafting) {
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
`;

export const DELETE_CHARM = gql`
  mutation DELETE_CHARM($userId: ID!, $charmId: ID!) {
    deleteCharm(userId: $userId, charmId: $charmId) {
      _id
      username
      email
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
    }
  }
`;

// Decoration Mutations
export const ADD_DECORATION = gql`
  mutation AddDecoration($userId: ID!, $id: ID, $slug: String, $name: String, $rarity: Int, $skill: [DecorationSkillsInput], $slot: Int) {
  addDecoration(userId: $userId, _id: $id, slug: $slug, name: $name, rarity: $rarity, skill: $skill, slot: $slot) {
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
`;

export const DELETE_DECORATION = gql`
  mutation DELETE_DECORATION($userId: ID!, $decorationId: ID!) {
    deleteDecoration(userId: $userId, decorationId: $decorationId) {
      _id
      username
      email
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
    }
  }
`;

// Event Mutations
export const ADD_EVENT = gql`
  mutation AddEvent($userId: ID!, $id: ID, $name: String, $platform: String, $exclusive: Boolean, $type: String, $expansion: String, $description: String, $requirements: String, $questRank: Int, $successConditions: String, $location: [EventLocationInput]) {
  addEvent(userId: $userId, _id: $id, name: $name, platform: $platform, exclusive: $exclusive, type: $type, expansion: $expansion, description: $description, requirements: $requirements, questRank: $questRank, successConditions: $successConditions, location: $location) {
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
`;

export const DELETE_EVENT = gql`
  mutation DELETE_EVENT($userId: ID!, $eventId: ID!) {
    deleteEvent(userId: $userId, eventId: $eventId) {
      _id
      username
      email
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
    }
  }
`;

// Item Mutations
export const ADD_ITEM = gql`
  mutation AddItem($userId: ID!, $id: ID, $name: String, $description: String, $rarity: Int, $carryLimit: Int, $value: Int) {
  addItem(userId: $userId, _id: $id, name: $name, description: $description, rarity: $rarity, carryLimit: $carryLimit, value: $value) {
    _id
    name
    description
    rarity
    carryLimit
    value
  }
}
`;

export const DELETE_ITEM = gql`
  mutation DELETE_ITEM($userId: ID!, $itemId: ID!) {
    deleteItem(userId: $userId, itemId: $itemId) {
      _id
      username
      email
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
`;

// Location Mutations
export const ADD_LOCATION = gql`
  mutation AddLocation($userId: ID!, $id: ID, $name: String, $zoneCount: Int, $camps: [CampsInput]) {
  addLocation(userId: $userId, _id: $id, name: $name, zoneCount: $zoneCount, camps: $camps) {
    _id
    name
    zoneCount
    camps {
      name
      zone
    }
  }
}
`;

export const DELETE_LOCATION = gql`
  mutation DELETE_LOCATION($userId: ID!, $locationId: ID!) {
    deleteLocation(userId: $userId, locationId: $locationId) {
      _id
      username
      email
      location {
        _id
        name
        zoneCount
        camps {
          name
          zone
        }
      }
    }
  }
`;

// Monster Mutations
export const ADD_MONSTER = gql`
  mutation AddMonster($userId: ID!, $type: String, $species: String, $description: String, $elements: [String], $ailments: [MonsterAilmentsInput], $id: ID, $name: String, $locations: [LocationInput], $resistances: [MonsterResistancesInput], $weaknesses: [WeaknessesInput], $rewards: [RewardsInput]) {
  addMonster(userId: $userId, type: $type, species: $species, description: $description, elements: $elements, ailments: $ailments, _id: $id, name: $name, locations: $locations, resistances: $resistances, weaknesses: $weaknesses, rewards: $rewards) {
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
      _id
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
        _id
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

export const DELETE_MONSTER = gql`
  mutation DELETE_MONSTER($userId: ID!, $monsterId: ID!) {
    deleteMonster(userId: $userId, monsterId: $monsterId) {
      _id
      username
      email
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
  }
`;

// Skill Mutations
export const ADD_SKILL = gql`
mutation AddSkill($userId: ID!, $id: ID, $slug: String, $name: String, $description: String, $ranks: [SkillRanksInput]) {
  addSkill(userId: $userId, _id: $id, slug: $slug, name: $name, description: $description, ranks: $ranks) {
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
`;

export const DELETE_SKILL = gql`
  mutation DELETE_SKILL($userId: ID!, $skillId: ID!) {
    deleteSkill(userId: $userId, skillId: $skillId) {
      _id
      username
      email
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
`;

// Weapon Mutations
export const ADD_WEAPON = gql`
  mutation AddWeapon($userId: ID!, $id: ID, $name: String, $type: String, $rarity: Int, $attack: AttackInput, $elderseal: Boolean, $attributes: AttributesInput, $damageType: String, $durability: [DurabilityInput], $slots: [SlotsInput], $elements: [ElementsInput], $crafting: WeaponCraftingInput) {
  addWeapon(userId: $userId, _id: $id, name: $name, type: $type, rarity: $rarity, attack: $attack, elderseal: $elderseal, attributes: $attributes, damageType: $damageType, durability: $durability, slots: $slots, elements: $elements, crafting: $crafting) {
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
`;

export const DELETE_WEAPON = gql`
  mutation DELETE_WEAPON($userId: ID!, $weaponId: ID!) {
    deleteWeapon(userId: $userId, weaponId: $weaponId) {
      _id
      username
      email
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
`;