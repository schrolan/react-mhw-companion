import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../utils/mutations';
import { GET_USER } from '../utils/queries';
import Container from './container';
import Auth from '../utils/auth';
import '../index.css';

const ItemDetails = ({ item }) => {
    const currentUser = Auth.getLoggedInUser();

    const [addItem] = useMutation(ADD_ITEM, {
        refetchQueries: [{ query: GET_USER }, 'GET_USER'],
    });

    const saveItem = async (item) => {
        const { id, name, description, rarity, carryLimit, value } = item;

        await addItem({
            variables: {
                userId: currentUser._id,
                itemId: id,
                name,
                description,
                rarity,
                carryLimit,
                value,
            }
        });
        alert(`${name} saved!`);
    };

    if (!item) return <div>No item data available</div>;

    const { name, description, rarity, carryLimit, value } = item;

    return (
        <Container>
            <div className="item-card">
                <h2>{name}</h2>
                <p>{description}</p>
                <p>Rarity: {rarity}</p>
                <p>Carry Limit: {carryLimit}</p>
                <p>Value: {value}</p>
                <button onClick={() => saveItem(item)} className="save-button">
                    Save Item
                </button>
            </div>
        </Container>
    );
};

export default ItemDetails;
