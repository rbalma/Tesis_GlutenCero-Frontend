import React, {useState, useEffect} from "react";
import {getRecipesActiveApi} from "../../../api/recipe";
import ListRecipes from "../../../components/Admin/Recipes/ListRecipes";


export default function Recipes() {

    const [recipesActive, setRecipesActive] = useState([]);
    const [recipesInactive, setRecipesInactive] = useState([]);
    const [reloadRecipes, setReloadRecipes] = useState(false);

    useEffect(() => {
        getRecipesActiveApi(true).then(response => {
            setRecipesActive(response.recipes);
        });
        getRecipesActiveApi(false).then(response => {
            setRecipesInactive(response.recipes);
        });
        setReloadRecipes(false);
    }, [reloadRecipes]);


    return (
        <>
            <ListRecipes recipesActive={recipesActive} recipesInactive={recipesInactive} setReloadRecipes={setReloadRecipes} />

           
        </>
    )
}