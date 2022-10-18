import React from 'react'
import Navbar from '../components/Navbar'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { WPendientes } from './WPendientes'
import { WPreparados } from './WPreparados'
import { Header } from '../components/Header'
import { WEntregados } from './WEntregados'

// import { productsGet } from '../helpers/api'

import '../pages/WPedidos.css'
import sanwich from '../assets/sanwich.png'
export const WPedidos = () => {
  // const tokenSaved =localStorage.getItem('llave')
  // console.log(tokenSaved)
  // productsGet(tokenSaved)
  // .then((res) => {
  //   // console.log(res)
  //   // console.log(res.headers)
  // console.log(res.data.products.productos)
  // const productosMenu = res.data.products.productos;
  // })
    
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/Menu" element={<Header/>}/>
          <Route path="/Menu/Pendientes" element={<WPendientes/>}/>
          <Route path="/Menu/Preparados" element={<WPreparados/>}/>
          {/* <Route path="/Menu/Entregados" element={<WEntregados/>}/> */}
          <Route path="/Menu/Entregados" element={<WEntregados/>}/>

        </Routes>
      </BrowserRouter>
      {/* <Header/> */}
    </div>
  )
}


// export default WPedidos
