import React, { useEffect, useState, useRef, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Headers from '../../components/private/header';
import ReadBlog from './readblog';
import BlogContext from '../../utilities/context/blogs';
import ReplyComments from './replyComments';
import Footer from '../../components/public/footer';
import { getAllComments } from '../../service/comment';

const Index = () => {
  const commentInput = useRef(null);
  const location = useLocation();
  const [blogData] = useState(location.state ? location.state.blogData : '');

  const reducer = (state, action) => {
    switch (action.type) {
      case 'likes': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'comments': {
        return { ...state, [action.fieldName]: action.payload };
      }
      default: {
        return state;
      }
    }
  };

  const initialState = {
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
  const fetchComments = async () => {
    const response = await getAllComments(blogData._id);
    dispatch({ type: 'comments', fieldName: 'comments', payload: response.comments });
    dispatch({ type: 'likes', fieldName: 'likes', payload: response.likes });
  };

  useEffect(() => {
    document.title = 'Read Blog';
    fetchComments();

    const interval = setInterval(() => {
      fetchComments();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-gray-background dark:bg-darkMode-base">
        <ToastContainer />
        <Headers />
        <div className="dark:bg-darkMode-base dark:text-white mx-auto max-w-screen-lg h-full">
          <BlogContext.Provider
            value={{
              state,
              dispatch,
              commentInput
            }}
          >
            <ReadBlog />
            <ReplyComments />
          </BlogContext.Provider>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Index;
