import Link from 'next/link';
import Navbar from '../components/Navbar';
import './styleCars.css';
import CardCars from './components/CardCars';

type Car = {
  model: string;
  plate: string;
  value: string;
  line: string;
  color: string;
};

const getData = async () => {
  const res = await fetch('http://localhost:3011/vehicle');
  const newVehicle = await res.json();
  console.log(newVehicle);
  return await newVehicle;
};
export default async function adminCars() {
  const dataVehicle = await getData();
  return (
    <>
      <Navbar></Navbar>
      <section className='vehiculos' id='vehiculos'>
        <div className='tituloServicios'>
          <span> Vehiculos disponibles </span>
          <h2>
            Explora en toda nuestra variedad de Vehiculos nuevos <br /> o usados
            segun tu conveniencia asi como presupuesto{' '}
          </h2>
        </div>

        <div className='buscador'>
          <input className='barr' type='text' placeholder='Buscar vehiculos' />
          <button className='btn'>Buscar</button>
          <button className='btn'>
            <Link href='/dashboard/forms/cars' className='navbar__menu--link'>
              Comprar Vehiculo
            </Link>
          </button>
        </div>

        <button className='btnUs'>Todos</button>
        <button className='btnUs'>Nuevos</button>
        <button className='btnUs'>Usados</button>

        <div className='contenedor-vehiculos'>
          {dataVehicle.map((Car: any) => {
            return (
              <CardCars
                key={Car.id}
                model={Car.model}
                plate={Car.plate}
                brand={Car.marca}
                value={Car.value}
                line={Car.linea}
                color={Car.color}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
