import React from 'react';

const SearchResult = ({ result }) => {
  return (
    <div className="search-result" id={result.key}>

      <a href={`/clothes/${result.id}`} className='text-warning'> {result.title} </a>
      <a className='text-info'>${result.price} </a>
    </div>
  );
};

export default SearchResult;