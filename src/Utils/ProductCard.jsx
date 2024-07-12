import React, { useState } from 'react';
import Details from "../views/Details"

const ProductCard = ({ evento }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className="w-60 h-100 rounded overflow-hidden shadow-lg bg-white m-4 text-center">
      <img src={evento.images[0].url} alt={evento.name} className="w-full h-64 object-cover" />

      <div className="px-6 py-4 flex flex-col justify-center items-center text-sm">
        <div className="font-bold text-sm mb-2">{evento.name}</div>
        <p className="text-gray-700 mb-2 text-sm">Fecha: {evento.dates.start.localDate}</p>
        <p className="text-gray-700 mb-2 text-sm">Hora: {evento.dates.start.localTime}</p>
        <p className="text-gray-700 mb-2 text-sm">Lugar: {evento._embedded.venues[0].name}</p>
      </div>

      {showDetails && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <Details evento={evento} />
            <button onClick={handleCloseDetails} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Cerrar</button>
          </div>
        </div>
      )}

      <button onClick={handleShowDetails} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Ver Detalles</button>
    </div>
  );
}

export default ProductCard;
