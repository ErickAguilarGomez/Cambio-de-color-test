import React, { useContext } from "react";
import ProductCard from "../Utils/ProductCard";
import DenisContext from "../context/DenisContext";


export default function Main() {
  const {filteredEventos}=useContext(DenisContext)
  
  console.log(filteredEventos)


  return (
    <main className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredEventos.length > 0 && filteredEventos.map((evento, index) => (
          <div key={index}>
            <ProductCard evento={evento} />
          </div>
        ))}
      </div>
    </main>
  );
}
