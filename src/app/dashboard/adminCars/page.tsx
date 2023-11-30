import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function page() {
  return (
    <div>
      <Navbar></Navbar>

      <section className='adminVehiculos'>
        <div className='text'>
          <h1>
            <strong>Administrar Vehiculos</strong>
          </h1>
        </div>

        <div className='avatar'>
          <Image
            src='/img/vehiculos.png'
            width={4100}
            height={4100}
            alt='Avatar del empleado'
            className='avatar-img'
          />
        </div>
      </section>

      <section className='adminTransacciones'>
        <div className='text'>
          <h1>
            <strong>Transacciones</strong>
          </h1>
        </div>
      </section>
    </div>
  );
}
