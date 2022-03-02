import './App.scss';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import SignInForm from '../SignInForm/SignInForm';
import LogInForm from '../LogInForm/LogInForm';
import ListEvent from '../ListEvent/ListEvent';
import Footer from '../Footer/Footer';
import Error404 from '../Error404/Error404';

import EventForm from '../EventForm/EventForm';

function App() {
    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignInForm />} />
                <Route path="/login" element={<LogInForm />} />
                <Route path="/events" element={<ListEvent />} />
                <Route path="/createevent" element={<EventForm />} />
                <Route path="*" element={<Error404 />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
