import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Joke from './Joke';

const DadJokes = ({ searching, searchTerm }) => {
	const [jokes, setJokes] = useState([]);

	useEffect(() => {
		console.log(searchTerm)
		axios.get('https://icanhazdadjoke.com/search', {
			params: {
				term: searchTerm
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

// const mapState = state => {
// 	return {
// 		type: state.type,
// 		searching: state.searching,
// 		searchTerm: state.searchTerm
// 	}
// };
export default DadJokes;