import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_MONSTER } from '../utils/mutations';
import { GET_USER } from '../utils/queries';
import Container from './container';
import Auth from '../utils/auth';
import '../index.css';

const MonsterDetails = ({ monster }) => {
    const currentUser = Auth.getLoggedInUser();

    const [addMonster] = useMutation(ADD_MONSTER, {
        refetchQueries: [{ query: GET_USER }, 'GET_USER'],
    });

    const saveMonster = async (monster) => {
        const { name, type, species, description, elements, ailments, location, resistances, weaknesses, reward } = monster;

        await addMonster({
            variables: {
                userId: currentUser._id,
                name,
                type,
                species,
                description,
                elements,
                ailments: ailments.map(a => ({
                    id: a.id,
                    name: a.name,
                    description: a.description,
                    recovery: {
                        action: a.recovery.action,
                        item: a.recovery.item.map(i => ({
                            id: i.id,
                            name: i.name,
                            description: i.description,
                            rarity: i.rarity,
                            carryLimit: i.carryLimit,
                            value: i.value
                        })),
                    },
                    protection: {
                        item: a.protection.item.map(i => ({
                            id: i.id,
                            name: i.name,
                            description: i.description,
                            rarity: i.rarity,
                            carryLimit: i.carryLimit,
                            value: i.value
                        })),
                        skill: a.protection.skill.map(s => ({
                            id: s.id,
                            slug: s.slug,
                            name: s.name,
                            description: s.description,
                            ranks: s.ranks.map(r => ({
                                id: r.id,
                                slug: r.slug,
                                skill: r.skill,
                                level: r.level,
                                description: r.description,
                                modifiers: r.modifiers
                            }))
                        })),
                    },
                })),
                location: location.map(l => ({
                    id: l.id,
                    name: l.name,
                    zoneCount: l.zoneCount,
                    camps: l.camps.map(c => ({
                        id: c.id,
                        name: c.name,
                        zone: c.zone
                    })),
                })),
                resistances,
                weaknesses,
                reward: reward.map(r => ({
                    id: r.id,
                    item: r.item.map(i => ({
                        id: i.id,
                        name: i.name,
                        description: i.description,
                        rarity: i.rarity,
                        carryLimit: i.carryLimit,
                        value: i.value
                    })),
                    conditions: r.conditions
                }))
            }
        });
        alert(`${name} saved!`);
    };

    if (!monster) return <div>No monster data available</div>;

    return (
        <Container>
            <div className="monster-card">
                <h2>{monster.name}</h2>
                <p>Type: {monster.type}</p>
                <p>Species: {monster.species}</p>
                <p>{monster.description}</p>
                <h3>Elements:</h3>
                <ul>
                    {monster.elements.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
                <h3>Ailments:</h3>
                {monster.ailments.map(ailment => (
                    <div key={ailment.id}>
                        <strong>{ailment.name}</strong>: {ailment.description}
                    </div>
                ))}
                <h3>Locations:</h3>
                {monster.location.map(location => (
                    <div key={location.id}>
                        <strong>{location.name}</strong> - Zones: {location.zoneCount}
                    </div>
                ))}
                <button onClick={() => saveMonster(monster)} className="save-button">
                    Save Monster
                </button>
            </div>
        </Container>
    );
};

export default MonsterDetails;