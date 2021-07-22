/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import { EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './style.css';
import { convertFromHTML, convertToHTML } from 'draft-convert';
import {stateFromHTML} from 'draft-js-import-html';
import WriteBlogContext from '../../context/writeBlog';


const WriteBlog = () => {

  const { content, setContent }= useContext(WriteBlogContext);

  // function getText(html){
  //   const divContainer= document.createElement('div');
  //   divContainer.innerHTML = html;
  //   return divContainer.textContent || divContainer.innerText || '';
  // }
  
  console.log('hello', stateFromHTML(content))
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(stateFromHTML(content))
  );
  console.log('editorstatee', editorState);

  const handleEditorChange = (state) => {
    setEditorState(state);
    const currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setContent(currentContentAsHTML);
  }

    // const createMarkup = (html) => ({
    //   __html: DOMPurify.sanitize(html)
    // })

  return (
    <>
      <div className="App">
        <Editor
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />
       {/* <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)} /> */}
      
      </div>
    </>
  );
};

export default WriteBlog;
