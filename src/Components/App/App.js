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

function App() {
    const [isConnected, SetIsConnected] = useState(false);
    const [userData, SetUserData] = useState([]);

    const [eventData, SetEventData] = useState([]);

    const getAll = async() => {
        const response = await getAllEventsRequest();
        if(response.status === 200){
            SetEventData(response.data);
        }
    };

    useEffect(() => {
        getAll();        
    },[]);



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

                <Route path="/login" element={<LogInForm 
                    handleSetIsConnected={SetIsConnected}
                    handleSetUserData={SetUserData}
                 />} />
                {
                    isConnected && 
                    <>
                        <Route path="/events" element={<ListEvent
                            userData={userData}
                            eventData={eventData}
                            handleSetEventData={SetEventData}
                        />} />,
                        <Route path="/add-event" element={<EventForm
                            handleSetEventData={SetEventData}
                            eventData={eventData}
                        />} />,
                        <Route path={`/profil/${userData.id}`} element={<Profil
                            handleSetIsConnected={SetIsConnected}
                            userData={userData}
                        />} />
                    </>
                }
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
