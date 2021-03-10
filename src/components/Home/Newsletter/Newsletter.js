import React from "react";

import './Newsletter.css';


export default function Home() {
  return (
    <div id="newsletter">
    <div className="footer-newsletter">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h4>Boletín informativo</h4>
          <p>Recibe todas las actualizaciones de "Gluten Cero" en tu correo.</p>
          <form action="" method="post">
            <input type="email" className="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Please enter a valid email" />
            <input type="submit" value="Suscribirse" />
          </form>
        </div>
      </div>
    </div>  
  </div>
  </div>
  );
}