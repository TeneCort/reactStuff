import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NavBarComponent from './components/navBarComponent'
import HomeComponent from './components/homeComponent'
import ReleasesComponent from './components/releasesComponent'
import ProjectsComponent from './components/projectsComponent'


function App() {
	return (
		<Router>
			<div className="App">
				<NavBarComponent/>
				<Switch>
					<Route path="/" exact component={HomeComponent} />
					<Route path="/releases" component={ReleasesComponent} />
					<Route path="/projects" component={ProjectsComponent} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
