import React from 'react';


const DEFAULT_PLACEHOLDER_IMAGE =
  "https://payload.cargocollective.com/1/23/758880/13104445/NO-MOVIE-POSTERS-02-03-03_2000_c.png";


function Movie({movie}) {

	const poster = movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

	return (
		<div className="movie-box">
			<img src={poster} className="movie-poster" alt={movie.Title} />
			<h3 className="movie-title">{movie.Title} ({movie.Year})</h3>
		</div>
	)
}

export default Movie