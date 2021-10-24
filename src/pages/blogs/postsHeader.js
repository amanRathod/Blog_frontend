import React from 'react';
import { Link } from 'react-router-dom';
import Skelton from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import moment from 'moment';

const PostsHeader = ({ userData, date }) => (
  <>
    {userData ? (
      <div className="flex">
        <Link to={`/profile/${userData.username}`}>
          <img
            className="w-10 h-10 object-cover object-center rounded-full"
            src={userData.image}
            alt={userData.username}
          />
        </Link>

        <div className="ml-2 ">
          <p className="dark:text-white dark:text-opacity-70 font-semibold">{userData.fullName}</p>
          <div className="dark:text-white dark:text-opacity-50 font-semibold text-sm">
            {moment(date).format('DD-MM-YYYY')}
          </div>
        </div>
      </div>
    ) : (
      <>
        <Skelton circle className="flex" height={50} width={50} />
        <Skelton className="flex" height={10} width={100} />
      </>
    )}
  </>
);

export default PostsHeader;

PostsHeader.propTypes = {
  userData: PropTypes.object,
  date: PropTypes.string
};
