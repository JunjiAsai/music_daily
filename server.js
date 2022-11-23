const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "/build")));

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello, Top page!");
});

app.get("/music/:id", (req, res) => {
  console.log(req.params.id);
  res.send("Hello, " + req.params.id);
});

app.get("/api", (req, res) => {
  res.send("Hello, api!");
});

app.listen(port, () => {
  console.log("App listening on port " + port);
});
