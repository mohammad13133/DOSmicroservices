const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("../msdb.db", sqlite3.OPEN_READWRITE, (err) => {
  console.log("database connected");
  if (err) return console.error(err.message);
});

app.use(bodyParser.json());

app.get("/Bazarcom/purchase", (req, res) => {
  const { id, stock } = req.body;
  let sql1 = `SELECT stock FROM books where id = ?`;

  db.get(sql1, [id], (err, row) => {
    if (err) {
      return console.log(err.message);
    }

    if (row.stock) {
      const sql = `UPDATE books SET stock = stock - 1 WHERE id = ? RETURNING stock`;
      db.get(sql, [id], (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result.stock);
      });

      return res.send("purchased successfuly");
    }
    res.send("stock is empty");
  });
});

app.listen(3045, () => {
  console.log("order server is running");
});
