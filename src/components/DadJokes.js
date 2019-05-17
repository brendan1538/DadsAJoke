import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Joke from './Joke';

function DadJokes() {
	const [jokes, setJokes] = useState([]);

	// Retreive jokes from api and add to state hook
	useEffect(() => {
		axios.get('https://icanhazdadjoke.com/', {
			'headers': {
				'Accept': 'application/json'
			}
		})
			.then(res => {
				const newJokes = [...jokes, { text: res.data.joke }];
				setJokes(newJokes);
				console.log(res);
			})
			.catch(err => console.log(err));

	}, []);

	return (
		<div>
			{jokes.map((joke, index) => (
				<Joke key={index} index={index} joke={joke} />
			))}
		</div>
	)
}

export default DadJokes;