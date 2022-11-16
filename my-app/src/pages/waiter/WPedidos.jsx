import React from 'react'
import jwt_decode from "jwt-decode";
import {
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { WPendientes } from './WPendientes'
import { WPreparados } from './WPreparados'
import { Header } from '../../components/header'
import { Footer } from '../../components/Footer'
import { Menu } from './Menu'
import { WEntregados } from './WEntregados'
import {ChefPendientes} from '../chef/ChefPendientes'
import {ChefPreparados} from '../chef/ChefPreparados'
import {Modal} from '../../components/Modal'
import {ModalError} from '../../components/ModalError'

import './WPedidos.css'
export const WPedidos = () => {

  function getUser() {
    if (localStorage.getItem('llave') === null) {
      console.log(" Ningún usuario logueado")
    } else {
      console.log(" usuario logueado")
    }
  }
  const tokenSaved = localStorage.getItem('llave');
  const user = jwt_decode(tokenSaved);
  const {email, roles} = user
  console.log(email)
  console.log(roles)
  //console.log(user.roles.mesero)
  //console.log(user.payload.roles.admin)
  console.log(user)
  //console.log(user.roles==={'mesero':true})
   if(user.payload.roles.admin===false){

    // const tokenWaiter1 ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImVtYWlsIjoiZW1wbG95ZWVAZGVsaWNlcy5jb20iLCJyb2xlcyI6eyJhZG1pbiI6ZmFsc2V9fSwiaWF0IjoxNjY4NTU4MzE1LCJleHAiOjE2Njg2NDQ3MTV9.1TOBHulAvHnOYCKvqQJXGVjIkVEDQlH4Wd6Uks900N0"
    // //const tokenChef1 ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoZWYxQGRlbGljZXMuY29tIiwicm9sZXMiOnsiY2hlZiI6dHJ1ZX19.PmbJQxA7YPk2u8iaTRrcsdxwfSftST74lO2vBx9diJo"
    // const tokenChef1 ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImVtYWlsIjoiYWRtaW5AZGVsaWNlcy5jb20iLCJyb2xlcyI6eyJhZG1pbiI6dHJ1ZX19LCJpYXQiOjE2Njg1NTk3MTksImV4cCI6MTY2ODY0NjExOX0.9DbvsKZAVVpldqECP3sRK4ESbIX5lZu9f8GYC2iGeIA"
    // console.log(jwt_decode(tokenWaiter1))
    // console.log(jwt_decode(tokenChef1))

  //if(roles.admin===false){
  //if(user.roles.mesero===true){
    return (
    <>  
      <div className='pedidosMenuView'>
        <Header />
        <div className='pedidosButtons'>
          {/* {user.roles.mesero===true} */}
          <Link to="/Menu" className="waiterButtonsPrincipal">
            REGISTRAR
          </Link>
          <NavLink to="/Menu/Pendientes" className="waiterButtonsPrincipal" activeClassName="active">
            PENDIENTES
          </NavLink>
          <NavLink to="/Menu/Preparados" className="waiterButtonsPrincipal" activeClassName="active">
            PREPARADOS
          </NavLink>
          <NavLink to="/Menu/Entregados" className="waiterButtonsPrincipal" activeClassName="active">
            ENTREGADOS
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
      <Modal/>
      <ModalError/>
   </>
    )
  //} else if(user.payload.roles.admin===true){
  //} else if(user.roles.chef===true){
  } else {
    return (
      <>
      <div className='pedidosMenuView'>
        <Header />
        <div className='pedidosButtons'>
          <NavLink to="/Menu/ChefPendientes" className="waiterButtonsPrincipal" activeClassName="active">
           CHEF PENDIENTES
          </NavLink>
          <NavLink to="/Menu/ChefPreparados" className="waiterButtonsPrincipal" activeClassName="active">
           CHEF PREPARADOS
          </NavLink>

        </div>
        <Routes>
          <Route path="/Menu/ChefPendientes" element={<ChefPendientes/>} />
          <Route path="/Menu/ChefPreparados" element={<ChefPreparados/>} />
        </Routes>
        <Footer/>
      </div>
      <Modal/>
      <ModalError/>
      </>
    )
  }

 /*
  return (
    <div className='pedidosMenuView'>
      <Header />
      <div className='pedidosButtons'>
        <Link to="/Menu" className="waiterButtonsPrincipal">
          REGISTRAR
        </Link>
        <NavLink to="/Menu/Pendientes" className="waiterButtonsPrincipal" activeClassName="active">
          PENDIENTES
        </NavLink>
        <NavLink to="/Menu/Preparados" className="waiterButtonsPrincipal" activeClassName="active">
          PREPARADOS
        </NavLink>
        <NavLink to="/Menu/Entregados" className="waiterButtonsPrincipal" activeClassName="active">
          ENTREGADOS
        </NavLink>
        <NavLink to="/Menu/ChefPendientes" className="waiterButtonsPrincipal" activeClassName="active">
         CHEF PENDIENTES
        </NavLink>
        <NavLink to="/Menu/ChefPreparados" className="waiterButtonsPrincipal" activeClassName="active">
         CHEF PREPARADOS
        </NavLink>

      </div>

      <Routes>
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Menu/Pendientes" element={<WPendientes />} />
        <Route path="/Menu/Preparados" element={<WPreparados />} />
        <Route path="/Menu/Entregados" element={<WEntregados />} />
        <Route path="/Menu/ChefPendientes" element={<ChefPendientes/>} />
        <Route path="/Menu/ChefPreparados" element={<ChefPreparados/>} />


      </Routes>

      <Footer />
    </div>

  )
  */
}

