import { gql } from "@apollo/client";

const MODIFIERS_FRAGMENT = gql`
  fragment ModifiersFragment on ModifierType {
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
`;

const RANKS_FRAGMENT = gql`
  fragment RanksFragment on RankType {
    slug
    skill
    level
    description
    modifiers {
      ...ModifiersFragment
    }
  }
  ${MODIFIERS_FRAGMENT}
`;

const SKILL_FRAGMENT = gql`
  fragment SkillFragment on SkillType {
    _id
    id
    slug
    name
    description
    ranks {
      ...RanksFragment
    }
  }
  ${RANKS_FRAGMENT}
`;

const ITEM_FRAGMENT = gql`
  fragment ItemFragment on ItemType {
    _id
    name
    description
    rarity
    carryLimit
    value
  }
`;

const RECOVERY_FRAGMENT = gql`
  fragment RecoveryFragment on RecoveryType {
    actions
    items {
      ...ItemFragment
    }
  }
  ${ITEM_FRAGMENT}
`;

const PROTECTION_FRAGMENT = gql`
  fragment ProtectionFragment on ProtectionType {
    items {
      ...ItemFragment
    }
    skills {
      ...SkillFragment
    }
  }
  ${ITEM_FRAGMENT}
  ${SKILL_FRAGMENT}
`;

const DEFENSE_FRAGMENT = gql`
  fragment DefenseFragment on DefenseType {
    base
    max
    augmented
  }
`;

const RESISTANCES_FRAGMENT = gql`
  fragment ResistancesFragment on ResistancesType {
    fire
    water
    ice
    thunder
    dragon
  }
`;

const SLOTS_FRAGMENT = gql`
  fragment SlotsFragment on SlotType {
    rank
  }
`;

const CRAFTING_FRAGMENT = gql`
  fragment CraftingFragment on CraftingType {
    craftable
    materials {
      quantity
      item {
        ...ItemFragment
      }
    }
  }
  ${ITEM_FRAGMENT}
`;

const AILMENT_FRAGMENT = gql`
  fragment AilmentInput on Ailment {
    _id
    name
    description
    recovery {
      ...RecoveryFragment
    }
    protection {
      ...ProtectionFragment
    }
  }
  ${RECOVERY_FRAGMENT}
  ${PROTECTION_FRAGMENT}
`

const ARMOR_FRAGMENT = gql`
  fragment ArmorFragment on ArmorType {
    _id
    slug
    name
    type
    rank
    rarity
    defense {
      ...DefenseFragment
    }
    resistances {
      ...ResistancesFragment
    }
    slots {
      ...SlotsFragment
    }
    skills {
      ...SkillFragment
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
      ...CraftingFragment
    }
  }
  ${DEFENSE_FRAGMENT}
  ${RESISTANCES_FRAGMENT}
  ${SLOTS_FRAGMENT}
  ${SKILL_FRAGMENT}
  ${CRAFTING_FRAGMENT}
`;

const ARMORSET_FRAGMENT = gql`
  fragment ArmorSetFragment on ArmorSetType {
    _id
    rank
    name
    pieces {
      ...ArmorFragment
    }
    crafting {
      craftable
      materials {
        quantity
        item {
          ...ItemFragment
        }
      }
      previous
      branches
      craftingMaterials {
        quantity
        item {
          ...ItemFragment
        }
      }
      upgradeMaterials {
        quantity
        item {
          ...ItemFragment
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
          ...SkillFragment
        }
        skill
        skillName
      }
    }
  }
  ${ARMOR_FRAGMENT}
  ${ITEM_FRAGMENT}
  ${SKILL_FRAGMENT}
`;

const CHARM_FRAGMENT = gql`
  fragment CharmFragment on CharmType {
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
          ...ItemFragment
        }
      }
      previous
      branches
      craftingMaterials {
        quantity
        item {
          ...ItemFragment
        }
      }
      upgradeMaterials {
        quantity
        item {
          ...ItemFragment
        }
      }
      assets {
        icon
        image
      }
    }
  }
  ${ITEM_FRAGMENT}
`;

const DECORATION_FRAGMENT = gql`
  fragment DecorationFragment on DecorationType {
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
`;

const EVENT_FRAGMENT = gql`
  fragment EventFragment on EventType {
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
`;

