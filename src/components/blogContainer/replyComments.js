/* eslint-disable prettier/prettier */
import React, { useContext,  useState } from 'react';
import PropTypes from 'prop-types';
import { ReplyIcon, ThumbUpIcon } from '@heroicons/react/solid';
import BlogContext from '../../context/blogs';
import PostsHeader from '../postsHeader';
import DropDown from './dropDown';
import UserContext from '../../context/user';
import { addLikesIntoComments } from '../../service/post_backenedCalls';

const ReplyComments = () => {
  const { state, dispatch } = useContext(BlogContext);
  const { user } = useContext(UserContext);
  const [toggle, setToggle] = useState(false);
  console.log('state commentsss', state);
  const handleLikeClick = async (commentId) => {
    try {
      console.log('like');
      setToggle(() => !toggle);
      const response = await addLikesIntoComments(state.id, user.username, commentId, !toggle);
      if (response.status === 200) {
        console.log('likee', response);
        dispatch({ type: 'comments', fieldName: 'comments', payload: response.data });
      }
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
        <div className="bg-gray-background dark:bg-darkMode-base p-10 container grid grid-cols-6 ">
          {Object.keys(state.comments).map((item, idx) => (
            <div
              key={idx}
              className="col-span-6 lg:col-span-5 bg-white dark:bg-darkMode-primary w-full border mt-2 p-2 sm:p-4 rounded-xl shadow-sm  border-gray-primary hover:border-red-secondary dark:hover:border-darkMode-orange"
            >
              <div className="flex justify-between">
                <PostsHeader username={state.comments[item].username} boolDate={false} />
                <DropDown commentId={state.comments[item]._id} blogId={state.id} />
              </div>
              <div className=" w-auto py-4  pt-3 pl-11">{state.comments[item].comment}</div>
              <div className="container flex">
                <div className="flex ">
                  <ThumbUpIcon
                    className={ `h-6 w-6 m-5 hover:text-orange-base focus:text-orange-secondary
                    ${state.comments[item].likes.includes(user.username) && `text-orange-base`}`}
                    aria-hidden="true"
                    onClick={() => handleLikeClick(state.comments[item]._id)}
                  />
                  <p className=" text-gray-base pt-6">{state.comments[item].likes.length}</p>
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
          ))}
        </div>
      ) : (
        'No Comments Yet'
      )}
    </>
  );
};

export default ReplyComments;

ReplyComments.prototype = {};
