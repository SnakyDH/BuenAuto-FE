import Image from 'next/image';

type Props = {
  id: string;
  name: string;
  city: string;
  date: string;
  sucursal: string;
};

export default function CardClient({ name, sucursal, city, date }: Props) {
  const dateC = new Date(date);
  return (
    <div className='cajaEmpleado'>
      <div className='imgEmpleado'>
        <Image src='/img/rev1.jpg' width={800} height={400} alt='Empleado 1' />
      </div>
      <h3>{name}</h3>
      <p>Sucursal: {sucursal}</p>
      <p>Ciudad: {city}</p>
      <p>
        Fecha de Ingreso:
        {`${dateC.getDate()}-${dateC.getMonth()}-${dateC.getFullYear()} `}
      </p>
      <div className='botonCard'>
        <button className='btnc'>Eliminar Cliente</button>
        <button className='btnc'>Modificar Cliente</button>
      </div>
    </div>
  );
}
