import { combineReducers } from 'redux';

import searchReducer from './search';
import randomReducer from './random';

export default combineReducers({
	searchReducer,
	randomReducer,
});