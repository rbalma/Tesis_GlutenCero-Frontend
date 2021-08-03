import React, {useState, useEffect} from "react";
import {getRecipesActiveApi} from "../../../api/recipe";
import ListRecipes from "../../../components/Admin/Recipes/ListRecipes";
import { notification } from "antd";
import queryString  from "query-string";



export default function Recipes(props) {

    const { location, history } = props;
    const [recipesActive, setRecipesActive] = useState([]);
    const [recipesInactive, setRecipesInactive] = useState([]);
    const [reloadRecipes, setReloadRecipes] = useState(false);
    const { page = 1 } = queryString.parse(location.search);

    useEffect(() => {
        getRecipesActiveApi(true, 'all', 'desc', '', 6, page).then(response => {
            if(response?.code !== 200){
                notification["warning"]({
                    message: response.message
                });
            } else {                
                setRecipesActive(response.recipes);
            }
        })
        .catch(() => {
            notification["error"]({
                message: "Error del servidor"
            });
        });

        getRecipesActiveApi(false, 'all', 'desc', '', 5, page).then(response => {
            if(response?.code !== 200){
                notification["warning"]({
                    message: response.message
                });
            } else {                
                setRecipesInactive(response.recipes);
            }
        })
        .catch(() => {
            notification["error"]({
                message: "Error del servidor"
            });
        });

        setReloadRecipes(false);
    }, [reloadRecipes, page]);


    return (
        <>
            <ListRecipes recipesActive={recipesActive} recipesInactive={recipesInactive} 
            setReloadRecipes={setReloadRecipes} location={location} history={history} />
           
        </>
    )
}