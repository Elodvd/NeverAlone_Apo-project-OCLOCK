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
<<<<<<< HEAD

import EventForm from '../EventForm/EventForm';

=======
import Profil from '../Profil/Profil';
>>>>>>> 16bdd5ee22d89890ff364d85845ebacebd0ee10e
function App() {
    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignInForm />} />
                <Route path="/login" element={<LogInForm />} />
                <Route path="/events" element={<ListEvent />} />
<<<<<<< HEAD
                <Route path="/createevent" element={<EventForm />} />
                <Route path="*" element={<Error404 />} />
=======
                <Route path="/profil" element={<Profil />} />
>>>>>>> 16bdd5ee22d89890ff364d85845ebacebd0ee10e
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
