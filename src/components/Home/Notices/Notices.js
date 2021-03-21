import React from "react";
import './Notices.css';


export default function Home() {
  return (

    <section id="lts_sec" className="body">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs12 ">
          <header className="section-header">
            <h3>Últimas Noticias</h3>
          </header>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="lts_pst">
            <img src="https://www.infoceliaco.com/images/stories/infoceliaco/2019/Pizza-masa-brocoli-celiacos.jpg"
              alt="" />
            <h2><b>Llega la pizza con masa de brócoli, apta para celíacos</b></h2>
            <p>Acaba de llegar al mercado una nueva masa de pizza elaborada a base de brócoli, un producto que lleva
              años triunfando entre los alimentos más saludables y al que parece que le ha llegado la hora de
              reinventarse.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="lts_pst">
            <img src="https://www.rionegro.com.ar/wp-content/uploads/2019/10/anmat.jpg?w=920&h=520&crop=1" alt="" />
            <h2><b>Anmat ordenó el retiro de productos para celíacos de una empresa de Bariloche</b></h2>
            <p>Se trata de todos los productos elaborados por la empresa barilochense Ruca Umel con fecha de elaboración
              anterior al 9 de octubre.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="lts_pst">
            <img
              src="https://www.rionegro.com.ar/wp-content/uploads/2019/09/Imagen-ROCA-Productos-sin-TACC-GM-06.jpg?w=920&h=520&crop=1"
              alt="" />
            <h2><b>Celíacos en crisis: la canasta básica cuesta tres veces más que la común</b></h2>
            <p>La eliminación del IVA a la canasta básica no alcanzó a los productos libres de gluten, que además
              subieron un 35%. Muchos apuestan a la elaboración propia de alimentos para mantener el tratamiento médico
              sin afectar tanto el bolsillo</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
}