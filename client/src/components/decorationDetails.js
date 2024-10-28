import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_DECORATION } from '../utils/mutations';
import { GET_USER } from '../utils/queries';
import Container from './container';
import Auth from '../utils/auth';
import '../index.css';

const DecorationDetails = ({ decoration }) => {
    const currentUser = Auth.getLoggedInUser();

    const [addDecoration] = useMutation(ADD_DECORATION, {
        refetchQueries: [{ query: GET_USER }, 'GET_USER'],
    });

    const saveDecoration = async (decoration) => {
        const { id, name, rarity, skill, slot } = decoration;

        await addDecoration({
            variables: {
                userId: currentUser._id,
                decorationId: id,
                name,
                rarity,
                skill,
                slot
            }
        });
        alert(`${name} saved!`);
    };

    if (!decoration) return <div>No decoration data available</div>;

    const { name, rarity, skill, slot } = decoration;

    return (
        <Container>
            <div className="decoration-card">
                <h2>{name}</h2>
                <p>Rarity: {rarity}</p>
                <p>Slot: {slot}</p>

                <div className="decoration-skills">
                    <h3>Skills:</h3>
                    {skill.map((skillItem, index) => (
                        <div key={index}>
                            <h4>{skillItem.name}</h4>
                            <p>{skillItem.description}</p>
                            {skillItem.ranks.map((rank, i) => (
                                <div key={i} className="skill-rank">
                                    <p>Level: {rank.level}</p>
                                    <p>{rank.description}</p>
                                    {rank.modifiers.map((modifier, j) => (
                                        <div key={j}>
                                            <p>Affinity: {modifier.affinity}</p>
                                            <p>Attack: {modifier.attack}</p>
                                            {/* Display additional modifiers as needed */}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <button onClick={() => saveDecoration(decoration)} className="save-button">
                    Save Decoration
                </button>
            </div>
        </Container>
    );
};

export default DecorationDetails;