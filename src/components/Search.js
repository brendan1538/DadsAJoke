import React from 'react';

function Search() {
	return (
		<div className="input-field col s11">
			<i className="material-icons prefix">search</i>
			<input type="text" id="search-input" />
			<label for="search-input">Search for Dad jokes...</label>
		</div>
	);
}

export default Search;