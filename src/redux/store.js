import { applyMiddleware, createStore, combineReducers } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import * as searchReducer from './reducers/search';
import * as randomReducer from './reducers/random';

const middleware = applyMiddleware(thunk, createLogger());

const rootReducer = combineReducers({
	searchReducer,
	randomReducer
});

export default createStore(rootReducer, middleware);