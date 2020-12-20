import React from "react";
import Logo from '../../../assets/img/logoGlutenCero.png';

import './NavBar.css';



export default function NavBar() {

 return (
    <>
  <header id="header" className="fixed-top">
    <div className="container">

      <div className="logo float-left">
        <a href="#intro" className="scrollto"><img src={Logo} alt="logo" className="img-fluid pb-3" /></a>
      </div>

      <nav className="main-nav float-right d-none d-lg-block ">
        <ul>
          <li className="active"><a href="/">Inicio</a></li>
          <li><a href="#about">Servicios</a></li>
          <li><a href="#about">Recetas</a></li>
          <li><a href="#services">Mapa</a></li>
          <li><a href="#portfolio">Foro</a></li>
          <li><a href="#team">Productos</a></li>
          <li className="drop-down"><a href="/">Suscribirse</a>
            <ul>
              <li><a href="/">Drop Down 1</a></li>
              <li className="drop-down"><a href="/">Drop Down 2</a>
                <ul>
                  <li><a href="/">Deep Drop Down 1</a></li>
                  <li><a href="/..">Deep Drop Down 2</a></li>
                  <li><a href="/">Deep Drop Down 3</a></li>
                  <li><a href="/">Deep Drop Down 4</a></li>
                  <li><a href="/">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="/">Drop Down 3</a></li>
              <li><a href="/">Drop Down 4</a></li>
              <li><a href="/">Drop Down 5</a></li>
            </ul>
          </li>
          <li><a href="#contact">Ingresar</a></li>
        </ul>
      </nav>
      
    </div>
  </header>
    </>
  );
}



