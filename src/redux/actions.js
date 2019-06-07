import { SEARCH, SEARCH_COMPLETE } from './actionTypes';

export const searchJokes = content => ({
	type: SEARCH,
	searchTerm: content
});

export const searchComplete = bool => ({
	type: SEARCH_COMPLETE,
	payload: { bool }
})