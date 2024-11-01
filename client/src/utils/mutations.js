import { gql } from "@apollo/client";

// Fragments
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

// User Mutations
export const ADD_USER = gql`
  mutation ADD_USER($input: UserInput!) {
    addUser(input: $input) {
      _id
      username
      email
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

// Ailment Mutations
export const ADD_AILMENT = gql`
  mutation ADD_AILMENT($input: AilmentInput!) {
    addAilment(input: $input) {
      ...AilmentFragment
    }
  }
  ${AILMENT_FRAGMENT}
`;

export const DELETE_AILMENT = gql`
  mutation DELETE_AILMENT($id: ID!) {
    deleteAilment(_id: $id) {
      _id
    }
  }
`;

// Armor Mutations
export const ADD_ARMOR = gql`
  mutation ADD_ARMOR($input: ArmorInput!) {
    addArmor(input: $input) {
      ...ArmorFragment
    }
  }
  ${ARMOR_FRAGMENT}
`;

export const DELETE_ARMOR = gql`
  mutation DELETE_ARMOR($id: ID!) {
    deleteArmor(_id: $id) {
      _id
    }
  }
`;

// ArmorSet Mutations
export const ADD_ARMORSET = gql`
  mutation ADD_ARMORSET($input: ArmorSetInput!) {
    addArmorSet(input: $input) {
      ...ArmorSetFragment
    }
  }
  ${ARMORSET_FRAGMENT}
`;

export const DELETE_ARMORSET = gql`
  mutation DELETE_ARMORSET($id: ID!) {
    deleteArmorSet(_id: $id) {
      _id
    }
  }
`;

// Charm Mutations
export const ADD_CHARM = gql`
  mutation ADD_CHARM($input: CharmInput!) {
    addCharm(input: $input) {
      ...CharmFragment
    }
  }
  ${CHARM_FRAGMENT}
`;

export const DELETE_CHARM = gql`
  mutation DELETE_CHARM($id: ID!) {
    deleteCharm(_id: $id) {
      _id
    }
  }
`;

// Decoration Mutations
export const ADD_DECORATION = gql`
  mutation ADD_DECORATION($input: DecorationInput!) {
    addDecoration(input: $input) {
      ...DecorationFragment
    }
  }
  ${DECORATION_FRAGMENT}
`;

export const DELETE_DECORATION = gql`
  mutation DELETE_DECORATION($id: ID!) {
    deleteDecoration(_id: $id) {
      _id
    }
  }
`;

// Event Mutations
export const ADD_EVENT = gql`
  mutation ADD_EVENT($input: EventInput!) {
    addEvent(input: $input) {
      ...EventFragment
    }
  }
  ${EVENT_FRAGMENT}
`;

export const DELETE_EVENT = gql`
  mutation DELETE_EVENT($id: ID!) {
    deleteEvent(_id: $id) {
      _id
    }
  }
`;

// Item Mutations
export const ADD_ITEM = gql`
  mutation ADD_ITEM($input: ItemInput!) {
    addItem(input: $input) {
      ...ItemFragment
    }
  }
  ${ITEM_FRAGMENT}
`;

export const DELETE_ITEM = gql`
  mutation DELETE_ITEM($id: ID!) {
    deleteItem(_id: $id) {
      _id
    }
  }
`;

// Location Mutations
export const ADD_LOCATION = gql`
  mutation ADD_LOCATION($input: LocationInput!) {
    addLocation(input: $input) {
      ...LocationFragment
    }
  }
  ${LOCATION_FRAGMENT}
`;

export const DELETE_LOCATION = gql`
  mutation DELETE_LOCATION($id: ID!) {
    deleteLocation(_id: $id) {
      _id
    }
  }
`;

// Monster Mutations
export const ADD_MONSTER = gql`
  mutation ADD_MONSTER($input: MonsterInput!) {
    addMonster(input: $input) {
      ...MonsterFragment
    }
  }
  ${MONSTER_FRAGMENT}
`;

export const DELETE_MONSTER = gql`
  mutation DELETE_MONSTER($id: ID!) {
    deleteMonster(_id: $id) {
      _id
    }
  }
`;

// Skill Mutations
export const ADD_SKILL = gql`
  mutation ADD_SKILL($input: SkillInput!) {
    addSkill(input: $input) {
      ...SkillFragment
    }
  }
  ${SKILL_FRAGMENT}
`;

export const DELETE_SKILL = gql`
  mutation DELETE_SKILL($id: ID!) {
    deleteSkill(_id: $id) {
      _id
    }
  }
`;

// Weapon Mutations
export const ADD_WEAPON = gql`
  mutation ADD_WEAPON($input: WeaponInput!) {
    addWeapon(input: $input) {
      ...WeaponFragment
    }
  }
  ${WEAPON_FRAGMENT}
`;

export const DELETE_WEAPON = gql`
  mutation DELETE_WEAPON($id: ID!) {
    deleteWeapon(_id: $id) {
      _id
    }
  }
`;