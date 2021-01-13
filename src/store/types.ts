export const UPDATE_SECRET_NUMBER: string = 'UPDATE_SECRET_NUMBER';
export const GET_PLAYERS: string = 'GET_PLAYERS';
export const ADD_PLAYER: string = 'ADD_PLAYER';

export interface NumberState {
  secretNumber: string,
}

export interface NumberAction {
  type: typeof UPDATE_SECRET_NUMBER,
  payload: string,
}

export interface Player {
  [key: string]: any,
}

export type HallState = Array<Player>;

export interface HallActionGetPlayers {
  type: typeof GET_PLAYERS,
  payload: HallState,
}

export interface HallActionAddPlayer {
  type: typeof ADD_PLAYER,
  payload: Player,
}