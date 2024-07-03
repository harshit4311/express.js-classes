const express = require('express');
const app = express();

let courses = [
  { id: 1, name: "Java" },
  { id: 2, name: "Javascript" },
  { id: 3, name: "Python" }
];

app.get('/courses', (req, res) => {
  res.json(courses);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
