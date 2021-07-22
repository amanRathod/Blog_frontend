/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import { EditorState, ContentState } from 'draft-js';
import {stateFromHTML} from 'draft-js-import-html';
import { Markup} from 'interweave';
import BlogContext from '../../context/blogs';
import PostsHeader from '../postsHeader';
import Comments from './comments';

const ReadBlog = () => {
  const blog = useContext(BlogContext);
  const [profileData, setProfileData] = useState(blog.userData)
  const [text, setText] = useState(EditorState.createWithContent(stateFromHTML(blog.content)));
  const article = blog.content;
  console.log('contee', blog.content);
  console.log('arti', article)
  useEffect(() => {
    document.title = 'Blog';
    console.log('pur', parse(DOMPurify.sanitize(blog.content)))
    console.log('pure', EditorState.createWithContent(stateFromHTML(blog.content)))

  }, [blog.content]);

  return (
    <>
      <div className=" col-span-5">
        <div className="container bg-gray-background shadow-md p-10">
          <PostsHeader userId={blog.userId} date={blog.date} boolDate />
          <div className="mt-4 font-bold text-center">
            {blog.title}
          </div>
          <div className="mt-4">
      
            {parse(DOMPurify.sanitize(`<a href="https://www.npmjs.com/package/interweave">hello</a>`))}
            {/* {text} */}
            <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(blog.content)}} />
          </div>
          <Markup content={article}  />
        </div>
        <div className="bg-white shadow-md mt-4 p-10">
          <Comments />
        </div>
      </div>
    </>
  );
};

export default ReadBlog;
