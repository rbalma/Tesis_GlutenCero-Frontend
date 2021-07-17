import React, { useState, useEffect } from "react";
import { message } from "antd";
import Post from "../../components/Forum/Post";
import RichTextEditor from "../../components/TextEditor/RichTextEditor.js";
import { getPostsApi, getThreadByIdApi, addPostApi } from "../../api/forum";
import { getAccessTokenApi } from "../../api/auth";

export default function PostScreen(props) {
  const { id } = props.match.params;

  const [content, setContent] = useState('');
  const [postsThread, setPostsThread] = useState([]);
  const [thread, setThread] = useState({});
  const [ threadUser, setThreadUser ] = useState({});

  useEffect(() => {
    getPostsApi(id)
      .then((resp) => {
        setPostsThread(resp.posts.docs);
      })
      .catch((error) => {
        console.error(error);
      });

    getThreadByIdApi(id)
      .then((resp) => {
        setThread(resp.thread);
        setThreadUser(resp.thread.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleText = (e) => {
    setContent(e);
  };


  const newPost = (e) => {
    e.preventDefault();

    if(!content){
      message.error('El posteo no puede estar vacio');
      return;
    }

    const accessToken = getAccessTokenApi();

    const data = {
      content
    }



    addPostApi( accessToken, id, data).then(res => {
      if( res.ok ){
        message.loading({ content: 'Creando Posteo...', key : 'updatable' });
        setTimeout(() => {
          message.success({ content: '!Listo!', key : 'updatable', duration: 2 });
        }, 1000);
      } else {
        message.error( res.message );
      }
    }).catch(error => {
      console.error(error);
    });

  }



  return (
    <div className="container">

        <b className="mt-5 mb-2">{thread.title}</b>
        <Post
          content={thread.content}
          created={thread.created}
          user={threadUser}
        />

        {postsThread.map((p) => (
          <div key={p._id}>
          <Post content={p.content} created={p.created} user={p.user} />
          </div>
        ))}

        <hr />
        
        <form onSubmit={ newPost }>
        <div className="row">
          
        {thread.status === "open" && (
          <div className="col-12 col-xl-10 mt-5 mb-4">
            <h5>Escriba un nuevo post...</h5>
            <RichTextEditor content={content} handleContentChange={handleText} />
          </div>
        )}
      </div>
      <button
              type="submit"
              className="btn btn-shadow btn-wide btn-primary mb-3"
            >
              Publicar Posteo
            </button>
      </form>

    </div> 
  );
}
