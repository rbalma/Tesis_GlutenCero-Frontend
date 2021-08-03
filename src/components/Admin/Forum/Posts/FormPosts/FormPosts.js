import React, { useState, useEffect } from "react";
import { PageHeader, notification } from "antd";
import RichTextEditor from "../../../../../components/TextEditor/RichTextEditor.js";
import { addPostApi, updatePostApi, getPostByIdApi } from "../../../../../api/forum.js";
import { getAccessTokenApi } from "../../../../../api/auth.js";

export default function FormPosts(props) {
  const { id, idPost } = props.match.params;
  const { history } = props;

  const [content, setContent] = useState("");

  useEffect(() => {
    if (idPost) {
      getPostByIdApi(idPost)
        .then((res) => {
          if (res.ok) {
            setContent(res.post.content);
          } else {
            notification["error"]({
              message: "Post no encontrado",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [idPost]);

  const handleText = (e) => {
    setContent(e);
  };

  const savePost = () => {
    if (!content) {
      notification["error"]({
        message: "El Post no puede estar vacio",
      });
      return;
    }

    const accessToken = getAccessTokenApi();

    const data = {
        content
      }

    if (idPost) {
      updatePostApi(accessToken, id, idPost, data)
        .then((res) => {
          if (res.ok) {
            notification["success"]({
              message: "Post actualizado",
            });
            history.push(`/admin/forum-post/${id}`);
          } else {
            notification["error"]({
              message: "No se pudo actualizar",
            });
            history.push(`/admin/forum-post/${id}`);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      addPostApi(accessToken, id, data)
        .then((res) => {
          if (res.ok) {
            notification["success"]({
              message: "Post creado",
            });
            history.push(`/admin/forum-post/${id}`);
          } else {
            notification["error"]({
              message: "No se pudo crear el post",
            });
            history.push(`/admin/forum-post/${id}`);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => history.push(`/admin/forum-post/${id}`)}
        title="Listado de Posts"
      />

      <RichTextEditor content={content} handleContentChange={handleText} />

      <button
        className="btn btn-shadow btn-wide btn-primary mt-3"
        onClick={savePost}
      >
        Publicar Posteo
      </button>
    </>
  );
}
