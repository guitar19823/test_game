import {
  GET_PLAYERS,
  ADD_PLAYER,
  Player,
} from '../types';
import { data } from '../../db';
import * as FileSystem from 'expo-file-system';

export const getPalyers = (): any => async (dispatch: any): Promise<void> => {
  const players = await data.getPlayers();

  dispatch({
    type: GET_PLAYERS,
    payload: players,
  });
};

export const addPalyer = (player: Player): any => async (dispatch: any): Promise<void> => {
  const newPath: string = FileSystem.documentDirectory + player.image.split('/').pop();

  try {
    await FileSystem.moveAsync({
      to: newPath,
      from: player.image,
    });
  } catch (error) {
    console.log(error);
  }

  const payload = {
    ...player,
    image: newPath,
  }

  const id = await data.addPalyer(payload);

  dispatch({
    type: ADD_PLAYER,
    payload: {
      ...payload,
      id,
    },
  });
};