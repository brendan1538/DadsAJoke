import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Joke from './Joke';
import { searchComplete } from '../redux/actions';

class DadJokes extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			jokes: []
		}
	}

	componentWillReceiveProps() {
		axios.get('https://icanhazdadjoke.com/search', {
			params: {
				term: this.props.searchTerm
			}, 'headers': {
				'Accept': 'application/json'
			}
		})
			.then(res => {
				// 1. Loop through search results and joke to the newJokes array
				// 2. Add newJokes array to state to map through later.
				let newJokes = []
				for (let i = 0; i < res.data.results.length; i++) {
					newJokes.push({ text: res.data.results[i].joke });
				}
				this.setState({ jokes: newJokes });
				this.props.searchComplete(true);
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<h5>Search{this.props.searchComplete ? "ed" : null} for {this.props.searchTerm} jokes...</h5>
				<div className="row joke-row">
					{this.props.searchComplete ? this.state.jokes.map((joke, index) => (
						<Joke key={index} index={index} joke={joke} />
					)) : null}
				</div>
			</div >
		);
	}
}

const mapState = state => {
	return {
		searching: state.searchComplete,
		searchTerm: state.searchTerm,
	}
};
const mapDispatchToProps = dispatch => {
	return {
		searchComplete: (bool) => dispatch(searchComplete(bool))
	};
};

export default connect(mapState, mapDispatchToProps)(DadJokes);