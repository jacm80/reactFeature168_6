import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducers from './rootReducers';

// console.log(rootReducers);

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const configureStore = () => createStore(
  rootReducers,
  applyMiddleware(...middlewares)
);

export default configureStore;
