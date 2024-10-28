import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_LOCATION } from '../utils/mutations';
import { GET_USER } from '../utils/queries';
import Container from './container';
import Auth from '../utils/auth';
import '../index.css';

const LocationDetails = ({ location }) => {
    const currentUser = Auth.getLoggedInUser();

    const [addLocation] = useMutation(ADD_LOCATION, {
        refetchQueries: [{ query: GET_USER }, 'GET_USER'],
    });

    const saveLocation = async (location) => {
        const { id, name, zoneCount, camps } = location;

        await addLocation({
            variables: {
                userId: currentUser._id,
                locationId: id,
                name,
                zoneCount,
                camps: camps.map(camp => ({
                    id: camp.id,
                    name: camp.name,
                    zone: camp.zone
                })),
            }
        });
        alert(`${name} saved!`);
    };

    if (!location) return <div>No location data available</div>;

    return (
        <Container>
            <div className="location-card">
                <h2>{location.name}</h2>
                <p>Zone Count: {location.zoneCount}</p>
                <h3>Camps:</h3>
                <ul>
                    {location.camps.map((camp) => (
                        <li key={camp.id}>
                            {camp.name} - Zone: {camp.zone}
                        </li>
                    ))}
                </ul>
                <button onClick={() => saveLocation(location)} className="save-button">
                    Save Location
                </button>
            </div>
        </Container>
    );
};

export default LocationDetails;