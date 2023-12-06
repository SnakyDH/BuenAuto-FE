'use client';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import './styleEmploye.css';
import { useState, useEffect } from 'react';
import CardClient from './components/CardClient';

type client = {
  id: string;
  name: string;
  city: string;
  created_date: Date;
  sucursal: string;
};

export default function PageClientes() {
  const [clients, setClients] = useState<client[]>([
    {
      id: '',
      name: '',
      city: '',
      created_date: new Date(),
      sucursal: '',
    },
  ]);
  useEffect(() => {
    const getEmployees = async () => {
      const res = await fetch('http://localhost:3011/client');
      const newClients = await res.json();
      setClients(newClients);
    };
    getEmployees();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <section className='empleados' id='empleados'>
        <div className='tituloEmpleados'>
          <span> Clientes </span>
          <h2>Información de nuestros Clientes </h2>
        </div>

        <div className='botones'>
          <button className='boton'>
            {' '}
            <Link
              href='/dashboard/forms/clients'
              className='navbar__menu--link'
            >
              Agregar Cliente
            </Link>
          </button>
          <button className='boton'>Descargar Reporte</button>
        </div>

        <div className='contenedorEmpleados'>
          {clients
            ? clients.map((client) => (
                <CardClient
                  key={client.id}
                  name={client.name}
                  sucursal={client.sucursal}
                  city={client.city}
                  date={client.created_date}
                />
              ))
            : null}
        </div>
      </section>
    </div>
  );
}
