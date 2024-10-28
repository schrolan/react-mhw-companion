import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ARMORSET } from '../utils/mutations';
import { GET_USER } from '../utils/queries';
import Container from './container';
import Auth from '../utils/auth';
import '../index.css';

const ArmorSetDetails = ({ armorSet }) => {
    const currentUser = Auth.getLoggedInUser();

    const [addArmorSet] = useMutation(ADD_ARMORSET, {
        refetchQueries: [{ query: GET_USER }, 'GET_USER'],
    });

    const saveArmorSet = async (armorSet) => {
        const { id, name, rank, pieces, bonus } = armorSet;

        await addArmorSet({
            variables: {
                userId: currentUser._id,
                armorSetId: id,
                name,
                rank,
                pieces,
                bonus
            }
        });
        alert(`${name} saved!`);
    };

    if (!armorSet) return <div>No armor set data available</div>;

    const { name, rank, pieces, bonus } = armorSet;

    return (
        <Container>
            <div className="armor-set-card">
                <h2>{name} - Rank: {rank}</h2>

                <div className="armor-pieces">
                    <h3>Pieces:</h3>
                    {pieces.map((piece, index) => (
                        <div key={index} className="armor-piece">
                            <h4>{piece.name} ({piece.type})</h4>
                            <p>Rarity: {piece.rarity}</p>
                            <p>Defense - Base: {piece.defense[0]?.base}, Max: {piece.defense[0]?.max}</p>
                            <div className="resistances">
                                <h5>Resistances:</h5>
                                <p>Fire: {piece.resistances.fire}</p>
                                <p>Water: {piece.resistances.water}</p>
                                <p>Ice: {piece.resistances.ice}</p>
                                <p>Thunder: {piece.resistances.thunder}</p>
                                <p>Dragon: {piece.resistances.dragon}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {bonus && (
                    <div className="armor-bonus">
                        <h3>Bonus: {bonus.name}</h3>
                        {bonus.ranks.map((rank, index) => (
                            <div key={index}>
                                <p>Pieces required: {rank.pieces}</p>
                                {rank.skill.map((skill, i) => (
                                    <div key={i} className="bonus-skill">
                                        <strong>{skill.skillName}</strong> - {skill.description}
                                        {skill.modifiers && skill.modifiers.map((mod, j) => (
                                            <div key={j}>
                                                <p>Affinity: {mod.affinity}</p>
                                                <p>Attack: {mod.attack}</p>
                                                {/* Include other modifiers as needed */}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}

                <button onClick={() => saveArmorSet(armorSet)} className="save-button">
                    Save Armor Set
                </button>
            </div>
        </Container>
    );
};

export default ArmorSetDetails;
