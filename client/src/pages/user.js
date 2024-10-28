import { useParams } from "react-router-dom";
import { GET_USER } from "../utils/queries"
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import Container from "../components/container";
import DeleteButton from "../components/deleteButton"

const User = () => {
    const { id } = useParams();
    const { data, loading, error } = useQuery(GET_USER, {
        variables: { _id: id },
    });

    if (error) return <p>Error: {error.message}</p>;

    const user = data?.user || {};

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <div className="container-fluid">
                    <h1 className="custom-font">{user.username}: <h6 className="custom-font">{user.email}</h6></h1>
                    <button onClick={() => Auth.logout()} className="btn btn-info custom-font">Log out</button>
                </div>
            </nav>

            <h1 className="custom-font">Favorites</h1>

            <Container className="results">
                <div className="card-container">

                    <h2>Ailments</h2>
                    {user.ailments?.map((ailment, i) => (
                        <div className="card bg-success" key={`ailment-${i}`}>
                            <h3 className="ailment-background">Name: {ailment.name}</h3>
                            <div className="ailment-background">
                                <h4 className="card-text">Description: {ailment.description}</h4>
                            </div>
                            <DeleteButton userId={user._id} entityId={ailment.id} entityType="ailment" />
                        </div>
                    ))}

                    <h2>Armor</h2>
                    {user.armor?.map((armor, i) => (
                        <div className="card bg-success" key={`armor-${i}`}>
                            <h3 className="armor-background">Name: {armor.name}</h3>
                            <div className="armor-background">
                                <h4 className="card-text">Type: {armor.type}</h4>
                                <h4 className="card-text">Rank: {armor.rank}</h4>
                            </div>
                            <DeleteButton userId={user._id} entityId={armor.id} entityType="armor" />
                        </div>
                    ))}

                    <h2>Armor Sets</h2>
                    {user.armorSets?.map((armorSet, i) => (
                        <div className="card bg-success" key={`armorSet-${i}`}>
                            <h3 className="armorSet-background">Name: {armorSet.name}</h3>
                            <div className="armorSet-background">
                                <h4 className="card-text">Rank: {armorSet.rank}</h4>
                                <h4 className="card-text">Bonus: {armorSet.bonus}</h4>
                            </div>
                            <DeleteButton userId={user._id} entityId={armorSet.id} entityType="armorSet" />
                        </div>
                    ))}

                    <h2>Charms</h2>
                    {user.charms?.map((charm, i) => (
                        <div className="card bg-success" key={`charm-${i}`}>
                            <h3 className="charm-background">Name: {charm.name}</h3>
                            <div className="charm-background">
                                <h4 className="card-text">Ranks: {charm.ranks.map(rank => `Level: ${rank.level}, Skills: ${rank.skills.join(", ")}`).join(" | ")}</h4>
                            </div>
                            <DeleteButton userId={user._id} entityId={charm.id} entityType="charm" />
                        </div>
                    ))}

                    <h2>Decorations</h2>
                    {user.decorations?.map((decoration, i) => (
                        <div className="card bg-success" key={`decoration-${i}`}>
                            <h3 className="decoration-background">Name: {decoration.name}</h3>
                            <div className="decoration-background">
                                <h4 className="card-text">Rarity: {decoration.rarity}</h4>
                                <h4 className="card-text">Skill: {decoration.skill.name}</h4>
                            </div>
                            <DeleteButton userId={user._id} entityId={decoration.id} entityType="decoration" />
                        </div>
                    ))}

                    <h2>Events</h2>
                    {user.events?.map((event, i) => (
                        <div className="card bg-success" key={`event-${i}`}>
                            <h3 className="event-background">Name: {event.name}</h3>
                            <div className="event-background">
                                <h4 className="card-text">Type: {event.type}</h4>
                                <h4 className="card-text">Description: {event.description}</h4>
                            </div>
                            <DeleteButton userId={user._id} entityId={event.id} entityType="event" />
                        </div>
                    ))}

                    <h2>Items</h2>
                    {user.items?.map((item, i) => (
                        <div className="card bg-success" key={`item-${i}`}>
                            <h3 className="item-background">Name: {item.name}</h3>
                            <div className="item-background">
                                <h4 className="card-text">Type: {item.type}</h4>
                                <h4 className="card-text">Rarity: {item.rarity}</h4>
                            </div>
                            <DeleteButton userId={user._id} entityId={item.id} entityType="item" />
                        </div>
                    ))}

                    <h2>Locations</h2>
                    {user.locations?.map((location, i) => (
                        <div className="card bg-success" key={`location-${i}`}>
                            <h3 className="location-background">Name: {location.name}</h3>
                            <div className="location-background">
                                <h4 className="card-text">Zone Count: {location.zoneCount}</h4>
                            </div>
                            <DeleteButton userId={user._id} entityId={location.id} entityType="location" />
                        </div>
                    ))}

                    <h2>Monsters</h2>
                    {user.monsters?.map((monster, i) => (
                        <div className="card bg-success" key={`monster-${i}`}>
                            <h3 className="monster-background">Name: {monster.name}</h3>
                            <div className="monster-background">
                                <h4 className="card-text">Type: {monster.type}</h4>
                                <h4 className="card-text">Rank: {monster.rank}</h4>
                            </div>
                            <DeleteButton userId={user._id} entityId={monster.id} entityType="monster" />
                        </div>
                    ))}

                    <h2>Skills</h2>
                    {user.skills?.map((skill, i) => (
                        <div className="card bg-success" key={`skill-${i}`}>
                            <h3 className="skill-background">Name: {skill.name}</h3>
                            <div className="skill-background">
                                <h4 className="card-text">Levels: {skill.ranks.map(rank => `Level: ${rank.level}, Modifiers: ${rank.modifiers.join(", ")}`).join(" | ")}</h4>
                            </div>
                            <DeleteButton userId={user._id} entityId={skill.id} entityType="skill" />
                        </div>
                    ))}

                    <h2>Weapons</h2>
                    {user.weapons?.map((weapon, i) => (
                        <div className="card bg-success" key={`weapon-${i}`}>
                            <h3 className="weapon-background">Name: {weapon.name}</h3>
                            <div className="weapon-background">
                                <h4 className="card-text">Type: {weapon.type}</h4>
                                <h4 className="card-text">Rank: {weapon.rank}</h4>
                            </div>
                            <DeleteButton userId={user._id} entityId={weapon.id} entityType="weapon" />
                        </div>
                    ))}

                </div>
            </Container>
        </>
    );
};

export default User;