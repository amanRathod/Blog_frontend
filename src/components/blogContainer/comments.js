/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
import React, { useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import BlogContext from '../../context/blogs';
import UserContext from '../../context/user';
import PostsHeader from '../postsHeader';
import { addComment } from '../../service/post_backenedCalls';
import ReplyComments from './replyComments';

const Comments = () => {
  const { commentInput, state, dispatch } = useContext(BlogContext);
  const { user } = useContext(UserContext);
  const [inputComment, setInputComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addComment(state.id, inputComment, user.username);
      // setCommentContent( [...commentContent, {comment: inputComment, userId: user.id}] )
      dispatch({type: 'comments', fieldName: 'comments', payload: response.comments});
      setInputComment('');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className=" grid grid-cols-6 font-semibold ">
        <div className="col-span-6 md:col-span-2">
          <h1 className="text-xl mr-3 ml-10">Comments</h1>
        </div>

        <div className="col-span-6 md:col-span-4 md:ml-32">
          <input
            aria-label="Add a Comment"
            autoComplete="off"
            placeholder="Discuss ..."
            type="text"
            name="add-comment"
            className="border focus:outline-none dark:bg-darkMode-primary "
            value={inputComment}
            onChange={(e) => setInputComment(e.target.value)}
            ref={commentInput}
          />
          <button
            className="text-lg px-3 ml-10 mt-2 sm:ml-2 text-white text-md rounded bg-orange-base hover:bg-orange-secondary dark:bg-darkMode-orange dark:text-darkMode-base focus:outline-none"
            type="submit"
            onClick={handleSubmit}
          >
            Comment
          </button>
        </div>
      </div>
      {/* <ReplyComments /> */}
    </>
  );
};

export default Comments;

Comments.prototype = {
  commentInput: PropTypes.string,
  setComments: PropTypes.func
};
