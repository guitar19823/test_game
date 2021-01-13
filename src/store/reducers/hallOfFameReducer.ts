import {
  GET_PLAYERS,
  ADD_PLAYER,
  HallState,
  HallActionGetPlayers,
  HallActionAddPlayer,
} from '../types';

const initialState: HallState = [];

const handlers = {
  [GET_PLAYERS]: (state: HallState, action: HallActionGetPlayers): HallState => action.payload,
  [ADD_PLAYER]: (state: HallState, action: HallActionAddPlayer): HallState => [
    ...state,
    action.payload,
  ],
  DEFAULT: (state: HallState): HallState => state,
};

export const hallOffFameReducer = (state: HallState = initialState, action: any): HallState => {
  return (handlers[action.type] || handlers.DEFAULT)(state, action);
};