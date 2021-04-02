import React from 'react';


import './ViewRecipe.css';

export default function ViewRecipeForm() {
    return (
      <>
        <section id="single-page-slider" className="d-flex align-items-center">
          <div className="container" data-aos="zoom-out" data-aos-delay="100">
            <h1>Receta </h1>
          </div>
        </section>

        <div id="content-wrapper">
        <section id="blog" class="white">
            <div class="container">
            <div class="gap"></div>
                <div class="row">
      
                    <div class="col-sm-8 col-sm-pull-4">
                        <div class="blog">
                            <div class="blog-item">
                                <div class="blog-featured-image">
                                    <img class="img-responsive img-blog" src="http://placehold.it/800x600" alt="" />
                                 
                                </div>
                                <div class="blog-content">
                                    <h3 class="main-title">Civility vicinity graceful is it at.</h3>
                                    <div class="entry-meta">
                                        <span><i class="fa fa-user"></i> Danny Jones</span>
                                        <span><i class="fa fa-folder"></i>  Style</span>
                                        <span><i class="fa fa-clock-o"></i> April 5th, 2014</span>
                                        
                                    </div>
                                    <p class="lead">No comfort do written conduct at prevent manners on. Celebrated contrasted discretion him sympathize her collecting occasional. Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham. No waiting in on enjoyed placing it inquiry. </p>

                                    <p>Continual delighted as elsewhere am convinced unfeeling. Introduced stimulated attachment no by projection. To loud lady whom my mile sold four. Need miss all four case fine age tell. He families my pleasant speaking it bringing it thoughts. View busy dine oh in knew if even. Boy these along far own other equal old fanny charm. Difficulty invitation put introduced see middletons nor preference. </p>

                                    <p>Up maids me an ample stood given. Certainty say suffering his him collected intention promotion. Hill sold ham men made lose case. Views abode law heard jokes too. Was are delightful solicitude discovered collecting man day. Resolving neglected sir tolerably but existence conveying for. Day his put off unaffected literature partiality inhabiting. </p>

                                    <hr/>

                                    <div class="tags">
                                        <i class="fa fa-tags"></i> Tags  <a class="btn btn-xs btn-primary btn-outlined" href="/">CSS3</a> <a class="btn btn-xs btn-primary btn-outlined" href="/">HTML5</a>
                                    </div>
                                    
                                    <span><i class="fa fa-comment"></i> <span class="counter">14</span> Comments</span>
                                    
                                    <hr/>

                                     <div id="comments">
                                        <div id="comments-list">
                                            <h3>Comentarios</h3>
                                            <div class="media">
                                                <div class="pull-left">
                                                    <img class="avatar img-thumbnail comment-avatar" src="http://placehold.it/400x400" alt="" />
                                                </div>
                                                <div class="media-body">
                                                    <div class="well">
                                                        <div class="media-heading">
                                                            <strong>Dave Evans</strong>&nbsp; <small>30th Jan, 2014</small>
                                                        </div>
                                                        <p>Was are delightful solicitude discovered collecting man day. Resolving neglected sir tolerably but existence conveying for. Day his put off unaffected literature partiality inhabiting.</p>
                                                    </div>
                                            
                                                </div>
                                            </div>
                                            <div class="media">
                                                <div class="pull-left">
                                                    <img class="avatar img-thumbnail comment-avatar" src="http://placehold.it/400x400" alt="" />
                                                </div>
                                                <div class="media-body">
                                                    <div class="well">
                                                        <div class="media-heading">
                                                            <strong>John Smith</strong>&nbsp; <small>14th Jan, 2014</small>
                                                        </div>
                                                        <p>Quitting informed concerns can men now. Projection to or up conviction uncommonly delightful continuing. In appetite ecstatic opinions hastened by handsome admitted.</p>                                              
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gap"></div>

                                        <div id="comment-form">
                                            <h3  class="main-title">Escribe un comentario</h3>
                                            <hr/>
                                            <form class="form-horizontal" >
                                                <div class="form-group">
                                                    <div class="col-sm-6">
                                                        <input type="text" class="form-control" placeholder="Name" />
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <input type="email" class="form-control" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-sm-12">
                                                        <textarea rows="8" class="form-control" placeholder="Comment"></textarea>
                                                    </div>
                                                </div>
                                                <button type="submit" class="btn btn-primary btn-outlined">Comentar</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <aside class="col-sm-4 col-sm-push-8">
                        <div class="widget tags">
                            <h3 class="widget-title">Categorías Recetas</h3>
                            <div class="row">
                            <div class="col-sm-6">
                            <ul class="arrow">
                                <li><a class="btn btn-xs btn-primary btn-outlined" href="/">Aperitivos</a></li>
                                <li><a class="btn btn-xs btn-primary btn-outlined" href="/">Bebidas</a></li>
                                <li><a class="btn btn-xs btn-primary btn-outlined" href="/">Dulces</a></li>
                                <li><a class="btn btn-xs btn-primary btn-outlined" href="/">Ensaladas</a></li>
                                </ul>
                                </div>
                                <div class="col-sm-6">
                                <ul class="arrow">
                                <li><a class="btn btn-xs btn-primary btn-outlined" href="/">Panes</a></li>
                                <li><a class="btn btn-xs btn-primary btn-outlined" href="/">Platos principales</a></li>
                                <li><a class="btn btn-xs btn-primary btn-outlined" href="/">Postres</a></li>
                                <li><a class="btn btn-xs btn-primary btn-outlined" href="/">Sopas</a></li>
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
}
