import { SEARCH, IS_SEARCHING } from '../actionTypes';

export const initialState = {
	searching: false,
	searchTerm: "",
}

export const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH: {
			console.log(action);
			return {
				...state,
				searching: true,
				searchTerm: action.searchTerm
			}
		}
		default: {
			return {
				state
			}
		}
	}
}
