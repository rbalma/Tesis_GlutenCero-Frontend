import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import {EditorState} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import './EditorDraft.css';


 export const EditorDraft = () => {


    const [ editor, setEditor ] = useState({
        editorState: EditorState.createEmpty(),
      });

    const { editorState } = editor;

      const onEditorStateChange = (editorState) => {
        setEditor({
          editorState,
        });
      };

    function uploadImageCallBack(file) {
        return new Promise(
          (resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://api.imgur.com/3/image');
            const data = new FormData();
            data.append('image', file);
            xhr.send(data);
            xhr.addEventListener('load', () => {
              const response = JSON.parse(xhr.responseText);
              resolve(response);
            });
            xhr.addEventListener('error', () => {
              const error = JSON.parse(xhr.responseText);
              reject(error);
            });
          }
        );
      }

      return (
          <Editor
          
    wrapperClassName="richEditor-wrapper"
    toolbarClassName="richEditor-toolbar"
    editorClassName="richEditor-editor"
    localization={{
      locale: 'es',
    }}
    toolbar={{
        inline: { inDropdown: true },
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: true },
        image: { 
            uploadCallback: uploadImageCallBack, 
            alt: { present: true, mandatory: true }, 
            previewImage: true,
            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
            defaultSize: {
                height: 'auto',
                width: 'auto',
            },
        },
      }}
    editorState={editorState}
    onEditorStateChange={onEditorStateChange}
    />
      )
 };
