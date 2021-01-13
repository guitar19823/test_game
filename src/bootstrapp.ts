import { data } from './db';

export const bootstrapp = async (): Promise<void> => {
  try {
    const res = await data.init();

    console.log('SQLite database connected');
  } catch(error) {
    console.log(error);
  }
}; 