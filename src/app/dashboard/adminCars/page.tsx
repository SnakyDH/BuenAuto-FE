import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import './styleCars.css';
import CardCars from './components/CardCars';

type Car = {
  model: string;
  chassis: string;
  plate: string;
  value: string;
  line: string;
  color: string;
};

const getData = async () => {
  const res = await fetch('http://localhost:3011/vehicle');
  const data = await res.json();
  return await data;
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
          {dataVehicle.map((car: any) => {
            return (
              <CardCars
                key={car.id}
                model={car.model}
                chassis={car.chassis}
                plate={car.plate}
                brand={car.marca}
                value={car.value}
                line={car.linea}
                color={car.color}
              />
            );
          })}
          <div className='caja-vehiculos'>
            <div className='img-vehiculos'>
              <Image src='/img/car1.jpg' width={680} height={480} alt='' />
            </div>
            <p>2019</p>
            <h3>Toyota Corolla</h3>
            <h2>
              $110.000.000 | $ 1.500.000 <span> / Cuotas mensuales</span>
            </h2>
            <div className='btn'>
              <Link
                href='/dashboard/forms/cars/sellCar'
                className='navbar__menu--link'
              >
                Vender Vehiculo
              </Link>
            </div>
            <a href='#' className='btn'>
              Actualizar
            </a>
            <a href='#' className='btn'>
              Eliminar
            </a>
          </div>

          <div className='caja-vehiculos'>
            <div className='img-vehiculos'>
              <Image src='/img/car2.jpg' width={680} height={480} alt='' />
            </div>
            <p>2019</p>
            <h3>Toyota Corolla</h3>
            <h2>
              $110.000.000 | $ 1.500.000 <span> / Cuotas mensuales</span>
            </h2>
            <div className='btn'>
              <Link
                href='/dashboard/forms/cars/sellCar'
                className='navbar__menu--link'
              >
                Vender Vehiculo
              </Link>
            </div>
            <a href='#' className='btn'>
              Actualizar
            </a>
            <a href='#' className='btn'>
              Eliminar
            </a>
          </div>

          <div className='caja-vehiculos'>
            <div className='img-vehiculos'>
              <Image src='/img/car3.jpg' width={680} height={480} alt='' />
            </div>
            <p>2019</p>
            <h3>Toyota Corolla</h3>
            <h2>
              $110.000.000 | $ 1.500.000 <span> / Cuotas mensuales</span>
            </h2>
            <div className='btn'>
              <Link
                href='/dashboard/forms/cars/sellCar'
                className='navbar__menu--link'
              >
                Vender Vehiculo
              </Link>
            </div>
            <a href='#' className='btn'>
              Actualizar
            </a>
            <a href='#' className='btn'>
              Eliminar
            </a>
          </div>

          <div className='caja-vehiculos'>
            <div className='img-vehiculos'>
              <Image src='/img/car4.jpg' width={680} height={480} alt='' />
            </div>
            <p>2019</p>
            <h3>Toyota Corolla</h3>
            <h2>
              $110.000.000 | $ 1.500.000 <span> / Cuotas mensuales</span>
            </h2>
            <div className='btn'>
              <Link
                href='/dashboard/forms/cars/sellCar'
                className='navbar__menu--link'
              >
                Vender Vehiculo
              </Link>
            </div>
            <a href='#' className='btn'>
              Actualizar
            </a>
            <a href='#' className='btn'>
              Eliminar
            </a>
          </div>

          <div className='caja-vehiculos'>
            <div className='img-vehiculos'>
              <Image src='/img/car5.jpg' width={680} height={480} alt='' />
            </div>
            <p>2019</p>
            <h3>Toyota Corolla</h3>
            <h2>
              $110.000.000 | $ 1.500.000 <span> / Cuotas mensuales</span>
            </h2>
            <div className='btn'>
              <Link
                href='/dashboard/forms/cars/sellCar'
                className='navbar__menu--link'
              >
                Vender Vehiculo
              </Link>
            </div>
            <a href='#' className='btn'>
              Actualizar
            </a>
            <a href='#' className='btn'>
              Eliminar
            </a>
          </div>

          <div className='caja-vehiculos'>
            <div className='img-vehiculos'>
              <Image src='/img/car6.jpg' width={680} height={480} alt='' />
            </div>
            <p>2019</p>
            <h3>Toyota Corolla</h3>
            <h2>
              $110.000.000 | $ 1.500.000 <span> / Cuotas mensuales</span>
            </h2>
            <div className='btn'>
              <Link
                href='/dashboard/forms/cars/sellCar'
                className='navbar__menu--link'
              >
                Vender Vehiculo
              </Link>
            </div>
            <a href='#' className='btn'>
              Actualizar
            </a>
            <a href='#' className='btn'>
              Eliminar
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
