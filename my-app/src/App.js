import React from 'react';
import './App.css';
import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from './pages/Login';
import { WPedidos } from './pages/WPedidos'

// Custom Hook -> investigar
export const useUser = () => {
  const navigate = useNavigate();
  return {
    getUser: () => {
      const token = localStorage.getItem('llave')
      const email = localStorage.getItem('correo')

      if (token === null) {
        return null
      }

      return {
        token, email
      }
    },
    logout: () => {
      localStorage.removeItem('llave')
      localStorage.removeItem('correo')

      //window.location('/') // cambiar y usar useNavigate
      navigate('/')
    }
  }
}

function App() {
  const { getUser } = useUser()

  return (
    <div className="App">
      {getUser() === null ? (
        <Routes>
          <Route path='*' element={<Login />} />
        </Routes>
      ) : <WPedidos />}
    </div>
  );
}

export default App;
