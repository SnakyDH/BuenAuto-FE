'use client';
import './menuUsuario.css';
import './inicioUsuario.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FiAlignRight } from 'react-icons/fi'; // Importa FiAlignRight

export default function UsersPage() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Función para cambiar el estado y mostrar/ocultar la barra
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [currentTime, setCurrentTime] = useState(new Date());
  const [connectionTime, setConnectionTime] = useState(new Date());

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
      <div
        id='barra-menu'
        className={`barra bar-menu menu-icon ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <FiAlignRight />
      </div>

      <header className={`${isMenuOpen ? 'active' : ''}`}>
        <a href='#' className='logo'>
          <span> Bienvenido </span> Nombre [Cargo empleado]
        </a>

        <nav className='navbar'>
          <ul className='navbar__menu'>
            <li className='navbar__menu--item'>
              <a href='#Inicio' className='navbar__menu--link'>
                Inicio
              </a>
            </li>
            <li className='navbar__menu--item'>
              <a href='#Homologaciones' className='navbar__menu--link'>
                Administrar Clientes
              </a>
            </li>
            <li className='navbar__menu--item'>
              <a href='#Solicitudes' className='navbar__menu--link'>
                Administrar Vehiculos
              </a>
            </li>
            <li className='navbar__menu--item'>
              <a href='#Usuarios' className='navbar__menu--link'>
                Transacciones
              </a>
            </li>
            <li className='navbar__menu--item'>
              <a href='#Configuracion' className='navbar__menu--link'>
                Informacion Personal
              </a>
            </li>
          </ul>
        </nav>

        <div className='navbar__toggle' id='mobile-menu'>
          <span className='bar'></span> <span className='bar'></span>{' '}
          <span className='bar'></span>
        </div>
      </header>

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
