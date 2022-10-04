import React from 'react'
import logo from '../assets/logo.png'
import './login.css'

export const Login = () => {
    return (  //return html y antes de return logica js
    <div className='viewLogin'>
            <div className='spaceLogin'>
                <div className="logoFastFood">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className='areaDatosLogin'>
                    <p className='instructions'>Escribe tu usuario y contraseña para iniciar sesión.</p>
                    <div className='email'>
                        {/* <img src={require('../assets/usuario.png')} alt="usuario" className='usuarioImagen'></img> */}
                        <input type='email' placeholder='Correo electrónico' className='loginEmail'></input>
                    </div>
                    <div className='password'>
                        {/* <img src='../assets/contraseña.png' alt="contraseña"></img> */}
                        <input type='password' placeholder='Contraseña' className='loginPassword'></input>
                    </div>
                </div>
            </div> 
    </div>
    );
}

