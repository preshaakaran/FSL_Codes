import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/courselist.css"

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/courses/${id}`);
      fetchCourses();
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <div className="course-list">
      <h2>Available Courses</h2>
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course._id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="course-details">
              <span>Instructor: {course.instructor}</span>
              <span>Duration: {course.duration}</span>
            </div>
            <button onClick={() => deleteCourse(course._id)} className="delete-btn">
              Delete Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;