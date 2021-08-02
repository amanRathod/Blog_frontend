/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState, useRef, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Headers from '../header';
import ReadBlog from './readblog';
import Appreciate from './appreciate';
import BlogContext from '../../context/blogs';
import Comments from './comments';
import ReplyComments from './replyComments';
import { getPostByPostId } from '../../service/backened_call';

const Index = () => {
  const commentInput = useRef(null);
  console.log('commeref', commentInput);
  const location = useLocation();
  const [userData, setUserData] = useState(location.state? location.state.userData: '');
  const [blogData, setBlogData] = useState(location.state? location.state.blogData: '');
  
  const [content, setContent] = useState(blogData.content);
  const [comments, setComments] = useState(blogData.comments);
  
  const [likes, setLikes] = useState(blogData.likes);
  const [title, setTitle] = useState(blogData.title);
  const [date, setDate] = useState(blogData.updatedAt);
  const [id, setId] = useState(blogData._id);
  const [tags, setTags] = useState(blogData.tags);
  const [photo, setPhoto] = useState(blogData.photo);
  const [username, setUsername] = useState(blogData.username);

  useEffect(() => {
    document.title = 'Read Blog'
    console.log('useEffect called')
    const getPosts = async () => {
      const response = await getPostByPostId(id);
      setComments(response.comments);
      setLikes(response.likes);
    };
    getPosts();

    return () => {
      getPosts();
    };
    // window.history.replaceState({}, document.title)
  }, [blogData, id]);

  return (
    <>
      <div className="bg-white dark:bg-darkMode-base">

      <Headers />
      <div className="dark:bg-darkMode-base dark:text-white mx-auto max-w-screen-lg">
        <BlogContext.Provider
          value={{
            photo,
            tags,
            commentInput,
            userData,
            id,
            username,
            date,
            content,
            title,
            comments,
            setComments,
            likes,
            setLikes
          }}
        >
          <ReadBlog/>
          <ReplyComments />
        </BlogContext.Provider>
      </div>
      </div>
    </>
  );
};
export default Index;
