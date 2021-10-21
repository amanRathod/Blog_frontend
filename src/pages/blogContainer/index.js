/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState, useRef, useContext, useReducer } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Headers from '../../components/private/header';
import ReadBlog from './readblog';
import Appreciate from './appreciate';
import BlogContext from '../../utilities/context/blogs';
import Comments from './comments';
import ReplyComments from './replyComments';
import Footer from '../../components/public/footer';
import { getAllComments } from '../../service/blog';

const Index = () => {
  const commentInput = useRef(null);
  const location = useLocation();
  const [blogData, setBlogData] = useState(location.state? location.state.blogData: '');
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'likes': {
        return {...state, [action.fieldName]: action.payload,};
      }
      case 'comments': {
        return {...state,  [action.fieldName]: action.payload,};
      }
      default: {
        return state;
      }
    }
  }
 
  const initialState =  {
    blogId: blogData._id,
    content: blogData.content,
    comments: blogData.comments,
    likes: blogData.likes,
    title: blogData.title,
    date: blogData.date,
    tags: blogData.tags,
    photo: blogData.photo,
    userData: blogData.userId
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('statee', state);
  useEffect(() => {
    document.title = 'Read Blog'
    const getPosts = async () => {
      const response = await getAllComments(blogData._id);
      dispatch({type: 'comments', fieldName: 'comments', payload: response.comments});
      dispatch({type: 'likes', fieldName: 'likes', payload: response.likes});
    };
    getPosts();

    return () => {
      getPosts();
    };
    // window.history.replaceState({}, document.title)
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-darkMode-base">
      <ToastContainer />
      <Headers userData={blogData.userId}/>
      <div className="dark:bg-darkMode-base dark:text-white mx-auto max-w-screen-lg">
        <BlogContext.Provider
          value={{
            state,
            dispatch,
            commentInput
          }}
        >
          <ReadBlog/>
          <ReplyComments />
          <Footer  />
        </BlogContext.Provider>
      </div>
      </div>
    </>
  );
};
export default Index;
