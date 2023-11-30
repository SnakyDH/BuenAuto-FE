'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FiAlignRight } from 'react-icons/fi'; // Importa FiAlignRight
import Navbar from '../components/Navbar';

export default function UsersPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [connectionTime, setConnectionTime] = useState(new Date()); // Guarda la hora de tiempo conectado JWT

  // Función para actualizar la hora cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  // Función para calcular la duración de la conexión
  const calculateConnectionTime = () => {
    const diffInMilliseconds = currentTime.getTime() - connectionTime.getTime();
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

    const hours = Math.floor(diffInSeconds / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const seconds = diffInSeconds % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div>
      <div id='barra-menu'>
        <FiAlignRight />
      </div>
      <Navbar></Navbar>
      <main>
        <section className='homeUser' id='homeUser'>
          <div className='text'>
            <h1>
              <strong>
                Bienvenido <span> {'Nombre del empleado'} </span> <br></br>
                ¿Qué desea hacer hoy?
              </strong>
            </h1>

            <div className='clock'>
              <h2 className='reloj-title'>
                Hoy es {currentTime.toLocaleDateString()} | Hora:{' '}
                {currentTime.toLocaleTimeString()}
              </h2>
              <p>Tiempo Conectado: {calculateConnectionTime()}</p>
            </div>
          </div>

          <div className='avatar'>
            <Image
              src='/img/woman.png'
              width={4100}
              height={4100}
              alt='Avatar del empleado'
              className='avatar-img'
            />
          </div>
        </section>
      </main>
    </div>
  );
}
