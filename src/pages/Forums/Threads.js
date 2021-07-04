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
        <div className="container">
            <Thread />
        <div className="row">
        <div className="col-8 offset-2">
        
        <RichTextEditor
          content={text}
          handleContentChange={handleText}
          placeholder="insert text here..."
        />
        </div>
        </div>

        <Post />

        


        </div>
    )
}
