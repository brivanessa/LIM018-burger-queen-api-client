import React from 'react'
import './wPendientes.css'
import { useState, useEffect } from 'react';
import { ordersGet, orderDelete } from '../../helpers/api'
import './WaiterPendiente&Preparados.css'
import axios from 'axios'

export const WPendientes = () => {
  const tokenSaved = localStorage.getItem('llave');
  const [ordersArray, setOrdersuArray] = useState([])
  const [changeStatus2, setChangeStatus2] = useState("delivered")


  useEffect(() => {
    ordersGet(tokenSaved)
      .then((res) => {
        const ordersGeneral = res.data;
        const ordersPending = ordersGeneral.filter(order=>order.status==="pending")
        setOrdersuArray(ordersPending)
      }).catch(error => console.log(error))
  },[tokenSaved,changeStatus2])


  function deleteOrder(idOrder){
    orderDelete(tokenSaved,idOrder)
    .then((res) => {
      if (res.status === 200) {
        const modalPage = document.getElementById("modalPage")
        //console.log(document.getElementById("messageModal").textContent)
        document.getElementById("messageModal").textContent= 'La orden se canceló"'
        modalPage.style.display = 'flex';
        setChangeStatus2(`canceled -${idOrder}`)
      } 
    })
    .catch((err) => { console.log(err) })
  }
  
  return (
    <div className='areaPendientes3'>
    <div className='areaPendientes'>
      {ordersArray.map((order) => (
      <div className='pendienteCardView' key={order.id}>
        <div className='estadoPedido'>
        <h1>Pedido Nº {order.id}</h1>
        <h2 className='statusOrder'>POR PREPARAR</h2>
        </div>
      <div>
        <div className='datosCardPendiente'>
        <div>
          <p> Fecha: {order.dateEntry} </p>
          <p> Cliente: {order.client.split('/',1)} </p>
        </div>
        <div>
          <p> Nro de Mesa: </p>
          <p> Nº {order.client.split(':')[1]}</p>
        </div>
        </div>
        <br></br>
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
            <td className="productDescription">{product.product.split('-')[1]}</td>
            <td>{product.qty}</td>
          </tr>
            ))}
          </tbody>
        </table>
        <div className='btns'>
          <div type="submit" className="btnEliminar" onClick={(event)=>{
            //console.log(event.target.dataset.userid)
            deleteOrder(event.target.dataset.id)
            // deleteOrder(event.target.dataset.id)
            //deleteOrder(event.target.dataset.client);
            // deleteOrder(event.target.dataset.id);
            }} data-id={order.id} data-userId={order.userId} data-client={order.client}>
          ❌ ELIMINAR
          </div>
        </div>
      </div>
    </div>
      )).reverse()}

    </div>
    </div>
  )
}