const LOCATION_FRAGMENT = gql`
  fragment LocationFragment on LocationType {
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
`;

const REWARD_FRAGMENT = gql`
  fragment RewardFragment on RewardType {
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
`;

const MONSTER_FRAGMENT = gql`
  fragment MonsterFragment on MonsterType {
    _id
    id
    name
    type
    species
    description
    elements
    ailments {
      ...AilmentFragment
    }
    location {
      ...LocationFragment
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
      ...RewardFragment
    }
  }
  ${AILMENT_FRAGMENT}
  ${LOCATION_FRAGMENT}
  ${REWARD_FRAGMENT}
`;

const ATTACK_FRAGMENT = gql`
  fragment AttackFragment on AttackType {
    display
    raw
  }
`;

const DURABILITY_FRAGMENT = gql`
  fragment DurabilityFragment on DurabilityType {
    red
    orange
    yellow
    green
    blue
    white
    purple
  }
`;

const ELEMENT_FRAGMENT = gql`
  fragment ElementFragment on ElementType {
    type
    damage
    hidden
  }
`;

const WEAPON_FRAGMENT = gql`
  fragment WeaponFragment on WeaponType {
    _id
    id
    name
    type
    rarity
    attack {
      ...AttackFragment
    }
    elderseal
    attributes {
      damageType
    }
    damageType
    durability {
      ...DurabilityFragment
    }
    slots {
      rank
    }
    elements {
      ...ElementFragment
    }
    crafting {
      ...CraftingFragment
    }
  }
  ${ATTACK_FRAGMENT}
  ${DURABILITY_FRAGMENT}
  ${ELEMENT_FRAGMENT}
  ${CRAFTING_FRAGMENT}
`;

export const GET_AILMENTS = gql`
  query ALL_AILMENTS {
    ailments {
      _id
      name
      description
      recovery {
        ...RecoveryFragment
      }
      protection {
        ...ProtectionFragment
      }
    }
  }
  ${RECOVERY_FRAGMENT}
  ${PROTECTION_FRAGMENT}
`;

export const GET_AILMENT = gql`
  query GET_AILMENT($id: ID!) {
    ailment(_id: $id) {
      _id
      name
      description
      recovery {
        ...RecoveryFragment
      }
      protection {
        ...ProtectionFragment
      }
    }
  }
  ${RECOVERY_FRAGMENT}
  ${PROTECTION_FRAGMENT}
`;

export const ALL_ARMORS = gql`
  query ALL_ARMORS {
    armors {
      ...ArmorFragment
    }
  }
  ${ARMOR_FRAGMENT}
`;

export const GET_ARMOR = gql`
  query GET_ARMOR($id: ID!) {
    armor(_id: $id) {
      ...ArmorFragment
    }
  }
  ${ARMOR_FRAGMENT}
`;

export const ALL_ARMORSETS = gql`
  query ALL_ARMORSETS {
    armorsets {
      ...ArmorSetFragment
    }
  }
  ${ARMORSET_FRAGMENT}
`;

export const GET_ARMORSET = gql`
  query GET_ARMORSET($id: ID!) {
    armorset(_id: $id) {
      ...ArmorSetFragment
    }
  }
  ${ARMORSET_FRAGMENT}
`;

export const ALL_CHARMS = gql`
  query ALL_CHARMS {
    charms {
      ...CharmFragment
    }
  }
  ${CHARM_FRAGMENT}
`;

export const GET_CHARM = gql`
  query GET_CHARM($id: ID!) {
    charm(_id: $id) {
      ...CharmFragment
    }
  }
  ${CHARM_FRAGMENT}
`;

export const ALL_DECORATIONS = gql`
  query ALL_DECORATIONS {
    decorations {
      ...DecorationFragment
    }
  }
  ${DECORATION_FRAGMENT}
`;

export const GET_DECORATION = gql`
  query GET_DECORATION($id: ID!) {
    decoration(_id: $id) {
      ...DecorationFragment
    }
  }
  ${DECORATION_FRAGMENT}
`;

export const ALL_EVENTS = gql`
  query ALL_EVENTS {
    events {
      ...EventFragment
    }
  }
  ${EVENT_FRAGMENT}
`;

export const GET_EVENT = gql`
  query GET_EVENT($id: ID!) {
    event(_id: $id) {
      ...EventFragment
    }
  }
  ${EVENT_FRAGMENT}
`;

