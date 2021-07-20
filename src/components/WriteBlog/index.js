/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Header from '../header';
import BlogBody from './blog_body';
import WriteBlogContext from '../../context/writeBlog';
import UserContext from '../../context/user';

const Index = () => {
  const data = useLocation();
  const [blogData, setBlogData] = useState(data.state? data.state.blogData: '');
  
  const { username } = useParams();
  const { user } = useContext(UserContext);
  const userId = user.id;
  const [title, setTitle] = useState(blogData? blogData.title: '');
  const [tags, setTags] = useState(blogData? blogData.tags: '');
  const [category, setCategory] = useState(blogData? blogData.category: 'Web Developmen');
  const [status, setStatus] = useState(blogData? blogData.status: 'Public');
  const [content, setContent] =  useState(blogData? blogData.content: '');
 
  return (
    <>
      <Header />
      <WriteBlogContext.Provider value={{blogData, userId, title, setTitle, tags, setTags, category, setCategory, status, setStatus, content, setContent}}>
        <BlogBody />
      </WriteBlogContext.Provider>
    </>
  );
};

export default Index;
