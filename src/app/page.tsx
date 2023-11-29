import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    <>
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

          <ul className='navbar hidden sm:visible'>
            <li>
              <a href='#home'> Home </a>
            </li>
            <li>
              <a href='#service'> Servicios </a>
            </li>
            <li>
              <a href='#acerca'> Acerca de nosotros </a>
            </li>
          </ul>
        </div>

        <div className='header-btn'>
          <Link href='auth/login' className='btn btn-inicio'>
            Iniciar Sesion
          </Link>
          <Link href='auth/signin' className='btn btn-registrarse'>
            Registrarse
          </Link>
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
              sunt in culpa qui officia deserunt mollit anim id est laborum.{' '}
            </p>
            <a href='#' className='btn'>
              Regresar
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
