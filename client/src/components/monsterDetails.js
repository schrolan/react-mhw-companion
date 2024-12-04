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
        try {
          await addMonster({
            variables: {
              userId: currentUser._id,
              name: monster.name,
              type: monster.type,
              species: monster.species,
              description: monster.description,
              elements: monster.elements,
              ailments: monster.ailments.map(ailment => ({
                name: ailment.name,
                description: ailment.description,
                recovery: {
                  actions: ailment.recovery.actions,
                  items: ailment.recovery.items.map(item => ({
                    name: item.name,         // Omit id
                    description: item.description,
                    rarity: item.rarity,
                    carryLimit: item.carryLimit,
                    value: item.value,
                  })),
                },
                protection: ailment.protection,
              })),
              locations: monster.locations.map(location => ({
                name: location.name,
                zoneCount: location.zoneCount,
                camps: location.camps,
              })),
              resistances: monster.resistances,
              weaknesses: monster.weaknesses,
              rewards: monster.rewards.map(reward => ({
                item: {
                  name: reward.item.name,
                  description: reward.item.description,
                  rarity: reward.item.rarity,
                  carryLimit: reward.item.carryLimit,
                  value: reward.item.value,
                },
                conditions: reward.conditions,
              })),
            },
          });
          alert(`${monster.name} saved successfully!`);
        } catch (error) {
          console.error("Error saving monster", error);
          alert("Error saving monster");
        }
      };

    return (
        <Container>
            <div className="monster-card">
                <h2>{monster.name}</h2>
                <p>Type: {monster.type}</p>
                <p>Species: {monster.species}</p>
                <p>Description: {monster.description}</p>

                {monster.elements && (
                    <div>
                        <h3>Elements</h3>
                        <ul>
                            {monster.elements.map((element, index) => (
                                <li key={index}>{element}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {monster.ailments && (
                    <div>
                        <h3>Ailments</h3>
                        <ul>
                            {monster.ailments.map((ailment, index) => (
                                <li key={index}>
                                    <strong>{ailment.name}</strong>: {ailment.description}
                                    {ailment.recovery && (
                                        <div>
                                            <h4>Recovery</h4>
                                            <p>Actions: {ailment.recovery.actions}</p>
                                            <ul>
                                                {ailment.recovery.items.map((item, idx) => (
                                                    <li key={idx}>
                                                        {item.name} - {item.description}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {ailment.protection && (
                                        <div>
                                            <h4>Protection</h4>
                                            <ul>
                                                {ailment.protection.items.map((item, idx) => (
                                                    <li key={idx}>
                                                        {item.name} - {item.description}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {monster.locations && (
                    <div>
                        <h3>Locations</h3>
                        <ul>
                            {monster.locations.map((location, index) => (
                                <li key={index}>
                                    <strong>{location.name}</strong>
                                    <p>Zones: {location.zoneCount}</p>
                                    {location.camps && location.camps.length > 0 ? (
                                        <div>
                                            <h4>Camps</h4>
                                            <ul>
                                                {location.camps.map((camp, idx) => (
                                                    <li key={idx}>
                                                        {camp.name} (Zone: {camp.zone})
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        <p>No camps available for this location</p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {monster.resistances && (
                    <div>
                        <h3>Resistances</h3>
                        <ul>
                            {monster.resistances.map((resistance, index) => (
                                <li key={index}>
                                    {resistance.element} - {resistance.condition}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {monster.weaknesses && (
                    <div>
                        <h3>Weaknesses</h3>
                        <ul>
                            {monster.weaknesses.map((weakness, index) => (
                                <li key={index}>
                                    {weakness.element} - {weakness.stars} stars, {weakness.condition}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {monster.rewards && (
                    <div>
                        <h3>Rewards</h3>
                        <ul>
                            {monster.rewards.map((reward, index) => (
                                <li key={index}>
                                    <strong>{reward.item.name}</strong> - {reward.item.description}
                                    <h4>Conditions</h4>
                                    <ul>
                                        {reward.conditions.map((condition, idx) => (
                                            <li key={idx}>
                                                Type: {condition.type}, Subtype: {condition.subtype}, Rank: {condition.rank}, Quantity: {condition.quantity}, Chance: {condition.chance}%
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <button onClick={() => saveMonster(monster)} className="save-button">
                    Save Monster
                </button>
            </div>
        </Container>
    );
};

export default MonsterDetails;