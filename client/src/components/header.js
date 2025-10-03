import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const Header = () => {
    const currentUser = Auth.getLoggedInUser();
    const toPath = Auth.loggedIn() ? `/user/${currentUser._id}` : '/login';

    return (
        <header className="app-header">
            <nav className="navbar">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand">
                        <h1>MHW Search</h1>
                    </Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Search Entities
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link to="/search/ailments" className="dropdown-item">Ailment</Link>
                                    </li>
                                    <li>
                                        <Link to="/search/armor" className="dropdown-item">Armor</Link>
                                    </li>
                                    <li>
                                        <Link to="/search/armor-sets" className="dropdown-item">Armor Set</Link>
                                    </li>
                                    <li>
                                        <Link to="/search/charms" className="dropdown-item">Charm</Link>
                                    </li>
                                    <li>
                                        <Link to="/search/decorations" className="dropdown-item">Decoration</Link>
                                    </li>
                                    <li>
                                        <Link to="/search/events" className="dropdown-item">Event</Link>
                                    </li>
                                    <li>
                                        <Link to="/search/items" className="dropdown-item">Item</Link>
                                    </li>
                                    <li>
                                        <Link to="/search/locations" className="dropdown-item">Location</Link>
                                    </li>
                                    <li>
                                        <Link to="/search/monsters" className="dropdown-item">Monster</Link>
                                    </li>
                                    <li>
                                        <Link to="/search/skills" className="dropdown-item">Skill</Link>
                                    </li>
                                    <li>
                                        <Link to="/search/weapons" className="dropdown-item">Weapon</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <form className="d-flex">
                            <Link to={toPath} className="btn">
                                <h2>Your Collection</h2>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;