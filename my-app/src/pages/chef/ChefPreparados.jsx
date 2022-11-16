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

        const ordersPending = ordersGeneral.filter(order=>order.status.includes("delivering")===true)
        setOrdersuArray(ordersPending)
      }).catch(error => console.log(error))
  },[tokenSaved,changeStatus1])

  function changeStatus(idOrder){
    orderPutChefReverse(tokenSaved,idOrder)
    .then((res) => {
      if (res.status === 200) {
        // alert('El estado del Pedido pasó de DELIVERING a PENDING...')
        const modalPage = document.getElementById("modalPage")
        document.getElementById("messageModal").textContent= 'La orden regresó a órdenes pendientes: "CHEF PENDIENTES"'
        modalPage.style.display = 'flex';
        
        setChangeStatus(`delivered -${idOrder}`)
      } 
    })
    .catch((err) => { console.log(err) })
  }

  function timePrepared (fecha1, fecha2){
    let hora1 = (`${fecha1.split(' ')[1]}`).split(":");
    let hora2 = (`${fecha2.split(' ')[1]}`).split(":");
    let   t1 = new Date();
    let   t2 = new Date();
     
    t1.setHours(hora1[0], hora1[1], hora1[2]);
    t2.setHours(hora2[0], hora2[1], hora2[2]);
    //Aquí hago la resta
    t1.setHours(t1.getHours() - t2.getHours(), t1.getMinutes() - t2.getMinutes(), t1.getSeconds() - t2.getSeconds());
    //Imprimo el resultado
    let timeFinal =  (t1.getHours() ? t1.getHours() + (t1.getHours() > 1 ? "h" : "h") : "") + (t1.getMinutes() ? "," + t1.getMinutes() + (t1.getMinutes() > 1 ? "m" : "m") : "") + (t1.getSeconds() ? (t1.getHours() || t1.getMinutes() ? "," : "") + t1.getSeconds() + (t1.getSeconds() > 1 ? "s" : "s") : "");
    console.log( timeFinal ) // resultado 5;  
    return timeFinal
  }
  return (
    <div className='areaPendientes3'>
    <div className='areaPreparados'>
      {ordersArray.map((order) => (
      <div className='pendienteCard' key={order.id}>
        <div className='estadoPedido'>
        <div className='datosCard'>
            <h1>Pedido Nº {order._id}</h1>
            <p> Mesa: Nº {order.client.split('-')[1].split(':')[1]} </p>
            <p> Cliente: {order.client.split('-')[1].split('/',1)}</p>
            <p> Fecha Ingreso: {order.client.split('-')[0]} </p>
            <p> Pedido Listo: {order.client.split('-')[2]}</p>
        </div>
          <div className='statusOrderPreparado'>
          <h2>¡LISTO!</h2>
          <img className="cronometro" src="https://cdn-icons-png.flaticon.com/512/3877/3877672.png" alt="ir a pendientes"/>
          <p className="fechaDelivered">{
            timePrepared(order.client.split('-')[2],order.client.split('-')[0])
          // parseInt((new Date(order.status.split('-')[1])-new Date(order.client.split('-',1)))/1000/60)
          }</p>
          </div>
        </div>
      <div>
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
            <td>{product._id}</td>
            <td className="productDescription">{product.name}</td>
            <td>{product.qty}</td>
          </tr>
            ))}
          </tbody>
        </table>
        <div className='btns'>
          <div type="submit"  className="btnChefPreparados"  onClick={(event)=>changeStatus(event.target.dataset.id)} data-id={order._id}> 
            <img className="enviarIMG" src="https://cdn-icons-png.flaticon.com/512/5166/5166419.png" alt="ir a pendientes"/>ENVIAR A PENDIENTES 
          </div>       
        </div>
      </div>
    </div>
      )).reverse()}

    </div>
    </div>
  )
}