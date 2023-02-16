import React, { useState, useContext, useEffect } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../styles/global.css';
import WriteBlogContext from '../../utilities/context/writeBlog';

const WriteBlog = () => {
  const { state, dispatch } = useContext(WriteBlogContext);

  const [editorState, setEditorState] = useState();
  useEffect(() => {
    if (state.content) {
      const blocksFromHtml = htmlToDraft(state.content);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
      setEditorState(EditorState.createWithContent(contentState));
    } else {
      setEditorState(EditorState.createEmpty());
    }
  }, []);

  const handleEditorChange = (state) => {
    setEditorState(state);
    const contentState = editorState.getCurrentContent();
    const sanitizeContent = draftToHtml(convertToRaw(contentState));
    dispatch({ type: 'content', fieldName: 'content', payload: sanitizeContent });
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
