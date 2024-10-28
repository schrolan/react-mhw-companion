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

    const saveCharm = async (charm) => {
        const { id, name, ranks } = charm;

        await addCharm({
            variables: {
                userId: currentUser._id,
                charmId: id,
                name,
                ranks
            }
        });
        alert(`${name} saved!`);
    };

    if (!charm) return <div>No charm data available</div>;

    const { name, ranks } = charm;

    return (
        <Container>
            <div className="charm-card">
                <h2>{name}</h2>
                <p>Level: {ranks.level}</p>
                <p>Rarity: {ranks.rarity}</p>

                <div className="charm-skills">
                    <h3>Skills:</h3>
                    {ranks.skill.map((skill, index) => (
                        <div key={index}>
                            <h4>{skill.name}</h4>
                            <p>{skill.description}</p>
                            {skill.ranks.map((rank, i) => (
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

                {ranks.crafting?.craftable && (
                    <div className="crafting-materials">
                        <h3>Crafting Materials:</h3>
                        {ranks.crafting.materials.map((material, index) => (
                            <div key={index}>
                                <p>Quantity: {material.quantity}</p>
                                {material.item.map((item, i) => (
                                    <div key={i}>
                                        <p>Name: {item.name}</p>
                                        <p>Rarity: {item.rarity}</p>
                                        <p>Value: {item.value}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}

                <button onClick={() => saveCharm(charm)} className="save-button">
                    Save Charm
                </button>
            </div>
        </Container>
    );
};

export default CharmDetails;
