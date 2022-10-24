import React from 'react';
import { useState, useEffect } from 'react';
import { productsGet } from '../helpers/api'

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
        <h1>DETALLE DEL PEDIDO</h1>
        <table className="TableOrder">
          <thead>
            <tr className="rowHead">
              <th className="rowHeadTable">Cant.</th>
              <th className="rowHeadTable">Producto</th>
              <th className="rowHeadTable">S/.</th>
              <th className="rowHeadTable"> </th>
            </tr>
          </thead>
          <tbody>
            {OrderArray.map((product, i) => (
              <tr key={i}>
                <td className="itemsOrderTable">{product.quantity}</td>
                <td className="itemsOrderTable">{product.name}</td>
                <td className="itemsOrderTable">{product.priceTotal}</td>
                <td>
                  <button className="ButonDeleteItem" type="button" onClick={() => deleteItemOrder(product)}>DELETE
                    {/* <img   alt="buttonDelete" className="Image-button-delete" /> */}
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td>
              </td>
              <th className="itemsOrderTable">TotalPedido   S/.</th>
              <td className="itemsOrderTable">{totalOrder}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

}