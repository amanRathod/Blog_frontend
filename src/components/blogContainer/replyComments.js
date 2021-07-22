/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import { ReplyIcon, ThumbUpIcon } from '@heroicons/react/solid';
import BlogContext from '../../context/blogs';
import PostsHeader from '../postsHeader';
import UserContext from '../../context/user';
import { addLikesIntoComments } from '../../service/post_backenedCalls';

const ReplyComments = () => {
  const blog = useContext(BlogContext);
  const {user} = useContext(UserContext);
  
  const handleLikeClick = async (commentId) => {
    try {
      const response = await addLikesIntoComments(blog.id, user.id, commentId);
      if(response.status === 200){
      blog.setComments(response.data);
      }
      
    } catch (err) {
      console.error(err)
    }
  }

  const handleReplyClick = async (e) => {
    e.preventDefault();
    try {
      console.log('hit reply')
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      {blog.comments ? (
        <div className="bg-gray-background p-10  shadow-md  hover:shadow-sm">
          {blog.comments.map((comments, idx) => (
            <>
              <div
                key={idx}
                className="bg-white border mt-2 p-4 rounded-xl shadow-lg hover:shadow-sm border-gray-primary hover:border-red-secondary"
              >
                <PostsHeader userId={comments.loggedInUserId} boolDate={false} />
                <div className="bg-white w-auto py-4  pt-3 pl-11">{comments.comment}</div>
                <div className="flex justify-start">
                  <div className="flex relative">  
                    <ThumbUpIcon className="absolute h-6 w-6 m-5 hover:text-orange-base focus:text-orange-secondary" 
                      aria-hidden="false"
                      onClick={() => handleLikeClick(comments._id)}
                    />
                    <p className=" text-gray-base pl-12  pt-6">{comments.likes.length}</p>
                  </div>
                  <div className="flex  ml-5">
                    <ReplyIcon className="absolute h-6 w-6 m-5 hover:text-orange-base focus:text-orange-secondary"
                      aria-hidden="true"
                      onClick={handleReplyClick}
                    />
                    <p className=" text-gray-base pl-12  pt-6">Reply</p>
                  </div>
                </div>
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
