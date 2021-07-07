/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {  format, distanceInWordsToNow } from 'date-fns';
import { getSingleUserByUserId } from '../service/backened_call';


const fecthData = async (userId) => {
  try {
    console.log('userrrrr', userId);
    const response = await getSingleUserByUserId(userId);
    console.log('sdfasdf', response.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const PostsHeader = ({ userId, date }) => {
  const [user, setUser] = useState({});
  console.log('userId in postrs heser', date);

  useEffect(() => {
    fecthData(userId).then((randomData) => {
      setUser(randomData);
    });
  }, []);

  console.log('user of post header', user);

  return (
    <>
      <img
        className="w-10 h-10 object-cover object-center rounded-full"
        src={user.image}
        alt={user.fullName}
      />

      <div>
        <p className="text-gray-900 font-semibold">{user.fullName}</p>
        <p className="text-gray-500 font-semibold text-sm">{format(new Date(date.createdAt), 'dd/MM/yyy')} &middot; 0 min read</p>
      </div>
    </>
  );
};

export default PostsHeader;

PostsHeader.propTypes = {
  userId: PropTypes.string,
  date: PropTypes.shape({
    createdAt: PropTypes.instanceOf(Date)
  })
};
