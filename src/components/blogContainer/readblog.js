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
  const { content, title, userId, date } = useContext(BlogContext);
  useEffect(() => {
    document.title = 'Blog';
  }, []);
  const tt = draftToHtml((JSON.parse(content)))
  console.log(draftToHtml((JSON.parse(content))))

  return (
    <>
      <div className=" col-span-5">
        <div className="container bg-gray-background shadow-md p-10">
          <PostsHeader userId={userId} date={date} boolDate />
          <div className="mt-4 font-bold text-center">{title}</div>
          <div className="mt-4">
            {parse((tt))}
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
