import React from 'react';

function Joke({ joke, index }) {
	return (
		<div className="col s1 m4">
			<div className="card lighten-1 medium">
				<div className="card-content">
					<span className="card-title">{index + 1}</span>
					<p className="flow-text">{joke.text}</p>
				</div>
				<div className="card-action single">
					<a href="#">Share on Slack</a>
				</div>
			</div>
		</div>
	);
}

export default Joke;