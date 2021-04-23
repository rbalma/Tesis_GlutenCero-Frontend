import React from "react";
import { Link } from "react-router-dom";

import "./Error404.css";

export default function Error404() {
  return (
    <>
      <div className="container-fluid">
        <div className="text-center" id="margin">
          <div className="notFound mx-auto animate__animated animate__pulse animate__slow animate__infinite">
            404
          </div>
          <p className="lead text-gray-800 mb-5 notFound mx-auto animate__animated animate__flash animate__slow animate__infinite">
            ERROR
          </p>
          <p className="text-gray-500 mb-0">
            Lo sentimos pero la página que busca no existe :(
          </p>
          <Link to={"/"}>&larr; Regresar a la página principal</Link>
        </div>
      </div>
    </>
  );
}
