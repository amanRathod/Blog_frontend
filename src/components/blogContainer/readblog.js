/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import draftToHtml from 'draftjs-to-html';
import { EditorState, ContentState, convertToRaw, convertFromRaw } from 'draft-js';
import { stateFromHTML } from 'draft-js-import-html';
import { Markup } from 'interweave';
import renderHTML from 'react-render-html';
import BlogContext from '../../context/blogs';
import PostsHeader from '../postsHeader';
import Comments from './comments';

const ReadBlog = () => {
  const { content,comments, title, userId, date, tags } = useContext(BlogContext);
  console.log('tagsss', tags)
  console.log(comments)
  useEffect(() => {
    document.title = 'Blog';
  }, []);
  const tt = draftToHtml((JSON.parse(content)))
  console.log(draftToHtml((JSON.parse(content))))

  return (
    <>
      <div className=" col-span-5">
      <div className="mt-4 font-bold text-6xl">{title}</div>
  
          {tags.map((tag, idx) => (

          <li key={tag.id} className="bg-red-light m-2 ml-3 px-2 rounded-lg  inline-block hover:underline cursor-pointer">{tag.text}</li>

        ))}
        <div className="container bg-gray-background shadow-md p-10">
          <PostsHeader userId={userId} date={date} boolDate />
          <div className="mt-4 text-lg">
            {parse(tt)}
            {/* {renderHTML((tt))} */}
            {/* <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(tt)}} /> */}
          </div>
          {/* <Markup content={tt} /> */}
          {/* {htmlText} */}
          {/* {tt} */}
        </div>
        <div className="bg-white shadow-md mt-4 p-10">
          <Comments />
        </div>
      </div>
    </>
  );
};

export default ReadBlog;
