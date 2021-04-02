import React from 'react';
import Cards from '../../../components/Recipe/Cards';
import {Link} from 'react-router-dom'

import './SearchRecipe.css';

export default function SearchRecipe() {


    return (
        <div className="contenidoRecetas">
        <div className="container  justify-content-center align-items-center">
            <h1>Buscador de Recetas</h1>
            <Link to={"/recetas/nueva"} className="btn btn-primary">Nueva Receta</Link>
            <Cards />
        </div>
        </div>
    )
}
