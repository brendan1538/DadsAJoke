export const initialState = {
	searching: false,
	searchTerm: "duck",
}

export const searchReducer = (state = initialState, action) => {
	return { ...state, searching: true }
}