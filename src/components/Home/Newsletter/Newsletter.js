import React from "react";

import './Newsletter.css';


export default function Home() {
  return (
    <div id="newsletter">
    <div className="footer-newsletter">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h4>Join Our Newsletter</h4>
          <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          <form action="" method="post">
            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
    </div>  
  </div>
  </div>
  );
}