import { NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <ul className="waiterOptionsMenu">
            <li  className="waiterButtonsMenu"><NavLink to="/Menu" className="waiterButtons">Registrar Pedidos</NavLink></li>
            <li  className="waiterButtonsMenu" ><NavLink to="/Menu/Pendientes" className="waiterButtons">Pedidos Pendientes</NavLink></li>
            <li  className="waiterButtonsMenu" ><NavLink to="/Menu/Preparados" className="waiterButtons">Pedidos Preparados</NavLink></li>
            <li  className="waiterButtonsMenu" ><NavLink to="/Menu/Entregados" className="waiterButtons">Pedidos Entregados</NavLink></li>
        </ul>
    </div>
  )
}
