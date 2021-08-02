import React, { useState, useEffect } from "react";
import RichTextEditor from "../../../../../components/TextEditor/RichTextEditor.js";
import { message } from "antd";
import { Redirect } from "react-router";
import useAuth from "../../../../../hooks/useAuth";
import { addThreadApi, updateThreadApi } from "../../../../../api/forum.js";
import { getAccessTokenApi } from "../../../../../api/auth.js";

export default function FormThreads(props) {
  const { threadData, setIsVisibleModal, setReloadNotices } = props;

  const { user } = useAuth();
  const [thread, setThread] = useState({
    title: "",
    content: "",
    status: "open",
  });

  const { title, content } = thread;

  useEffect(() => {
    if (threadData) {
      setThread({
        title: threadData.title,
        content: threadData.content,
        status: threadData.status,
      });
    }
  }, [threadData]);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (!thread.title || !thread.content) {
      message.error("Todos los campos son obligatorios");
      return;
    }

    const accessToken = getAccessTokenApi();

    if (threadData) {
      updateThreadApi(accessToken, threadData._id, thread)
        .then((res) => {
          if (res.ok) {
            message.loading({
              content: "Actualizando Hilo...",
              key: "updatable",
            });
            setTimeout(() => {
              message.success({
                content: "!Listo!",
                key: "updatable",
                duration: 2,
              });
              setReloadNotices(true);
              setIsVisibleModal(false);
            }, 1000);
          } else {
            message.error(res.msg);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      addThreadApi(accessToken, thread)
        .then((res) => {
          if (res.ok) {
            message.loading({ content: "Creando Hilo...", key: "updatable" });
            setTimeout(() => {
              message.success({
                content: "!Listo!",
                key: "updatable",
                duration: 2,
              });
              window.location.href = "/admin/forum-threads";
            }, 1000);
          } else {
            message.error(res.message);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  if (!user) {
    return <Redirect to="/login" />;
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

            {threadData ? (
              <div
                className="col-12 col-xl-8 offset-xl-2"
                style={{ display: "block", marginTop: "1rem" }}
              >
                Estado del hilo:
                <select
                  className="custom-select-sm ml-2"
                  onChange={(e) =>
                    setThread({ ...thread, status: e.target.value })
                  }
                  value={thread.status}
                >
                  <option value="open">Abierto</option>
                  <option value="closed">Cerrado</option>
                  <option value="locked">Bloqueado</option>
                  <option value="solved">Resuelto</option>
                </select>
              </div>
            ) : null}

            <div className="col-12 col-xl-10 offset-md-1 mt-3">
              <RichTextEditor
                content={content}
                handleContentChange={(e) =>
                  setThread({ ...thread, content: e })
                }
              />
            </div>

            <div className="col-4 offset-4 mt-4 mb-4">
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
