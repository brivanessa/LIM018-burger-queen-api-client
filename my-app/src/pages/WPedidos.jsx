import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import { WPendientes } from './WPendientes'
// import { WPreparados } from './WPreparados'
// import { WEntregados } from './WEntregados'
import './WPedidos.css'
import sanwich from '../assets/sanwich.png'



export const WPedidos = () => {
  const [pedidos, setPedidos] = useState("");
  const [pendientes, setPendientes] = useState("");
  const [preparados, setPreparados] = useState("");
  const [entregados, setEntregados] = useState("");

  function cerrarSesion() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("viewLogin").style.display = "block";
    document.getElementById("emailInput").value = "";
    document.getElementById("passwordInput").value = "";
    document.getElementById("emailInput").focus();
  }

  function view_tomarPedidos() {
    setPedidos('1');
    setPendientes('0');
    setPreparados('0');
    setEntregados('0');
  }

  function view_pendientes() {
    setPedidos('0');
    setPendientes('1');
    setPreparados('0');
    setEntregados('0');
  }

  function view_preparados() {
    setPedidos('0');
    setPendientes('0');
    setPreparados('1');
    setEntregados('0');
  }

  function view_entregados() {
    setPedidos('0');
    setPendientes('0');
    setPreparados('0');
    setEntregados('1');
  }

  return (
    <>
      <div className="headerViews" id="menu">
        <div>Hola: </div>
        <div>LOGO NEGOGIO </div>
        <div> <li href="">Cerrar sesión</li> </div>
      </div>

      <div className="waiterBody">
        < div className="waiterOptions" >
          <button type="submit" className="waiterButtons"  >Registrar Pedidos</button>
          <button type="submit" className="waiterButtons"  >Pedidos Pendientes</button>
          <button type="submit" className="waiterButtons"  >Pedidos Preparados</button>
          <button type="submit" className="waiterButtons"  >Pedidos Entregados</button>
        </div> 

       <div className="waiterContainer">
          <div className="typeMenu">
            <button type="submit" className="waiterMenu" onClick={view_tomarPedidos} >Desayunos</button>
            <button type="submit" className="waiterMenu" onClick={view_pendientes} >Almuerzos</button>
          </div >

          <div className="menuConstainer">

            <div className="product">
              <div className="productName">Jugo de Frutas</div>
              <div className="productCost">S/.10.0</div>
              <div className="imgProduct">
                <img src={sanwich} alt="sanwich"></img>
              </div>
              <div className="buttonAñadir">+ Añadir</div>
            </div>

            <div className="product">
              <div className="productName">Jugo de Frutas</div>
              <div className="productCost">S/.10.0</div>
              <div className="imgProduct">
                <img src={sanwich} alt="sanwich"></img>
              </div>
              <div className="buttonAñadir">+ Añadir</div>
            </div>

            <div className="product">
              <div className="productName">Jugo de Frutas</div>
              <div className="productCost">S/.10.0</div>
              <div className="imgProduct">
                <img src={sanwich} alt="sanwich"></img>
              </div>
              <div className="buttonAñadir">+ Añadir</div>
            </div>

          </div> 

       </div> 

      <div className="waiterList">PEDIDO

        </div> 
        </div> 
   </>


  )
}

// export default WPedidos
