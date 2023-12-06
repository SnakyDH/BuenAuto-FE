'use client';
import '../menuUsuario.css';
import '../inicioUsuario.css';
import Link from 'next/link';
import { useState } from 'react';
import { FiAlignRight } from 'react-icons/fi'; // Importa FiAlignRight

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Función para cambiar el estado y mostrar/ocultar la barra
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
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
              <a href='/dashboard/home' className='navbar__menu--link'>
                Inicio
              </a>
            </li>
            <li className='navbar__menu--item'>
              <Link href='/dashboard/adminEmpl' className='navbar__menu--link'>
                Administrar Empleados
              </Link>
            </li>
            <li className='navbar__menu--item'>
              <Link
                href='/dashboard/adminClients'
                className='navbar__menu--link'
              >
                Administrar Clientes
              </Link>
            </li>
            <li className='navbar__menu--item'>
              <Link href='/dashboard/adminCars' className='navbar__menu--link'>
                Administrar Vehiculos
              </Link>
            </li>
            <li className='navbar__menu--item'>
              <Link href='/dashboard/adminTrans' className='navbar__menu--link'>
                Transacciones
              </Link>
            </li>
            <li className='navbar__menu--item'>
              <Link
                href='/dashboard/adminOffices'
                className='navbar__menu--link'
              >
                Administrar Sucursales
              </Link>
            </li>
          </ul>
        </nav>

        <div className='navbar__toggle' id='mobile-menu'>
          <span className='bar'></span> <span className='bar'></span>{' '}
          <span className='bar'></span>
        </div>
      </header>
    </div>
  );
}
