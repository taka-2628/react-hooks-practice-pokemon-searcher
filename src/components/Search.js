import React from "react";

function Search( { search, onSearch } ) {
  
  function handleChange(event){
    onSearch(event.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={handleChange} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
