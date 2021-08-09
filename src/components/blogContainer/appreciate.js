/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThumbUpIcon, ShareIcon, AnnotationIcon } from '@heroicons/react/solid';
import BlogContext from '../../context/blogs';
import UserContext from '../../context/user';
import { addLikesId } from '../../service/post_backenedCalls';

const Appreciate = () => {
  const {state, dispatch } = useContext(BlogContext);
  const { user } = useContext(UserContext);
  const [toggle, setToggle] = useState(false);

  const handleLikeClick = async (e) => {
    e.preventDefault();
    try {
      setToggle(() => !toggle);
      const response = await addLikesId(user.username, state.id, !toggle);
      dispatch({type: 'likes', fieldName: 'likes', payload: response});
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className=" container  ">
      <div className="ml-10 sm:ml-56 md:ml-4 md:mt-10 flex md:flex-col">
        <div className="flex">
          <ThumbUpIcon
            className={`h-10 w-10 m-5 hover:text-orange-base focus:text-orange-secondary
            ${state.likes.includes(user.username) && `text-orange-base` } `}
            aria-hidden="true"
            onClick={handleLikeClick}
          />
          <p className="mt-8 text-gray-base">{state.likes.length}</p>
        </div>
        <div className=" flex">
          <AnnotationIcon
            className="h-10 w-10 m-5  hover:text-orange-base focus:text-orange-secondary"
            aria-hidden="true"
          />
          <p className="mt-8 text-gray-base">{state.comments.length}</p>
        </div>
        <div className="flex">
          <ShareIcon
            className="h-10 w-10 m-5 hover:text-orange-base focus:text-orange-secondary"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default Appreciate;

Appreciate.prototype = {
  likes: PropTypes.number,
  setLikes: PropTypes.func,
  comments: PropTypes.number,
  id: PropTypes.number
};
