import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabaseSync('app.db');

export const initDB = () => {
    db.transaction(tx => {
        tx.executesql(
            `CREATE TABLE IF NOT EXISTS usuarios (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                correo TEXT NOT NULL UNIQUE,
                contraseña TEXT NOT NULL
              );`
        );
    });
};

  
export default db;