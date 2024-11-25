import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Evento from "./Componentes/Evento";
import './App.css';

function App() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/eventos')
      .then(response => {
        setEventos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleAsistir = (id) => {
    const evento = eventos.find((evento) => evento.id === id);
    if (evento) {
      const nuevosAsistentes = parseInt(evento.asistentes) + 1;
      axios.put(`http://localhost:3001/eventos/${id}`, { asistentes: nuevosAsistentes.toString() })
        .then(response => {
          setEventos(eventos.map((evento) => evento.id === id ? { ...evento, asistentes: nuevosAsistentes.toString() } : evento));
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  return (
    <div className="contenedor">
      <h1>Eventos en "San José" por el feriado de noviembre</h1>
      <ul className="contenedor-eventos">
        {eventos.map(evento => (
          <li key={evento.id}>
            <Evento evento={evento} handleAsistir={() => handleAsistir(evento.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
