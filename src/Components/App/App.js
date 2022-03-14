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
import About from '../About/About';
import { getOneEventRequest } from '../../requests/getOneEvent';

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
    const getAll = async () => {
        //On appelle la fonction getAllEventsRequest pour récupérer la liste des events de l'API
        const response = await getAllEventsRequest();
        if (response.status === 200) {
            response.data.sort(function compare(a, b) {
                return new Date(a.date) - new Date(b.date);
            });
            //Après avoir comparé les données on met à jour la liste 
            SetEventData(response.data);
        }
    };

    //Au lancement de l'app, on vérifie que l'user dispose d'un token valide, si oui on passe son statut à connecté, on set ses données et 
    // on récupère dans le state la liste de tous les évènements
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
                <Route path="/About" element={<About />} />
            </Routes>
            <Footer />
            
        </div>
    );
}

export default App;
