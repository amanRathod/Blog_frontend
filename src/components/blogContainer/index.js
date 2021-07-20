/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Headers from '../header';
import ReadBlog from './readblog';
import Appreciate from './appreciate';
import BlogContext from '../../context/blogs';
import Comments from './comments';
import { getPostByPostId } from '../../service/backened_call';


const Index = () => {
  const commentInput = useRef(null);
  const location = useLocation();
  const [userData, setUserData] = useState(location.state.userData);
  const [blogData, setBlogData] = useState(location.state.blogData);


  const [content, setContent] = useState(blogData.content);
  const [comments, setComments] = useState(blogData.comments);
  const [likes, setLikes] = useState(blogData.likes);
  const [title, setTitle] = useState(blogData.title)
  console.log('titleeee', title);
  console.log('datasss', blogData);
  const [userId, setUserId] = useState(blogData.userId);
  const [date, setDate] = useState(blogData.updatedAt)
  const [id, setId] = useState(blogData._id);
  
  useEffect(() => {
    
    const getPosts = async (Id) => {
      const response = await getPostByPostId(Id);
      setComments(response.comments);
      setLikes(response.likes)
    }
    getPosts(blogData._id);

    return () => {getPosts()};

  }, [blogData._id, id])

  return(
    <>
      <Headers />  
      <div className="grid grid-cols-6 gap-4 justify-between mx-auto max-w-screen-lg">
        <BlogContext.Provider value={{ commentInput, userData, id, userId, date, content, title, comments, setComments, likes, setLikes}} >
          <ReadBlog />
          <Appreciate />
        </BlogContext.Provider>
      </div>

    </>
  );
}
export default Index;
