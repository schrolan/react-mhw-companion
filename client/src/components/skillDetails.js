import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_SKILL } from '../utils/mutations';
import { GET_USER } from '../utils/queries';
import Container from './container';
import Auth from '../utils/auth';
import '../index.css';

const SkillDetails = ({ skill }) => {
    const currentUser = Auth.getLoggedInUser();

    const [addSkill] = useMutation(ADD_SKILL, {
        refetchQueries: [{ query: GET_USER }, 'GET_USER'],
    });

    const saveSkill = async (skill) => {
        try {
            await addSkill({
                variables: {
                    userId: currentUser._id,
                    slug: skill.slug,
                    name: skill.name,
                    description: skill.description,
                    ranks: skill.ranks.map(rank => ({
                        slug: rank.slug,
                        skill: rank.skill,
                        level: rank.level,
                        description: rank.description,
                        modifiers: rank.modifiers
                    }))
                }
            });
            alert(`${skill.name} saved to user!`);
        } catch (error) {
            console.error("Error saving skill", error);
            alert("Error saving skill");
        }
    };

    return (
        <Container>
            <div className="skill-card">
                <h2>{skill.name}</h2>
                <p>{skill.description}</p>

                {skill.ranks && skill.ranks.length > 0 && (
                    <div className="skill-section">
                        <h3>Ranks</h3>
                        <ul>
                            {skill.ranks.map((rank, index) => (
                                <li key={index}>
                                    <strong>Level {rank.level}</strong> - {rank.description}
                                    {rank.modifiers && Object.keys(rank.modifiers).length > 0 && (
                                        <div>
                                            <h4>Modifiers:</h4>
                                            <ul>
                                                {Object.entries(rank.modifiers).map(([key, value]) => (
                                                    <li key={key}>{key}: {value}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <button onClick={() => saveSkill(skill)} className="save-button">
                    Save Skill
                </button>
            </div>
        </Container>
    );
};

export default SkillDetails;