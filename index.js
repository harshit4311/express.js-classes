const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

let courses = [
    { id: 1, name: 'Java' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'Python' },
];

// GET (fetch all)
app.get('/courses', (req, res) => {
    res.json(courses);
});

// POST (add)
app.post('/courses', (req, res) => {
    const course = {
        id: courses.length + 1, // Increment ID
        name: req.body.name,
    };
    courses.push(course);
    res.status(201).json(course); 
});

// PUT (update)
app.put('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find(c => c.id === courseId);
    if (!course) return res.status(404).json({ message: 'Course not found' });

    course.name = req.body.name;
    res.json(course);
});

// DELETE (delete)
app.delete('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const courseIndex = courses.findIndex(c => c.id === courseId);
    if (courseIndex === -1) return res.status(404).json({ message: 'Course not found' });

    const deletedCourse = courses.splice(courseIndex, 1);
    res.json(deletedCourse);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
