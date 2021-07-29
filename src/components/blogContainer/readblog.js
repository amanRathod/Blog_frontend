/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import draftToHtml from 'draftjs-to-html';
import { EditorState, ContentState, convertToRaw, convertFromRaw } from 'draft-js';
import { stateFromHTML } from 'draft-js-import-html';
import { Markup } from 'interweave';
import renderHTML from 'react-render-html';
import Appreciate from './appreciate';
import BlogContext from '../../context/blogs';
import PostsHeader from '../postsHeader';
import Comments from './comments';

const ReadBlog = () => {
  const { content, title, date, tags, photo, username } = useContext(BlogContext);
  useEffect(() => {
    document.title = 'Blog';
  }, []);
  console.log('innser content', content);

  // const htmlText = content;

  const htmlText = draftToHtml(JSON.parse(content));
  return (
    <>
      <div className=" ">
        {photo && <img src={`${photo}`} alt="Cover Photo" />}
        <div className="mt-4 font-bold text-6xl">{title}</div>

        {tags.map((tag, idx) => (
          <li
            key={tag.id}
            className="bg-red-light dark:text-darkMode-base m-2 ml-3 px-2 rounded-lg  inline-block hover:underline cursor-pointer"
          >
            {tag.text}
          </li>
        ))}
        <div className=" grid grid-cols-6">
          <div className="container col-span-6 md:col-span-5 bg-gray-background dark:bg-darkMode-primary dark:text-white shadow-sm p-10">
            <PostsHeader username={username} date={date} boolDate />
            <div className="mt-4 text-lg">
              {parse(htmlText)}
              {/* {renderHTML((htmlText))} */}
              {/* <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(htmlText)}} /> */}
            </div>

            {/*  <Markup content={htmlText} /> */}

            {/* {htmlText} */}
            {/* {tt} */}
          </div>
          <div className=" md:col-span-1">
            <Appreciate />
          </div>
        </div>
        <div className="bg-gray-background dark:bg-darkMode-base mt-4 p-10">
          <Comments />
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
