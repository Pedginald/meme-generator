import React, { Component } from 'react';
import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator';
import './style.css';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<MemeGenerator />
			</div>
		)
	}
}

export default App;