const express = require("express");
const app = express();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
const cors = require("cors");

db.defaults({
  invoices: []
});

app.listen(4000, () => {
  console.log("Server has started on port 4000");
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const allInvoices = db.get("invoices").value();
  res.json(allInvoices);
});

app.post("/new", (req, res) => {
  console.log(req.body);
  db.get("invoices")
    .unshift(req.body)
    .write();
  res.send(db.get("invoices").value());
});
