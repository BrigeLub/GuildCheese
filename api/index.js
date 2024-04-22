const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html/about.html"));
});

app.get("/bios", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html/teambio.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

module.exports = app;
