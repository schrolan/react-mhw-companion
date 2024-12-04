import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_EVENT } from '../utils/mutations';
import { GET_USER } from '../utils/queries';
import Container from './container';
import Auth from '../utils/auth';
import '../index.css';

const EventDetails = ({ event, showSaveButton = true }) => {
    const currentUser = Auth.getLoggedInUser();

    const [addEvent] = useMutation(ADD_EVENT, {
        refetchQueries: [{ query: GET_USER }, 'GET_USER'],
    });

    const saveEvent = async () => {
        try {
            await addEvent({
                variables: {
                    userId: currentUser._id,
                    name: event.name,
                    platform: event.platform,
                    exclusive: event.exclusive,
                    type: event.type,
                    expansion: event.expansion,
                    description: event.description,
                    requirements: event.requirements,
                    questRank: event.questRank,
                    successConditions: event.successConditions,
                    location: Array.isArray(event.location)
                        ? event.location.map(loc => ({
                            name: loc.name,
                            zoneCount: loc.zoneCount,
                            camps: loc.camps?.map(camp => ({
                                name: camp.name,
                                zone: camp.zone,
                            })),
                        }))
                        : [],
                },
            });
            alert(`${event.name} saved successfully!`);
        } catch (error) {
            console.error('Error saving event:', error);
            alert('Failed to save event');
        }
    };

    if (!event) return <div>No event data available</div>;

    return (
        <Container>
            <div className="event-card">
                <h2>{event.name}</h2>
                <p>Platform: {event.platform}</p>
                <p>Exclusive: {event.exclusive ? 'Yes' : 'No'}</p>
                <p>Type: {event.type}</p>
                <p>Expansion: {event.expansion}</p>
                <p>Description: {event.description}</p>
                <p>Requirements: {event.requirements}</p>
                <p>Quest Rank: {event.questRank}</p>
                <p>Success Conditions: {event.successConditions}</p>

                {event.location?.length > 0 && (
                    <div className="location">
                        <h3>Locations</h3>
                        {event.location.map((loc, index) => (
                            <div key={index} className="location-details">
                                <p>Name: {loc.name}</p>
                                <p>Zone Count: {loc.zoneCount}</p>
                                {loc.camps?.length > 0 && (
                                    <div className="camps">
                                        <h4>Camps</h4>
                                        {loc.camps.map((camp, i) => (
                                            <p key={i}>
                                                {camp.name} (Zone {camp.zone})
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {showSaveButton && (
                    <button onClick={() => saveEvent(event)} className="save-button">
                        Save Event
                    </button>
                )}
            </div>
        </Container>
    );
};

export default EventDetails;