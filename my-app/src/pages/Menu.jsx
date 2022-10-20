import React from 'react';
import { useState, useEffect } from 'react';
import { productsGet } from '../helpers/api'
import { OrderClient } from '../components/OrderClient';




export const Menu = () => {
  const [productosMenuArray, setProductosMenuArray] = useState([])
  const tokenSaved = localStorage.getItem('llave')

  const [OrderArray, setOrderArray] = useState()
  let prueba = [];

  useEffect(() => {
    productsGet(tokenSaved)
      .then((res) => {
        // console.log(res)
        // console.log(res.headers)
        console.log(res.data)
        const productosMenu = res.data;
        setProductosMenuArray(productosMenu)
        //setOrderArray(4)
      }).catch(error => console.log(error))
  }, [])

  //-----------Añadir productos al pedido------------------

  //   const ClientOrderAdd = (producto) => {
  //      console.log(producto.name);
  //      return
  //   //    setOrderArray(producto.name)
  //   //  console.log( setOrderArray(producto.name));

  //   }
  // setOrderArray(ClientOrderAdd)





  return (
    <div className='viewWaiterPeiddos' id='viewWPedidos'>
      <div className="waiterBody">
        < div className="waiterOptions" >
          <button type="submit" className="waiterButtons" >Desayunos</button>
          <button type="submit" className="waiterButtons" >Almuerzos</button>
        </div>
        <div className="waiterContainer">
          <div className="menuConstainer">
            {productosMenuArray.map((producto, index) => (
              <div className="product" key={index}  onClick={(e) => {
                console.log(e.target)
                // prueba=producto.name
              }}>
                <div className="productName">{producto.name}</div>
                <div className="productCost">`S/{producto.price}`</div>
                <div className="imgProduct">
                  <img src={producto.image} alt="sanwich"></img>
                </div>
                <div className="buttonAñadir">+ Añadir
                  <button data-id={producto._id} className="buttonAñadir" onClick={() => {
                   console.log(producto.name)
                   console.log(prueba)

                  return prueba.push(producto.name)
                  }}></button>
                </div>
              </div>
            )
            )}
          </div>
        </div>
      </div>
      <div className="waiterList">
        <h1>DETALLE DEL PEDIDO</h1>
        <OrderClient producto="Helado" />
        
        <OrderClient producto={prueba} />
      </div>


    </div>
  );

}