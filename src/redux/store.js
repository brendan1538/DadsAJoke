import { applyMiddleware, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { searchReducer } from './reducers/search';

const middleware = applyMiddleware(thunk, createLogger());

export default createStore(searchReducer, middleware);