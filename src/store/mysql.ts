import mysql, { ConnectionConfig, MysqlError } from "mysql";
import config from "../config";

const dbConfig: ConnectionConfig = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};

let connection: any;

(function handleCon(): void {
  connection = mysql.createConnection(dbConfig);

  connection.connect((error: MysqlError) => {
    if (error) {
      setTimeout(handleCon, 200);
    } else {
      console.log("DB Connected");
    }
  });

  connection.on("error", (error: MysqlError) => {
    if (error.code === "PROTOCOL_CONNECTION_LOST") {
      handleCon();
    } else {
      throw error;
    }
  });
})();

function list(table: string) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table}`, (err: any, data: any) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
}

function insert(table: string, data: any) {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO ${table} SET ?`,
      data,
      (error: any, data: any) => {
        if (error) {
          return reject(error);
        }
        resolve(data);
      }
    );
  });
}

function query(table: string, query: any, join?: any) {
  let joinQuery = "";
  if (join) {
    const key = Object.keys(join)[0];
    const val = join[key];
    joinQuery = `JOIN ${key} ON ${table}.${val}=${key}.id`;
  }

  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${table} ${joinQuery} WHERE ?`,
      query,
      (err: any, res: any) => {
        if (err) {
          return reject(err);
        }
        if (joinQuery === "") {
          resolve(res[0] || null);
        } else {
          resolve(res || null);
        }
      }
    );
  });
}

// connection.query(
//   "SELECT 1 + 1 AS solution",
//   function (error: MysqlError, results: any, fields: FieldInfo[]) {
//     if (error) throw error;
//     console.log("The solution is: ", results[0].solution);
//   }
// );

export default { list, insert, query };
