import React from "react";
import parse from 'html-react-parser';
import '../../../../pages/Recipe/ViewRecipe'

export default function PreviewRecipe(props) {

    const { recipe } = props;

  return (
    <>
      <div id="content-wrapper">
        <section id="blog">
          <div class="container">
            <div class="gap"></div>
            <div class="row">
                <div class="blog">
                  <div class="blog-item">
                    <div class="blog-featured-image">
                      <img
                        class="img-responsive img-blog"
                        src="http://placehold.it/800x600"
                        alt=""
                      />
                    </div>
                    <div class="blog-content">
                      <h3 class="main-title">
                        {recipe.title}
                      </h3>
                      <div class="entry-meta">
                        <span>
                          <i class="fa fa-folder"></i>Categoría: {recipe.category}
                        </span>
                      </div>
                      <p class="lead">
                      {parse(recipe.ingredient)}
                      </p>

                      <p>
                      {parse(recipe.description)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </div>
    </>
  );
}
