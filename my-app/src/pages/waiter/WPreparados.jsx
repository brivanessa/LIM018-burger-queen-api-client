// import React from 'react'

// export const WPreparados = () => {
//   return (
//     <div className='areaPreparados'>
//       Pedidos Preparados

//     </div>
//   )
// }


import React from 'react'
import './wPendientes.css'
import { useState, useEffect } from 'react';
import { ordersGet, orderPut } from '../../helpers/api'
import { useNavigate } from 'react-router-dom'

export const WPreparados = () => {
  const tokenSaved = localStorage.getItem('llave');
  const [ordersArray, setOrdersuArray] = useState([])
  const [changeStatus1, setChangeStatus] = useState("delivering")

  useEffect(() => {
    ordersGet(tokenSaved)
      .then((res) => {
        const ordersGeneral = res.data;
        const ordersPending = ordersGeneral.filter(order=>order.status==="delivering")
        setOrdersuArray(ordersPending)
      }).catch(error => console.log(error))
  },[tokenSaved,changeStatus1])

  function changeStatus(idOrder){
    orderPut(tokenSaved,idOrder)
    .then((res) => {
      if (res.status === 200) {
        alert('El pedido fue entregado :)')
        setChangeStatus(`delivered -${idOrder}`)
        // useNavigate("/Preparados")
      } 
      // else if(res.status === 400){
      //   alert('No se indica userId(nombre de usuario o mesa) o se intenta crear una orden sin productos.')
      // }else { 
      //   alert(' No hay cabecera de autenticación.') 
      // }
    })
    .catch((err) => { console.log(err) })
  }



  //console.log(ordersArray)
  return (
    <div className='areaPendientes3'>
    <div className='areaPreparados'>
      {ordersArray.map((order) => (
      <div className='pendienteCard' key={order.id}>
      <div className='datosCard'>
        <div>
          <p> Fecha: {order.dateEntry} </p>
          <p> Cliente: {order.client.split('/',1)} </p>
        </div>
        <div>
          <p> Nro de Mesa: </p>
          <p> Nº {order.client.split(':')[1]}</p>
        </div>
      </div>
      <br/>
      <div>
        <div className='estadoPedido'>
        <h1>Pedido Nº {order.id}</h1>
        <h2 className='statusOrder'>{order.status.toUpperCase()}</h2>
        </div>
        <table className='tableOrder'>
        <thead>
            <tr className="rowHead">
              <th className="rowHeadTable">Código</th>
              <th className="rowHeadTable">Descripción</th>
              <th className="rowHeadTable">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {order.products.map ((product) => (
            <tr>
            <td>{product.product.split('-')[0]}</td>
            <td>{product.product.split('-')[1]}</td>
            <td>{product.qty}</td>
          </tr>
            ))}
          </tbody>
        </table>
        {/* onClick={changeStatus} */}
        <input type="submit" className="btnWaiterEntregar" onClick={(event)=>changeStatus(event.target.dataset.id)} data-id={order.id} value=" DELIVERED ᐅ"></input>       
        {/* <h2 className='statusOrder'>{order.status}</h2> */}
      </div>
    </div>
      ))}

    </div>
    </div>
  )
}



// export default WPreparados
