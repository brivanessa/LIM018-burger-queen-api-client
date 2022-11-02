import React from 'react'
import {
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { WPendientes } from './WPendientes'
import { WPreparados } from './WPreparados'
import { Header } from '../components/header'
import { Footer } from '../components/Footer'
import { Menu } from './Menu'
import { WEntregados } from './WEntregados'


import '../pages/WPedidos.css'
export const WPedidos = () => {

  function getUser() {
    if (localStorage.getItem('llave') === null) {
      console.log(" Ningún usuario logueado")
    } else {
      console.log(" usuario logueado")
    }
  }

  return (
    <div className='pedidosMenuView'>
      <Header />
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
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Menu/Pendientes" element={<WPendientes />} />
        <Route path="/Menu/Preparados" element={<WPreparados />} />
        <Route path="/Menu/Entregados" element={<WEntregados />} />
      </Routes>

      <Footer />
    </div>

  )
}

