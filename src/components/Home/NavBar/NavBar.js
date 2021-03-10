import React from "react";
import Logo from '../../../assets/img/logoGlutenCero.png';
import { FaSignInAlt, FaHome, FaTasks, FaUtensils, FaShoppingCart, FaMapMarkerAlt, FaRegCommentDots, FaRegStar, FaClipboardList, FaDollarSign, FaAddressCard, FaSignOutAlt, FaWrench } from "react-icons/fa";
import  ImgPerfil  from "../../../assets/img/no-avatar.png";

import './NavBar.css';


export default function NavBar() {

  let user = false;

  if (!user){
    return (
      <>
    <header>
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="logo">
    <a className="navbar-brand" href="/"><img src={Logo} alt="logo" className="img-fluid pb-3" /></a>
    </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <div className="navbar-nav mr-auto ml-auto ">
    <ul className="navbar-nav ">
      <li className="nav-item ">
        <a className="nav-link" href="/#"><FaHome size="18px" className="mr-2 mb-1"/>Inicio<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#"><FaTasks size="18px" className="mr-2 mb-1"/>Servicios</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#"><FaUtensils size="18px" className="mr-2 mb-1"/>Recetas</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#"><FaMapMarkerAlt size="18px" className="mr-2 mb-1"/>Mapa</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#"><FaRegCommentDots size="18px" className="mr-2 mb-1"/>Foro</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
        <FaShoppingCart size="18px" className="mr-2 mb-1"/> Productos
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/"><FaClipboardList size="18px" className="mr-2 mb-1"/>Listado</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/"><FaDollarSign size="18px" className="mr-2 mb-1"/>Oferta</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#"><FaRegStar size="18px" className="mr-2 mb-1"/>Suscribirse</a>
      </li>
    </ul>
    </div>
    <div className="d-flex flex-row justify-content-center">
     <a className="btn login" href="/admin/login"><FaSignInAlt size="15px" /> Iniciar Sesión</a>
    </div>
  </div>
  </nav>
  </div>
  </header>
      </>
    );
  }

  if (user) {
    return (
      <>
    <header>
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="logo">
    <a className="navbar-brand" href="/"><img src={Logo} alt="logo" className="img-fluid pb-3" /></a>
    </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <div className="navbar-nav mr-auto ml-auto ">
    <ul className="navbar-nav ">
      <li className="nav-item ">
        <a className="nav-link" href="/#"><FaHome size="18px" className="mr-2 mb-1"/>Inicio<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#"><FaTasks size="18px" className="mr-2 mb-1"/>Servicios</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#"><FaUtensils size="18px" className="mr-2 mb-1"/>Recetas</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#"><FaMapMarkerAlt size="18px" className="mr-2 mb-1"/>Mapa</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#"><FaRegCommentDots size="18px" className="mr-2 mb-1"/>Foro</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
        <FaShoppingCart size="18px" className="mr-2 mb-1"/> Productos
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/"><FaClipboardList size="18px" className="mr-2 mb-1"/>Listado</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/"><FaDollarSign size="18px" className="mr-2 mb-1"/>Oferta</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#"><FaRegStar size="18px" className="mr-2 mb-1"/>Suscribirse</a>
      </li>
    </ul>
    </div>
    <div className="d-flex flex-row justify-content-center">  
      <ol className="nav-item dropdown">
    <a className="nav-link dropdown-toggle nombre" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
         <img alt="images" src={ImgPerfil} className="perfil"></img> Nombre
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/"><FaAddressCard size="18px" className="mr-2 mb-1"/>Perfil</a>
          <a className="dropdown-item" href="/"><FaWrench size="18px" className="mr-2 mb-1"/>Configuración</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/"><FaSignOutAlt size="18px" className="mr-2 mb-1"/>Salir</a>
        </div>
      </ol> 
    </div>
  </div>
  </nav>
  </div>
  </header>
      </>
    );



  }

 
}
