import './App.scss';
import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import { useState} from 'react';
=======
import { useState, useLocation } from 'react';
>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05
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
import About from '../About/About';

function App() {
    //Gestion du statut connecté ou non du user
    const [isConnected, SetIsConnected] = useState(false);
    //Récuperation des informations du user
    const [userData, SetUserData] = useState([]);

    // Récuperation de la liste de tous les évènements
    const [eventData, SetEventData] = useState([]);
    //Récuperation d'un seul évènement
    const [oneEvent, SetOneEvent] = useState([]);

    //Fonction pour la mise à jour de la liste des évènements
    /**
     * It calls the getAllEventsRequest function and then sorts the data by date.
     * @returns a promise.
     */
    const getAll = async () => {
        //On appelle la fonction getAllEventsRequest pour récupérer la liste des events de l'API
        const response = await getAllEventsRequest();
        if (response.status === 200) {
            /* It sorts the data by date. */
            response.data.sort(function compare(a, b) {
                return new Date(a.date) - new Date(b.date);
            });
            //Après avoir comparé les données on met à jour la liste
            SetEventData(response.data);
        }
    };

    /* This is a function that will be called when the component is mounted. */
    useEffect(() => {
        getAll();
        /* It checks if the user is already connected. */
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
                            eventData={eventData}
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
                <Route path="/About" element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default React.memo(App);
