/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Header from '../header';
import BlogBody from './blog_body';
import Flash from './flash';
import WriteBlogContext from '../../context/writeBlog';
import UserContext from '../../context/user';

const Index = () => {
  const data = useLocation();
  const [blogData, setBlogData] = useState(data.state ? data.state.blogData : '');

  const { username } = useParams();
  const { user } = useContext(UserContext);
  const userId = user.id;
  const [imageSrc, setImageSrc] = useState('');
  const [flash, setFlash] = useState({});
  console.log(flash);
  const [coverPicture, setCoverPicture] = useState(blogData ? blogData.photo : '');
  const [title, setTitle] = useState(blogData ? blogData.title : '');
  const [tags, setTags] = useState(blogData ? blogData.tags : []);
  const [status, setStatus] = useState(blogData ? blogData.status : 'Public');
  const [content, setContent] = useState(blogData ? blogData.content : '');
  // console.log('contentt', content);
  // console.log('blogDatata', blogData);
  // console.log('data', data);
  // useEffect(() => {
  //   setCoverPicture(blogData.photo);
  //   setTitle(blogData.title);
  //   setTags(blogData.tags);
  //   setContent(blogData.content);
  //   setStatus(blogData.status);
  // }, [blogData] )

  return (
    <>
      <div className="bg-white dark:bg-darkMode-base">

      <Header />
      <WriteBlogContext.Provider
        value={{
          flash,
          setFlash,
          imageSrc,
          setImageSrc,
          coverPicture,
          setCoverPicture,
          blogData,
          userId,
          title,
          setTitle,
          tags,
          setTags,
          status,
          setStatus,
          content,
          setContent
        }}
      >
        <BlogBody/>
        <Flash />
      </WriteBlogContext.Provider>
      </div>
    </>
  );
};

export default Index;
