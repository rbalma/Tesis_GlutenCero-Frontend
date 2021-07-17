import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPostsApi, getLastPostApi } from "../../../api/forum";
import { convertDate } from "../../../utils/convertDate";
import { FaUserAlt } from "react-icons/fa";

import "../Forum.css";

export default function Thread(props) {
  const { thread, userThread } = props;
  const [replies, setReplies] = useState(0);

  useEffect(() => {
    if (thread._id) {
      getPostsApi(thread._id)
        .then((res) => {
          if (res.ok) {
            setReplies(res.posts.totalDocs);
          }
        })
        .catch((err) => {
          console.log("No se puede traer el último post. " + err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const threadDate = convertDate(thread.created);

  const threadState = (state) => {
    switch (state) {
      case "solved":
        return (
          <span className="badge badge-success align-text-bottom ml-2">
            Resuelto
          </span>
        );

      case "locked":
        return (
          <span className="badge badge-danger align-text-bottom ml-2">
            Bloqueado
          </span>
        );

      case "closed":
        return (
          <span className="badge badge-secondary align-text-bottom ml-2">
            Cerrado
          </span>
        );

      case "open":
        return (
          <span className="badge badge-info align-text-bottom ml-2">
            Abierto
          </span>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="row no-gutters align-items-center ml-2">
        <div className="col">
          <Link to={`/foro/${thread._id}`} className="text-big" data-abc="true">
            {thread.title}
          </Link>
          {threadState(thread.status)}
          <div className="text-muted small mt-1">
            {threadDate} &nbsp;·&nbsp;
            <Link
              to={`/perfil/${userThread._id}`}
              className="text-muted"
              data-abc="true"
            >
              {userThread.name} {userThread.lastname}
            </Link>
          </div>
        </div>
        <div className="d-md-block col-4">
          <div className="row no-gutters align-items-center">
            <div className="col-4"> {replies}</div>
            <LastPost threadId={thread._id} />
          </div>
        </div>
      </div>

      <hr className="m-0" />
    </>
  );
}

function LastPost({ threadId }) {
  const [lastPost, setLastPost] = useState({
    created: '',
    _id: '',
    content: '',
  });
  const [userPost, setUserPost] = useState({
    _id: '',
    name: '',
    lastname: '',
    avatar: ''
  });

  const postDate = convertDate(lastPost.created);

  useEffect(() => {
    if(threadId){
      getLastPostApi(threadId)
      .then((res) => {
        if (res.ok) {
          setLastPost(res.posts);
          setUserPost(res.posts.user);
        } 
      })
      .catch((err) => {
        console.log("No se puede traer el último post. ");
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="media col-8 align-items-center">
      < FaUserAlt 
        className="d-block"
        size='2rem'
      />

      <div className="media-body flex-truncate  ml-2">
        <Link to={`/perfil/${userPost._id}`} className="line-height-1 text-muted text-truncate">
          {" "}
          {userPost.name} {userPost.lastname}{" "}
        </Link>
        <div className="text-muted small text-truncate" data-abc="true">
          {postDate}
        </div>
      </div>
    </div>
  );
}
