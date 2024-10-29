import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_EVENT } from '../utils/mutations';
import { GET_USER } from '../utils/queries';
import Container from './container';
import Auth from '../utils/auth';
import '../index.css';

const EventDetails = ({ event }) => {
    const currentUser = Auth.getLoggedInUser();

    const [addEvent] = useMutation(ADD_EVENT, {
        refetchQueries: [{ query: GET_USER }, 'GET_USER'],
    });

    const saveEvent = async (event) => {
        const { id, name, platform, exclusive, type, expansion, description, requirements, questRank, successConditions, startTimestamp, endTimestamp, location } = event;

        await addEvent({
            variables: {
                userId: currentUser._id,
                eventId: id,
                name,
                platform,
                exclusive,
                type,
                expansion,
                description,
                requirements,
                questRank,
                successConditions,
                startTimestamp,
                endTimestamp,
                location
            }
        });
        alert(`${name} saved!`);
    };

    if (!event) return <div>No event data available</div>;

    const { name, platform, exclusive, type, expansion, description, requirements, questRank, successConditions, startTimestamp, endTimestamp, location } = event;

    return (
        <Container>
            <div className="event-card">
                <h2>{name}</h2>
                <p>Platform: {platform}</p>
                <p>Exclusive: {exclusive ? 'Yes' : 'No'}</p>
                <p>Type: {type}</p>
                <p>Expansion: {expansion}</p>
                <p>Description: {description}</p>
                <p>Requirements: {requirements}</p>
                <p>Quest Rank: {questRank}</p>
                <p>Success Conditions: {successConditions}</p>
                <p>Start Date: {new Date(startTimestamp).toLocaleDateString()}</p>
                <p>End Date: {new Date(endTimestamp).toLocaleDateString()}</p>

                <div className="event-locations">
                    <h3>Locations:</h3>
                    {Array.isArray(location) && location.length > 0 ? (
                        location.map((loc, index) => (
                            <div key={index} className="location-info">
                                <h4>{loc.name}</h4>
                                <p>Zone Count: {loc.zoneCount}</p>
                                <div className="location-camps">
                                    <h5>Camps:</h5>
                                    {Array.isArray(loc.camps) && loc.camps.length > 0 ? (
                                        loc.camps.map((camp, i) => (
                                            <p key={i}>{camp.name} (Zone: {camp.zone})</p>
                                        ))
                                    ) : (
                                        <p>No camps available</p>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No locations available</p>
                    )}
                </div>

                <button onClick={() => saveEvent(event)} className="save-button">
                    Save Event
                </button>
            </div>
        </Container>
    );
};

export default EventDetails;