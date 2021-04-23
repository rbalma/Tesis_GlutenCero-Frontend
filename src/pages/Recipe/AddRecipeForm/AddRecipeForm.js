import React, { useState } from 'react';
import { notification } from 'antd';
import { Redirect} from 'react-router-dom';
import TitleImage from '../../../components/Recipe/FormAdd/TitleImage';
import CategoryIngredients from '../../../components/Recipe/FormAdd/CategoryIngredients';
import Descriptions from '../../../components/Recipe/FormAdd/Descriptions';
import Error404 from '../../Error404';
import useAuth from '../../../hooks/useAuth';
import { newRecipeApi } from '../../../api/recipe';
import { getAccessTokenApi } from '../../../api/auth';

import './AddRecipeForm.css';


export default function AddRecipeForm(props) {
    const { history } = props;
    const {user} = useAuth();
    
    const [recipe, setRecipe] = useState({
        step: 1,
        title: '',
        category: '',
        image: null,
        ingredient: '',
        description: '',
        userId: '',
        userName: '',
        userLastName: ''
      });



    const nextStep = () => {
        const { step } = recipe;
        setRecipe({ ...recipe, step: step + 1 });
    };

    const prevStep = () => {
        const { step } = recipe;
        setRecipe({ ...recipe, step: step - 1 });
    };

    const addRecipe = () => {
        setRecipe({
          ...recipe,
          userId: user.id,
          userName: user.name,
          userLastName: user.lastname
        })
      // recipe.userId = user.id;
      // recipe.userName = user.name;
      // recipe.userLastName = user.lastname;


        // console.log(recipe);

        if (
            !recipe.title ||
            !recipe.category ||
            !recipe.image ||
            !recipe.ingredient ||
            !recipe.description
          ) {
            notification["error"]({
              message: "Todos los campos son obligatorios."
            });
          } else if (recipe.image.size > 1000000){
            notification["error"]({
                message: "La imagen debe tener un tamaño menor a 1 MB."
              });
          } else {
            const accessToken = getAccessTokenApi();
      
            newRecipeApi(accessToken, recipe)
              .then(response => {
                notification["success"]({
                  message: response
                });
                setRecipe({});
                 //Redireccionar
                 history.push('/recetas');
              })
              .catch(err => {
                notification["error"]({
                  message: err
                });
              });
          }
    }

    if (!user) {
        return (
            <>
                 <Redirect to="/login" /> 
            </>
        )
    } else {
      switch (recipe.step) {
        case 1:
            return ( 
            <div className = " formulario" >

                <TitleImage 
                    nextStep={nextStep}
                    setRecipe={setRecipe}
                    recipe={recipe}
                />
                </div>
            );
        case 2:
            return ( 
            <>
            <div className = "formulario" >
             <CategoryIngredients 
                  nextStep={nextStep}
                  prevStep={prevStep}
                  setRecipe={setRecipe}
                  recipe={recipe}
             />
             </div>
            </>
            );

        case 3:
            return ( 
            <>
             <div className = "formulario" >
             <Descriptions
                  addRecipe={addRecipe}
                  prevStep={prevStep}
                  setRecipe={setRecipe}
                  recipe={recipe}
             />
             </div>
            </>
            );
        default:
            return ( 
                <Error404 /> 
            );
    }

    }

      
       
}
