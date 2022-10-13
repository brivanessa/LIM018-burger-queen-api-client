import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import { WPedidos } from '../pages/WPedidos'
import { WPendientes } from '../pages/WPendientes'
import { WPreparados } from '../pages/WPreparados'
import { WEntregados } from '../pages/WEntregados'
import '../pages/WPedidos.css'

export const Wroutes = () => {
  // WPendientes();

  return (
    <>
   
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/Menu" element='WPedidos'/>
        <Route path="/Menu/Pendientes" element={<WPendientes/>}/>
        <Route path="/Menu/Preparados" element={<WPreparados/>}/>
        <Route path="/Menu/Entregados" element={<WEntregados/>}/>
      </Routes>
     </BrowserRouter>
   
   </>


  )
}