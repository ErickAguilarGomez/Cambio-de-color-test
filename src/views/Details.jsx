import React from 'react'

const Details = ({evento}) => {
  return (
    <div className="px-6 py-4 flex flex-col justify-center items-center text-sm">
    <div className="font-bold text-sm mb-2">{evento.name}</div>
    <p className="text-gray-700 mb-2 text-sm">Fecha: {evento.dates.start.localDate}</p>
    <p className="text-gray-700 mb-2 text-sm">Hora: {evento.dates.start.localTime}</p>
    <p className="text-gray-700 mb-2 text-sm">Lugar: {evento._embedded.venues[0].name}</p>
  </div>
  )
}

export default Details
