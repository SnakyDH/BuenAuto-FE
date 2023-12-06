import Link from 'next/link';
import Image from 'next/image';

type Props = {
  id: string;
  model: string;
  chassis: string;
  plate: string;
  value: string;
  brand: string;
  line: string;
  color: string;
  type: string;
};

export default function CardCars({
  model,
  chassis,
  plate,
  value,
  brand,
  line,
  color,
  type,
}: Props) {
  return (
    <div className='caja-vehiculos'>
      <div className='img-vehiculos'>
        <Image src='/img/car1.jpg' width={680} height={480} alt='' />
      </div>
      <p>{model}</p>
      <h3>
        {brand},{line}
      </h3>
      <h2>
        {value}, {type}
        <span> / Cuotas mensuales</span>
      </h2>
      <p>
        {color} , {plate}
      </p>

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
  );
}
