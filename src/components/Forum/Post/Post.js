import React from "react";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';
import { convertDate } from "../../../utils/convertDate";

import "../Forum.css";

export default function Post(props) {
  const { content, created, user } = props;

  const date = convertDate(created);

  return (
    <div className="snippet-body post">
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-header">
                <div className="media flex-wrap w-100">
                  {" "}
                  <img
                    src={user.avatar ? `http://localhost:3977/api/v1/get-avatar/${user.avatar}` : 'https://i1.wp.com/www.culturaldevoto.com.ar/wp-content/plugins/userswp/assets/images/no_profile.png?ssl=1'}
                    className="d-block ui-w-40 rounded-circle"
                    alt="user-avatar"
                  />
                  <div className="media-body ml-3">
                    {" "}
                    <Link
                      to={`/perfil/${user._id}`}
                      className="text-muted"
                      data-abc="true"
                    >
                      {" "}
                      {user.name} {user.lastname}{" "}
                    </Link>
                  </div>
                  <div className="text-muted small ml-3">
                    <div>
                      Creado: <strong> {date} </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">{parse(`${content}`)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
