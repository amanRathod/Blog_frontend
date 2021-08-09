import React, { useReducer, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../header';
import BlogBody from './blog_body';
import WriteBlogContext from '../../context/writeBlog';

const Index = () => {
  const data = useLocation();
  const [blogData, setBlogData] = useState(data.state ? data.state.blogData : '');

  const reducer = (state, action) => {
    switch (action.type) {
      case 'imageSrc': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'coverPicture': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'title': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'tags': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'status': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'content': {
        return { ...state, [action.fieldName]: action.payload };
      }
      default: {
        return state;
      }
    }
  };

  const initialState = {
    imageSrc: '',
    coverPicture: blogData ? blogData.photo : '',
    title: blogData ? blogData.title : '',
    tags: blogData ? blogData.tags : [],
    status: blogData ? blogData.status : 'Public',
    content: blogData ? blogData.content : ''
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="bg-white dark:bg-darkMode-base">
        <Header />
        <WriteBlogContext.Provider
          value={{
            state,
            dispatch,
            blogData
          }}
        >
          <BlogBody />
        </WriteBlogContext.Provider>
      </div>
    </>
  );
};

export default Index;
