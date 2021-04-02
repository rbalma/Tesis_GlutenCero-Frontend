import React, { useState } from 'react';
import TitleImage from '../../../components/Recipe/FormAdd/TitleImage';
import CategoryIngredients from '../../../components/Recipe/FormAdd/CategoryIngredients';
import Descriptions from '../../../components/Recipe/FormAdd/Descriptions';

import './AddRecipeForm.css';


export default function AddRecipeForm() {

    const [recipe, setRecipe] = useState({
        step: 1,
        title: '',
        category: '',
        ingredient: '',
        description: ''
      });

    const nextStep = () => {
        const { step } = recipe;
        setRecipe({ ...recipe, step: step + 1 });
    };

    const prevStep = () => {
        const { step } = recipe;
        setRecipe({ ...recipe, step: step - 1 });
    };


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
                    nextStep={nextStep}
                    prevStep={prevStep}
                    setRecipe={setRecipe}
                    recipe={recipe}
               />
               </div>
              </>
              );
          default:
              return ( 
                  <h1> hola </h1>
              );
      }

       
}
