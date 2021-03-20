import React from "react";
import {logout} from '../../../api/auth';
import Logo from '../../../assets/img/logoGlutenCero.png';
import { FaSignInAlt, FaTasks, FaUtensils, FaShoppingCart, FaMapMarkerAlt, FaRegCommentDots, FaRegStar, FaClipboardList, FaDollarSign, FaAddressCard, FaSignOutAlt, FaWrench } from "react-icons/fa";
import NoAvatar from "../../../assets/img/no-avatar.png";
import {Link} from 'react-router-dom';


import useAuth from '../../../hooks/useAuth';

import './NavBar.css';


export default function NavBar() {

  const {user, isLoading} = useAuth();

    const logoutUser = () => {
      logout();
      //window.location.reload();
      window.location.href = "/";
    }


  if (!user){
    return (
      <>
    <header>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container">
    <div className="logo">
    <Link to={"/"} className="navbar-brand" ><img src={Logo} alt="logo" className="img-fluid pb-3" /></Link>
    </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <div className="navbar-nav mr-auto ml-auto ">
    <ul className="navbar-nav ">
      <li className="nav-item">
        <Link to={"/"} className="nav-link" ><FaTasks size="18px" className="mr-2 mb-1"/>Noticias</Link>
      </li>
      <li className="nav-item">
        <Link to={"/recetas"} className="nav-link" ><FaUtensils size="18px" className="mr-2 mb-1"/>Recetas</Link>
      </li>
      <li className="nav-item">
        <Link to={"/mapa"} className="nav-link" ><FaMapMarkerAlt size="18px" className="mr-2 mb-1"/>Mapa</Link>
      </li>
      <li className="nav-item">
        <Link to={"/foro"} className="nav-link" ><FaRegCommentDots size="18px" className="mr-2 mb-1"/>Foro</Link>
      </li>
      <li className="nav-item dropdown">
        <Link to={"#"} className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
        <FaShoppingCart size="18px" className="mr-2 mb-1"/> Productos
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to={"/listado-productos"} className="dropdown-item" ><FaClipboardList size="18px" className="mr-2 mb-1"/>Listado</Link>
          <div className="dropdown-divider"></div>
          <Link to={"/oferta-productos"} className="dropdown-item" ><FaDollarSign size="18px" className="mr-2 mb-1"/>Oferta</Link>
        </div>
      </li>
      <li className="nav-item">
        <Link to={"/suscribirse"} className="nav-link" ><FaRegStar size="18px" className="mr-2 mb-1"/>Suscribirse</Link>
      </li>
    </ul>
    </div>
    <div className="d-flex flex-row ">
     <Link to={"/login"} className="btn login" ><FaSignInAlt size="15px" /> Iniciar Sesión</Link>
    </div>
  </div>
  </div>
  </nav>
  </header>
      </>
    );
  }

  if (user && !isLoading) {
    return (
      <>
    <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container">
    <div className="logo">
    <Link to={"/"} className="navbar-brand" ><img src={Logo} alt="logo" className="img-fluid pb-3" /></Link>
    </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <div className="navbar-nav mr-auto ml-auto ">
    <ul className="navbar-nav ">
      <li className="nav-item">
        <Link to="/" className="nav-link" ><FaTasks size="18px" className="mr-2 mb-1"/>Noticias</Link>
      </li>
      <li className="nav-item">
        <Link to={"/recetas"} className="nav-link"><FaUtensils size="18px" className="mr-2 mb-1"/>Recetas</Link>
      </li>
      <li className="nav-item">
        <Link to={"/mapa"} className="nav-link"><FaMapMarkerAlt size="18px" className="mr-2 mb-1"/>Mapa</Link>
      </li>
      <li className="nav-item">
        <Link to={"/foro"} className="nav-link" ><FaRegCommentDots size="18px" className="mr-2 mb-1"/>Foro</Link>
      </li>
      <li className="nav-item dropdown">
        <Link to={"#"} className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
        <FaShoppingCart size="18px" className="mr-2 mb-1"/> Productos
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to={"/listado-productos"} className="dropdown-item"><FaClipboardList size="18px" className="mr-2 mb-1"/>Listado</Link>
          <div className="dropdown-divider"></div>
          <Link to={"/oferta-productos"} className="dropdown-item"><FaDollarSign size="18px" className="mr-2 mb-1"/>Oferta</Link>
        </div>
      </li>
      <li className="nav-item">
        <Link to={"/suscribirse"} className="nav-link"><FaRegStar size="18px" className="mr-2 mb-1"/>Suscribirse</Link>
      </li>
    </ul>
    </div>
    <div className="d-flex flex-row justify-content-center">  
      <ol className="nav-item dropdown">
    <Link to={"#"} className="nav-link dropdown-toggle nombre" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
         <img alt="images" src={NoAvatar} className="perfil" /> {user.name}
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to={"/perfil"} className="dropdown-item"><FaAddressCard size="18px" className="mr-2 mb-1"/>Perfil</Link>
          <div className="dropdown-divider"></div>
          <Link to={"/configuracion"} className="dropdown-item"><FaWrench size="18px" className="mr-2 mb-1"/>Configuración</Link>
          <div className="dropdown-divider"></div>
          <button className="dropdown-item" onClick={logoutUser}><FaSignOutAlt size="18px" className="mr-2 mb-1"/>Salir</button>
        </div>
      </ol> 
    </div>
  </div>
  </div>
  </nav>
  </header>
      </>
    );



  }

 
}
