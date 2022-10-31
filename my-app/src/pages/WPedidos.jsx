import React from 'react'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
  Link
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
      <Router>

        <Link to="/Menu" className="waiterButtonsPrincipal">
        Pedidos  
        </Link>
        <Link to="/Menu/Pendientes" className="waiterButtonsPrincipal">
        Pendiente
        </Link>
        <Link to="/Menu/Preparados" className="waiterButtonsPrincipal">
        Preparados
        </Link>
        <Link to="/Menu/Entregados" className="waiterButtonsPrincipal">
        Entregados
        </Link>

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

