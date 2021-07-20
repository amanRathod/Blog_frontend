/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './style.css';
import { convertToHTML } from 'draft-convert';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import WriteBlogContext from '../../context/writeBlog';

const WriteBlog = () => {

  const blog = useContext(WriteBlogContext);

  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const  [convertedContent, setConvertedContent] = useState(null);

  const convertContentToHTML = () => {
    const currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  }
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
    console.log(convertedContent);
    blog.setContent(convertedContent)
    // const cleanHtml = DOMPurify.sanitize(convertedContent);
    // const parseHtml = parse(cleanHtml);
    // blog.setContent(parseHtml);

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
      {/* <div>{(convertedContent)}</div> */}
      
      </div>
    </>
  );
};

export default WriteBlog;
