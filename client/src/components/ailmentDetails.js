import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_AILMENT } from '../utils/mutations';
import { GET_USER } from '../utils/queries';
import Container from './container';
import Auth from '../utils/auth';
import '../index.css';

const AilmentDetails = ({ ailment, showSaveButton = true }) => {
    const currentUser = Auth.getLoggedInUser();

    const [addAilment] = useMutation(ADD_AILMENT, {
        refetchQueries: [{ query: GET_USER }, 'GET_USER'],
    });

    const saveAilment = async (ailment) => {
        try {
            await addAilment({
                variables: {
                    userId: currentUser._id,
                    name: ailment.name,
                    description: ailment.description,
                    recovery: {
                        actions: ailment.recovery?.actions,
                        items: ailment.recovery?.items.map(item => ({
                            name: item.name,
                            description: item.description,
                            rarity: item.rarity,
                            carryLimit: item.carryLimit,
                            value: item.value
                        }))
                    },
                    protection: {
                        items: ailment.protection?.items.map(item => ({
                            name: item.name,
                            description: item.description,
                            rarity: item.rarity,
                            carryLimit: item.carryLimit,
                            value: item.value
                        })),
                        skills: ailment.protection?.skills.map(skill => ({
                            slug: skill.slug,
                            name: skill.name,
                            description: skill.description,
                            ranks: Array.isArray(skill.ranks) ? skill.ranks.map(rank => ({
                                slug: rank.slug,
                                skill: rank.skill,
                                level: rank.level,
                                description: rank.description,
                                modifiers: rank.modifiers
                            })) : [] // Ensure ranks is defined as an array
                        }))
                    }
                }
            });
            alert(`${ailment.name} saved to user!`);
        } catch (error) {
            console.log("Error saving ailment", error);
            alert("Error saving ailment");
        }
    };

    return (
        <Container>
            <div className="ailment-card">
                <h2>{ailment.name}</h2>
                <p>{ailment.description}</p>

                {ailment.recovery && (
                    <div className="ailment-section">
                        <h3>Recovery</h3>
                        {ailment.recovery.actions && ailment.recovery.actions.length > 0 && (
                            <div>
                                <h4>Actions</h4>
                                <ul>
                                    {ailment.recovery.actions.map((action, index) => (
                                        <li key={index}>{action}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {ailment.recovery.items && ailment.recovery.items.length > 0 && (
                            <div>
                                <h4>Items</h4>
                                <ul>
                                    {ailment.recovery.items.map(item => (
                                        <li key={item.id}>
                                            <strong>{item.name}</strong> - {item.description}
                                            <div>Rarity: {item.rarity}</div>
                                            <div>Carry Limit: {item.carryLimit}</div>
                                            <div>Value: {item.value}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                {ailment.protection && (
                    <div className="ailment-section">
                        <h3>Protection</h3>

                        {ailment.protection.items && ailment.protection.items.length > 0 && (
                            <div>
                                <h4>Items</h4>
                                <ul>
                                    {ailment.protection.items.map(item => (
                                        <li key={item.id}>
                                            <strong>{item.name}</strong> - {item.description}
                                            <div>Rarity: {item.rarity}</div>
                                            <div>Carry Limit: {item.carryLimit}</div>
                                            <div>Value: {item.value}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {ailment.protection.skills && ailment.protection.skills.length > 0 && (
                            <div>
                                <h4>Skills</h4>
                                {ailment.protection.skills.map(skill => (
                                    <div key={skill.id} className="skill">
                                        <strong>{skill.name}</strong> - {skill.description}
                                        <ul>
                                            {Array.isArray(skill.ranks) && skill.ranks.length > 0 ? (
                                                skill.ranks.map((rank, index) => (
                                                    <li key={index}>
                                                        <div>Level: {rank.level}</div>
                                                        <p>{rank.description}</p>
                                                        <div>Modifiers:</div>
                                                        <ul>
                                                            {Object.entries(rank.modifiers[0] || {}).map(([key, value]) => (
                                                                <li key={key}>{key}: {value}</li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                ))
                                            ) : (
                                                <li>No ranks available</li>
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Conditionally render the Save Ailment button */}
                {showSaveButton && (
                    <button onClick={() => saveAilment(ailment)} className="save-button">
                        Save Ailment
                    </button>
                )}
            </div>
        </Container>
    );
};

export default AilmentDetails;