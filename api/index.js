const express = require("express");
const app = express();

const path = require("path");
const rootDir = path.dirname(require.main.filename);

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  console.log(rootDir);
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  console.log(rootDir);
  res.sendFile(path.join(__dirname, "public", "html/about.html"));
});

app.get("/bios", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html/teambio.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

module.exports = app;
