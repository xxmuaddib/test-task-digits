import { combineReducers, createStore } from 'redux';

import { game } from './reducers/game';

const rootReducer = combineReducers({
  game,
});

export const store = createStore(rootReducer);
