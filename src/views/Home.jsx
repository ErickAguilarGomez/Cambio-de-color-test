import React, { useEffect, useState } from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import DenisProvider from "../context/DenisProvider";



export default function Home() {
  const [filteredEventos, setFilteredEventos] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch(
          "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=MX&apikey=sbV2n9Do6KLydKxvDKov4XXdeJwbHvGq"
        );
        const data = await response.json();
        const events = data._embedded.events;
        setFilteredEventos(events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }

    fetchEvents();
  }, []);


  function filteredProducts(evento) {
    const products = filteredEventos.filter((producto) => 
      producto.name.toLowerCase().includes(evento.toLowerCase())
    );
    setFilteredEventos(products);
  }

  return (

    
    <DenisProvider>
      <Navbar />
      <Main />
      </DenisProvider>
  );
}