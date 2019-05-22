export const initialState = {
	searchTerm: ''
}

export function randomReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_JOKES_START": {
			return ("GET_JOKES_START");
			break;
		}
		case "RECEIVE_JOKES": {
			return ("RECEIVE_JOKES");
			break;
		}
		case "GET_JOKES_ERR": {
			return ("GET_JOKES_ERR");
			break;
		}
	}
	return ("random");
}