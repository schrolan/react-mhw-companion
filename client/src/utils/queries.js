import { gql } from "@apollo/client";

const MODIFIERS_FRAGMENT = gql`
  fragment ModifiersFragment on Modifier {
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

const SKILLRANKS_FRAGMENT = gql`
  fragment SkillRanksFragment on SkillRank {
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
  fragment SkillFragment on Skill {
    _id
    slug
    name
    description
    ranks {
      ...SkillRanksFragment
    }
  }
  ${SKILLRANKS_FRAGMENT}
`;

const ITEM_FRAGMENT = gql`
  fragment ItemFragment on Item {
    _id
    name
    description
    rarity
    carryLimit
    value
  }
`;

const RECOVERY_FRAGMENT = gql`
  fragment RecoveryFragment on Recovery {
    actions
    items {
      ...ItemFragment
    }
  }
  ${ITEM_FRAGMENT}
`;

const PROTECTION_FRAGMENT = gql`
  fragment ProtectionFragment on Protection {
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
  fragment DefenseFragment on Defense {
    base
    max
    augmented
  }
`;

const RESISTANCES_FRAGMENT = gql`
  fragment ResistancesFragment on Resistances {
    fire
    water
    ice
    thunder
    dragon
  }
`;

const SLOTS_FRAGMENT = gql`
  fragment SlotsFragment on Slots {
    rank
  }
`;

const ARMORSETARMOR_FRAGMENT = gql`
  fragment ArmorSetArmorFragment on ArmorSetArmor {
    name
    rank
    pieces
  }
`

const ASSETS_FRAGMENT = gql`
  fragment AssetsFragment on Assets {
    imageMale
    imageFemale
  }
`
const MATERIALS_FRAGMENT = gql`
  fragment MaterialsFragment on Materials {
    quantity
    item {
      ...ItemFragment
    }
  }
  ${ITEM_FRAGMENT}
`

const CRAFTING_FRAGMENT = gql`
  fragment CraftingFragment on Crafting {
    craftable
    materials {
      ...MaterialsFragment
    }
  }
  ${MATERIALS_FRAGMENT}
`;

const RANKS_FRAGMENT = gql`
  fragment RanksFragment on Ranks {
    pieces
    skills {
      ...SkillFragment
    }
    skill
    skillName
  }
  ${SKILL_FRAGMENT}
`

const BONUS_FRAGMENT = gql`
  fragment BonusFragment on Bonus {
    name
    ranks {
      ...RanksFragment
    }
  }
  ${RANKS_FRAGMENT}
`

const CAMPS_FRAGMENT = gql`
fragment CampsFragment on Camps {
  name
  zone
}
`

const MONSTERRESISTANCESFRAGMENT = gql`
 fragment MonsterResistancesFragment on MonsterResistances {
  element
  condition
 }
`

const WEAKNESSES_FRAGMENT = gql`
  fragment WeaknessesFragment on Weaknessess {
    element
    stars
    condition
  }
`

const CONDITIONS_FRAGMENT = gql`
  fragment ConditionsFragment on Conditions {
    type
    subtype
    rank
    quantity
    chance
  }
`

const REWARD_FRAGMENT = gql `
  fragment RewardFragment on Reward {
    item {
      ...ItemFragment
    }
    conditions {
      ...ConditionsFragment
    }
  }
  ${ITEM_FRAGMENT}
  ${CONDITIONS_FRAGMENT}
`

const ATTRIBUTES_FRAGMENT = gql`
  fragment AttributesFragment on Attributes {
    damageType
  }
`
const CRAFTINGMATERIALS_FRAGMENT = gql`
  fragment CraftingMaterialsFragment on CraftingMaterials {
    quantity
    item {
      ...ItemFragment
    }
  }
  ${ITEM_FRAGMENT}
`

const UPGRAGEMATERIALS_FRAGMENT = gql`
  fragment UpgradeMaterialsFragment on UpgradeMaterials {
    quantity
    item {
      ...ItemFragment
    }
  }
  ${ITEM_FRAGMENT}
`
const WEAPONASSETS_FRAGMENT = gql`
  fragment WeaponAssetsFragment on WeaponAssets {
    icon
    image
  }
`
const WEAPONCRAFTING_FRAGMENT = gql`
 fragment WeaponCraftingFragment on WeaponCrafting {
  craftable
  previous
  branches
  craftingMaterials {
    ...CraftingMaterialsFragment
  }
  upgradeMaterials {
    ...UpgradeMaterialsFragment
  }
  assets {
    ...WeaponAssets
  }
 }
  ${CRAFTINGMATERIALS_FRAGMENT}
  ${UPGRAGEMATERIALS_FRAGMENT}
  ${WEAPONASSETS_FRAGMENT}
`

const AILMENT_FRAGMENT = gql`
  fragment AilmentFragment on Ailment {
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
  fragment ArmorFragment on Armor {
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
      ...ArmorSetArmorFragment
    }
    assets {
      ...AssetsFragment
    }
    crafting {
      ...CraftingFragment
    }
  }
  ${DEFENSE_FRAGMENT}
  ${RESISTANCES_FRAGMENT}
  ${SLOTS_FRAGMENT}
  ${SKILL_FRAGMENT}
  ${ARMORSETARMOR_FRAGMENT}
  ${ASSETS_FRAGMENT}
  ${CRAFTING_FRAGMENT}
`;

const ARMORSET_FRAGMENT = gql`
  fragment ArmorSetFragment on ArmorSet {
    _id
    rank
    name
    pieces {
      ...ArmorFragment
    }
    bonus {
      ...BonusFragment
    }
  }
  ${ARMOR_FRAGMENT}
  ${BONUS_FRAGMENT}
`;

const CHARM_FRAGMENT = gql`
  fragment CharmFragment on Charm {
    _id
    slug
    name
    ranks {
      ...SkillFragment
    }
    crafting {
      ...CraftingFragment
    }
  }
  ${SKILL_FRAGMENT}
  ${CRAFTING_FRAGMENT}
`;

const DECORATION_FRAGMENT = gql`
  fragment DecorationFragment on Decoration {
    _id
    slug
    name
    rarity
    skill {
     ...SkillFragment
    }
    slot
  }
  ${SKILL_FRAGMENT}
`;

const LOCATION_FRAGMENT = gql`
  fragment LocationFragment on Location {
    _id
    name
    zoneCount
    camps {
      ...CampsFragment
    }
  }
  ${CAMPS_FRAGMENT}
`;

const EVENT_FRAGMENT = gql`
  fragment EventFragment on Event {
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
    startTimestamp
    endTimestamp
    location {
      ...LocationFragment
    }
  }
  ${LOCATION_FRAGMENT}
`;

const MONSTER_FRAGMENT = gql`
  fragment MonsterFragment on Monster {
    _id
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
      ...MonsterResistancesFragment
    }
    weaknesses {
      ...WeaknessesFragment
    }
    reward {
      ...RewardFragment
    }
  }
  ${AILMENT_FRAGMENT}
  ${LOCATION_FRAGMENT}
  ${MONSTERRESISTANCESFRAGMENT}
  ${WEAKNESSES_FRAGMENT}
  ${REWARD_FRAGMENT}
`;

const ATTACK_FRAGMENT = gql`
  fragment AttackFragment on Attack {
    display
    raw
  }
`;

const DURABILITY_FRAGMENT = gql`
  fragment DurabilityFragment on Durability {
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
  fragment ElementFragment on Element {
    type
    damage
    hidden
  }
`;

const WEAPON_FRAGMENT = gql`
  fragment WeaponFragment on Weapon {
    _id
    name
    type
    rarity
    attack {
      ...AttackFragment
    }
    elderseal
    attributes {
      ...AttributesFragment
    }
    damageType
    durability {
      ...DurabilityFragment
    }
    slots {
      ...SlotsFragment
    }
    elements {
      ...ElementFragment
    }
    crafting {
      ...WeaponCraftingFragment
    }
  }
  ${ATTACK_FRAGMENT}
  ${ATTRIBUTES_FRAGMENT}
  ${DURABILITY_FRAGMENT}
  ${SLOTS_FRAGMENT}
  ${ELEMENT_FRAGMENT}
  ${WEAPONCRAFTING_FRAGMENT}
`;

const USER_FRAGMENT = gql`
  fragment UserFragment on User {
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
`

export const GET_AILMENTS = gql`
  query ALL_AILMENTS {
    ailments {
      ...AilmentFragment
    }
  }
  ${AILMENT_FRAGMENT}
`;

export const GET_AILMENT = gql`
  query GET_AILMENT($id: ID!) {
    ailment(_id: $id) {
      ...AilmentFragment
    }
  }
  ${AILMENT_FRAGMENT}
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
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

export const GET_USER = gql`
  query GET_USER($_id: ID!) {
    user(_id: $_id) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
  `