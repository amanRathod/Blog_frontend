/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { ThumbUpIcon, ShareIcon, AnnotationIcon } from '@heroicons/react/solid';
import BlogContext from '../../context/blogs';
import UserContext from '../../context/user';
import { addLikesId } from '../../service/backened_call';

const Appreciate = () => {
  const blog = useContext(BlogContext);
  const {user} = useContext(UserContext);

  const handleLikeClick = async (e) => {
    e.preventDefault();
    try {
      const response = await addLikesId(user.id, blog.id);
      console.log(response);
      blog.setLikes(response)
    } catch (err) {
      console.error(err)
    }

  }

  return (
    <div className=" container col-span-1">
      
      <div className="ml-6 mt-10">
        <div className="flex ">
          <ThumbUpIcon
            className="h-10 w-10 m-5 hover:text-orange-base focus:text-orange-secondary"
            aria-hidden="true"
            onClick={handleLikeClick}
          />
          <p className="mt-8 text-gray-base"
          >{blog.likes.length}</p>
        </div>
        <div className="flex ">
          <AnnotationIcon
            className="h-10 w-10 m-5 hover:text-orange-base focus:text-orange-secondary"
            aria-hidden="true"
          />
          <p className="mt-8 text-gray-base">{blog.comments.length}</p>
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
