import { useParams } from "react-router-dom";
import { GET_USER } from "../utils/queries"
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import Container from "../components/container";
import DeleteAilmentButton from "../components/ailmentDeleteButton";
import AilmentDetails from "../components/ailmentDetails";
import DeleteArmorButton from "../components/armorDeleteButton";
import ArmorDetails from "../components/armorDetails";
import DeleteArmorSetButton from "../components/armorSetDeleteButton";
import ArmorSetDetails from "../components/armorSetDetails";
import DeleteCharmButton from "../components/charmDeleteButton";
import CharmDetails from "../components/charmDetails";
import DeleteDecorationButton from "../components/decorationDeleteButton";
import DecorationDetails from "../components/decorationDetails";
import DeleteEventButton from "../components/eventDeleteButton";
import EventDetails from "../components/eventDetails";
import DeleteItemButton from "../components/itemDeleteButton";
import ItemDetails from "../components/itemDetails";
import DeleteLocationButton from "../components/locationDeleteButton";
import LocationDetails from "../components/locationDetails";
import DeleteMonsterButton from "../components/monsterDeleteButton";
import MonsterDetails from "../components/monsterDetails";
import DeleteSkillButton from "../components/skillDeleteButton";
import SkillDetails from "../components/skillDetails";
import DeleteWeaponButton from "../components/weaponDeleteButton";
import WeaponDetails from "../components/weaponDetails";

const User = () => {
    const { id } = useParams();
    const { data, loading, error } = useQuery(GET_USER, {
        variables: { 
            _id: id,
        }
    });

    if (loading) return <p>Loading...</p>;
    console.log(data)

    if (error) return <p>Error: {error.message}</p>;

    const user = data?.user || {};

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <div className="container-fluid">
                    <h1 >{user.username}: <h6 >{user.email}</h6></h1>
                    <button onClick={() => Auth.logout()} className="btn btn-info custom-font">Log out</button>
                </div>
            </nav>

            <h1>Favorites</h1>

            <Container className="results">
                { <div className="card-container">

                    {/* Ailments */}
                    <h2>Ailments</h2>
                    {user.ailment?.map((ailment, i) => (
                        <div className="card bg-success" key={`ailment-${i}`}>
                            <AilmentDetails ailment={ailment} showSaveButton={false} />

                            <DeleteAilmentButton userId={user._id} ailmentId={ailment.id} />
                        </div>
                    ))}

                    <h2>Armor</h2>
                    {user.armor?.map((armor, i) => (
                        <div className="card bg-success" key={`armor-${i}`}>
                            <ArmorDetails armor={armor} showSaveButton={false} />

                            <DeleteArmorButton userId={user._id} armorId={armor.id} />
                        </div>
                    ))}

                    <h2>Armor Sets</h2>
                    {user.armorSet?.map((armorSet, i) => (
                        <div className="card bg-success" key={`armorSet-${i}`}>
                            <ArmorSetDetails armorSet={armorSet} showSaveButton={false} />

                            <DeleteArmorSetButton userId={user._id} armorSetId={armorSet.id} />
                        </div>
                    ))}

                    <h2>Charms</h2>
                    {user.charm?.map((charm, i) => (
                        <div className="card bg-success" key={`charm-${i}`}>
                            <CharmDetails charm={charm} showSaveButton={false} />

                            <DeleteCharmButton userId={user._id} charmId={charm.id} />
                        </div>
                    ))}

                    <h2>Decorations</h2>
                    {user.decoration?.map((decoration, i) => (
                        <div className="card bg-success" key={`decoration-${i}`}>
                            <DecorationDetails decoration={decoration} showSaveButton={false} />

                            <DeleteDecorationButton userId={user._id} decorationId={decoration.id} />
                        </div>
                    ))}

                    <h2>Events</h2>
                    {user.event?.map((event, i) => (
                        <div className="card bg-success" key={`event-${i}`}>
                            <EventDetails event={event} showSaveButton={false} />

                            <DeleteEventButton userId={user._id} eventId={event.id} />
                        </div>
                    ))}

                    <h2>Items</h2>
                    {user.item?.map((item, i) => (
                        <div className="card bg-success" key={`item-${i}`}>
                            <ItemDetails item={item} showSaveButton={false} />

                            <DeleteItemButton userId={user._id} itemId={item.id} />
                        </div>
                    ))}

                    <h2>Locations</h2>
                    {user.location?.map((location, i) => (
                        <div className="card bg-success" key={`location-${i}`}>
                            <LocationDetails location={location} showSaveButton={false} />

                            <DeleteLocationButton userId={user._id} locationId={location.id} />
                        </div>
                    ))}

                    <h2>Monsters</h2>
                    {user.monster?.map((monster, i) => (
                        <div className="card bg-success" key={`monster-${i}`}>
                            <MonsterDetails monster={monster} showSaveButton={false} />

                            <DeleteMonsterButton userId={user._id} monsterId={monster.id} />
                        </div>
                    ))}

                    <h2>Skills</h2>
                    {user.skill?.map((skill, i) => (
                        <div className="card bg-success" key={`skill-${i}`}>
                            <SkillDetails skill={skill} showSaveButton={false} />

                            <DeleteSkillButton userId={user._id} skillId={skill.id} />
                        </div>
                    ))}

                    <h2>Weapons</h2>
                    {user.weapon?.map((weapon, i) => (
                        <div className="card bg-success" key={`weapon-${i}`}>
                            <WeaponDetails weapon={weapon} showSaveButton={false} />

                            <DeleteWeaponButton userId={user._id} weaponId={weapon.id} />
                        </div>
                    ))}

                </div> }
            </Container>
        </>
    );
};

export default User;