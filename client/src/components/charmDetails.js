import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CHARM } from '../utils/mutations';
import { GET_USER } from '../utils/queries';
import Container from './container';
import Auth from '../utils/auth';
import '../index.css';

const CharmDetails = ({ charm }) => {
    const currentUser = Auth.getLoggedInUser();

    const [addCharm] = useMutation(ADD_CHARM, {
        refetchQueries: [{ query: GET_USER }, 'GET_USER'],
    });

    const saveCharm = async () => {
        try {
            await addCharm({
                variables: {
                    userId: currentUser._id,
                    slug: charm.slug,
                    name: charm.name,
                    ranks: charm.ranks?.map(rank => ({
                        level: rank.level,
                        rarity: rank.rarity,
                        skills: rank.skills?.map(skill => ({
                            slug: skill.slug,
                            level: skill.level,
                            description: skill.description,
                            skill: skill.skill,
                            skillName: skill.skillName,
                            modifiers: skill.modifiers || {}
                        })),
                        crafting: rank.crafting
                            ? {
                                  craftable: rank.crafting.craftable,
                                  materials: rank.crafting.materials?.map(material => ({
                                      quantity: material.quantity,
                                      item: {
                                          name: material.item.name,
                                          description: material.item.description,
                                          rarity: material.item.rarity,
                                          carryLimit: material.item.carryLimit,
                                          sellPrice: material.item.sellPrice,
                                          buyPrice: material.item.buyPrice
                                      }
                                  }))
                              }
                            : null
                    }))
                }
            });
            alert(`${charm.name} saved successfully!`);
        } catch (error) {
            console.error('Error saving charm:', error);
            alert('Failed to save charm');
        }
    };

    if (!charm) return <div>No charm data available</div>;

    return (
        <Container>
            <div className="charm-card">
                <h2>{charm.name}</h2>
                <p>Slug: {charm.slug}</p>

                {charm.ranks?.length > 0 && (
                    <div className="charm-ranks">
                        <h3>Ranks</h3>
                        {charm.ranks.map((rank, index) => (
                            <div key={index} className="rank-details">
                                <p>Level: {rank.level}</p>
                                <p>Rarity: {rank.rarity}</p>

                                {rank.skills?.length > 0 && (
                                    <div className="skills">
                                        <h4>Skills:</h4>
                                        {rank.skills.map((skill, skillIndex) => (
                                            <div key={skillIndex} className="skill">
                                                <strong>{skill.skillName}</strong> - {skill.description}
                                                {skill.modifiers && (
                                                    <div className="modifiers">
                                                        <p>Affinity: {skill.modifiers.affinity}</p>
                                                        <p>Attack: {skill.modifiers.attack}</p>
                                                        <p>Defense: {skill.modifiers.defense}</p>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {rank.crafting && (
                                    <div className="crafting">
                                        <h4>Crafting:</h4>
                                        <p>Craftable: {rank.crafting.craftable ? 'Yes' : 'No'}</p>
                                        {rank.crafting.materials?.length > 0 && (
                                            <ul>
                                                {rank.crafting.materials.map((material, matIndex) => (
                                                    <li key={matIndex}>
                                                        <strong>{material.item.name}</strong> - {material.quantity}
                                                        <p>{material.item.description}</p>
                                                        <p>Rarity: {material.item.rarity}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                <button onClick={saveCharm} className="save-button">
                    Save Charm
                </button>
            </div>
        </Container>
    );
};

export default CharmDetails;