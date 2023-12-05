import { CiUser } from 'react-icons/ci';
import '../estilosFormularios.css';

function fechaActual() {
  let fecha = new Date();
  let dia = fecha.getDate();
  let mes = fecha.getMonth() + 1;
  let anio = fecha.getFullYear();
  let fechaActual = `${dia}/${mes}/${anio}`;
  return fechaActual;
}

function obtenerId_Ciuddad() {
  // Obtener el id de la ciudad usando Post en la ruta /api/ciudad
}

export default function formClients() {
  return (
    <div className='contenedor'>
      <div className='caja-formulario'>
        <div className='contenedor-login' id='login'>
          <div className='encabezado'>
            <h1 className='titulo'>Ingresar Cliente</h1>
          </div>
          <div className='caja-entrada'>
            <input
              type='text'
              className='entrada'
              placeholder='Nombre del cliente'
            />
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
              type='submit'
              className='boton-enviar'
              value='Crear Cliente'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
