import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ARMORSET } from '../utils/mutations';
import { GET_USER } from '../utils/queries';
import Container from './container';
import Auth from '../utils/auth';
import '../index.css';

const ArmorSetDetails = ({ armorSet }) => {
    const currentUser = Auth.getLoggedInUser();

    const [addArmorSet] = useMutation(ADD_ARMORSET, {
        refetchQueries: [{ query: GET_USER }, 'GET_USER'],
    });

    const saveArmorSet = async (armorSet) => {
        try {
            await addArmorSet({
                variables: {
                    userId: currentUser._id,
                    name: armorSet.name,
                    rank: armorSet.rank,
                    pieces: armorSet.pieces?.map(piece => ({
                        slug: piece.slug,
                        name: piece.name,
                        type: piece.type,
                        rank: piece.rank,
                        rarity: piece.rarity,
                        attributes: piece.attributes,
                        skills: piece.skills?.map(skill => ({
                            slug: skill.slug,
                            level: skill.level,
                            description: skill.description,
                            modifiers: skill.modifiers,
                            skill: skill.skill,
                            skillName: skill.skillName
                        })),
                        assets: piece.assets
                    })),
                    bonus: armorSet.bonus
                        ? {
                              name: armorSet.bonus.name,
                              ranks: armorSet.bonus.ranks.map(rank => ({
                                  pieces: rank.pieces,
                                  skill: rank.skill
                                      ? {
                                            slug: rank.skill.slug,
                                            level: rank.skill.level,
                                            description: rank.skill.description,
                                            modifiers: rank.skill.modifiers,
                                            skill: rank.skill.skill,
                                            skillName: rank.skill.skillName
                                        }
                                      : null
                              }))
                          }
                        : null
                }
            });
            alert(`${armorSet.name} saved!`);
        } catch (error) {
            console.error('Error saving armor set:', error);
            alert('Failed to save armor set');
        }
    };

    if (!armorSet) return <div>No armor set data available</div>;

    // Destructure armorSet for clarity
    const { name, rank, pieces, bonus } = armorSet;

    return (
        <Container>
            <div className="armor-set-card">
                <h2>{name} - Rank: {rank}</h2>

                <div className="armor-pieces">
                    <h3>Pieces:</h3>
                    {pieces?.map((piece, index) => (
                        <div key={index} className="armor-piece">
                            <h4>{piece.name} ({piece.type})</h4>
                            <p>Rarity: {piece.rarity}</p>
                            <div className="attributes">
                                <h5>Attributes:</h5>
                                {piece.attributes && (
                                    <>
                                        <p>Defense: {piece.attributes.defense}</p>
                                        <p>Fire Resistance: {piece.attributes.resistFire}</p>
                                        <p>Water Resistance: {piece.attributes.resistWater}</p>
                                        <p>Thunder Resistance: {piece.attributes.resistThunder}</p>
                                        <p>Ice Resistance: {piece.attributes.resistIce}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {bonus && (
                    <div className="armor-bonus">
                        <h3>Bonus: {bonus.name}</h3>
                        {bonus.ranks?.map((rank, index) => (
                            <div key={index}>
                                <p>Pieces required: {rank.pieces}</p>
                                {rank.skill && (
                                    <div className="bonus-skill">
                                        <strong>{rank.skill.skillName}</strong> - {rank.skill.description}
                                        {rank.skill.modifiers && (
                                            <div>
                                                <p>Affinity: {rank.skill.modifiers.affinity}</p>
                                                <p>Attack: {rank.skill.modifiers.attack}</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                <button onClick={() => saveArmorSet(armorSet)} className="save-button">
                    Save Armor Set
                </button>
            </div>
        </Container>
    );
};

export default ArmorSetDetails;