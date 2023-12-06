'use client';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import './styleEmploye.css';
import Link from 'next/link';
import CardEmploye from './components/CardEmploye';
import { useState, useEffect } from 'react';

type employe = {
  id: string;
  name: string;
  code: string;
  role: string;
  password: string;
  salary: string;
  createdAt: string;
  positionid: string;
  branchid: string;
};

export default function PageEmployee() {
  const [employe, setEmploye] = useState<employe[]>([
    {
      id: '',
      name: '',
      code: '',
      role: '',
      password: '',
      salary: '',
      createdAt: '',
      positionid: '',
      branchid: '',
    },
  ]);
  useEffect(() => {
    const getEmployees = async () => {
      const res = await fetch('http://localhost:3011/employee');
      const newEmploye = await res.json();
      console.log(newEmploye);
      setEmploye(newEmploye);
    };
    getEmployees();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <section className='empleados' id='empleados'>
        <div className='tituloEmpleados'>
          <span> Empleados </span>
          <h2>Información de nuestros empleados </h2>
        </div>

        <div className='botones'>
          <button className='boton'>
            <Link
              href='/dashboard/Forms/employe'
              className='navbar__menu--link'
            >
              Agregar Empleado
            </Link>
          </button>
          <button className='boton'>Descargar Reporte</button>
        </div>

        <div className='contenedorEmpleados'>
          {employe
            ? employe.map((employe) => (
                <CardEmploye
                  key={employe.id}
                  name={employe.name}
                  code={employe.code}
                  role={employe.role}
                  branchid={employe.branchid}
                  salary={employe.salary}
                  admissiondate={employe.createdAt}
                />
              ))
            : null}
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
            <p>Código: EMP002</p>
            <p>Cargo: Diseñador</p>
            <p>Sucursal: Sucursal B</p>
            <p>Salario: $45,000</p>
            <p>Fecha de Ingreso: 02/01/2022</p>
            <div className='botonCard'>
              <button className='btnc'>Eliminar Empleado</button>
              <button className='btnc'>Modificar Empleado</button>
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
            <p>Código: EMP003</p>
            <p>Cargo: Gerente</p>
            <p>Sucursal: Sucursal C</p>
            <p>Salario: $70,000</p>
            <p>Fecha de Ingreso: 03/01/2022</p>
            <div className='botonCard'>
              <button className='btnc'>Eliminar Empleado</button>
              <button className='btnc'>Modificar Empleado</button>
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
            <h3>Angelica Martinez</h3>
            <p>Código: EMP003</p>
            <p>Cargo: Gerente</p>
            <p>Sucursal: Sucursal C</p>
            <p>Salario: $70,000</p>
            <p>Fecha de Ingreso: 03/01/2022</p>
            <div className='botonCard'>
              <button className='btnc'>Eliminar Empleado</button>
              <button className='btnc'>Modificar Empleado</button>
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
            <h3>Angelica Martinez</h3>
            <p>Código: EMP003</p>
            <p>Cargo: Gerente</p>
            <p>Sucursal: Sucursal C</p>
            <p>Salario: $70,000</p>
            <p>Fecha de Ingreso: 03/01/2022</p>
            <div className='botonCard'>
              <button className='btnc'>Eliminar Empleado</button>
              <button className='btnc'>Modificar Empleado</button>
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
            <h3>Angelica Martinez</h3>
            <p>Código: EMP003</p>
            <p>Cargo: Gerente</p>
            <p>Sucursal: Sucursal C</p>
            <p>Salario: $70,000</p>
            <p>Fecha de Ingreso: 03/01/2022</p>
            <div className='botonCard'>
              <button className='btnc'>Eliminar Empleado</button>
              <button className='btnc'>Modificar Empleado</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
