import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Login} from './components/Login';
import { Menu } from './components/Menu.jsx'

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/Menu" element={<Menu/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
