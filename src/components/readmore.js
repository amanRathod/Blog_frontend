/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getSingleUserByUserId } from '../service/backened_call';
import BlogContext from '../context/blogs';

const ReadMore = ({ postsData }) => {
  const [user, setUser] = useState({});
  const history = useHistory();
  useEffect(() => {
    const getUsername = async (userId) => {
      const response = await getSingleUserByUserId(userId);
      setUser(response.data);
    };
    getUsername(postsData.userId);
  }, [postsData]);

  const goToNextPage = () => {
    history.push({
      pathname: `/blog/${user.username}/${postsData.title}`,
      state: {blogData: postsData, userData: user}
    });
  }

  return (
    <>
    
      {/* <Link  key={Math.random()} to={{pathname: `/blog/${user.username}/${postsData.title}`, state: {blogData: postsData, userData: user} }}> */}
        <button className="ml-auto flex items-center gap-1 h-15 border border-orange-base px-3  rounded-xl hover:bg-orange-base hover:text-white transition-colors focus:bg-orange-secondary focus:outline-none focus-visible:border-orange-secondary"
          onClick={() => goToNextPage()}
        >
          <span>Read more</span>
        </button>
      {/* </Link> */}
     
    </>
  );
};

export default ReadMore;
