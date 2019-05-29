import { SEARCH, IS_SEARCHING } from './actionTypes';

export const searchJokes = content => ({
	type: SEARCH,
	searchTerm: content
});

export const isSearching = bool => ({
	type: IS_SEARCHING,
	payload: { bool }
})