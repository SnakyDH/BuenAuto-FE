import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './mainPage.css';
import 'boxicons/css/boxicons.min.css';

export default function userPage() {
  return (
    <div id='__next'>
      <header>
        <div id='barra-menu' className='barra bar-menu menu-icon'>
          &#9776
        </div>

        <Link href='/' className='logo'>
          <Image src='/img/jeep.png' width={400} height={400} alt='' />
        </Link>

        <div className='menu-container'>
          <div className='btn btn-menu' id='menu-iconos'>
            <i className='bx bx-menu'></i>
          </div>

          <ul className='navbar'>
            <li>
              <a href='#home'> Home </a>
            </li>
            <li>
              <a href='#service'> Reporte de Servicios </a>
            </li>

            <li>
              <a href='#reseñas'> Reportes de Venta </a>
            </li>
            <li>
              <a href='#acerca'> Reporte de Empleados </a>
            </li>
            <li>
              <a href='#acerca'> Reporte de vehiculos </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Seccion Home */}
      <section className='home' id='home'>
        <div className='text'>
          <h1>
            ¿Buscas <span>comprar</span> o <span>vender</span> algun auto?
          </h1>
          <p>
            <h2 className='txt-conce'>Concesionaria ABC</h2>
            la mejor Concesionaria de la ciudad Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, voluptatum.
          </p>
          <a href='#' className='btn btn-home'>
            Ver Vehiculos
          </a>
        </div>
      </section>

      {/* Seccion Servicios */}
      <section className='Servicios' id='service'>
        <div className='tituloServicios'>
          <span> Servicios </span>
          <h2> ¿Que ofrecemos? </h2>
        </div>

        <div className='contenedor-servicios'>
          <div className='caja-servicio'>
            <i className='bx bx-cart-add'></i>
            <h3> Compra </h3>
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
            </p>
          </div>

          <div className='caja-servicio'>
            <i className='bx bx-car'></i>
            <h3> Vende </h3>
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{' '}
            </p>
          </div>

          <div className='caja-servicio'>
            <i className='bx bxs-car-crash'></i>
            <h3> Servicio Postventa </h3>
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{' '}
            </p>
          </div>
        </div>
      </section>

      {/* Seccion Vehiculos */}
      <section className='vehiculos' id='vehiculos'>
        <div className='tituloServicios'>
          <span> Vehiculos disponibles </span>
          <h2>
            Explora en toda nuestra variedad de Vehiculos nuevos o usados segun
            tu conveniencia asi como presupuesto{' '}
          </h2>
        </div>

        <div className='contenedor-vehiculos'>
          <div className='caja-vehiculos'>
            <div className='img-vehiculos'>
              <Image src='/img/car1.jpg' width={640} height={427} alt='' />
            </div>
            <p>2019</p>
            <h3>Toyota Corolla</h3>
            <h2>
              $110.000.000 | $ 1.500.000 <span> /Cuotas mensuales</span>
            </h2>
            <a href='#' className='btn'>
              Compralo ahora
            </a>
          </div>

          <div className='caja-vehiculos'>
            <div className='img-vehiculos'>
              <Image src='/img/car2.jpg' width={640} height={427} alt='' />
            </div>
            <p>2019</p>
            <h3>Toyota Corolla</h3>
            <h2>
              $110.000.000 | $ 1.500.000 <span> /Cuotas mensuales</span>
            </h2>
            <a href='#' className='btn'>
              Compralo ahora
            </a>
          </div>

          <div className='caja-vehiculos'>
            <div className='img-vehiculos'>
              <Image src='/img/car3.jpg' width={640} height={475} alt='' />
            </div>
            <p>2019</p>
            <h3>Toyota Corolla</h3>
            <h2>
              $110.000.000 | $ 1.500.000 <span> /Cuotas mensuales</span>
            </h2>
            <a href='#' className='btn'>
              Compralo ahora
            </a>
          </div>

          <div className='caja-vehiculos'>
            <div className='img-vehiculos'>
              <Image src='/img/car4.jpg' width={640} height={50000} alt='' />
            </div>
            <p>2019</p>
            <h3>Toyota Corolla</h3>
            <h2>
              $110.000.000 | $ 1.500.000 <span> /Cuotas mensuales</span>
            </h2>
            <a href='#' className='btn'>
              Compralo ahora
            </a>
          </div>

          <div className='caja-vehiculos'>
            <div className='img-vehiculos'>
              <Image src='/img/car5.jpg' width={640} height={427} alt='' />
            </div>
            <p>2019</p>
            <h3>Toyota Corolla</h3>
            <h2>
              $110.000.000 | $ 1.500.000 <span> /Cuotas mensuales</span>
            </h2>
            <a href='#' className='btn'>
              Compralo ahora
            </a>
          </div>

          <div className='caja-vehiculos'>
            <div className='img-vehiculos'>
              <Image src='/img/car6.jpg' width={640} height={427} alt='' />
            </div>
            <p>2019</p>
            <h3>Toyota Corolla</h3>
            <h2>
              $110.000.000 | $ 1.500.000 <span> /Cuotas mensuales</span>
            </h2>
            <a href='#' className='btn'>
              Compralo ahora
            </a>
          </div>
        </div>
      </section>

      {/* Seccion Reseñas */}

      <section className='Reseñas' id='reseñas'>
        <div className='tituloServicios'>
          <span> Reseñas </span>
          <h2>Experiencias de nuestros usuarios</h2>
        </div>

        <div className='contenedor-reseñas'>
          <div className='caja-reseñas'>
            <div className='img-reseñas'>
              <Image src='/img/rev1.jpg' width={640} height={959} alt='' />
            </div>
            <div className='estrellas'>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bx-star'></i>
            </div>
            <h3>Carlos Grillo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, voluptatum.
            </p>
          </div>

          <div className='caja-reseñas'>
            <div className='img-reseñas'>
              <Image src='/img/rev2.jpg' width={640} height={959} alt='' />
            </div>
            <div className='estrellas'>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
            </div>
            <h3>Pepe Perez</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, voluptatum.
            </p>
          </div>

          <div className='caja-reseñas'>
            <div className='img-reseñas'>
              <Image src='/img/rev3.jpg' width={640} height={959} alt='' />
            </div>
            <div className='estrellas'>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star-half'></i>
            </div>
            <h3>Angelica Martinez</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, voluptatum.
            </p>
          </div>
        </div>
      </section>
      {/* Seccion Acerca */}
      <section className='AcercaDe' id='acerca'>
        <div className='tituloServicios'>
          <span> Acerca de Nosotros </span>
          <h2> La mejor experiencia en la venta y compra de vehiculos </h2>
        </div>

        <div className='acerca-contenedor'>
          <div className='acerca-img'>
            <Image src='/img/about.png' width={1080} height={1097} alt='' />
          </div>
          <div className='acerca-text'>
            <span>25 años de experiencia</span>
            <h2>¿Quienes somos?</h2>
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum..{' '}
            </p>
            <a href='#' className='btn'>
              Leer mas
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
