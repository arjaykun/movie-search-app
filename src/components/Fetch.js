import React, {useEffect, useState, Fragment} from 'react';

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://payload.cargocollective.com/1/23/758880/13104445/NO-MOVIE-POSTERS-02-03-03_2000_c.png";


function Fetch({match}) {

	const [movie,setMovie] = useState({}); 
	const [loading, setLoading] = useState(false);

	useEffect( () => {
		getMovie();
	},[])

	const getMovie = async () => {
		setLoading(true);

		const res = await fetch(`https://www.omdbapi.com/?i=${match.params.id}&apikey=4a3b711b`);
		const data = await res.json()

		setMovie(data);
		setLoading(false);
	} 

	const poster = movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;


	return (
		<Fragment>
		{ loading? 
			<h1 style={{"textAlign":"center"}}>loading</h1>
			:
			<div className="movie-detail">
				<div className="movie-header">
					<img className="movie-fetch-poster" src={poster}>
					</img>
					<h2 style={{textAlign:"center"}}>{movie.Title}({ movie.Year })</h2>
				</div>
				<div className="movie-info">
					<hr />
					<strong>Rated: </strong> {movie.Rated} <br/>
					<strong>Runtime: </strong> {movie.Runtime} <br/>
					<strong>Genre: </strong> {movie.Genre} <br />
					<strong>Director: </strong> {movie.Director} <br />
					<strong>Writer: </strong> {movie.Writer} <br />
					<strong>Actors: </strong> {movie.Actors} <br />
					<strong>Country: </strong> {movie.Country} <br />
					<strong>Awards: </strong> {movie.Awards} <br />
					
					<hr />
					<h3>Plot</h3>
					<p className="movie-plot">
						{movie.Plot}
					</p>
				</div>
			</div>
		}
		</Fragment>
	)
}

export default Fetch