export const ALL_ITEMS = gql`
  query ALL_ITEMS {
    items {
      ...ItemFragment
    }
  }
  ${ITEM_FRAGMENT}
`;

export const GET_ITEM = gql`
  query GET_ITEM($id: ID!) {
    item(_id: $id) {
      ...ItemFragment
    }
  }
  ${ITEM_FRAGMENT}
`;

export const ALL_LOCATIONS = gql`
  query ALL_LOCATIONS {
    locations {
      ...LocationFragment
    }
  }
  ${LOCATION_FRAGMENT}
`;

export const GET_LOCATION = gql`
  query GET_LOCATION($id: ID!) {
    location(_id: $id) {
      ...LocationFragment
    }
  }
  ${LOCATION_FRAGMENT}
`;

export const ALL_MONSTERS = gql`
  query ALL_MONSTERS {
    monsters {
      ...MonsterFragment
    }
  }
  ${MONSTER_FRAGMENT}
`;

export const GET_MONSTER = gql`
  query GET_MONSTER($id: ID!) {
    monster(_id: $id) {
      ...MonsterFragment
    }
  }
  ${MONSTER_FRAGMENT}
`;

export const ALL_SKILLS = gql`
  query ALL_SKILLS {
    skills {
      ...SkillFragment
    }
  }
  ${SKILL_FRAGMENT}
`;

export const GET_SKILL = gql`
  query GET_SKILL($id: ID!) {
    skill(_id: $id) {
      ...SkillFragment
    }
  }
  ${SKILL_FRAGMENT}
`;

export const ALL_WEAPONS = gql`
  query ALL_WEAPONS {
    weapons {
      ...WeaponFragment
    }
  }
  ${WEAPON_FRAGMENT}
`;

export const GET_WEAPON = gql`
  query GET_WEAPON($id: ID!) {
    weapon(_id: $id) {
      ...WeaponFragment
    }
  }
  ${WEAPON_FRAGMENT}
`;

export const GET_USERS = gql`
  query ALL_USERS {
    users {
      _id
      username
      email
      ailment {
        ...AilmentFragment
      }
      armor {
        ...ArmorFragment
      }
      armorSet {
        ...ArmorSetFragment
      }
      charm {
        ...CharmFragment
      }
      decoration {
        ...DecorationFragment
      }
      event {
        ...EventFragment
      }
      item {
        ...ItemFragment
      }
      location {
        ...LocationFragment
      }
      monster {
        ...MonsterFragment
      }
      skill {
        ...SkillFragment
      }
      weapon {
        ...WeaponFragment
      }
    }
  }
  ${AILMENT_FRAGMENT}
  ${ARMOR_FRAGMENT}
  ${ARMORSET_FRAGMENT}
  ${CHARM_FRAGMENT}
  ${DECORATION_FRAGMENT}
  ${EVENT_FRAGMENT}
  ${ITEM_FRAGMENT}
  ${LOCATION_FRAGMENT}
  ${MONSTER_FRAGMENT}
  ${SKILL_FRAGMENT}
  ${WEAPON_FRAGMENT}
`;

export const GET_USER = gql`
  query GET_USER($_id: ID!) {
    user(_id: $_id) {
      _id
      username
      email
      ailment {
        ...AilmentFragment
      }
      armor {
        ...ArmorFragment
      }
      armorSet {
        ...ArmorSetFragment
      }
      charm {
        ...CharmFragment
      }
      decoration {
        ...DecorationFragment
      }
      event {
        ...EventFragment
      }
      item {
        ...ItemFragment
      }
      location {
        ...LocationFragment
      }
      monster {
        ...MonsterFragment
      }
      skill {
        ...SkillFragment
      }
      weapon {
        ...WeaponFragment
      }
    }
  }
  ${AILMENT_FRAGMENT}
  ${ARMOR_FRAGMENT}
  ${ARMORSET_FRAGMENT}
  ${CHARM_FRAGMENT}
  ${DECORATION_FRAGMENT}
  ${EVENT_FRAGMENT}
  ${ITEM_FRAGMENT}
  ${LOCATION_FRAGMENT}
  ${MONSTER_FRAGMENT}
  ${SKILL_FRAGMENT}
  ${WEAPON_FRAGMENT}
`;