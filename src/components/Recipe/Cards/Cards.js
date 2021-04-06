import React from 'react';
import Card from '../Card';



import './Cards.css';

export default function Cards(props) {

 let {recipes} = props;
     

    return (
        <div className="row">
         {recipes.map(recipe => (
            <div className="col-md-3" key={recipe._id}>
            <Card recipe={recipe}/>
            </div>
          ))} 
        </div>
    )
}
