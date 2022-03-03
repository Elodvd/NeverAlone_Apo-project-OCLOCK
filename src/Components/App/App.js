import './App.scss';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from '../Home/Home';
import SignInForm from '../SignInForm/SignInForm';
import LogInForm from '../LogInForm/LogInForm';
import ListEvent from '../ListEvent/ListEvent';
import Footer from '../Footer/Footer';
import Error404 from '../Error404/Error404';
import EventForm from '../EventForm/EventForm';
import Profil from '../Profil/Profil';

function App() {
    const [isConnected, SetIsConnected] = useState(false);

    return (
        <div className="app">
            <Navbar
                isConnected={isConnected}
                handleSetIsConnected={SetIsConnected}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignInForm />} />
                <Route
                    path="/login"
                    element={
                        <LogInForm handleSetIsConnected={SetIsConnected} />
                    }
                />
                {isConnected && (
                    <>
                        <Route path="/events" element={<ListEvent />} />,
                        <Route path="/add-event" element={<EventForm />} />,
                        <Route path="/profil" element={<Profil />} />
                    </>
                )}
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
