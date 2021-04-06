import React from "react";
import parse from 'html-react-parser';
import '../../../../pages/Recipe/ViewRecipe'

export default function PreviewRecipe(props) {

    const { recipe } = props;

  return (
    <>
      <div id="content-wrapper">
        <section id="blog">
          <div className="container">
            <div className="gap"></div>
            <div className="row">
                <div className="blog">
                  <div className="blog-item">
                    <div className="blog-featured-image">
                      <img
                        className="img-responsive img-blog"
                        src={recipe.preview}
                        alt=""
                      />
                    </div>
                    <div className="blog-content">
                      <h3 className="main-title">
                        {recipe.title}
                      </h3>
                      <div className="entry-meta">
                        <span>
                          <i className="fa fa-folder"></i>Categoría: {recipe.category}
                        </span>
                      </div>
                      <p className="lead">
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
