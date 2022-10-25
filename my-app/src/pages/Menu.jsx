import React from 'react';
import { useState, useEffect } from 'react';
import { productsGet, ordersPost } from '../helpers/api'
import '../pages/Menu.css'

export const Menu = () => {
  const [productosMenuArray, setProductosMenuArray] = useState([])
  const tokenSaved = localStorage.getItem('llave')
  const [OrderArray, setOrderArray] = useState([])
  // const [TotalOrder, setTotalOrder] = useState(0)
  let totalOrder = 0;
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
  //-----------Añadir productos al pedido------------------------------------------------------------------------

  const ClientOrderAdd = (producto) => {
    //  setOrderArray([...OrderArray,  producto.name]);
    const existInOrder = OrderArray.find((item) => {
      return item._id === producto._id
    })
    if (existInOrder) {
      const newArrayOrderAdd = OrderArray.map((item) => {
        if (item._id === producto._id) {
          return { ...producto, quantity: item.quantity + 1, priceTotal: item.priceTotal + producto.price }
        }
        return item;
      })
      setOrderArray(newArrayOrderAdd)
    } else {
      setOrderArray([...OrderArray, { ...producto, quantity: 1, priceTotal: producto.price }]);

    }
  }
  //-----------Sumar el total del pedido-------------------------------------------------------------------------

  // const TotalAmountOrder = () => {
  OrderArray.map((product, i) => {
    const item = product;
    totalOrder += item.priceTotal;
  })
  // setTotalOrder(totalOrder1)
  //}
  //----------Borrar pedidos--------------------------------------------------------------------------------------

  const deleteItemOrder = (product) => {
    const existInOrder = OrderArray.find((value) => {
      return value._id === product._id
    });

    if (existInOrder.quantity === 1) {
      setOrderArray(OrderArray.filter(itemInOrder => itemInOrder._id !== product._id))

    } else if (existInOrder.quantity > 1) {
      const newArrayOrderSustract = OrderArray.map((item) => {
        if (item._id === product._id) {
          return { ...product, quantity: item.quantity - 1, priceTotal: item.priceTotal - product.price }
        }
        return item;
      })
      setOrderArray(newArrayOrderSustract)
    }
  };

  function enviarPedido(e) {
    e.preventDefault();
    console.log(localStorage.getItem('llave'))
    console.log('qwer', OrderArray)
   // ordersPost(localStorage.getItem('llave'), OrderArray)
    ordersPost(localStorage.getItem('llave'), OrderArray)

    .then((res) => {
      if(res.status===200){
        alert('su pedido fue agregado exitosamente')
      } else{ alert('hubo un error')}
    })
    .catch((err)=>{console.log('error',err)})
  }
  console.log('aaaaaaaaa',OrderArray);

  return (
    <div className='viewWaiterPedidos' id='viewWPedidos'>
      <div className="waiterBody">
        <div className="waiterContainer">
          < div className="waiterOptions" >
            <button type="submit" className="waiterButtons" >DESAYUNO</button>
            <button type="submit" className="waiterButtons" >ALMUERZO</button>
          </div>
          {/* <button type="submit" className="waiterButtons" >DESAYUNO</button>
          <button type="submit" className="waiterButtons" >ALMUERZO</button> */}
          <div className="menuConstainer">
            {productosMenuArray.map((producto, index) => (
              <div className="product" key={index} onClick={(e) => {
                // console.log(e.target)

              }}>
                <div className="productName">{producto.name}</div>
                <div className="productCost">`S/{producto.price}`</div>
                <div className="imgProduct">
                  <img src={producto.image} alt="sanwich"></img>
                </div>
                <div className="buttonAñadir" onClick={() => {
                  ClientOrderAdd(producto);
                  //TotalAmountOrder()
                }
                }>+ Añadir
                </div>
              </div>
            )
            )}
          </div>
        </div>
      </div>
      <div className="waiterList">
        <h1 className='subtituloPedido'>DETALLE DEL PEDIDO</h1>
        <div className='datos' >
          <input type='text'  placeholder='CLIENTE:' className='text' 
          //onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input type='text'  placeholder='MESA Nº:' className='text' 
          //onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <table className="TableOrder">
          <thead>
            <tr className="rowHead">
              <th className="rowHeadTable">Cantidad</th>
              <th className="rowHeadTable">Descripción</th>
              <th className="rowHeadTable">Importe S/.</th>
            </tr>
          </thead>
          <tbody>
            {OrderArray.map((product, i) => (
              <tr key={i}>
                <td className="itemsOrderTable">{product.quantity} unid.</td>
                <td className="itemsOrderTable">{product.name}</td>
                <td className="itemsOrderTable">{product.priceTotal}</td>           
                  <button className="ButonDeleteItem" type="button" onClick={() => deleteItemOrder(product)}>
                    <img   src="https://cdn-icons-png.flaticon.com/512/1175/1175088.png" alt="borrar"/> 
                  </button>
              </tr>
            ))}
          </tbody>
          <tfoot>
          <th className="itemsOrderTable">TotalPedido</th>
              <td className="itemsOrderTable">{totalOrder} soles</td>
          </tfoot>
        </table>
        <input type="submit" className="btnEnviar" onClick={enviarPedido} value="ENVIAR"></input>
      </div>
    </div>
  );

}