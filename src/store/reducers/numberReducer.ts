import { randomNumber } from '../../utils';
import {
  UPDATE_SECRET_NUMBER,
  NumberState,
  NumberAction,
} from '../types';

const initialState: NumberState = {
  secretNumber: randomNumber(10**3, 10**6 - 1),
};

const handlers = {
  [UPDATE_SECRET_NUMBER]: (state: NumberState, action: NumberAction ): any => ({
    ...state,
    secretNumber: action.payload
  }),
  DEFAULT: (state: NumberState): NumberState => state,
};

export const numberReducer = (state: NumberState = initialState, action: NumberAction): NumberState => {
  return (handlers[action.type] || handlers.DEFAULT)(state, action);
};