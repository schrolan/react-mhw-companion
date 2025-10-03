import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ARMOR } from '../utils/mutations';
import { GET_USER } from '../utils/queries';
import Container from './container';
import Auth from '../utils/auth';
import '../index.css';

const ArmorDetails = ({ armor, showSaveButton = true }) => {
    const currentUser = Auth.getLoggedInUser();

    const [addArmor] = useMutation(ADD_ARMOR, {
        refetchQueries: [{ query: GET_USER }, 'GET_USER'],
    });

    const saveArmor = async (armor) => {
        try {
            await addArmor({
                variables: {
                    userId: currentUser._id,
                    name: armor.name,
                    type: armor.type,
                    rank: armor.rank,
                    rarity: armor.rarity,
                    defense: armor.defense ? {
                        base: armor.defense.base,
                        max: armor.defense.max,
                        augmented: armor.defense.augmented
                    } : null,
                    resistances: armor.resistances ? {
                        fire: armor.resistances.fire,
                        water: armor.resistances.water,
                        ice: armor.resistances.ice,
                        thunder: armor.resistances.thunder,
                        dragon: armor.resistances.dragon
                    } : null,
                    slots: armor.slots ? armor.slots.map(slot => ({
                        rank: slot.rank
                    })) : [],
                    skills: armor.skills ? armor.skills.map(skill => ({
                        slug: skill.slug,
                        name: skill.name,
                        description: skill.description,
                        ranks: skill.ranks ? skill.ranks.map(rank => ({
                            slug: rank.slug,
                            skill: rank.skill,
                            level: rank.level,
                            description: rank.description,
                            modifiers: rank.modifiers || {}
                        })) : []
                    })) : [],
                    armorSet: armor.armorSet ? {
                        name: armor.armorSet.name,
                        rank: armor.armorSet.rank,
                        pieces: armor.armorSet.pieces
                    } : null,
                    assets: armor.assets ? {
                        imageMale: armor.assets.imageMale,
                        imageFemale: armor.assets.imageFemale
                    } : null,
                    crafting: armor.crafting ? {
                        materials: armor.crafting.materials ? armor.crafting.materials.map(material => ({
                            quantity: material.quantity,
                            item: {
                                rarity: material.item.rarity,
                                carryLimit: material.item.carryLimit,
                                value: material.item.value,
                                name: material.item.name,
                                description: material.item.description
                            }
                        })) : []
                    } : null
                }
            });
            alert(`${armor.name} saved to user!`);
        } catch (error) {
            console.log("Error saving armor", error);
            alert("Error saving armor");
        }
    };

    
    const {
        name, type, rank, rarity, defense, resistances, slots, skills, armorSet, assets, crafting
    } = armor;

    return (
        <Container>
            <div className="armor-card">
                <h2>{name}</h2>
                {assets && (assets.imageMale || assets.imageFemale) ? (
                    <img
                        src={assets.imageMale || assets.imageFemale}
                        alt={`${name} armor`}
                        className="armor-image"
                    />
                ) : (
                    <p>No image available</p>
                )}
                <p>Type: {type}</p>
                <p>Rank: {rank}</p>
                <p>Rarity: {rarity}</p>

                {defense && (
                    <div className="armor-section">
                        <h3>Defense</h3>
                        <p>Base: {defense.base}</p>
                        <p>Max: {defense.max}</p>
                        <p>Augmented: {defense.augmented}</p>
                    </div>
                )}

                {resistances && (
                    <div className="armor-section">
                        <h3>Resistances</h3>
                        <p>Fire: {resistances.fire}</p>
                        <p>Water: {resistances.water}</p>
                        <p>Ice: {resistances.ice}</p>
                        <p>Thunder: {resistances.thunder}</p>
                        <p>Dragon: {resistances.dragon}</p>
                    </div>
                )}

                {skills && skills.length > 0 && (
                    <div className="armor-section">
                        <h3>Skills</h3>
                        {skills.map(skill => (
                            <div key={skill.slug} className="skill">
                                <strong>{skill.name}</strong> - {skill.description}
                                {skill.ranks && skill.ranks.length > 0 ? (
                                    skill.ranks.map((rank, index) => (
                                        <div key={index}>
                                            <p>Level: {rank.level}</p>
                                            <p>{rank.description}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p>No ranks available for this skill</p>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {armorSet && (
                    <div className="armor-section">
                        <h3>Armor Set</h3>
                        <p>Name: {armorSet.name}</p>
                        <p>Rank: {armorSet.rank}</p>
                    </div>
                )}

                {crafting && crafting.materials && (
                    <div className="armor-section">
                        <h3>Crafting Materials</h3>
                        <ul>
                            {crafting.materials.map((material, index) => (
                                <li key={index}>
                                    {material.item ? (
                                        <div>
                                            <strong>{material.item.name}</strong> - Quantity: {material.quantity}
                                        </div>
                                    ) : (
                                        <p>Material information is unavailable</p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {showSaveButton && (
                    <button onClick={() => saveArmor(armor)} className="save-button">
                        Save Armor
                    </button>
                )}
            </div>
        </Container>
    );
};

export default ArmorDetails;