import React from 'react';

const ProductCard = ({ evento }) => {
  return (
    <div className="w-60 h-96 rounded overflow-hidden shadow-lg bg-white m-4">
      <img src={evento.images[0].url} alt={evento.name} className="w-full h-64 object-cover" />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{evento.name}</div>
        <p className="text-gray-700 text-base mb-2">Fecha: {evento.dates.start.localDate}</p>
        <p className="text-gray-700 text-base mb-2">Hora: {evento.dates.start.localTime}</p>
        <p className="text-gray-700 text-base mb-2">Lugar: {evento._embedded.venues[0].name}</p>
        <p className="text-gray-700 text-base">{evento.info}</p>
      </div>
    </div>
  );
}

export default ProductCard;
