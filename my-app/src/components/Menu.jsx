import React from 'react'
import { NavLink } from 'react-router-dom'

export const Menu = () => {
  return (
    <div className="optionsMenu">
      <NavLink to="" className="nav-link-TomarPedido">Tomar Pedidos</NavLink>
      <NavLink to="" className="nav-link-Pendientes">Pedidos Pendientes</NavLink>
      <NavLink to="" className="nav-link-Preparados">Pedidos Preparados</NavLink>
      <NavLink to="" className="nav-link-Entregados">Pedidos Entregadosr</NavLink>

    </div>
  )
}

