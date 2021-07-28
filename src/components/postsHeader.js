/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Skelton from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { getSingleUser } from '../service/backened_call';

const PostsHeader = ({ username, date, boolDate }) => {
  const [user, setUser] = useState();
  const [bool, setBool] = useState(boolDate);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getSingleUser(username);
      setUser(response);
    };
    if (username) {
      fetchData();
    }
    return () => {
      fetchData();
    };
  }, [username]);

  return (
    <>
      {user ? (
        <div className="flex">
          <Link to={`/profile/${username}`}>
            <img
              className="w-10 h-10 object-cover object-center rounded-full"
              src={user.image}
              alt={user.fullName}
            />
          </Link>

          <div className="ml-2 ">
            <p className="text-gray-900 font-semibold">{user.fullName}</p>
            <div className="text-gray-500 font-semibold text-sm">
              {bool && format(new Date(), 'dd/MM/yyy')} {boolDate && '. 0 min read'}
              {!bool && <p className="text-gray-base">{user.bio}</p>}
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
};

export default PostsHeader;

PostsHeader.propTypes = {
  username: PropTypes.string,
  date: PropTypes.string,
  boolDate: PropTypes.bool
};
