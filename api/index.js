const express = require("express");
const app = express();

const path = require("path");
const rootDir = path.dirname(require.main.filename);

const port = 3000;

app.use(express.static(path.join(rootDir, "public")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(rootDir, "public", "html/about.html"));
});

app.get("/bios", (req, res) => {
  res.sendFile(path.join(rootDir, "public", "html/teambio.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

module.exports = app;
