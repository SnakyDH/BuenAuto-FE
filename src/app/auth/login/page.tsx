import { CiUser } from 'react-icons/ci';
import './stylesLogin.css';

export default function LoginPage() {
  return (
    <div className='contenedor'>
      <div className='caja-formulario'>
        <div className='contenedor-login' id='login'>
          <div className='encabezado'>
            <h1 className='titulo'>Inicio de Sesión</h1>
          </div>
          <div className='caja-entrada'>
            <input
              type='text'
              className='entrada'
              placeholder='Codigo de Usuario'
            />
            <i className='logo'>
              <CiUser />
            </i>
          </div>
          <div className='caja-entrada'>
            <input
              type='password'
              className='entrada'
              placeholder='Contraseña'
            />
            <i className='logo'>
              <CiUser />
            </i>
          </div>
          <div className='caja-entrada'>
            <input
              type='submit'
              className='boton-enviar'
              value='Iniciar Sesión'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
