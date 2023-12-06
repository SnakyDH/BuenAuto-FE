import Link from 'next/link';
import Image from 'next/image';

type Props = {
  model: string;
  plate: string;
  value: string;
  brand: string;
  line: string;
  color: string;
};

export default function CardCars({
  model,
  plate,
  value,
  brand,
  line,
  color,
}: Props) {
  return (
    <div className='caja-vehiculos'>
      <div className='img-vehiculos'>
        <Image src='/img/car1.jpg' width={780} height={480} alt='' />
      </div>
      <p>{model}</p>
      <h3>
        {brand}, {line}
      </h3>
      <h2>
        {value}
        <span> / Cuotas mensuales</span>
      </h2>
      <h3>
        {color} , {plate}
      </h3>

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
