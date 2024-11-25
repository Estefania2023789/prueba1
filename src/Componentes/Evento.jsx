import React from 'react';
import axios from "axios";

function Evento({ evento, handleAsistir }) {
  return (
    <div className='tarjeta-evento'>
      <h2>{evento.nombre}</h2>
      <img className='icono' src={evento.imagen} alt={evento.nombre} />
      <p>{evento.lugar}</p>
      <p>{evento.fecha}</p>
      <p>{evento.asistentes} asistentes</p>
      <button onClick={handleAsistir}>Asistir</button>
    </div>
  );
}

export default Evento;
