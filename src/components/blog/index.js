/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../header';
import BlogBody from './blog_body';
import WriteBlogContext from '../../context/writeBlog';
import UserContext from '../../context/user';

const Index = () => {
  const { username } = useParams();
  const { user } = useContext(UserContext);
  const userId = user.id;
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');
  const [content, setContent] =  useState('');
  // console.log('content', content);
  // console.log('tags', tags);
  // console.log('status', status);
  // console.log('category', category);
  // console.log('title', title);

  return (
    <>
      <Header />
      <WriteBlogContext.Provider value={{ userId, title, setTitle, tags, setTags, category, setCategory, status, setStatus, content, setContent}}>
        <BlogBody />
      </WriteBlogContext.Provider>
    </>
  );
};

export default Index;
