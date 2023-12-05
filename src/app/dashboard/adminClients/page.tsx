'use client';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import './styleEmploye.css';

export default function PageClientes() {
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
              href='/dashboard/Forms/clients'
              className='navbar__menu--link'
            >
              Agregar Cliente
            </Link>
          </button>
          <button className='boton'>Descargar Reporte</button>
        </div>

        <div className='contenedorEmpleados'>
          <div className='cajaEmpleado'>
            <div className='imgEmpleado'>
              <Image
                src='/img/rev1.jpg'
                width={800}
                height={400}
                alt='Empleado 1'
              />
            </div>
            <h3>Carlos Grillo</h3>
            <p>Ciudad: Cali</p>
            <p>Fecha de Ingreso: 01/01/2022</p>
            <div className='botonCard'>
              <button className='btnc'>Eliminar Cliente</button>
              <button className='btnc'>Modificar Cliente</button>
            </div>
          </div>

          <div className='cajaEmpleado'>
            <div className='imgEmpleado'>
              <Image
                src='/img/rev2.jpg'
                width={800}
                height={400}
                alt='Empleado 2'
              />
            </div>
            <h3>Pepe Perez</h3>
            <p>Ciudad: Bogota</p>
            <p>Fecha de Ingreso: 31/12/2021</p>
            <div className='botonCard'>
              <button className='btnc'>Eliminar Cliente</button>
              <button className='btnc'>Modificar Cliente</button>
            </div>
          </div>

          <div className='cajaEmpleado'>
            <div className='imgEmpleado'>
              <Image
                src='/img/rev3.jpg'
                width={800}
                height={400}
                alt='Empleado 3'
              />
            </div>
            <h3>Angelica Martinez</h3>
            <p>Ciudad: Puerto Inirida</p>
            <p>Fecha de Ingreso: 8/03/2023</p>
            <div className='botonCard'>
              <button className='btnc'>Eliminar Cliente</button>
              <button className='btnc'>Modificar Cliente</button>
            </div>
          </div>

          <div className='cajaEmpleado'>
            <div className='imgEmpleado'>
              <Image
                src='/img/woman.png'
                width={800}
                height={400}
                alt='Empleado 3'
              />
            </div>
            <h3> </h3>
            <h3>Albin la Ardilla</h3>
            <p>Ciudad: Pereira</p>
            <p>Fecha de Ingreso: 11/05/2022</p>
            <div className='botonCard'>
              <button className='btnc'>Eliminar Cliente</button>
              <button className='btnc'>Modificar Cliente</button>
            </div>
          </div>

          <div className='cajaEmpleado'>
            <div className='imgEmpleado'>
              <Image
                src='/img/man.png'
                width={800}
                height={400}
                alt='Empleado 3'
              />
            </div>
            <h3>Maria Jose Buñuelo</h3>
            <p>Ciudad: Villavicencio </p>
            <p>Fecha de Ingreso: 01/01/2022</p>
            <div className='botonCard'>
              <button className='btnc'>Eliminar Cliente</button>
              <button className='btnc'>Modificar Cliente</button>
            </div>
          </div>

          <div className='cajaEmpleado'>
            <div className='imgEmpleado'>
              <Image
                src='/img/iconUserF.png'
                width={800}
                height={400}
                alt='Empleado 3'
              />
            </div>
            <h3>Caitlyn Kiraman</h3>
            <p>Ciudad: Piltover</p>
            <p>Fecha de Ingreso: 01/01/2022</p>
            <button className='btnc'>Eliminar Cliente</button>
            <button className='btnc'>Modificar Cliente</button>
          </div>
        </div>
      </section>
    </div>
  );
}
