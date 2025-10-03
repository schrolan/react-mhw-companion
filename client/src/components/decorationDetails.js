import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_DECORATION } from '../utils/mutations';
import { GET_USER } from '../utils/queries';
import Container from './container';
import Auth from '../utils/auth';
import '../index.css';

const DecorationDetails = ({ decoration, showSaveButton = true }) => {
    const currentUser = Auth.getLoggedInUser();

    const [addDecoration] = useMutation(ADD_DECORATION, {
        refetchQueries: [{ query: GET_USER }, 'GET_USER'],
    });

    const saveDecoration = async () => {
        try {
            await addDecoration({
                variables: {
                    userId: currentUser._id,
                    slug: decoration.slug,
                    name: decoration.name,
                    rarity: decoration.rarity,
                    skill: decoration.skills?.map(skill => ({
                        slug: skill.slug,
                        description: skill.description,
                        level: skill.level,
                        skill: skill.skill,
                        skillName: skill.skillName,
                        modifiers: skill.modifiers || {},
                    })),
                    slot: decoration.slot,
                },
            });
            alert(`${decoration.name} saved successfully!`);
        } catch (error) {
            console.error('Error saving decoration:', error);
            alert('Failed to save decoration');
        }
    };

    if (!decoration) return <div>No decoration data available</div>;

    return (
        <Container>
            <div className="decoration-card">
                <h2>{decoration.name}</h2>
                <p>Slug: {decoration.slug}</p>
                <p>Rarity: {decoration.rarity}</p>
                <p>Slot: {decoration.slot}</p>

                {decoration.skills?.length > 0 && (
                    <div className="skills">
                        <h3>Skills</h3>
                        {decoration.skills.map((skill, index) => (
                            <div key={index} className="skill">
                                <strong>{skill.skillName}</strong> - {skill.description}
                                <p>Level: {skill.level}</p>
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

                {showSaveButton && (
                    <button onClick={() => saveDecoration(decoration)} className="save-button">
                        Save Decoration
                    </button>
                )}
            </div>
        </Container>
    );
};

export default DecorationDetails;