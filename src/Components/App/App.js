import './App.scss';
import React, { useEffect } from 'react';
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
import { getAllEventsRequest } from '../../requests/getAllEvents';
import { getLocalUser } from '../../requests/index.js';
import EventDetail from '../EventDetail/EventDetail';
import { getOneEventRequest } from '../../requests/getOneEvent';

function App() {
    //savoir si on est connecté
    const [isConnected, SetIsConnected] = useState(false);
    //recuperation de l'information du user
    const [userData, SetUserData] = useState([]);

    // recuperation de la liste de tous les evenements
    const [eventData, SetEventData] = useState([]);
    //recuperation de un seul evenement
    const [oneEvent, SetOneEvent] = useState([]);

    const getAll = async () => {
        const response = await getAllEventsRequest();
        if (response.status === 200) {
            response.data.sort(function compare(a, b) {
                return new Date(a.date) - new Date(b.date);
            });

            SetEventData(response.data);
        }
    };

    //au lancement de l'app, on recupere dans le state tous les evenements de notre bdd
    useEffect(() => {
        getAll();
        if (localStorage.getItem('user') !== null) {
            const responseLocalUser = JSON.parse(getLocalUser());
            console.log(responseLocalUser);
            if (responseLocalUser) {
                SetIsConnected(true);
                SetUserData(responseLocalUser);
            }
        }
    }, []);

    return (
        <div className="app">
            <Navbar
                isConnected={isConnected}
                handleSetIsConnected={SetIsConnected}
                userData={userData}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignInForm />} />

                <Route
                    path="/login"
                    element={
                        <LogInForm
                            handleSetIsConnected={SetIsConnected}
                            handleSetUserData={SetUserData}
                        />
                    }
                />
                {isConnected && (
                    <>
                        <Route
                            path="/events"
                            element={
                                <ListEvent
                                    userData={userData}
                                    eventData={eventData}
                                    handleSetEventData={SetEventData}
                                    handleSetOneEvent={SetOneEvent}
                                    getAll={getAll}
                                />
                            }
                        />
                        ,
                        <Route
                            path="/add-event"
                            element={
                                <EventForm
                                    handleSetEventData={SetEventData}
                                    eventData={eventData}
                                    userData={userData}
                                    getAll={getAll}
                                />
                            }
                        />
                        ,
                        <Route
                            path={`/profil/${userData.id}`}
                            element={
                                <Profil
                                    handleSetIsConnected={SetIsConnected}
                                    userData={userData}
                                    getAll={getAll}
                                />
                            }
                        />
                        <Route
                            path={`/events/${oneEvent.id}`}
                            element={
                                <EventDetail
                                    oneEvent={oneEvent}
                                    getAll={getAll}
                                    userData={userData}
                                    handleSetOneEvent={SetOneEvent}
                                />
                            }
                        />
                    </>
                )}
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
