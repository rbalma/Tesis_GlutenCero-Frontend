import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import { getImageApi } from '../../../api/recipe';

import './Card.css';

export default function Card(props) {

    const { recipe } = props;
   
    const [image, setImage] = useState(null);

    const day = moment(recipe.date).format("DD");
    const month = moment(recipe.date).format("MM");
    const year = moment(recipe.date).format("YYYY");

    const hour = moment(recipe.date).format("HH");
    const minute = moment(recipe.date).format("mm");

    useEffect(() => {
      if (recipe.image) {
        getImageApi(recipe.image).then(response => {
            setImage(response);
        });
      } else {
        setImage(null);
      }
    }, [recipe]);

    return (
        <div className="card text-center m-3 bg-dark animate__animated animate__fadeIn">
            <div className="overflow">
            <img src={image} alt="logo" className="card-img-top"/>
            </div>
            <div className="card-body cuerpoTarjeta">
                <h5 className="card-title text-light">{recipe.title}</h5>
                <p className="textoTarjeta text-light">
                
                <small className="text-muted">{day}/{month}/{year} - {hour}:{minute} hrs</small>
                </p>
                <Link to={`/recetas/${recipe._id}`} className="btn btn-primary rounded-0" >
                   Ir a la Receta
                </Link>
            </div>
            
        </div>
    )
}
