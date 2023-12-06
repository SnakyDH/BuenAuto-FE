import Image from 'next/image';
import Navbar from '../components/Navbar';
import './styleOrders.css';

export default function adminOrders() {
  return (
    <>
      <Navbar></Navbar>
      <section className='recentOrder' id='Order'>
        <h2>Transacciones Recientes</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Valor Unitario</th>
              <th>Valor Total</th>
              <th>Id Cliente</th>
              <th>Id Sucursal</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1/1/2019</td>
              <td>Compra</td>
              <td>$ 20.500.000</td>
              <td>$ 21.500.000</td>
              <td>1</td>
              <td>1</td>
              <td className='estadoD'>Declinado</td>
              <td>
                <a href='#' className='btn actualizar'>
                  Actualizar
                </a>
                <a href='#' className='btn eliminar'>
                  Eliminar
                </a>
                <a href='#' className='btn detalles'>
                  Detalles
                </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>13/12/2021</td>
              <td>Compra</td>
              <td>$ 120.500.000</td>
              <td>$ 241.500.000</td>
              <td>1</td>
              <td>1</td>
              <td className='estadoP'>En proceso</td>
              <td>
                <a href='#' className='btn actualizar'>
                  Actualizar
                </a>
                <a href='#' className='btn eliminar'>
                  Eliminar
                </a>
                <a href='#' className='btn detalles'>
                  Detalles
                </a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>1/1/2019</td>
              <td>Compra</td>
              <td>$ 20.500.000</td>
              <td>$ 21.500.000</td>
              <td>1</td>
              <td>1</td>
              <td className='estadoD'>Declinado</td>
              <td>
                <a href='#' className='btn actualizar'>
                  Actualizar
                </a>
                <a href='#' className='btn eliminar'>
                  Eliminar
                </a>
                <a href='#' className='btn detalles'>
                  Detalles
                </a>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>1/1/2019</td>
              <td>Compra</td>
              <td>$ 20.500.000</td>
              <td>$ 21.500.000</td>
              <td>1</td>
              <td>1</td>
              <td className='estadoT'>Terminado</td>
              <td>
                <a href='#' className='btn actualizar'>
                  Actualizar
                </a>
                <a href='#' className='btn eliminar'>
                  Eliminar
                </a>
                <a href='#' className='btn detalles'>
                  Detalles
                </a>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>1/1/2019</td>
              <td>Compra</td>
              <td>$ 20.500.000</td>
              <td>$ 21.500.000</td>
              <td>1</td>
              <td>1</td>
              <td className='estadoP'>En proceso</td>
              <td>
                <a href='#' className='btn actualizar'>
                  Actualizar
                </a>
                <a href='#' className='btn eliminar'>
                  Eliminar
                </a>
                <a href='#' className='btn detalles'>
                  Detalles
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
