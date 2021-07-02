import React from "react";

import "./Spinner.css";

const Spinner = () => {
  return (
    <div class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
      <small>cargando</small>
    </div>
  );
};

export default Spinner;
