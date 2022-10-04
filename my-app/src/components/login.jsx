import React, {useState} from 'react'
import logo from '../assets/logo.png'
import './login.css'
import { Menu } from './Menu'

export const Login = () => {
    const [miLogin, setLogin] = useState("false");
    const [correo, setCorreo] = useState();
    const [password, setPassword] = useState();

    function iniciarSesion(e){
        e.preventDefault();

    }


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
                        <input type='email' id='emailInput' placeholder='Correo electrónico' className='loginEmail' onChange={(e)=>setCorreo(e.target.value)}></input>
                    </div>
                    <div className='password'>
                        {/* <img src='../assets/contraseña.png' alt="contraseña"></img> */}
                        <input type='password' id='passwordInput' placeholder='Contraseña' className='loginPassword' onChange={(e)=>setPassword(e.target.value)}></input>
                    </div>
                    <input type="submit" className="btnLogin"></input>
                </div>
            </div> 
    </div>
    );
}

