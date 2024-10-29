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

                {ranks.map((rank, index) => (
                    <div key={index}>
                        <p>Level: {rank.level}</p>
                        <p>Rarity: {rank.rarity}</p>

                        <div className="charm-skills">
                            <h3>Skills:</h3>
                            {rank.skills ? (
                                rank.skills.map((skill, i) => (
                                    <div key={i}>
                                        <h4>{skill.name}</h4>
                                        <p>{skill.description}</p>
                                        {skill.ranks ? (
                                            skill.ranks.map((skillRank, j) => (
                                                <div key={j} className="skill-rank">
                                                    <p>Level: {skillRank.level}</p>
                                                    <p>{skillRank.description}</p>
                                                    {skillRank.modifiers?.map((modifier, k) => (
                                                        <div key={k}>
                                                            <p>Affinity: {modifier.affinity}</p>
                                                            <p>Attack: {modifier.attack}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))
                                        ) : (
                                            <p>No ranks available for this skill</p>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p>No skills available</p>
                            )}
                        </div>

                        {rank.crafting?.craftable && (
                            <div className="crafting-materials">
                                <h3>Crafting Materials:</h3>
                                {rank.crafting.materials.map((material, i) => (
                                    <div key={i}>
                                        <p>Quantity: {material.quantity}</p>
                                        {Array.isArray(material.item) ? (
                                            material.item.map((item, j) => (
                                                <div key={j}>
                                                    <p>Name: {item.name}</p>
                                                    <p>Rarity: {item.rarity}</p>
                                                    <p>Value: {item.value}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <div>
                                                <p>Name: {material.item.name}</p>
                                                <p>Rarity: {material.item.rarity}</p>
                                                <p>Value: {material.item.value}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                <button onClick={() => saveCharm(charm)} className="save-button">
                    Save Charm
                </button>
            </div>
        </Container>
    );
};

export default CharmDetails;