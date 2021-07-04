/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const UserHeader = ({ 
  profile: {
    fullName,
    followers,
    following,
    username,
    image,
    id,
  }
}) => {

  useEffect(() => {
    document.title = 'Profile-Blog';
  }, [])
  
  return (
  <div classNameName="h-screen w-full py-20 px-3">
    <div className="max-w-md mx-auto md:max-w-lg ">
      <div className="w-full">
        <div className="bg-white p-3 rounded shadow-xl hover:shadow-sm text-center py-5">
          <div className="flex justify-center">
            <img
              className="rounded-full"
              src={`${image}`}
              width="100"
              alt={`${fullName} Profile`}
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl mt-2">{fullName}</h1>
            <div className="px-5 text-sm">
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex justify-between mt-3 px-4">
              <div className="flex flex-col">
                {' '}
                <span className="font-bold text-2xl">{followers.length}</span>{' '}
                <span className="text-sm  text-gray-base">{followers.length === 1? `Follower`: `Followers`}</span>{' '}
              </div>
              <div className="flex flex-col">
                {' '}
                <span className="font-bold text-2xl">0</span>{' '}
                <span className="text-sm text-gray-base">Blog</span>{' '}
              </div>
              <div className="flex flex-col">
                {' '}
                <span className="font-bold text-2xl">{following.length}</span>{' '}
                <span className="text-sm text-gray-base">Following</span>{' '}
              </div>
            </div>
            <div className="flex flex-row justify-center px-4 mt-4">
              <button className="text-lg h-10 w-2/6  text-white text-md rounded bg-orange-base hover:bg-orange-secondary">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default UserHeader;

UserHeader.propTypes = {
  profile: PropTypes.shape({
    id: PropTypes.number,
    fullName: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    following: PropTypes.array,
    followers: PropTypes.array,
    image: PropTypes.string
  }).isRequired
};
