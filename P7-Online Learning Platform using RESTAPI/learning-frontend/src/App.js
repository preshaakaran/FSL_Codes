import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CourseList from './components/CourseList';
import AddCourse from './components/AddCourse';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/add" element={<AddCourse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;