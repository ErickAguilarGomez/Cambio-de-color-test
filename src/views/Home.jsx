import React, { createContext, useContext, useEffect, useState } from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

const DenisProvedor=createContext()

export default function Home() {
  const [eventosPrincipal, setEventosPrincipal] = useState([]);
  const [filteredEventos, setFilteredEventos] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch(
          "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=MX&apikey=sbV2n9Do6KLydKxvDKov4XXdeJwbHvGq"
        );
        const data = await response.json();
        const events = data._embedded.events;
        setEventosPrincipal(events);
        setFilteredEventos(events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }

    fetchEvents();
  }, []);

  console.log(eventosPrincipal)

  function filteredProducts(evento) {
    const products = eventosPrincipal.filter((producto) => 
      producto.name.toLowerCase().includes(evento.toLowerCase())
    );
    setFilteredEventos(products);
  }

  return (
    <DenisProvedor.Provider value={{filteredEventos,filteredProducts}}>
      <Navbar  />
      <Main />
      </DenisProvedor.Provider>
  );
}

export{DenisProvedor}