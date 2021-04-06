import React, { useState, useEffect } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import {getRecipeByIdApi, getImageApi} from '../../../api/recipe';
import {getAccessTokenApi} from '../../../api/auth';


import './ViewRecipe.css';

export default function ViewRecipeForm(props) {

    //obtener el ID
    const { id } = props.match.params;

    const [recipe, setRecipe] = useState({});
    const token = getAccessTokenApi();

    useEffect(() => {
        getRecipeByIdApi(token, id).then(response => {
                setRecipe(response.recipe);
     });
    }, [id, token]);


    return (
      <>
        <section id="single-page-slider" className="d-flex align-items-center">
          <div className="container" data-aos="zoom-out" data-aos-delay="100">
            <h1>Receta </h1>
          </div>
        </section>

        <div id="content-wrapper">
        <section id="blog" className="white">
            <div className="container">
            <div className="gap"></div>
                <div className="row">
      
                    <div className="col-sm-8 col-sm-pull-4">
                        <div className="blog">
                            <div className="blog-item">
                               <RecipeImage imageName={recipe.image} />
                                <div className="blog-content">

                                    <Recipe recipe={recipe} />


                                    <hr/>

                                 
                                    
                                    <span><i className="fa fa-comment"></i> <span className="counter">14</span> Comments</span>
                                    
                                    <hr/>

                                     <div id="comments">
                                        <div id="comments-list">
                                            <h3>Comentarios</h3>
                                            <div className="media">
                                                <div className="pull-left">
                                                    <img className="avatar img-thumbnail comment-avatar" src="http://placehold.it/400x400" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <div className="well">
                                                        <div className="media-heading">
                                                            <strong>Dave Evans</strong>&nbsp; <small>30th Jan, 2014</small>
                                                        </div>
                                                        <p>Was are delightful solicitude discovered collecting man day. Resolving neglected sir tolerably but existence conveying for. Day his put off unaffected literature partiality inhabiting.</p>
                                                    </div>
                                            
                                                </div>
                                            </div>
                                            <div className="media">
                                                <div className="pull-left">
                                                    <img className="avatar img-thumbnail comment-avatar" src="http://placehold.it/400x400" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <div className="well">
                                                        <div className="media-heading">
                                                            <strong>John Smith</strong>&nbsp; <small>14th Jan, 2014</small>
                                                        </div>
                                                        <p>Quitting informed concerns can men now. Projection to or up conviction uncommonly delightful continuing. In appetite ecstatic opinions hastened by handsome admitted.</p>                                              
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gap"></div>

                                        <div id="comment-form">
                                            <h3  className="main-title">Escribe un comentario</h3>
                                            <hr/>
                                            <form className="form-horizontal" >
                                                <div className="form-group">
                                                    <div className="col-sm-6">
                                                        <input type="text" className="form-control" placeholder="Name" />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <input type="email" className="form-control" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-sm-12">
                                                        <textarea rows="8" className="form-control" placeholder="Comment"></textarea>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary btn-outlined">Comentar</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <aside className="col-sm-4 col-sm-push-8">
                        <div className="widget tags">
                            <h3 className="widget-title">Categorías Recetas</h3>
                            <div className="row">
                            <div className="col-sm-6">
                            <ul className="arrow">
                                <li><a className="btn btn-xs btn-primary btn-outlined" href="/">Aperitivos</a></li>
                                <li><a className="btn btn-xs btn-primary btn-outlined" href="/">Bebidas</a></li>
                                <li><a className="btn btn-xs btn-primary btn-outlined" href="/">Dulces</a></li>
                                <li><a className="btn btn-xs btn-primary btn-outlined" href="/">Ensaladas</a></li>
                                </ul>
                                </div>
                                <div className="col-sm-6">
                                <ul className="arrow">
                                <li><a className="btn btn-xs btn-primary btn-outlined" href="/">Panes</a></li>
                                <li><a className="btn btn-xs btn-primary btn-outlined" href="/">Platos principales</a></li>
                                <li><a className="btn btn-xs btn-primary btn-outlined" href="/">Postres</a></li>
                                <li><a className="btn btn-xs btn-primary btn-outlined" href="/">Sopas</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </aside>

                </div>
            </div>
          
        </section>
    </div>

      </>
    );


    function Recipe (props) {
        
    const { recipe } = props;

    const day = moment(recipe.date).format("DD");
    const month = moment(recipe.date).format("MM");
    const year = moment(recipe.date).format("YYYY");


     return(
            <>
            <h3 className="main-title">{recipe.title}</h3>
            <div className="entry-meta">
                <span><i className="fa fa-user"></i> {recipe.userName}  {recipe.userLastName}</span>
                <span><i className="fa fa-folder"></i>  {recipe.category}</span>
                <span><i className="fa fa-clock-o"></i> {day}/{month}/{year}</span>
                
            </div>
            <p className="lead">{parse(`${recipe.ingredients}`)}</p>

            <p>{parse(`${recipe.description}`)} </p>
            </>
        )
    }


    function RecipeImage (props){

        const {imageName} = props;
        const [image, setImage] = useState(null);

        useEffect(() => {
            if (imageName) {
              getImageApi(imageName).then(response => {
                  setImage(response);
              });
            } else {
              setImage(null);
            }
          }, [imageName]);

        return(
            <>
             <div className="blog-featured-image">
                 <img className="img-responsive img-blog" src={image} alt="Imagen receta" />
                             
             </div>
            </>
        )
    }

}
