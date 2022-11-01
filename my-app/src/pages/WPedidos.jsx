import React from 'react'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { WPendientes } from './WPendientes'
import { WPreparados } from './WPreparados'
import { Header } from '../components/Header'
import { Menu } from './Menu'
import { WEntregados } from './WEntregados'


import '../pages/WPedidos.css'
export const WPedidos = () => {

  return (
    <div className='pedidosMenuView'>
      <Header/>
      <Router >
        {/* <div className='pedidosButtons'> /////////////*/}
        <div className='pedidosButtons'>
        <Link to="/Menu" className="waiterButtonsPrincipal">
        Pedidos  
        </Link>
        <NavLink to="/Menu/Pendientes" className="waiterButtonsPrincipal" activeClassName="active">
        Pendiente
        </NavLink>
        <NavLink to="/Menu/Preparados" className="waiterButtonsPrincipal" activeClassName="active">
        Preparados
        </NavLink>
        <NavLink to="/Menu/Entregados" className="waiterButtonsPrincipal" activeClassName="active">
        Entregados
        </NavLink>
        </div>

        <Routes>
          <Route path="/Menu" element={<Menu/>}/>
          <Route path="/Menu/Pendientes" element={<WPendientes/>}/>
          <Route path="/Menu/Preparados" element={<WPreparados/>}/>
          <Route path="/Menu/Entregados" element={<WEntregados/>}/>
        </Routes>
   
       </Router>
      </div>

  )
}

