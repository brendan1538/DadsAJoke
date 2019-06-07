import { SEARCH, SEARCH_COMPLETE } from '../actionTypes';

export const initialState = {
	searchComplete: null,
	searchTerm: null,
}

export const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH: {
			return {
				...state,
				searchComplete: false,
				searchTerm: action.searchTerm
			}
		}
		case SEARCH_COMPLETE: {
			return {
				...state,
				searchComplete: action.searchComplete,
				searchTerm: action.searchTerm
			}
		}
		default: {
			return state;
		}
	}
}
