import React, { useEffect, useState } from 'react';
import ProductCard from '../Utils/ProductCard';

export default function Main() {
    const [events, setEvents] = useState([]);
    
    useEffect(() => {
        setEvents(eventosPrincipal);
    }, [eventosPrincipal]);

    return (
        <main className="container mx-auto p-6">
            {events && events.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {events.map((evento, index) => (
                        <div key={index}>
                            <ProductCard evento={evento} />
                        </div>
                    ))}
                </div>
            ) : (
                <p>No events found</p>
            )}
        </main>
    );
}
//hola