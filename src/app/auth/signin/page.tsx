import Image from 'next/image';
import Link from 'next/link';
import './stylesRegistro.css';

export default function SignIn() {
  return (
    <div className='wrapper'>
      <div className='form-box'>
        <div className='contenedor-registro' id='registro'>
          <div className='tituloR'>Registrate</div>
          <div className='encabezado'>
            <span>
              ¿Ya tienes una cuenta?
              <Link href='/auth/login'> Inicia Sesión </Link>
            </span>
          </div>
          <div className='dos-forms'>
            <div className='caja-entrada'>
              <input type='text' className='entrada' placeholder='Nombres' />
              <i className='bx bx-user'></i>
            </div>
            <div className='caja-entrada'>
              <input type='text' className='entrada' placeholder='Apellidos' />
              <i className='bx bx-user'></i>
            </div>
          </div>
          <div className='caja-entrada'>
            <input type='text' className='entrada' placeholder='Email' />
            <i className='bx bx-envelope'></i>
          </div>
          <div className='caja-entrada'>
            <input
              type='password'
              className='entrada'
              placeholder='Contraseña'
            />
            <i className='bx bx-lock-alt'></i>
          </div>
          <div className='caja-entrada'>
            <input type='submit' className='boton-enviar' value='Registrate' />
          </div>
          <div className='dos-columnas'>
            <div className='uno'>
              <input type='checkbox' id='registro-check' />
              <label htmlFor='registro-check'> Recuerdame </label>
            </div>
            <div className='dos'>
              <label>
                <a href='#'>Terminos & condiciones</a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
