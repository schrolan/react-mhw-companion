import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_WEAPON } from '../utils/mutations';
import { GET_USER } from '../utils/queries';
import Container from './container';
import Auth from '../utils/auth';
import '../index.css';

const WeaponDetails = ({ weapon }) => {
    const currentUser = Auth.getLoggedInUser();

    const [addWeapon] = useMutation(ADD_WEAPON, {
        refetchQueries: [{ query: GET_USER }, 'GET_USER'],
    });

    const saveWeapon = async (weapon) => {
        try {
            await addWeapon({
                variables: {
                    userId: currentUser._id,
                    name: weapon.name,
                    type: weapon.type,
                    rarity: weapon.rarity,
                    attack: weapon.attack,
                    elderseal: weapon.elderseal,
                    attributes: weapon.attributes,
                    damageType: weapon.damageType,
                    durability: weapon.durability,
                    slots: weapon.slots,
                    elements: weapon.elements,
                    // Crafting - only pass relevant fields, not the id
                    crafting: {
                        craftable: weapon.crafting.craftable,
                        previous: weapon.crafting.previous,
                        branches: weapon.crafting.branches,
                        craftingMaterials: weapon.crafting.craftingMaterials.map(material => ({
                            quantity: material.quantity,
                            item: {
                                name: material.item.name,
                                description: material.item.description,
                                rarity: material.item.rarity,
                                carryLimit: material.item.carryLimit,
                                value: material.item.value
                            }
                        })),
                        upgradeMaterials: weapon.crafting.upgradeMaterials.map(material => ({
                            quantity: material.quantity,
                            item: {
                                name: material.item.name,
                                description: material.item.description,
                                rarity: material.item.rarity,
                                carryLimit: material.item.carryLimit,
                                value: material.item.value
                            }
                        })),
                        assets: weapon.crafting.assets
                    },
                },
            });
            alert(`${weapon.name} saved to user!`);
        } catch (error) {
            console.error("Error saving weapon", error);
            alert("Error saving weapon");
        }
    };
    
    return (
        <Container>
            <div className="weapon-card">
                <h2>{weapon.name}</h2>
                <p>Type: {weapon.type}</p>
                <p>Rarity: {weapon.rarity}</p>

                {weapon.attack && (
                    <div>
                        <h3>Attack</h3>
                        <p>Display: {weapon.attack.display}</p>
                        <p>Raw: {weapon.attack.raw}</p>
                    </div>
                )}

                <p>Elderseal: {weapon.elderseal ? 'Yes' : 'No'}</p>

                {weapon.attributes && (
                    <div>
                        <h3>Attributes</h3>
                        <p>Damage Type: {weapon.attributes.damageType}</p>
                    </div>
                )}

                <p>Damage Type: {weapon.damageType}</p>

                {weapon.durability && weapon.durability.length > 0 && (
                    <div>
                        <h3>Durability</h3>
                        <ul>
                            {weapon.durability.map((dur, index) => (
                                <li key={index}>
                                    Red: {dur.red}, Orange: {dur.orange}, Yellow: {dur.yellow}, Green: {dur.green}, Blue: {dur.blue}, White: {dur.white}, Purple: {dur.purple}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {weapon.slots && weapon.slots.length > 0 && (
                    <div>
                        <h3>Slots</h3>
                        <ul>
                            {weapon.slots.map((slot, index) => (
                                <li key={index}>Rank: {slot.rank}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {weapon.elements && weapon.elements.length > 0 && (
                    <div>
                        <h3>Elements</h3>
                        <ul>
                            {weapon.elements.map((element, index) => (
                                <li key={index}>
                                    Type: {element.type}, Damage: {element.damage}, Hidden: {element.hidden ? 'Yes' : 'No'}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {weapon.crafting && (
                    <div>
                        <h3>Crafting</h3>
                        <p>Craftable: {weapon.crafting.craftable ? 'Yes' : 'No'}</p>
                        <p>Previous: {weapon.crafting.previous}</p>

                        {weapon.crafting.branches && weapon.crafting.branches.length > 0 && (
                            <div>
                                <h4>Branches</h4>
                                <ul>
                                    {weapon.crafting.branches.map((branch, index) => (
                                        <li key={index}>{branch}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {weapon.crafting.craftingMaterials && (
                            <div>
                                <h4>Crafting Materials</h4>
                                <ul>
                                    {weapon.crafting.craftingMaterials.map((material, index) => (
                                        <li key={index}>
                                            <strong>{material.item.name}</strong> - {material.item.description}
                                            <div>Quantity: {material.quantity}</div>
                                            <div>Rarity: {material.item.rarity}</div>
                                            <div>Carry Limit: {material.item.carryLimit}</div>
                                            <div>Value: {material.item.value}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {weapon.crafting.upgradeMaterials && (
                            <div>
                                <h4>Upgrade Materials</h4>
                                <ul>
                                    {weapon.crafting.upgradeMaterials.map((material, index) => (
                                        <li key={index}>
                                            <strong>{material.item.name}</strong> - {material.item.description}
                                            <div>Quantity: {material.quantity}</div>
                                            <div>Rarity: {material.item.rarity}</div>
                                            <div>Carry Limit: {material.item.carryLimit}</div>
                                            <div>Value: {material.item.value}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {weapon.crafting.assets && (
                            <div>
                                <h4>Assets</h4>
                                <img src={weapon.crafting.assets.icon} alt={`${weapon.name} Icon`} />
                                <img src={weapon.crafting.assets.image} alt={`${weapon.name} Image`} />
                            </div>
                        )}
                    </div>
                )}

                <button onClick={() => saveWeapon(weapon)} className="save-button">
                    Save Weapon
                </button>
            </div>
        </Container>
    );
};

export default WeaponDetails;