import { useState, useEffect } from 'react';
import SearchForm from '../components/searchForm';
import ArmorDetails from '../components/armorDetails';

const ArmorSearch = () => {
    const [error, setError] = useState(null);
    const [entities, setEntities] = useState([]);
    const [filteredEntities, setFilteredEntities] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const category = 'armor';

    // Initial fetch of armor data on component mount
    useEffect(() => {
        const fetchEntities = async () => {
            try {
                const response = await fetch(`https://mhw-db.com/${category}`);
                if (!response.ok) {
                    throw new Error('Unable to fetch armor data');
                }
                const data = await response.json();
                setEntities(data); // Store all armor data
                setFilteredEntities(data); // Initialize filtered data
                setSearchTerm(''); // Clear any existing search term
            } catch (err) {
                setError(err.message);
            }
        };

        fetchEntities();
    }, [category]);

    // Filter entities whenever searchTerm changes
    useEffect(() => {
        if (searchTerm) {
            const results = entities.filter(entity =>
                entity.name && entity.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredEntities(results);
        } else {
            setFilteredEntities(entities); // Reset to all entities if search term is empty
        }
    }, [searchTerm, entities]);

    const renderUI = () => {
        if (error) {
            return <p className="error">{error}</p>;
        } else if (!searchTerm) {
            return <p>Search for armor to get started!</p>;
        } else if (filteredEntities.length > 0) {
            return filteredEntities.map(armor => (
                <ArmorDetails key={armor.id} armor={armor} />
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

export default ArmorSearch;