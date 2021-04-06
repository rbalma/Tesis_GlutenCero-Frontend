import React, {useState, useEffect} from 'react';
import Cards from '../../../components/Recipe/Cards';
import {Link} from 'react-router-dom';
import { getRecipesActiveApi } from '../../../api/recipe';
import { getAccessTokenApi } from '../../../api/auth';

import './SearchRecipe.css';

export default function SearchRecipe() {

    const [recipes, setRecipes] = useState(null);
    const token = getAccessTokenApi();

    useEffect(() => {
        getRecipesActiveApi(token, true).then(response => {
                setRecipes(response.recipes);
     });
    }, [token])

 
  
if(recipes){
    return (
        <div className="contenidoRecetas">
        <div className="container  justify-content-center align-items-center">
            <h1>Buscador de Recetas</h1>
            <Link to={"/recetas/nueva"} className="btn btn-primary">Nueva Receta</Link>
            <Cards recipes={recipes}/>
        </div>
        </div>
    )

}else {
    return (
        <div className="contenidoRecetas">
        <div className="container  justify-content-center align-items-center">
            <h1>Buscador de Recetas</h1>
            <Link to={"/recetas/nueva"} className="btn btn-primary">Nueva Receta</Link>
            <h2>No hay recetas</h2>
        </div>
        </div>
    )
}
   
}
