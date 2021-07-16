/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import viewToPlainText from '@ckeditor/ckeditor5-clipboard/src/utils/viewtoplaintext';
import WriteBlogContext from '../../context/writeBlog';

const WriteBlog = () => {
  const [bool, setBool] = useState(false);
  const blog = useContext(WriteBlogContext);

  return (
    <>
        <div className="App">
        
        <CKEditor
          editor={ClassicEditor}  
          type=""      
          data={blog.content}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            blog.setContent(data)
            
          }}
          onBlur={ editor => {
            console.log( 'Blur.', editor );
          } }
          onFocus={ editor => {
            console.log( 'Focus.', editor );
          } }
        />
       </div>
    </>
  );
};

export default WriteBlog;
