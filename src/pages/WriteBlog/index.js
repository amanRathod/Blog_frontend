import React, { useEffect, useReducer, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/private/header';
import BlogBody from './blog_body';
import WriteBlogContext from '../../utilities/context/writeBlog';
import Footer from '../../components/public/footer';

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
  console.log('writeblog', state);

  useEffect(() => {
    document.title = 'Write Blog';
  }, []);

  return (
    <>
      <div className="bg-gray-background dark:bg-darkMode-base">
        <ToastContainer />
        <Header />
        <div className="dark:bg-darkMode-base dark:text-black-dark mx-auto max-w-screen-lg h-full">
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
        <Footer />
      </div>
    </>
  );
};

export default Index;
