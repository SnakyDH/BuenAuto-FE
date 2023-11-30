'use client';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import './styleEmploye.css';

export default function PageEmployee() {
  return (
    <div>
      <Navbar></Navbar>
      <section className='empleados' id='empleados'>
        <div className='tituloEmpleados'>
          <span> Empleados </span>
          <h2>Información de nuestros empleados </h2>
        </div>

        <div className='botones'>
          <button className='boton'>Agregar Empleado</button>
          <button className='boton'>Eliminar Empleado</button>
          <button className='boton'>Modificar Empleado</button>
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
            <p>Código: EMP001</p>
            <p>Cargo: Desarrollador</p>
            <p>Sucursal: Sucursal A</p>
            <p>Salario: $50,000</p>
            <p>Fecha de Ingreso: 01/01/2022</p>
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
            <p>Código: EMP002</p>
            <p>Cargo: Diseñador</p>
            <p>Sucursal: Sucursal B</p>
            <p>Salario: $45,000</p>
            <p>Fecha de Ingreso: 02/01/2022</p>
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
          </div>
        </div>
      </section>
    </div>
  );
}
