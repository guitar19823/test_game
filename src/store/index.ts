import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { hallOffFameReducer } from './reducers/hallOfFameReducer';
import { numberReducer } from './reducers/numberReducer';

const rootReducer = combineReducers({
  number: numberReducer,
  hall: hallOffFameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);