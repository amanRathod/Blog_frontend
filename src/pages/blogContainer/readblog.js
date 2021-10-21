/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
// import DOMPurify from 'dompurify';
import draftToHtml from 'draftjs-to-html';
// import { EditorState, ContentState, convertToRaw, convertFromRaw } from 'draft-js';
// import { stateFromHTML } from 'draft-js-import-html';
// import { Markup } from 'interweave';
// import renderHTML from 'react-render-html';
import Appreciate from './appreciate';
import BlogContext from '../../utilities/context/blogs';
import PostsHeader from '../blogs/postsHeader';
import Comments from './comments';

const ReadBlog = () => {
  const {  state, dispatch } = useContext(BlogContext);
  console.log('bloggg', state);
  useEffect(() => {
    document.title = 'Blog';
  }, []);

  // const htmlText = content;

  const htmlText = draftToHtml((state.content));
  return (
    <>
      <div className=" ">
        {state.photo && <img src={`${state.photo}`} alt="Cover Photo" />}
        <div className="mt-4 font-bold text-6xl">{state.title}</div>

        {state.tags.map((tag, idx) => (
          <li
            key={tag.id}
            className="bg-red-light dark:text-darkMode-base m-2 ml-3 px-2 rounded-lg  inline-block hover:underline cursor-pointer"
          >
            {tag}
          </li>
        ))}
        <div className=" grid grid-cols-6">
          <div className="container col-span-6 md:col-span-5 bg-gray-background dark:bg-darkMode-primary dark:text-white shadow-sm p-10">
            <PostsHeader userData={state.userData} date={state.updatedAt}/>
            <div className="mt-4 text-lg">
              {/* {parse(draftToHtml((state.content)))} */}
              {state.content}
              {/* {renderHTML((htmlText))} */}
              {/* <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(htmlText)}} /> */}
            </div>

            {/*  <Markup content={htmlText} /> */}

            {/* {htmlText} */}
            {/* {tt} */}
          </div>
          <div className=" md:col-span-1">
            <Appreciate state={state} dispatch={dispatch}/>
          </div>
        </div>
        <div className="bg-gray-background dark:bg-darkMode-base mt-4 p-10">
          <Comments state={state} dispatch={dispatch}/>
        </div>
      </div>
    </>
  );
};

export default ReadBlog;

ReadBlog.propTypes = {
  content: PropTypes.string,
  comments: PropTypes.array,
  title: PropTypes.string,
  userId: PropTypes.string,
  date: PropTypes.string,
  tags: PropTypes.array,
  photo: PropTypes.string
};
