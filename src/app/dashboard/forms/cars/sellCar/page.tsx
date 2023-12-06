import { CiUser } from 'react-icons/ci';
import '/home/juanpbaucl/Proyectos/React/Autos-Next+/BuenautoF/BuenAuto-FE/src/app/dashboard/forms/estilosFormularios.css';
export default function sellCar() {
  return (
    <div className='contenedor'>
      <div className='caja-formulario'>
        <div className='contenedor-login' id='login'>
          <div className='encabezado'>
            <h1 className='titulo'>Vender Vehiculo</h1>
          </div>
          <div className='caja-entrada'>
            <input
              type='text'
              className='entrada'
              placeholder='Nombre de la linea'
            />
            <i className='logo'>
              <CiUser />
            </i>
          </div>
          <div className='caja-entrada'>
            <input type='text' className='entrada' placeholder='Color' />
            <i className='logo'>
              <CiUser />
            </i>
          </div>
          <div className='caja-entrada'>
            <input type='text' className='entrada' placeholder='Marca' />
            <i className='logo'>
              <CiUser />
            </i>
          </div>
          <div className='caja-entrada'>
            <input type='text' className='entrada' placeholder='Tipo' />
            <i className='logo'>
              <CiUser />
            </i>
          </div>
          <div className='caja-entrada'>
            <input type='text' className='entrada' placeholder='Modelo' />
            <i className='logo'>
              <CiUser />
            </i>
          </div>
          <div className='caja-entrada'>
            <input type='text' className='entrada' placeholder='Placa' />
            <i className='logo'>
              <CiUser />
            </i>
          </div>
          <div className='caja-entrada'>
            <input type='text' className='entrada' placeholder='Valor' />
            <i className='logo'>
              <CiUser />
            </i>
          </div>
          <div className='caja-entrada'>
            <input
              type='submit'
              className='boton-enviar'
              value='Registrar Vehiculo'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
