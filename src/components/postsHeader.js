import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { getSingleUserByUserId } from '../service/backened_call';

const fecthData = async (userId) => {
  try {
    const response = await getSingleUserByUserId(userId);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const PostsHeader = ({ userId, date, boolDate }) => {
  const [user, setUser] = useState({});
  const [bool, setBool] = useState(boolDate);

  useEffect(() => {
    fecthData(userId).then((randomData) => {
      setUser(randomData);
    });
  }, [userId]);

  return (
    <>
      <div className="flex">
        <Link to={`/profile/${user.username}`}>
          <img
            className="w-10 h-10 object-cover object-center rounded-full"
            src={user.image}
            alt={user.fullName}
          />
        </Link>

        <div className="ml-2 ">
          <p className="text-gray-900 font-semibold">{user.fullName}</p>
          <p className="text-gray-500 font-semibold text-sm">
            {bool && format(new Date(), 'dd/MM/yyy')} {boolDate && '. 0 min read'}
            {!bool && <p className="text-gray-base">{user.bio}</p>}
          </p>
        </div>
      </div>
    </>
  );
};

export default PostsHeader;

PostsHeader.propTypes = {
  userId: PropTypes.string,
  date: PropTypes.shape({
    createdAt: PropTypes.instanceOf(Date)
  }),
  boolDate: PropTypes.bool
};
