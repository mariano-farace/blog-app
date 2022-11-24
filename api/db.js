import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "Pendragon9*",
  database: "blog",
});

export default db;
