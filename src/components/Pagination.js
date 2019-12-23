import React, {useState, useContext, useEffect, Fragment} from 'react';
import {searchContext} from './MovieList';

const PER_PAGE = 10;

function Pagination({total}) {

	const pages = Math.ceil(total/PER_PAGE);
	const [page, setPage] = useState(0);

	const movieContext = useContext(searchContext);

	const handleClick = option => {
		switch(option) {
			case 'f':
				setPage(1);
				break;
			case 'p':
				setPage( prevState => prevState-1);
				break;
			case 'n':
				setPage( prevState => prevState===0? prevState + 2 : prevState + 1);
				break;
			case 'l':
				setPage(pages);	
				break;
			default:
				setPage(1);
				break;		 
		}		
	}


	useEffect( ()=> {
		if(page!==0) {
			movieContext.getMovies(page, movieContext.searchText);		
			console.log(page)
		}
	}, [page])

	return (
		<Fragment>		
		{
			typeof total === "undefined" || total <= 10 ? " ":
			<div>
				<h3 style={{textAlign:"center"}}>Page {page === 0?1 : page} of {pages}</h3>
				<div className="pagination">
					<button className="pagination-link" 
							disabled={page <= 1? true:false} 
							onClick={() => handleClick('f')}>
						First
					</button>
					<button className="pagination-link" 
							disabled={page <= 1? true:false} 
							onClick={() => handleClick('p')}>
						Previous
					</button>
					<button className="pagination-link" 
							disabled={page===pages?true:false} 
							onClick={() => handleClick('n')}>
						Next
					</button>
					<button className="pagination-link" 
							disabled={page===pages?true:false} 
							onClick={() => handleClick('l')}>
						Last
					</button>
				</div>
			</div>
		}
		</Fragment>
	)
}

export default Pagination