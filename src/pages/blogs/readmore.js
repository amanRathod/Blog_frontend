import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const ReadMore = ({ blogData }) => {
  const history = useHistory();

  const goToNextPage = () => {
    history.push({
      pathname: `/blog/${blogData.userId.username}/${blogData.title}`,
      state: { blogData }
    });
  };

  return (
    <>
      <button
        type="button"
        className="hover-bg  dark:hover:text-darkMode-base ml-auto flex items-center gap-1 h-15 border border-orange-base px-3  rounded-xl hover:text-white transition-colors focus:bg-orange-secondary focus:outline-none focus-visible:border-orange-secondary"
        onClick={() => goToNextPage()}
      >
        <span>Read more</span>
      </button>
    </>
  );
};

export default ReadMore;

ReadMore.propTypes = {
  blogData: PropTypes.object.isRequired
};
