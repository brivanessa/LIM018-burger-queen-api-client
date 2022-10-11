import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <ul>
            <li><NavLink to="/Menu" >Tomar Pedidos</NavLink></li>
            <li><NavLink to="/Menu/Pendientes" >Pedidos Pendientes</NavLink></li>
            <li><NavLink to="/Menu/Preparados" >Pedidos Preparados</NavLink></li>
            <li><NavLink to="/Menu/Entregados" >Pedidos Entregados</NavLink></li>
        </ul>
    </div>
  )
}
