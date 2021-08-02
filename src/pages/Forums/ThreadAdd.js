import React, { useState } from "react";
import RichTextEditor from "../../components/TextEditor/RichTextEditor.js";
import { message } from "antd";
import { Redirect } from "react-router";
import useAuth from "../../hooks/useAuth";
import { addThreadApi } from "../../api/forum.js";
import { getAccessTokenApi } from "../../api/auth.js";

export default function ThreadAdd({ history }) {
  const { user } = useAuth();
  const [thread, setThread] = useState({
    title: "",
    content: "",
  });

  const { title, content } = thread;

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if(!thread.title || !thread.content){
      message.error("Todos los campos son obligatorios");
      return;
    }

    const accessToken = getAccessTokenApi();

    addThreadApi(accessToken, thread)
    .then( res => {
      if(res.ok){
        message.loading({ content: 'Creando Hilo...', key : 'updatable' });
        setTimeout(() => {
          message.success({ content: '!Listo!', key : 'updatable', duration: 2 });
          history.push("/foro");
        }, 1000);
      } else {
        message.error(res.message);
      }
    }).catch(error => {
      console.error(error);
    })
  };

  if (!user) {
    return ( <Redirect to="/login" /> );
  } else {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={handleSubmitForm}>
            <div className="col-12 col-xl-8 offset-xl-2 mt-5">
              <input
                type="text"
                autoComplete="off"
                placeholder="Título del hilo"
                className="form-control"
                value={title}
                onChange={(e) =>
                  setThread({ ...thread, title: e.target.value })
                }
              />
            </div>

            <div className="col-12 col-xl-8 offset-xl-2 mt-5">
              <RichTextEditor
                content={content}
                handleContentChange={(e) =>
                  setThread({ ...thread, content: e })
                }
              />
            </div>

            <div className="col-4 offset-4 mt-5 mb-4">
              <button
                type="submit"
                className="btn btn-shadow btn-primary btn-block"
              >
                Confirmar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
