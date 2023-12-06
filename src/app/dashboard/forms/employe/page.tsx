import { CiUser } from 'react-icons/ci';
import '../estilosFormularios.css';

function generacionDeCodigo() {
  // Generar un codigo de 3 letras y 3 numeros
  // Ejemplo: EMP001
}

function validarCargo() {}

function ValidarSucursal() {
  // Obtener el id de la ciudad usando Post en la ruta /api/ciudad
}

function obtenerSalario() {
  // Obtener el salario usando Post en la ruta /api/salario
}

function getFechaIngreso() {
  // Obtener la fecha de ingreso usando Post en la ruta /api/fechaIngreso
}

function fechaActual() {
  let fecha = new Date();
  let dia = fecha.getDate();
  let mes = fecha.getMonth() + 1;
  let anio = fecha.getFullYear();
  let fechaActual = `${dia}/${mes}/${anio}`;
  return fechaActual;
}

export default function formEmploye() {
  return (
    <div className='contenedor'>
      <div className='caja-formulario'>
        <div className='contenedor-login' id='login'>
          <div className='encabezado'>
            <h1 className='titulo'>Registrar Empleado</h1>
          </div>
          <div className='caja-entrada'>
            <input
              type='text'
              className='entrada'
              placeholder='Nombre del empleado'
            />
            <i className='logo'>
              <CiUser />
            </i>
          </div>
          <div className='caja-entrada'>
            <input type='text' className='entrada' placeholder='Cargo' />
            <i className='logo'>
              <CiUser />
            </i>
          </div>
          <div className='caja-entrada'>
            <input type='text' className='entrada' placeholder='Ciudad' />
            <i className='logo'>
              <CiUser />
            </i>
          </div>
          <div className='caja-entrada'>
            <input
              type='text'
              className='entrada'
              placeholder='Fecha de Nacimiento'
            />
            <i className='logo'>
              <CiUser />
            </i>
          </div>
          <div className='caja-entrada'>
            <input type='text' className='entrada' placeholder='Salario' />
            <i className='logo'>
              <CiUser />
            </i>
          </div>
          <div className='caja-entrada'>
            <input
              type='submit'
              className='boton-enviar'
              value='Registrar Empleado'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
