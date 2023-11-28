import Image from 'next/image';
import Link from 'next/link';
import './stylesLogin.css';

export default function LoginPage() {
  return (
    <div className="contenedor">
    <div className="caja-formulario">


        <div className="contenedor-login" id="login">
            <div className="encabezado">
                <span>No tienes una cuenta <Link href='/registro'> Regístrate </Link> </span>
                <h1 className="titulo">Inicio de Sesión</h1>
            </div>
            <div className="caja-entrada">
                <input type="text" className="entrada" placeholder="Nickname o Email" />
                <i className="bx bx-user"></i>
            </div>
            <div className="caja-entrada">
                <input type="password" className="entrada" placeholder="Contraseña"/>
                <i className="bx bx-lock-alt"></i>
            </div>
            <div className="caja-entrada">
                <input type="submit" className="boton-enviar" value="Iniciar Sesión"/>
            </div>
            <div className="dos-columnas">
                <div className="uno">
                    <input type="checkbox" id="login-check"/>
                    <label htmlFor="login-check"> Recuérdame</label>
                </div>
                <div className="dos">
                    <label><a href="#">¿Olvidaste tu Contraseña?</a></label>
                </div>
            </div>
        </div>
    </div>
 </div>
  );
}
