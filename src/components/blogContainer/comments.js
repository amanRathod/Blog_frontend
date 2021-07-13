/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
import React, { useCallback, useContext, useState } from 'react';
import BlogContext from '../../context/blogs';
import UserContext from '../../context/user';
import PostsHeader from '../postsHeader';
import { updateComment } from '../../service/backened_call';
import ReplyComments from './replyComments';

const Comments = () => {
  const blog = useContext(BlogContext);
  const { user } = useContext(UserContext);
  const [inputComment, setInputComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateComment(blog.id, inputComment, user.id);
      // setCommentContent( [...commentContent, {comment: inputComment, userId: user.id}] )
      blog.setComments(response.data.posts.comments);
      setInputComment('');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="flex justify-around font-semibold ">
        <h1 className="text-xl">Comments</h1>

        <div>
          <input
            aria-label="Add a Comment"
            autoComplete="off"
            placeholder="Discuss ..."
            type="text"
            name="add-comment"
            className="border"
            value={inputComment}
            onChange={(e) => setInputComment(e.target.value)}
            ref={blog.commentInput}
          />
          <button
            className="text-lg px-4 ml-3 text-white text-md rounded bg-orange-base hover:bg-orange-secondary focus:outline-none"
            type="submit"
            onClick={handleSubmit}
          >
            Comment
          </button>
        </div>
      </div>
      <ReplyComments />
    </>
  );
};

export default Comments;
