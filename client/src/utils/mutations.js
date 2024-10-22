import { gql } from "@apollo/client";

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

export const ADD_AILMENT = gql`
  mutation ADD_AILMENT(
    $name: String!,
    $description: String!,
    $recovery: RecoveryType!,
    $protection: ProtectionType!
  ) {
    addAilment(
      name: $name,
      description: $description,
      recovery: $recovery,
      protection: $protection
    ) {
      ...RecoveryFragment
      ...ProtectionFragment
    }
  }
  ${RECOVERY_FRAGMENT}
  ${PROTECTION_FRAGMENT}
`;

export const DELETE_AILMENT = gql`
  mutation DELETE_AILMENT($id: ID!) {
    deleteAilment(_id: $id) {
      _id
      name
      description
    }
  }
`;

export const ADD_ARMOR = gql`
  mutation ADD_ARMOR(
    $slug: String!,
    $name: String!,
    $type: String!,
    $rank: String!,
    $rarity: Int!,
    $defense: DefenseType!,
    $resistances: ResistancesType!,
    $slots: [SlotType!],
    $skills: [SkillType!],
    $armorSet: ArmorSetType!,
    $assets: AssetsType!,
    $crafting: CraftingType!
  ) {
    addArmor(
      slug: $slug,
      name: $name,
      type: $type,
      rank: $rank,
      rarity: $rarity,
      defense: $defense,
      resistances: $resistances,
      slots: $slots,
      skills: $skills,
      armorSet: $armorSet,
      assets: $assets,
      crafting: $crafting
    ) {
      ...ArmorFragment
    }
  }
  ${ARMOR_FRAGMENT}
`;

export const DELETE_ARMOR = gql`
  mutation DELETE_ARMOR($id: ID!) {
    deleteArmor(_id: $id) {
      _id
      slug
      name
      type
    }
  }
`;

export const ADD_ARMORSET = gql`
  mutation ADD_ARMORSET(
    $rank: String!,
    $name: String!,
    $pieces: [ArmorType!]!,
    $crafting: CraftingType!,
    $bonus: BonusType!
  ) {
    addArmorSet(
      rank: $rank,
      name: $name,
      pieces: $pieces,
      crafting: $crafting,
      bonus: $bonus
    ) {
      ...ArmorSetFragment
    }
  }
  ${ARMORSET_FRAGMENT}
`;

export const DELETE_ARMORSET = gql`
  mutation DELETE_ARMORSET($id: ID!) {
    deleteArmorSet(_id: $id) {
      _id
      name
      rank
    }
  }
`;

export const ADD_CHARM = gql`
  mutation ADD_CHARM(
    $slug: String!,
    $name: String!,
    $ranks: [RankType!]!,
    $crafting: CraftingType!
  ) {
    addCharm(
      slug: $slug,
      name: $name,
      ranks: $ranks,
      crafting: $crafting
    ) {
      ...CharmFragment
    }
  }
  ${CHARM_FRAGMENT}
`;

export const DELETE_CHARM = gql`
  mutation DELETE_CHARM($id: ID!) {
    deleteCharm(_id: $id) {
      _id
      name
      slug
    }
  }
`;

export const ADD_DECORATION = gql`
  mutation ADD_DECORATION(
    $id: ID!,
    $slug: String!,
    $name: String!,
    $rarity: Int!,
    $skill: SkillType!,
    $slot: Int!
  ) {
    addDecoration(
      id: $id,
      slug: $slug,
      name: $name,
      rarity: $rarity,
      skill: $skill,
      slot: $slot
    ) {
      ...DecorationFragment
    }
  }
  ${DECORATION_FRAGMENT}
`;

export const DELETE_DECORATION = gql`
  mutation DELETE_DECORATION($id: ID!) {
    deleteDecoration(_id: $id) {
      _id
      name
      slug
    }
  }
`;

export const ADD_EVENT = gql`
  mutation ADD_EVENT(
    $id: ID!,
    $name: String!,
    $platform: String!,
    $exclusive: Boolean!,
    $type: String!,
    $expansion: String,
    $description: String!,
    $requirements: String,
    $questRank: Int,
    $successConditions: [String],
    $startTimestamp: String!,
    $endTimestamp: String!,
    $location: LocationType!
  ) {
    addEvent(
      id: $id,
      name: $name,
      platform: $platform,
      exclusive: $exclusive,
      type: $type,
      expansion: $expansion,
      description: $description,
      requirements: $requirements,
      questRank: $questRank,
      successConditions: $successConditions,
      startTimestamp: $startTimestamp,
      endTimestamp: $endTimestamp,
      location: $location
    ) {
      ...EventFragment
    }
  }
  ${EVENT_FRAGMENT}
`;

