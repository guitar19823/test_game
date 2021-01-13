import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('game.db');

interface Player {
  [key: string]: string | number
}

interface Data {
  init: () => Promise<void>,
  getPlayers: () => Promise<Array<Player>>,
  addPalyer: (player: Player) => Promise<number>,
}

export const data: Data = {
  init() {
    return new Promise((resolve: any, reject: any): void => {
      db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS players (id INTEGER PRIMARY KEY NOT NULL, name TEXT, image TEXT, attempts INT);',
          [],
          (): any => resolve(),
          (_: any, error: any): any => reject(error)
        );
      });
    });
  },

  addPalyer({ name, image, attempts }) {
    return new Promise((resolve: any, reject: any): void => {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO players (name, image, attempts) VALUES (?, ?, ?);',
          [name, image, attempts],
          (_: any, result: any): any => resolve(result.insertId),
          (_: any, error: any): any => reject(error)
        );
      });
    });
  },

  getPlayers() {
    return new Promise((resolve: any, reject: any): void => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM players ORDER BY attempts ASC;',
          [],
          (_: any, result: any): any => resolve(result.rows._array),
          (_: any, error: any): any => reject(error)
        );
      });
    });
  },
}