import React from 'react';
import Card from './Card';
import imagen from '../img/fondo2.jpg'

export default function Cards({cities, onClose}) {
  return (
    <div className="inline-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cities.map(c => <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          temp={c.temp}
          sensacion={c.sensacion}
          onClose={() => onClose(c.id)}
          id={c.id}
        /> )}
   
        
    </div>
  );
}
