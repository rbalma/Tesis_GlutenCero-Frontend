import React, { useState } from "react";
import { Redirect } from "react-router";
import { EditorDraft } from "../../components/TextEditor/EditorDraft";
import {EditorState, convertToRaw} from 'draft-js';
//import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import useAuth from "../../hooks/useAuth";

export default function ThreadAdd({ history }) {
  const { user } = useAuth();
  const [title, setTitle] = useState('');

  
  const [ editor, setEditor ] = useState({
    editorState: EditorState.createEmpty(),
  });



  const onEditorStateChange = editorState => {
    setEditor({
      editorState,
    });
  };


  const handleSubmitForm = (e) => {
    e.preventDefault();
    const { editorState } = editor;
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
      console.log(content);
    //history.push("/foro");
  };

  const { editorState } = editor;



  if (!user) {
    return ( <Redirect to="/login" /> );
  } else {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={handleSubmitForm}>
            <div className="col-12 col-xl-10 offset-xl-2 mt-5">
              <input
                type="text"
                autoComplete="off"
                placeholder="Título del hilo"
                className="form-control"
                value={title}
                onChange={(e) =>
                    setTitle(e.target.value)
                }
              />
            </div>

            <div className="col-12 col-xl-10 offset-xl-2 mt-5">
              <EditorDraft 
              placeholder="Empiece a escribir su nuevo posteo..."
              editorState={editorState}
              onEditorStateChange={onEditorStateChange}
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
