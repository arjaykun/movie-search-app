import React, {useEffect, useReducer} from 'react';
import Movie from './Movie';
import Search from './Search';
import Pagination from './Pagination';
import {Link} from 'react-router-dom';

export const searchContext = React.createContext()

const initialState = {
	movies: [],
	total: 0,
	searchText: '',
	loading: false
}

const reducer = (state, action) => {
	switch(action.type) {
		case "SEARCH_MOVIES":
			return {
				...state,
				loading:true
			}
		case "GET_MOVIES":
			return {
				...state,
				movies:action.payload.movies,
				total: action.payload.total,
				searchText: action.payload.searchText,
				loading:false
			}
		default: 
			return state;		
	}
}



function MovieList() {
	const [movieReducer, dispatch] = useReducer(reducer, initialState);

	useEffect( () => {
		getMovies();
	}, []);

	const getMovies = (page=1, searchText="man") => {
		dispatch({type:"SEARCH_MOVIES"});
		fetch(`https://www.omdbapi.com/?s=${searchText}&apikey=4a3b711b&page=${page}`)
			.then( response => {
				return response.json()
			})
			.then( data => {		
				dispatch({
					type:"GET_MOVIES", 
					payload:{
						movies:data.Search, 
						total:data.totalResults, 
						searchText
					}})					
			})
			.catch( err=> {
				console.log(err);
			});
	}


	return (
		<searchContext.Provider value={{getMovies,searchText:movieReducer.searchText}}>
			<div>
				<Search />
				{
					movieReducer.loading ? 
					<h1 style={{"textAlign":"center"}}>loading</h1>
					:

					<div className="app-container">
						<div className="movies-list">
							{	
								typeof movieReducer.movies !== "undefined" ?
								movieReducer.movies.map( (m,index) => (
									<Link to={`/movie/${m.imdbID}`} key={index+m.Title}><Movie movie={m} /></Link>
								)) :
								<h1>Search not found!</h1>
							}
						</div>
					</div>
				}
				<Pagination total={movieReducer.total} />
			</div>
		</searchContext.Provider>
	)
}

export default MovieList