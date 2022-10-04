import React from 'react'
import { NavLink } from 'react-router-dom'

export const Menu = (props) => {
  return (
    <div className="optionsMenu">
      <div>Hola: {props.usuario}</div>
      <nav>
      {/* <ul> */}
      <li><NavLink to="" className="nav-link-TomarPedido">Tomar Pedidos</NavLink></li>
      <li><NavLink to="" className="nav-link-Pendientes">Pedidos Pendientes</NavLink></li>
      <li><NavLink to="" className="nav-link-Preparados">Pedidos Preparados</NavLink></li>
      <li><NavLink to="" className="nav-link-Entregados">Pedidos Entregadosr</NavLink></li>

      {/* </ul> */}
      </nav>
    </div>
  )
}

