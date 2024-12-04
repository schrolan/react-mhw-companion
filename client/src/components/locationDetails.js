import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_LOCATION } from '../utils/mutations';
import { GET_USER } from '../utils/queries';
import Container from './container';
import Auth from '../utils/auth';
import '../index.css';

const LocationDetails = ({ location, showSaveButton = true }) => {
    const currentUser = Auth.getLoggedInUser();

    const [addLocation] = useMutation(ADD_LOCATION, {
        refetchQueries: [{ query: GET_USER }, 'GET_USER'],
    });

    const saveLocation = async () => {
        try {
            await addLocation({
                variables: {
                    userId: currentUser._id,
                    name: location.name,
                    zoneCount: location.zoneCount,
                    camps: location.camps?.map(camp => ({
                        name: camp.name,
                        zone: camp.zone,
                    })),
                },
            });
            alert(`${location.name} saved successfully!`);
        } catch (error) {
            console.error('Error saving location:', error);
            alert('Failed to save location');
        }
    };

    if (!location) return <div>No location data available</div>;

    return (
        <Container>
            <div className="location-card">
                <h2>{location.name}</h2>
                <p>Zone Count: {location.zoneCount}</p>

                {location.camps?.length > 0 && (
                    <div className="camps">
                        <h3>Camps</h3>
                        {location.camps.map((camp, index) => (
                            <div key={index} className="camp">
                                <p><strong>Camp Name:</strong> {camp.name}</p>
                                <p><strong>Zone:</strong> {camp.zone}</p>
                            </div>
                        ))}
                    </div>
                )}

                {showSaveButton && (
                    <button onClick={() => saveLocation(location)} className="save-button">
                        Save Location
                    </button>
                )}
            </div>
        </Container>
    );
};

export default LocationDetails;