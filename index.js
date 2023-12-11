const express = require("express");

const app = express();
const courses = [
  { id: 1, name: "NodeJs" },
  { id: 2, name: "ReactJs" },
  { id: 3, name: "ReactNative" },
  { id: 4, name: "Javascript" },
];

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  // todo
  // look for the id
  // if exist return the course with given id
  // otherwise return 404
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (course) return res.send(course);
  return res.status(404).send("course not found");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
