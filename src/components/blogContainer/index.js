/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Headers from '../header';
import ReadBlog from './readblog';
import Appreciate from './appreciate';
import BlogContext from '../../context/blogs';


const Index = () => {

  const location = useLocation();
  console.log('location',location.state)
  console.log('location',location.state.prop)
  const [userData, setUserData] = useState(location.state.userData);
  const [blogData, setBlogData] = useState(location.state.blogData);

  const [content, setContent] = useState(blogData.content);
  const [comments, setComments] = useState(blogData.comments);
  const [likes, setLikes] = useState(blogData.likes);
  const [title, setTitle] = useState(blogData.title)
  const [userId, setUserId] = useState(blogData.userId);
  const [date, setDate] = useState(blogData.updatedAt)

  // useEffect(() => {
    
  //   setUserData(data.propData.userData);
  //   setBlogData(data.propData.blogData);
  //   setContent(data.propData.blogData.content);

  // }, [data.propData])

  return(
    <>
      <Headers />  
      <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
        <BlogContext.Provider value={{userData, userId, date, content, title, comments, setComments, likes, setLikes}} >
          <ReadBlog />
        </BlogContext.Provider>
        <Appreciate />
      </div>

    </>
  );
}
export default Index;
