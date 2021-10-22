/* eslint-disable prettier/prettier */
import React, { useContext,  useState } from 'react';
import jwt from 'jwt-decode';
import { ReplyIcon, ThumbUpIcon } from '@heroicons/react/solid';
import BlogContext from '../../utilities/context/blogs';
import PostsHeader from '../blogs/postsHeader';
import DropDown from './dropDown';
import { toggleLikesIntoComments } from '../../service/comment';

const ReplyComments = () => {
  const { state, dispatch } = useContext(BlogContext);
  // const { user } = useContext(UserContext);
  const [toggle, setToggle] = useState(false);
  const decode = jwt(localStorage.getItem('token'));
  const handleLikeClick = async (commentId) => {
    try {
      setToggle(() => !toggle);
      const response = await toggleLikesIntoComments(commentId, !toggle, state.blogId);
      console.log('response response', response);
      if (response.status === 200) {
        dispatch({ type: 'comments', fieldName: 'comments', payload: response.data });
      }
      console.log(state.comments);
    } catch (err) {
      console.error(err);
    }
  };

  const handleReplyClick = async (e) => {
    e.preventDefault();
    try {
      console.log('hit reply');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {state.comments ? (
          state.comments.map((item, idx) => (
        <div className="bg-gray-background dark:bg-darkMode-base p-10 container grid grid-cols-6 ">
            <div
              key={idx}
              className="col-span-6 lg:col-span-5 bg-white dark:bg-darkMode-primary w-full border mt-2 p-2 sm:p-4 rounded-xl shadow-sm  border-gray-primary hover:border-red-secondary dark:hover:border-darkMode-orange"
            >
              <div className="flex justify-between">
                <PostsHeader userData={item.userId} date={item.date} />
                <DropDown commentId={item._id} />
              </div>
              <div className=" w-auto py-4  pt-3 pl-11">{item.content}</div>
              <div className="container flex">
                <div className="flex ">
                  <ThumbUpIcon
                    className={ `h-6 w-6 m-5 hover:text-orange-base focus:text-orange-secondary
                    ${item.likes.includes(decode.id) && `text-orange-base`}`}
                    aria-hidden="true"
                    onClick={() => handleLikeClick(item._id)}
                  />
                  <p className=" text-gray-base pt-6">{item.likes.length}</p>
                </div>
                <div className="">
                  <ReplyIcon
                    className=" h-6 w-6 m-5 hover:text-orange-base focus:text-orange-secondary"
                    aria-hidden="true"
                    onClick={handleReplyClick}
                  />
                  {/* <p className=" text-gray-base pl-12  pt-6">Reply</p> */}
                </div>
              </div>
            </div>
        </div>
          ))
      ) : (
        'No Comments Yet'
      )}
    </>
  );
};

export default ReplyComments;

ReplyComments.prototype = {};
