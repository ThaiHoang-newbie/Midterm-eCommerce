import React, { useState } from 'react';

const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState('');

    const fetchData = (value) => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((product) => (
                    value &&
                    product &&
                    product.title &&
                    product.title.toLowerCase().includes(value.toLowerCase())
                ));
                setResults(results);
            });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <div className="input-wrapper">
            <input
                placeholder="Type to search..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
