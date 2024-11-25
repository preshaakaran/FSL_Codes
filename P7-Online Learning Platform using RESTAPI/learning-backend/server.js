const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Course = require('./models/course');

const app = express();

app.use(cors());
app.use(express.json());

// Updated MongoDB connection without deprecated options
mongoose.connect('mongodb+srv://karanpresha:rJ3QUhliHSdkQ3Wk@cluster0.yg2it.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Successfully connected to MongoDB.'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Error handling for MongoDB connection
mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});

// Routes
app.get('/api/courses', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/courses', async (req, res) => {
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.delete('/api/courses/:id', async (req, res) => {
    try {
        await Course.findByIdAndDelete(req.params.id);
        res.json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));