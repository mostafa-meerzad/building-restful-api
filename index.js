const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3, 4, 5, 6]);
});

// attempt to read PORT environment variable which will be set by the hosting computer

// to set env in windows powerShell >>> $set:VarName="Value"

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
