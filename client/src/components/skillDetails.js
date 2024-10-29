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
        const { id, slug, name, description, ranks } = skill;

        await addSkill({
            variables: {
                userId: currentUser._id,
                id,
                slug,
                name,
                description,
                ranks: ranks.map(rank => ({
                    id: rank.id,
                    slug: rank.slug,
                    skill: rank.skill,
                    level: rank.level,
                    description: rank.description,
                    modifiers: rank.modifiers.map(modifier => ({
                        affinity: modifier.affinity,
                        attack: modifier.attack,
                        damageFire: modifier.damageFire,
                        damageWater: modifier.damageWater,
                        damageIce: modifier.damageIce,
                        damageThunder: modifier.damageThunder,
                        damageDragon: modifier.damageDragon,
                        defense: modifier.defense,
                        health: modifier.health,
                        sharpnessBonus: modifier.sharpnessBonus,
                        resistAll: modifier.resistAll,
                        resistFire: modifier.resistFire,
                        resistWater: modifier.resistWater,
                        resistIce: modifier.resistIce,
                        resistThunder: modifier.resistThunder,
                        resistDragon: modifier.resistDragon,
                    })),
                })),
            }
        });
        alert(`${name} saved!`);
    };

    if (!skill) return <div>No skill data available</div>;

    return (
        <Container>
            <div className="skill-card">
                <h2>{skill.name}</h2>
                <p>Slug: {skill.slug}</p>
                <p>{skill.description}</p>
                <h3>Ranks:</h3>
                {skill.ranks.map(rank => (
                    <div key={rank.id} className="rank">
                        <strong>Level {rank.level}:</strong> {rank.description}
                        <h4>Modifiers:</h4>
                        <ul>
                            {Array.isArray(rank.modifiers) && rank.modifiers.length > 0 ? (
                                rank.modifiers.map((modifier, index) => (
                                    <li key={index}>
                                        Affinity: {modifier.affinity}, Attack: {modifier.attack}, Damage (Fire): {modifier.damageFire}, Damage (Water): {modifier.damageWater}, Damage (Ice): {modifier.damageIce}, Damage (Thunder): {modifier.damageThunder}, Damage (Dragon): {modifier.damageDragon}, Defense: {modifier.defense}, Health: {modifier.health}, Sharpness Bonus: {modifier.sharpnessBonus}, Resist All: {modifier.resistAll}, Resist Fire: {modifier.resistFire}, Resist Water: {modifier.resistWater}, Resist Ice: {modifier.resistIce}, Resist Thunder: {modifier.resistThunder}, Resist Dragon: {modifier.resistDragon}
                                    </li>
                                ))
                            ) : (
                                <li>No modifiers available</li>
                            )}
                        </ul>
                    </div>
                ))}
                <button onClick={() => saveSkill(skill)} className="save-button">
                    Save Skill
                </button>
            </div>
        </Container>
    );
};

export default SkillDetails;
