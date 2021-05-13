import React from 'react';
import Card from '../Card';
import Pagination from '../../../components/Pagination';


import './Cards.css';

export default function Cards(props) {

 let {recipes, location, history} = props;
     

    return (
      <>
        <div className="row">
         {recipes.docs.map(recipe => (
            <div className="col-md-4" key={recipe._id}>
            <Card recipe={recipe}/>
            </div>
          ))}
         
        </div>
         <div className="row">
           <div className="offset-5 mb-4">
             <Pagination notices={recipes} location={location} history={history} />
           </div>
         </div>
         </>
    )
}
