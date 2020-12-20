import React from "react";
import './WelcomeSection.css';


export default function Home() {
  return (

    <section id="hero" className="d-flex align-items-center">
      <div className="container" data-aos="zoom-out" data-aos-delay="100">
        <h1>Bienvenido a <span>Gluten Cero </span>
        </h1>
        <h2>Forma parte de nuestra comunidad</h2>
        <div className="d-flex">
          <a href="/singup" className="btn-get-started scrollto">Registrarse</a>
        </div>
      </div>
    </section>

  );
}