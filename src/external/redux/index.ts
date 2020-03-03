// Core
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

// Redux
import rootReducer from './reducer';

export default createStore(rootReducer, applyMiddleware(createLogger()));
