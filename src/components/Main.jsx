import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../Utils/ProductCard";
import DenisContext from "../context/DenisContext";


export default function Main() {
  const [events, setEvents] = useState([]);
  const  {value}=useContext(DenisContext)

 /* useEffect(() => {
    if (filteredEventos) {
      setEvents(filteredEventos);
    }
  }, [filteredEventos]);
*/


  return (
    <main className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.length > 0 && events.map((evento, index) => (
          <div key={index}>
            <ProductCard evento={evento} />
          </div>
        ))}
      </div>
    </main>
  );
}
