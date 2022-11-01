// import { json } from "react-router-dom";
//import{user}from '/json-server/db.json';
import "../components/header.css"
import imgUser from '../assets/imguser.png'
import whitelogo from '../assets/whitelogo.png'
import salir from '../assets/salir1.PNG'

export const Header = () => {
  const email = localStorage.getItem('correo')
  return (
    <div className="headerViews" id="menu">
      <div className="userSection">
        {/* <div className="imageUser"> */}
        <img src={imgUser} alt="imgUser" />
        {/* </div> */}
        <div className="greetingContainer">
          <div className="greeting">Hola</div>
          <div className="userName">{email}</div>
        </div>
      </div>

      <div className="imgLogo"><img src={whitelogo} alt="logo"></img></div>
      <div className="imgSalir"> <img src={salir} alt="loginout"></img>
       {/* <li href="">Cerrar sesión</li> */}
      </div>
    </div>
  );
}
