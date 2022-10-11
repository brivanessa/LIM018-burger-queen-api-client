import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { WPedidos } from './WPedidos'
import { WPendientes } from './WPendientes'
import { WPreparados } from './WPreparados'
import { WEntregados } from './WEntregados'

export const Menu = (props) => {

  const [pedidos, setPedidos] = useState("");
  const [pendientes, setPendientes] = useState("");
  const [preparados, setPreparados] = useState("");
  const [entregados, setEntregados] = useState("");

  function cerrarSesion(){
    document.getElementById("menu").style.display ="none";
    document.getElementById("viewLogin").style.display ="block";
    document.getElementById("emailInput").value="";
    document.getElementById("passwordInput").value="";
    document.getElementById("emailInput").focus();
  }

  function view_tomarPedidos(){
    setPedidos('1');
    setPendientes('0');
    setPreparados('0');
    setEntregados('0');
  }

  function view_pendientes(){
    setPedidos('0');
    setPendientes('1');
    setPreparados('0');
    setEntregados('0');
  }

  function view_preparados(){
    setPedidos('0');
    setPendientes('0');
    setPreparados('1');
    setEntregados('0');
  }  

  function view_entregados(){
    setPedidos('0');
    setPendientes('0');
    setPreparados('0');
    setEntregados('1');
  }

  return (
    <>
      <div className="optionsMenu" id="menu">
        <div>Hola: {props.usuario}</div>
        <nav>
          {/* <ul> */}
          <li><NavLink to="/Menu" className="nav-link-TomarPedido" onClick={ view_tomarPedidos } >Tomar Pedidos</NavLink></li>
          <li><NavLink to="/Menu/Pendientes" className="nav-link-Pendientes" onClick={ view_pendientes } >Pedidos Pendientes</NavLink></li>
          <li><NavLink to="/Menu/Preparados" className="nav-link-Preparados" onClick={ view_preparados } >Pedidos Preparados</NavLink></li>
          <li><NavLink to="/Menu/Entregados" className="nav-link-Entregados" onClick={ view_entregados } >Pedidos Entregadosr</NavLink></li>
          <li href="" onClick={ cerrarSesion }>Cerrar sesión</li>
          {/* </ul> */}
        </nav>
    </div>
    { pedidos ==="1" && <WPedidos/> }
    { pendientes ==="1" && <WPendientes/> }
    { preparados ==="1" && <WPreparados/> }
    { entregados ==="1" && <WEntregados/> }
    </>

  )
}

