import React from 'react';
import {useState, useEffect } from 'react';
import { productsGet } from '../helpers/api'


export const Menu = () => {
  const [productosMenuArray, setProductosMenuArray] = useState([])
  const tokenSaved =localStorage.getItem('llave')

  useEffect(()=>{productsGet(tokenSaved)
  .then((res) => {
    // console.log(res)
    // console.log(res.headers)
  console.log(res.data)
  const productosMenu = res.data;
  setProductosMenuArray(productosMenu)
  }).catch(error => console.log(error))
})
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
                  <div className="product" key={index}>
                  <div className="productName">{producto.name}</div>
                  <div className="productCost">`S/{producto.price}`</div>
                  <div className="imgProduct">
                    <img src={producto.image} alt="sanwich"></img>
                  </div>
                  <div className="buttonAñadir">+ Añadir</div>
                </div>
                  )
                  )}
            </div> 
          </div> 
        </div>
          <div className="waiterList">
            <h1>PEDIDO</h1>
          </div>      
      </div>
     );
}
 