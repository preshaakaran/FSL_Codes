import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/addcourse.css"

function AddCourse() {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    instructor: '',
    duration: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/courses', courseData);
      navigate('/');
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  return (
    <div className="add-course">
      <h2>Add New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={courseData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={courseData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Instructor:</label>
          <input
            type="text"
            name="instructor"
            value={courseData.instructor}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Duration:</label>
          <input
            type="text"
            name="duration"
            value={courseData.duration}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Add Course</button>
      </form>
    </div>
  );
}

export default AddCourse;