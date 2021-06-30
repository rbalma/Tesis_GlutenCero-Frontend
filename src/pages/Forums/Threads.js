import React, { useState } from 'react';
import Thread from '../../components/Forum/Thread';
import Post from '../../components/Forum/Post';
import RichTextEditor from '../../components/TextEditor/RichTextEditor.js';

export default function Threads() {

   const [ text, setText ] = useState('');

   const handleText = (e) => {
       setText(e);
   }
    return (
        <div className="container" style={{marginTop: "300px"}}>
        <RichTextEditor
          content={text}
          handleContentChange={handleText}
          placeholder="insert text here..."
        />

        <Post />

        <Thread />


        </div>
    )
}
