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

    const saveItem = async () => {
        try {
            await addItem({
                variables: {
                    userId: currentUser._id,
                    name: item.name,
                    description: item.description,
                    rarity: item.rarity,
                    carryLimit: item.carryLimit,
                    value: item.value,
                },
            });
            alert(`${item.name} saved successfully!`);
        } catch (error) {
            console.error('Error saving item:', error);
            alert('Failed to save item');
        }
    };

    if (!item) return <div>No item data available</div>;

    return (
        <Container>
            <div className="item-card">
                <h2>{item.name}</h2>
                <p>Description: {item.description}</p>
                <p>Rarity: {item.rarity}</p>
                <p>Carry Limit: {item.carryLimit}</p>
                <p>Value: {item.value}</p>
                <button onClick={saveItem} className="save-button">
                    Save Item
                </button>
            </div>
        </Container>
    );
};

export default ItemDetails;

