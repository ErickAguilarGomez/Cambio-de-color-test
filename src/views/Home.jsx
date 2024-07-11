import React, { createContext, useEffect, useState } from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

 const EventContext=createContext

export default function Home() {
    const [eventosPrincipal, setEvents] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await fetch("https://app.ticketmaster.com/discovery/v2/events.json?countryCode=MX&apikey=sbV2n9Do6KLydKxvDKov4XXdeJwbHvGq");
                const data = await response.json();
                if (data._embedded && data._embedded.events) {
                    const events = data._embedded.events;
                    setEvents(events); 
                } else {
                    console.warn('No events found in response:', data);
                }
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        }

        fetchEvents();
    }, []); 

    return (
        <>
         <EventContext.Provider value={{eventosPrincipal}}>
            <Navbar />
            <Main eventosPrincipal={eventosPrincipal} />
            </EventContext.Provider>
        </>
    );
}

export {EventContext}