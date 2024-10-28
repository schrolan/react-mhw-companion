import { useState, useEffect } from 'react';
import SearchForm from "../components/searchForm";
import WeaponDetails from "../components/weaponDetails";

const WeaponSearch = () => {
    const [error, setError] = useState(null);
    const [entities, setEntities] = useState([]);
    const [filteredEntities, setFilteredEntities] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const category = 'weapons';

    useEffect(() => {
        const fetchEntities = async () => {
            try {
                const response = await fetch(`https://mhw-db.com/${category}`);
                if (!response.ok) {
                    throw new Error('Unable to fetch weapons');
                }
                const data = await response.json();
                setEntities(data);
                setFilteredEntities(data);
                setSearchTerm('');
            } catch (err) {
                setError(err.message);
            }
        };

        fetchEntities();
    }, [category]);

    useEffect(() => {
        if (searchTerm) {
            const results = entities.filter(entity =>
                entity.name && entity.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredEntities(results);
        } else {
            setFilteredEntities(entities);
        }
    }, [searchTerm, entities]);

    const renderUI = () => {
        if (error) {
            return <p className="error">{error}</p>;
        } else if (!searchTerm) {
            return <p>Search for a weapon to get started!</p>;
        } else if (filteredEntities.length > 0) {
            return filteredEntities.map(entity => (
                <WeaponDetails key={entity.id} weapon={entity} />
            ));
        } else {
            return <p>No results found for "{searchTerm}".</p>;
        }
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const reset = () => {
        setSearchTerm('');
        setError(null);
        setEntities([]);
        setFilteredEntities([]);
    };

    return (
        <>
            <SearchForm
                searchTerm={searchTerm}
                handleInputChange={handleInputChange}
                reset={reset}
            />
            {renderUI()}
        </>
    );
};

export default WeaponSearch;