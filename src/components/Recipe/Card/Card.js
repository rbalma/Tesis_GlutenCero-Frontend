import React from 'react';
import imagen from '../../../assets/img/slider.jpg';
import {Link} from 'react-router-dom';

import './Card.css';

export default function Card() {
    return (
        <div className="card text-center m-3 bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
            <img src={imagen} alt="logo" className="card-img-top"/>
            </div>
            <div className="card-body cuerpoTarjeta">
                <h5 className="card-title text-light">TITULO</h5>
                <p className="textoTarjeta text-light">
                sadafaf ap,sasfp paof,pasfapsfsa,ff,apsf,spf
                </p>
                <Link to={"/"} className="btn btn-primary rounded-0" >
                   Ir a la Receta
                </Link>
            </div>
            
        </div>
    )
}
