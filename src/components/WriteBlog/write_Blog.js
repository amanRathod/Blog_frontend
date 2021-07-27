/* eslint-disable react/no-unused-prop-types */
/* eslint-disable prettier/prettier */
import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../styles/global.css';
import WriteBlogContext from '../../context/writeBlog';

const WriteBlog = () => {
  const { content, setContent } = useContext(WriteBlogContext);

  const [editorState, setEditorState] = useState();
  useEffect(() => {
    if (content) {
      setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(content))));
    } else {
      setEditorState(EditorState.createEmpty());
    }
  }, []);

  const handleEditorChange = (state) => {
    setEditorState(state);
    const contentState = editorState.getCurrentContent();
    setContent(JSON.stringify(convertToRaw(contentState)));
  };

  return (
    <>
      <div className="App">
        <Editor
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          mention={{
            separator: ' ',
            trigger: '#',
            suggestions: [
              { text: 'react', value: 'react', url: 'react' },
              { text: 'react-hooks', value: 'react-hooks', url: 'react-hooks' },
              { text: 'javascript', value: 'javascript', url: 'javascript' },
              { text: 'aws', value: 'aws', url: 'aws' },
              { text: 'draftjs', value: 'draftjs', url: 'draftjs' },
              { text: 'python', value: 'python', url: 'python' },
              { text: 'c++', value: 'c++', url: 'c++' },
              { text: 'data-structure', value: 'data-structure', url: 'data-structure' }
            ]
          }}
          hashtag={{}}
        />
      </div>
    </>
  );
};

export default WriteBlog;

WriteBlog.propTypes = {
  content: PropTypes.string,
  setContent: PropTypes.func
};
