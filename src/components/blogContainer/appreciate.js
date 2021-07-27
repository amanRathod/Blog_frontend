/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThumbUpIcon, ShareIcon, AnnotationIcon } from '@heroicons/react/solid';
import BlogContext from '../../context/blogs';
import UserContext from '../../context/user';
import { addLikesId } from '../../service/post_backenedCalls';

const Appreciate = () => {
  const {id, likes, comments, setLikes} = useContext(BlogContext);
  const { user } = useContext(UserContext);

  const handleLikeClick = async (e) => {
    e.preventDefault();
    try {
      const response = await addLikesId(user.id, id);
      setLikes(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className=" container col-span-1">
      <div className="ml-6 mt-10">
        <div className="flex ">
          <ThumbUpIcon
            className="h-10 w-10 m-5 hover:text-orange-base focus:text-orange-secondary"
            aria-hidden="true"
            onClick={handleLikeClick}
          />
          <p className="mt-8 text-gray-base">{likes.length}</p>
        </div>
        <div className="flex ">
          <AnnotationIcon
            className="h-10 w-10 m-5 hover:text-orange-base focus:text-orange-secondary"
            aria-hidden="true"
          />
          <p className="mt-8 text-gray-base">{comments.length}</p>
        </div>
        <ShareIcon
          className="h-10 w-10 m-5 hover:text-orange-base focus:text-orange-secondary"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default Appreciate;

Appreciate.prototype = {
  likes: PropTypes.number,
  setLikes: PropTypes.func,
  comments: PropTypes.number,
  id: PropTypes.number,
}