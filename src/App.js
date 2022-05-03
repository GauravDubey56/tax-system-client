import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
// import Dashboard from '../Dashboard/Dashboard';
// import Preferences from '../Preferences/Preferences';
import { Signup, Login } from './screens'
function App() {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;