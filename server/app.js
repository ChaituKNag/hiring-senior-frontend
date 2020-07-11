const express = require("express");
const app = express();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
const invoices = require("./mocks/invoices.json");
const cors = require("cors");

db.defaults({
  invoices: []
});

db.set("invoices", invoices).write();

app.listen(4000, () => {
  console.log("Server has started on port 4000");
});

app.use(cors());

app.get("/", (req, res) => {
  const allInvoices = db.get("invoices").value();
  res.json(allInvoices);
});
