import { SEARCH } from './actionTypes';

export const searchJokes = content => ({
	type: SEARCH,
	paylod: { content }
});