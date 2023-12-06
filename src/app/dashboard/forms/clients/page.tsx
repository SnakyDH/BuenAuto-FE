'use client';
import { CiUser } from 'react-icons/ci';
import '../estilosFormularios.css';
import { useFormState } from 'react-dom';
import { useState } from 'react';

function fechaActual() {
  let fecha = new Date();
  let dia = fecha.getDate();
  let mes = fecha.getMonth() + 1;
  let anio = fecha.getFullYear();
  let fechaActual = `${dia}/${mes}/${anio}`;
  return fechaActual;
}

type createClient = {
  id: string;
  name: string;
  city: string;
  sucursal: string;
  phone: string;
};

export default function FormClients() {
  const [client, setClient] = useState<createClient>({
    id: '',
    name: '',
    city: '',
    sucursal: '',
    phone: '',
  });

  function handleSubmit(event: any) {
    console.log(client);
    event.preventDefault();

    fetch('http://localhost:3011/client', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(client),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div className='contenedor'>
      <form className='caja-formulario'>
        <div className='contenedor-login' id='login'>
          <div className='encabezado'>
            <h1 className='titulo'>Ingresar Cliente</h1>
          </div>

          <div className='caja-entrada'>
            <input
              type='text'
              className='entrada'
              placeholder='Cedula o id'
              onChange={(e) => {
                const id = e.target.value;
                console.log(id);
                setClient({ ...client, id });
              }}
            />

            <i className='logo'>
              <CiUser />
            </i>
          </div>
          <div className='caja-entrada'>
            <input
              type='text'
              className='entrada'
              placeholder='Nombre del Cliente'
              onChange={(e) => {
                const name = e.target.value;
                console.log(name);
                setClient({ ...client, name });
              }}
            />
            <i className='logo'>
              <CiUser />
            </i>
          </div>
          <div className='caja-entrada'>
            <input
              type='text'
              className='entrada'
              placeholder='Ciudad'
              onChange={(e) => {
                const city = e.target.value;
                console.log(city);
                setClient({ ...client, city });
              }}
            />
            <i className='logo'>
              <CiUser />
            </i>
          </div>
          <div className='caja-entrada'>
            <i className='logo'>
              <CiUser />
            </i>
          </div>
          <div className='caja-entrada'>
            <input
              type='text'
              className='entrada'
              placeholder='Telefono'
              onChange={(e) => {
                const phone = e.target.value;
                console.log(phone);
                setClient({ ...client, phone });
              }}
            />
            <i className='logo'>
              <CiUser />
            </i>
          </div>
          <div className='caja-entrada'>
            <input
              type='submit'
              className='boton-enviar'
              value='Registrar Cliente'
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
