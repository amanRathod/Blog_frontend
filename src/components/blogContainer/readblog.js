/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import BlogContext from '../../context/blogs';
import ProfileContext  from '../../context/profile';
import PostsHeader from '../postsHeader';
import Comments from './comments';

const ReadBlog = () => {
  const blog = useContext(BlogContext);
  const [profileData, setProfileData] = useState(blog.userData)

  console.log('use Data--', profileData);
  console.log('blog data')

  useEffect(() => {
    document.title = 'Blog';
  }, []);

  return (
    <>
      <div className=" col-span-2">
        <div className="container bg-white shadow-md p-10">
          <PostsHeader userId={blog.userId} date={blog.date}/>
          <div className="mt-4 font-bold text-center">
            {blog.title}
          </div>
          <div className="mt-4">
            {blog.content}
          </div>
        </div>
        <div className="bg-white shadow-md mt-4 p-10">
          <Comments />
        </div>
      </div>
    </>
  );
};

export default ReadBlog;
