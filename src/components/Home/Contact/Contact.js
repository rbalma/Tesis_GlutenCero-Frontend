import React from "react";
import ContactImg from '../../../assets/img/contact_us.png';
import './Contact.css';


export default function Home() {
  return (

    <section id="contact" className="body">
      <div className="container">

        <div className="section-header">
          <h3>Información de Contacto</h3>
        </div>

        <div className="row wow fadeInUp">

          <div className="col-lg-6">
            <div className="map mb-4 mb-lg-0">
              <img src={ContactImg} alt="Contacto" className= "contact-img" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form">
              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage"></div>
              <form action="" method="post" className="contactForm">
                <div className="form-row">
                  <div className="form-group col-lg-6">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Nombre" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group col-lg-6">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validation"></div>
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Mensaje"></textarea>
                  <div className="validation"></div>
                </div>
                <div className="text-center"><button type="submit" title="Send Message">Enviar</button></div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>

  );
}