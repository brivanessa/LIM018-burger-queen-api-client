import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Router} from "react-router-dom";
// import { Navigate } from "react-router-dom";

import {Login} from './pages/Login';
// import { Menu } from './pages/Menu.jsx';
// import { WPedidos } from './pages/WPedidos'
// import { WPendientes } from './pages/WPendientes'
// import { WPreparados } from './pages/WPreparados'
// import { WEntregados } from './pages/WEntregados'



// import Navbar from './components/Navbar';

function App() {
  // const mostrarMenu =(window.location.href==="http://localhost:3000")?<Navbar/>:<></>
  const tokenSaved =localStorage.getItem("llave") //para obtener la var
  console.log('aaaa',tokenSaved!= null)
  if (tokenSaved != null){<Navigate to='/Menu'/>}// WPedidos()

  return (
    <div className="App">

    <BrowserRouter>
     <Routes>
      {/* <Route path="/" element={<Login/>}/> */}
    <Route index element={<Login/>}/>
    {/* <Navigate to='/Menu'/> */}
    {/* <Route path="/" element={<WPedidos/>}/> */}
    </Routes> 
    </BrowserRouter>
    <Router>
    <Navigate to='/Menu'/>
    </Router>
    {/* {<Navigate to='/Menu'/>} */}
    {/* {<WPedidos/>} */}
    </div>
  );
}

export default App;
