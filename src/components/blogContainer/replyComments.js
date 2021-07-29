/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ReplyIcon, ThumbUpIcon } from '@heroicons/react/solid';
import BlogContext from '../../context/blogs';
import PostsHeader from '../postsHeader';
import UserContext from '../../context/user';
import { addLikesIntoComments } from '../../service/post_backenedCalls';

const ReplyComments = () => {
  const { id, comments, setComments} = useContext(BlogContext);
  const { user } = useContext(UserContext);
  
  const handleLikeClick = async (commentId) => {
    try {
      const response = await addLikesIntoComments(id, user.username, commentId);
      if(response.status === 200){
        setComments(response.data); 
        console.log(typeof comments);
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
      {comments ? (
        <div className="bg-gray-background dark:bg-darkMode-base p-10 container grid grid-cols-6 ">
          {comments.map((comments, idx) => (
            
              <div
                key={idx}
                className="col-span-6 lg:col-span-5 bg-white dark:bg-darkMode-primary w-full border mt-2 p-2 sm:p-4 rounded-xl shadow-sm  border-gray-primary hover:border-red-secondary dark:hover:border-darkMode-orange"
              >
                <PostsHeader username={comments.username} boolDate={false} />
                <div className=" w-auto py-4  pt-3 pl-11">{comments.comment}</div>
                <div className="container flex">
                  <div className="flex ">  
                    <ThumbUpIcon className=" h-6 w-6 m-5 hover:text-orange-base focus:text-orange-secondary" 
                      aria-hidden="true"
                      onClick={() => handleLikeClick(comments._id)}
                    />
                    <p className=" text-gray-base pt-6">{comments.likes.length}</p>
                  </div>
                  <div className="">
                    <ReplyIcon className=" h-6 w-6 m-5 hover:text-orange-base focus:text-orange-secondary"
                      aria-hidden="true"
                      onClick={handleReplyClick}
                    />
                    {/* <p className=" text-gray-base pl-12  pt-6">Reply</p> */}
                  </div>
                </div>
              </div>
            
          ))}
        </div>
      ) : (
        'No Comments Yet'
      )}
    </>
  );
};

export default ReplyComments;

ReplyComments.prototype = {
  comments: PropTypes.array,
  setComments: PropTypes.func,
  id: PropTypes.string,
}