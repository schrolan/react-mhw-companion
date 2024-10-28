import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_AILMENT } from '../utils/mutations';
import { GET_USER } from '../utils/queries';
import Container from './container';
import Auth from '../utils/auth';
import '../index.css';

const AilmentDetails = ({ ailment }) => {
    const currentUser = Auth.getLoggedInUser();
  
    const [addAilment] = useMutation(ADD_AILMENT, {
        refetchQueries: [{ query: GET_USER }, 'GET_USER'],
    });
  
    const saveAilment = async (ailment) => {
        const { _id, name, description, recovery, protection } = ailment;

        await addAilment({
            variables: {
                userId: currentUser._id,
                ailmentId: _id,
                name,
                description,
                recovery,
                protection
            }
        });
        alert(`${name} saved!`);
    };
  
    if (!ailment) return <div>No ailment data available</div>;

    const { name, description, recovery, protection } = ailment;
  
    return (
        <Container>
            <div className="ailment-card">
                <h2>{name}</h2>
                <p>{description}</p>

                {recovery && (
                    <div className="ailment-section">
                        <h3>Recovery</h3>

                        {/* Display Recovery Actions */}
                        {recovery.actions && recovery.actions.length > 0 && (
                            <div>
                                <h4>Actions</h4>
                                <ul>
                                    {recovery.actions.map((action, index) => (
                                        <li key={index}>{action}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Display Recovery Items */}
                        {recovery.items && recovery.items.length > 0 && (
                            <div>
                                <h4>Items</h4>
                                <ul>
                                    {recovery.items.map(item => (
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

                {protection && (
                    <div className="ailment-section">
                        <h3>Protection</h3>

                        {/* Display Protection Items */}
                        {protection.items && protection.items.length > 0 && (
                            <div>
                                <h4>Items</h4>
                                <ul>
                                    {protection.items.map(item => (
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

                        {/* Display Protection Skills */}
                        {protection.skills && protection.skills.length > 0 && (
                            <div>
                                <h4>Skills</h4>
                                {protection.skills.map(skill => (
                                    <div key={skill.id} className="skill">
                                        <strong>{skill.name}</strong> - {skill.description}
                                        <ul>
                                            {/* Ensure ranks exists and is an array */}
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
                                                <li>No ranks available</li> // Handle case where ranks is empty or undefined
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Save Ailment Button */}
                <button onClick={() => saveAilment(ailment)} className="save-button">
                    Save Ailment
                </button>
            </div>
        </Container>
    );
};

export default AilmentDetails;
