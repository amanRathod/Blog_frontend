import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
// import { getSingleUser } from '../service/backened_call';

const ReadMore = ({ blogData }) => {
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    const getUsername = async (username) => {
      // const response = await getSingleUser(username);
      // setUser(response);
    };
    if (blogData) {
      getUsername(blogData.userId.username);
    }
  }, []);

  const goToNextPage = () => {
    history.push({
      pathname: `/blog/${blogData.userId.username}/${blogData.title}`,
      state: { blogData }
    });
  };

  return (
    <>
      {/* <Link  key={Math.random()} to={{pathname: `/blog/${user.username}/${blogData.title}`, state: {blogData: blogData, userData: user} }}> */}
      <button
        type="button"
        className="hover-bg  dark:hover:text-darkMode-base ml-auto flex items-center gap-1 h-15 border border-orange-base px-3  rounded-xl hover:text-white transition-colors focus:bg-orange-secondary focus:outline-none focus-visible:border-orange-secondary"
        onClick={() => goToNextPage()}
      >
        <span>Read more</span>
      </button>
      {/* </Link> */}
    </>
  );
};

export default ReadMore;

ReadMore.propTypes = {
  blogData: PropTypes.object.isRequired
};
