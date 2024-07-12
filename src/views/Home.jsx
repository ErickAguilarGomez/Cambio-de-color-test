import React, { useContext, useEffect } from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import DenisContext from "../context/DenisContext";

export default function Home() {
  const { setProductos, setFilteredEventos } = useContext(DenisContext);
    
  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch(
          "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=MX&apikey=sbV2n9Do6KLydKxvDKov4XXdeJwbHvGq"
        );
        const data = await response.json();
        const events = data._embedded.events;
        setFilteredEventos(events);
        setProductos(events)
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }

    fetchEvents();
  }, []);


  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}
