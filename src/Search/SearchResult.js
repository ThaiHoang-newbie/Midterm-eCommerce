import React from 'react';

const SearchResult = ({ result }) => {
  return (
    <div className="search-result" onClick={() => alert(`Click on ${result.title}`)}>
      {result.title}
    </div>
  );
};

export default SearchResult;
