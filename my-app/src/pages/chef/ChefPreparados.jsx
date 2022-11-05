import React from 'react'
import { useState, useEffect } from 'react';
import { ordersGet, orderPutChefReverse } from '../../helpers/api'

export const ChefPreparados = () => {
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
    orderPutChefReverse(tokenSaved,idOrder)
    .then((res) => {
      if (res.status === 200) {
        alert('El estado del Pedido pasó de DELIVERING a PENDING...')
        setChangeStatus(`delivered -${idOrder}`)
      } 
    })
    .catch((err) => { console.log(err) })
  }



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
        <p className="fechaDelivered">LISTO EN {parseInt((new Date(order.dateDelivering)-new Date(order.dateEntry))/1000/60)} MINUTOS</p>
        <p className="fechaDelivering">(PREPARADO: {order.dateDelivering})</p>
        <input type="submit" className="btnWaiterEntregar" onClick={(event)=>changeStatus(event.target.dataset.id)} data-id={order.id} value=" ᐊ PENDING"></input>       
      </div>
    </div>
      ))}

    </div>
    </div>
  )
}