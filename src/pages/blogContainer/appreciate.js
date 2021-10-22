/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import jwt from 'jwt-decode';
import { ThumbUpIcon, ShareIcon, AnnotationIcon } from '@heroicons/react/solid';
import BlogContext from '../../utilities/context/blogs';
import { toggleLike } from '../../service/blog';
import UserDataContext from '../../utilities/context/userData';

const Appreciate = ({ state, dispatch }) => {
  // const {state, dispatch } = useContext(BlogContext);
  const decode = jwt(localStorage.getItem('token'));
  console.log('ddecode', decode);
  const [toggle, setToggle] = useState(!!state.likes.includes(decode.id));
  const handleLikeClick = async (e) => {
    e.preventDefault();
    try {
      setToggle(() => !toggle);
      const response = await toggleLike(state.blogId, !toggle);
      console.log('responsseee', response);
      dispatch({type: 'likes', fieldName: 'likes', payload: response.data});
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
            ${state.likes.includes(decode.id) && `text-orange-base` } `}
            aria-hidden="true"
            onClick={handleLikeClick}
          />
          <p className="mt-8 text-gray-base">{state.likes && state.likes.length}</p>
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
