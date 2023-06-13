import React from 'react';
import SearchResult from './SearchResult';

const SearchResultList = ({ results }) => {
    return (
        <div className="search-result-list">
            {results.map((result, id) => (
                <SearchResult result={result} key={id} />
            ))}
        </div>
    );
};

export default SearchResultList;
