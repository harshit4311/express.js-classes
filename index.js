const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

let courses = [
    { id: 1, name: 'Java' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'Python' },
];

// GET request to fetch all the courses
app.get('/courses', (req, res) => {
    res.json(courses);
});

// POST request to add a new course
app.post('/courses', (req, res) => {
    const course = {
        id: courses.length + 1, // Increment ID
        name: req.body.name,
    };
    courses.push(course);
    // res.status(201).json(course); 
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
