import React from "react";

import './Footer.css';


export default function Home() {
  return (
    <footer className="footer-back">
    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong>Gluten Cero</strong>. 2020
      </div>
      <div className="credits">
        Desarrollado por <a href="https://www.institucional.frc.utn.edu.ar/sistemas/Areas/Academica/ProyectoFinal/Proyectos/Detalle.asp?id=113"> estudiantes UTN FRC</a>
      </div>
    </div>
  </footer>
  );
}