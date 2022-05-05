import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { Signup, Login, AccDashboard, PayerDashboard, CreateTaxForm } from './screens'
import { Nav } from './components'
function App() {
  const isSignedIn = localStorage.getItem('isSignedIn')
  const role = localStorage.getItem('role')
  console.log(role, isSignedIn)
  return (
    <div className="wrapper">

      <BrowserRouter>
        <Nav />
        {!isSignedIn && <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>}
        {isSignedIn && role === 'Accountant' && <Routes>
          <Route path="/home" element={<AccDashboard />} />
        </Routes>}
        {isSignedIn && role === 'Payer' && <Routes>
          <Route path="/home" element={<PayerDashboard />} />
        </Routes>}
        {isSignedIn && role === 'Accountant' && <Routes>
          <Route path="/new" element={<CreateTaxForm />} />
        </Routes>}
      </BrowserRouter>
    </div>
  );
}

export default App;