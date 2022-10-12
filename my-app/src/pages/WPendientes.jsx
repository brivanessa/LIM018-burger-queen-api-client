import React from 'react'
import './wPendientes.css'

export const WPendientes = () => {
  return (
    <div className='areaPendientes'>
      {/* <h1> Pedidos pendientes </h1> */}
      <div className='pendienteCard'>
        <div className='datosCard'>
          <div>
            <p> Fecha: xx/xx/xx </p>
            <p> Cliente: xxxxxxx </p>
          </div>
          <div>
            <p> Nro de Mesa: </p>
            <p> N </p>
          </div>
        </div>
        <div>
          <h1>Pedido</h1>
          <table className='tablePedido'>
            <tr>
              <td>nro</td>
              <td>producto</td>
              <td>precio</td>
            </tr>
            <tr>
              <td>nro</td>
              <td>producto</td>
              <td>precio</td>
            </tr>
            <tr>
              <td>nro</td>
              <td>producto</td>
              <td>precio</td>
            </tr>
          </table>
          <h2>total: </h2>
        </div>
      </div>
    </div>
  )
}

// export default WPendientes
