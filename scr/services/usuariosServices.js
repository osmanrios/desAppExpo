import db from "../db/database";
export const registrarUsuario = (correo, contraseña, onSuccess, onError) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO usuarios (correo, contraseña) VALUES (?, ?);',
        [correo, contraseña],
        () => onSuccess(),
        (_, error) => { onError(error); return true; }
      );
    });
  };
  
  export const loginUsuario = (correo, contraseña, callback) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM usuarios WHERE correo = ? AND contraseña = ?;',
        [correo, contraseña],
        (_, { rows }) => {
          callback(rows.length > 0);
        },
        (_, error) => { console.log(error); return true; }
      );
    });
  };