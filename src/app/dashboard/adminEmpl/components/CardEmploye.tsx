import Image from 'next/image';

type Props = {
  code: string;
  id: string;
  name: string;
  role: string;
  password: string;
  salary: string;
  birthdate: string;
  admissiondate: string;
  positionid: string;
  branchid: string;
};

export default function CardEmploye({
  name,
  code,
  role,
  branchid,
  salary,
  admissiondate,
}: Props) {
  const dateC = new Date(admissiondate);
  return (
    <div className='cajaEmpleado'>
      <div className='imgEmpleado'>
        <Image src='/img/rev1.jpg' width={800} height={400} alt='Empleado 1' />
      </div>
      <h3>{name}</h3>
      <p>{code}</p>
      <p>Cargo: {role}</p>
      <p>Sucursal: {branchid}</p>
      <p>Salario: {salary}</p>
      <p>
        Fecha de Ingreso:
        {`${dateC.getDate()}-${dateC.getMonth()}-${dateC.getFullYear()} `}
      </p>
      <div className='botonCard'>
        <button className='btnc'>Eliminar Empleado</button>
        <button className='btnc'>Modificar Empleado</button>
      </div>
    </div>
  );
}
