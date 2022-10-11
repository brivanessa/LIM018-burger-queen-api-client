import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Login} from './pages/Login';
// import { Menu } from './pages/Menu.jsx';
import { WPedidos } from './pages/WPedidos'
import { WPendientes } from './pages/WPendientes'
import { WPreparados } from './pages/WPreparados'
import { WEntregados } from './pages/WEntregados'



import Navbar from './components/Navbar';

function App() {
  // const mostrarMenu =(window.location.href==="http://localhost:3000")?<Navbar/>:<></>


  return (
    <div className="App">

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
    </Routes>
      {/* {!<Login/>?<Navbar/>:<></>}   */}
      <Navbar></Navbar>
      <Routes>
        {/* <Route path="/" element={<Login/>}/> */}
        <Route path="/Menu" element={<WPedidos/>}/>
        <Route path="/Menu/Pendientes" element={<WPendientes/>}/>
        <Route path="/Menu/Preparados" element={<WPreparados/>}/>
        <Route path="/Menu/Entregados" element={<WEntregados/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
