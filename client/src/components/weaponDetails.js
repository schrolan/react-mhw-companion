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

    // Ensure crafting is destructured from weapon
    const { id, name, type, rarity, attack, elderseal, attributes, durability, slots, elements, crafting } = weapon;

    const saveWeapon = async () => {
        if (!crafting) {
            alert("Crafting details are missing!");
            return;
        }

        await addWeapon({
            variables: {
                userId: currentUser._id,
                id,
                name,
                type,
                rarity,
                attack: {
                    display: attack.display,
                    raw: attack.raw,
                },
                elderseal,
                attributes: {
                    damageType: attributes.damageType,
                },
                damageType: weapon.damageType,
                durability,
                slots: slots.map(slot => ({
                    rank: slot.rank,
                })),
                elements: elements.map(element => ({
                    type: element.type,
                    damage: element.damage,
                    hidden: element.hidden,
                })),
                crafting: {
                    craftable: crafting.craftable,
                    previous: crafting.previous,
                    branches: crafting.branches,
                    craftingMaterials: crafting.craftingMaterials.map(material => ({
                        quantity: material.quantity,
                        item: material.item.map(item => ({
                            id: item.id,
                            name: item.name,
                            description: item.description,
                            rarity: item.rarity,
                            carryLimit: item.carryLimit,
                            value: item.value,
                        })),
                    })),
                    upgradeMaterials: crafting.upgradeMaterials.map(material => ({
                        quantity: material.quantity,
                        item: material.item.map(item => ({
                            id: item.id,
                            name: item.name,
                            description: item.description,
                            rarity: item.rarity,
                            carryLimit: item.carryLimit,
                            value: item.value,
                        })),
                    })),
                    assets: {
                        icon: crafting.assets.icon,
                        image: crafting.assets.image,
                    },
                },
            }
        });
        alert(`${name} saved!`);
    };

    if (!weapon) return <div>No weapon data available</div>;

    return (
        <Container>
            <div className="weapon-card">
                <h2>{weapon.name}</h2>
                <p>Type: {weapon.type}</p>
                <p>Rarity: {weapon.rarity}</p>
                <p>Attack (Display): {weapon.attack.display}</p>
                <p>Attack (Raw): {weapon.attack.raw}</p>
                <p>Elderseal: {weapon.elderseal ? 'Yes' : 'No'}</p>
                <p>Damage Type: {weapon.attributes.damageType}</p>
                <h3>Durability:</h3>
                <ul>
                    {weapon.durability.map((durability, index) => (
                        <li key={index}>
                            Red: {durability.red}, Orange: {durability.orange}, Yellow: {durability.yellow}, Green: {durability.green}, Blue: {durability.blue}, White: {durability.white}, Purple: {durability.purple}
                        </li>
                    ))}
                </ul>
                <h3>Slots:</h3>
                <ul>
                    {weapon.slots.map((slot, index) => (
                        <li key={index}>Rank: {slot.rank}</li>
                    ))}
                </ul>
                <h3>Elements:</h3>
                <ul>
                    {weapon.elements.map((element, index) => (
                        <li key={index}>{element.type}: {element.damage} (Hidden: {element.hidden ? 'Yes' : 'No'})</li>
                    ))}
                </ul>
                <h3>Crafting:</h3>
                <p>Craftable: {crafting?.craftable ? 'Yes' : 'No'}</p>
                <p>Previous Weapon ID: {crafting?.previous || 'N/A'}</p>
                <h4>Crafting Materials:</h4>
                <ul>
                    {crafting?.craftingMaterials.map((material, index) => (
                        <li key={index}>
                            {material.quantity} x {material.item.map(item => item.name).join(', ')}
                        </li>
                    ))}
                </ul>
                <h4>Upgrade Materials:</h4>
                <ul>
                    {crafting?.upgradeMaterials.map((material, index) => (
                        <li key={index}>
                            {material.quantity} x {material.item.map(item => item.name).join(', ')}
                        </li>
                    ))}
                </ul>
                <img src={crafting?.assets.image} alt={weapon.name} className="weapon-image" />
                <button onClick={saveWeapon} className="save-button">
                    Save Weapon
                </button>
            </div>
        </Container>
    );
};

export default WeaponDetails;