export const DELETE_EVENT = gql`
  mutation DELETE_EVENT($id: ID!) {
    deleteEvent(_id: $id) {
      _id
      name
      platform
    }
  }
`;

export const ADD_ITEM = gql`
  mutation ADD_ITEM(
    $id: ID!,
    $name: String!,
    $description: String!,
    $rarity: Int!,
    $carryLimit: Int,
    $value: Int
  ) {
    addItem(
      _id: $id,
      name: $name,
      description: $description,
      rarity: $rarity,
      carryLimit: $carryLimit,
      value: $value
    ) {
      ...ItemFragment
    }
  }
  ${ITEM_FRAGMENT}
`;

export const DELETE_ITEM = gql`
  mutation DELETE_ITEM($id: ID!) {
    deleteItem(_id: $id) {
      _id
      name
      rarity
    }
  }
`;

export const ADD_LOCATION = gql`
  mutation ADD_LOCATION(
    $id: ID!,
    $name: String!,
    $zoneCount: Int!,
    $camps: [CampInputType]
  ) {
    addLocation(
      _id: $id,
      name: $name,
      zoneCount: $zoneCount,
      camps: $camps
    ) {
      ...LocationFragment
    }
  }
  ${LOCATION_FRAGMENT}
`;

export const DELETE_LOCATION = gql`
  mutation DELETE_LOCATION($id: ID!) {
    deleteLocation(_id: $id) {
      _id
      name
      zoneCount
    }
  }
`;

export const ADD_MONSTER = gql`
  mutation ADD_MONSTER(
    $id: ID!,
    $name: String!,
    $type: String!,
    $species: String!,
    $description: String,
    $elements: [String],
    $ailments: [AilmentInputType],
    $location: LocationInputType,
    $resistances: [ResistanceInputType],
    $weaknesses: [WeaknessInputType],
    $reward: RewardInputType
  ) {
    addMonster(
      _id: $id,
      name: $name,
      type: $type,
      species: $species,
      description: $description,
      elements: $elements,
      ailments: $ailments,
      location: $location,
      resistances: $resistances,
      weaknesses: $weaknesses,
      reward: $reward
    ) {
      ...MonsterFragment
    }
  }
  ${MONSTER_FRAGMENT}
`;

export const DELETE_MONSTER = gql`
  mutation DELETE_MONSTER($id: ID!) {
    deleteMonster(_id: $id) {
      _id
      name
      type
    }
  }
`;

export const ADD_SKILL = gql`
  mutation ADD_SKILL(
    $id: ID!,
    $slug: String!,
    $name: String!,
    $description: String!,
    $ranks: [RankInputType]
  ) {
    addSkill(
      _id: $id,
      slug: $slug,
      name: $name,
      description: $description,
      ranks: $ranks
    ) {
      ...SkillFragment
    }
  }
  ${SKILL_FRAGMENT}
`;

export const DELETE_SKILL = gql`
  mutation DELETE_SKILL($id: ID!) {
    deleteSkill(_id: $id) {
      _id
      name
      description
    }
  }
`;

export const ADD_WEAPON = gql`
  mutation ADD_WEAPON(
    $id: ID!,
    $name: String!,
    $type: String!,
    $rarity: Int!,
    $attack: AttackInputType!,
    $elderseal: String,
    $attributes: [AttributeInputType],
    $damageType: String,
    $durability: DurabilityInputType!,
    $slots: [SlotInputType],
    $elements: [ElementInputType],
    $crafting: CraftingInputType!
  ) {
    addWeapon(
      _id: $id,
      name: $name,
      type: $type,
      rarity: $rarity,
      attack: $attack,
      elderseal: $elderseal,
      attributes: $attributes,
      damageType: $damageType,
      durability: $durability,
      slots: $slots,
      elements: $elements,
      crafting: $crafting
    ) {
      ...WeaponFragment
    }
  }
  ${WEAPON_FRAGMENT}
`;

export const DELETE_WEAPON = gql`
  mutation DELETE_WEAPON($id: ID!) {
    deleteWeapon(_id: $id) {
      _id
      name
      type
    }
  }
`;

export const LOGIN = gql`
  mutation LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`

export const ADD_USER = gql`
  mutation ADD_USER($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        _id
        email
        username
    }
  }
`