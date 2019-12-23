import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MovieList from './MovieList';
import Fetch from './Fetch';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {

	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Route path="/" exact component={MovieList} />
					<Route path="/movie/:id" component={Fetch} />
				</Switch>
				<Footer />
			</div>
		</Router>
	)
}

export default App