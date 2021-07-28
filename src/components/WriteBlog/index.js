/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Header from '../header';
import BlogBody from './blog_body';
import WriteBlogContext from '../../context/writeBlog';
import UserContext from '../../context/user';

const Index = () => {
  const data = useLocation();
  const [blogData, setBlogData] = useState(data.state ? data.state.blogData : '');

  const { username } = useParams();
  const { user } = useContext(UserContext);
  const userId = user.id;
  const [imageSrc, setImageSrc] = useState('');
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
      <Header />
      <WriteBlogContext.Provider
        value={{
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
        <BlogBody />
      </WriteBlogContext.Provider>
    </>
  );
};

export default Index;
