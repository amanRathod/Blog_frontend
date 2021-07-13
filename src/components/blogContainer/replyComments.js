/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import BlogContext from '../../context/blogs';
import PostsHeader from '../postsHeader';

const ReplyComments = () => {
  const blog = useContext(BlogContext);
  return (
    <>
      {blog.comments ? (
        <div className="bg-gray-background p-10  shadow-md hover:shadow-sm ">
          {blog.comments.map((comments, idx) => (
            <>
              <div
                key={idx}
                className="bg-white border mt-2 p-4 border-gray-primary shadow-lg hover:shadow-sm hover:border-red-secondary"
              >
                <PostsHeader userId={comments.loggedInUserId} boolDate={false} />
                <div className="bg-white w-auto py-4  mt-4 pl-10">{comments.comment}</div>
              </div>
            </>
          ))}
        </div>
      ) : (
        'No Comments Yet'
      )}
    </>
  );
};

export default ReplyComments;
