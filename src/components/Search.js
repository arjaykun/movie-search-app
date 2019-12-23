import React, { useState,useContext } from 'react';
import { searchContext } from './MovieList';

function Search() {
	const [search, setSearch] = useState('');
	const searchMovie = useContext(searchContext)
	const handleSubmit = e => {
		e.preventDefault();

		searchMovie.getMovies(1, search);
		setSearch('');
	}

	const handleChange = e => {
		setSearch(e.target.value);
	}

	return (
		<form onSubmit={handleSubmit} className="search-form">
			<input type="text" 
					className="input-search" 
					placeholder="Search Movie " 
					value={search}
					onChange={handleChange}
				/>
			<button type="submit"  className="btn-search">Submit</button>
		</form>
	)
}

export default Search