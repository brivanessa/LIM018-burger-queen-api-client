// import { json } from "react-router-dom";
//import{user}from '/json-server/db.json';
import "../components/header.css"
import imgUser from '../assets/imguser.png'
import whitelogo from '../assets/whitelogo.png'
import salir from '../assets/salir1.PNG'
import { useNavigate } from 'react-router-dom'
import { Login } from '..//pages/Login';
import jwt_decode from "jwt-decode";
import { useUser } from "../App"

export const Header = () => {
  //const navigate = useNavigate();
  const { getUser, logout } = useUser()
  // function closeSesion() {
  //   console.log("ddd")
  // }
  const tokenSaved = localStorage.getItem('llave');
  const user = jwt_decode(tokenSaved);
  console.log(user.roles.mesero)
  if(user.roles.mesero===true){
    return (
      <div className="headerViews" id="menu">
        <div className="userSection">
          <img className="userImage" src="https://cdn-icons-png.flaticon.com/512/7414/7414138.png" alt="imgUser" />
          <div className="greetingContainer">
            <div className="greeting">mesero(a)</div>
            <div className="userName">{getUser().email}</div>
          </div>
        </div>
  
        <div className="imgLogo">
          <img src="https://static.takeaway.com/images/restaurants/fr/R0R0R5R1/logo_465x320.png" alt="logo"/>
        </div>
        <div className="imgSalir" onClick={() => logout()}>
          <img className="cerrarSesion" src="https://cdn-icons-png.flaticon.com/512/6062/6062709.png" alt="loginout"/>
        </div>
      </div>
    )
  }else if(user.roles.chef===true){
    return (
      <div className="headerViews" id="menu">
        <div className="userSection">
          <img className="userImage" src="https://cdn-icons-png.flaticon.com/512/3270/3270916.png" alt="imgUser" />
          <div className="greetingContainer">
            <div className="greeting">chef</div>
            <div className="userName">{getUser().email}</div>
          </div>
        </div>
  
        <div className="imgLogo">
          <img src="https://static.takeaway.com/images/restaurants/fr/R0R0R5R1/logo_465x320.png" alt="logo"/>
        </div>
        <div className="imgSalir" onClick={() => logout()}>
          <img className="cerrarSesion" src="https://cdn-icons-png.flaticon.com/512/6062/6062709.png" alt="loginout"/>
        </div>
      </div>
    )
  }

}
