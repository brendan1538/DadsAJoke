import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Joke from './Joke';

import * as searchJokes from '../redux/actions';

const SearchedJokes = () => {
	const [jokes, setJokes] = useState([]);
	useEffect(() => {
		axios.get('https://icanhazdadjoke.com/search', {
			params: {
				term: 'duck'
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
				setJokes(newJokes);
			})
			.catch(err => console.log(err));

	}, []);

	return (
		<div>
			{jokes.map((joke, index) => (
				<Joke key={index} index={index} joke={joke} />
			))}
		</div>
	);
}
export default connect(
	null,
	{ searchJokes }
)(SearchedJokes);