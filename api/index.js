import express from "express";
import db from "./db.js";

const app = express();

app.use(express.json());

db.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }

  console.log(`connected as id ${db.threadId}`);
});

app.listen(8080, () => {
  console.log("Connected on port 8080");
});
