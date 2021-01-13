import { NumberAction, UPDATE_SECRET_NUMBER } from '../types';
import { randomNumber } from '../../utils';

export const updateNumber = (): NumberAction => ({
  type: UPDATE_SECRET_NUMBER,
  payload: randomNumber(10**3, 10**6 - 1),
});