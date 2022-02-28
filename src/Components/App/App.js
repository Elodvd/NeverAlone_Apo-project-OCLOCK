import './App.scss';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import SignInForm from '../SignInForm/SignInForm';
import LogInForm from '../LogInForm/LogInForm';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>      
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/login" element={<LogInForm />} />
      </Routes>
      < Footer/>
    </div>
  );
}

export default App;
