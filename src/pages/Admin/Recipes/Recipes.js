import React, {useState, useEffect} from "react";
import {getAccessTokenApi} from "../../../api/auth";
import {getRecipesActiveApi} from "../../../api/recipe";
import ListRecipes from "../../../components/Admin/Recipes/ListRecipes";


export default function Recipes() {

    const [recipesActive, setRecipesActive] = useState([]);
    const [recipesInactive, setRecipesInactive] = useState([]);
    const [reloadRecipes, setReloadRecipes] = useState(false);
    const token = getAccessTokenApi();

    useEffect(() => {
        getRecipesActiveApi(token, true).then(response => {
            setRecipesActive(response.recipes);
        });
        getRecipesActiveApi(token, false).then(response => {
            setRecipesInactive(response.recipes);
        });
        setReloadRecipes(false);
    }, [token, reloadRecipes]);


    return (
        <>
            <ListRecipes recipesActive={recipesActive} recipesInactive={recipesInactive} setReloadRecipes={setReloadRecipes} />

           
        </>
    )
}