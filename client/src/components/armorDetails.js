import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ARMOR } from '../utils/mutations';
import { GET_USER } from '../utils/queries';
import Container from './container';
import Auth from '../utils/auth';
import '../index.css';

const ArmorDetails = ({ armor }) => {
    const currentUser = Auth.getLoggedInUser();

    const [addArmor] = useMutation(ADD_ARMOR, {
        refetchQueries: [{ query: GET_USER }, 'GET_USER'],
    });

    const saveArmor = async (armor) => {
        const { id, name, type, rank, rarity, defense, resistances, skills, armorSet, crafting } = armor;

        await addArmor({
            variables: {
                userId: currentUser._id,
                armorId: id,
                name,
                type,
                rank,
                rarity,
                defense,
                resistances,
                skills,
                armorSet,
                crafting
            }
        });
        alert(`${name} saved!`);
    };

    if (!armor) return <div>No armor data available</div>;

    const { name, type, rank, rarity, defense, resistances, skills, armorSet, crafting, assets } = armor;

    return (
        <Container>
            <div className="armor-card">
                <h2>{name}</h2>
                <img src={assets.imageMale || assets.imageFemale} alt={`${name} armor`} className="armor-image" />
                <p>Type: {type}</p>
                <p>Rank: {rank}</p>
                <p>Rarity: {rarity}</p>

                {defense && (
                    <div className="armor-section">
                        <h3>Defense</h3>
                        <p>Base: {defense[0].base}</p>
                        <p>Max: {defense[0].max}</p>
                        <p>Augmented: {defense[0].augmented}</p>
                    </div>
                )}

                {resistances && (
                    <div className="armor-section">
                        <h3>Resistances</h3>
                        <p>Fire: {resistances.fire}</p>
                        <p>Water: {resistances.water}</p>
                        <p>Ice: {resistances.ice}</p>
                        <p>Thunder: {resistances.thunder}</p>
                        <p>Dragon: {resistances.dragon}</p>
                    </div>
                )}

                {skills && skills.length > 0 && (
                    <div className="armor-section">
                        <h3>Skills</h3>
                        {skills.map(skill => (
                            <div key={skill.id} className="skill">
                                <strong>{skill.name}</strong> - {skill.description}
                                {skill.ranks.map((rank, index) => (
                                    <div key={index}>
                                        <p>Level: {rank.level}</p>
                                        <p>{rank.description}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}

                {armorSet && (
                    <div className="armor-section">
                        <h3>Armor Set</h3>
                        <p>Name: {armorSet.name}</p>
                        <p>Rank: {armorSet.rank}</p>
                    </div>
                )}

                {crafting && crafting.materials && (
                    <div className="armor-section">
                        <h3>Crafting Materials</h3>
                        <ul>
                            {crafting.materials.map((material, index) => (
                                <li key={index}>
                                    {material.item.map(item => (
                                        <div key={item.id}>
                                            <strong>{item.name}</strong> - Quantity: {material.quantity}
                                        </div>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <button onClick={() => saveArmor(armor)} className="save-button">
                    Save Armor
                </button>
            </div>
        </Container>
    );
};

export default ArmorDetails;