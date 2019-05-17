import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import searchReducer from './reducers/search';

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(searchReducer, middleware);

store.dispatch(dispatch => {
	dispatch({ type: 'GET_JOKES_START' });
	axios.get('https://icanhazdadjoke.com/search', {
		'headers': {
			'Accept': 'application/json'
		}
	})
		.then(res => {
			let newJokes = []
			for (let i = 0; i < res.data.results.length; i++) {
				newJokes.push({ text: res.data.results[i].joke });
			}

			dispatch({
				type: "RECEIVE_JOKES", payload: newJokes
			})
		})
		.catch(err => dispatch({ type: "GET_JOKES_ERR", payload: err }));
});