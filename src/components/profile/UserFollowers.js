/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable import/named */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Skelton from 'react-loading-skeleton';
import ProfileContext from '../../context/profile';
import UserContext from '../../context/user';
import { getUserByUserId } from '../../service/backened_call';

const fetchData = async (followers) => {
  try {
    const response = await getUserByUserId(followers);
    return response;
  } catch (err) {
    console.error(err);
  }
};

const UserFollowers = () => {
  const { fullName, followers } = useContext(ProfileContext);
  const [profileFollower, setProfileFollower] = useState([]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    fetchData(followers).then((userData) => {
      setProfileFollower(userData);
    });
  }, [followers]);

  return (
    <div className={`flex mx-auto max-w-screen-lg `}>
      <div className="flex flex-wrap justify-between">
        {profileFollower
          ? profileFollower.map((UserKey, idx) => (
              <div className="card border dark:border-darkMode-primary  w-96 hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
                <img
                  className="max-h-20 w-full opacity-80 absolute top-0 "
                  src="https://unsplash.com/photos/h0Vxgz5tyXA/download?force=true&w=640"
                  alt=""
                />
                <div className=" profile w-full flex m-3 ml-4 text-white">
                  {UserKey.image ? (
                    <img
                      className="w-28 h-28 p-1 bg-white dark:bg-darkMode-primary rounded-full z-10"
                      src={UserKey.image}
                      alt=""
                    />
                  ) : (
                    <Skelton
                      className="w-28 h-28 p-1 bg-white rounded-full z-10"
                      circle
                      height={100}
                      width={100}
                    />
                  )}
                </div>
                <div className=" flex flex-row ml-6 mb-2 dark:text-white opacity-80">
                  {UserKey.fullName ? (
                    <h1>{UserKey.fullName}</h1>
                  ) : (
                    <Skelton text height={20} width={100} />
                  )}
                </div>
                <div className=" buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
                  {user.followers.includes(UserKey._id) ? (
                    <div className=" border rounded-l-2xl rounded-sm border-orange-base p-1 px-4 cursor-pointer hover:bg-orange-base hover:text-white focus:outline-none  focus:ring-2 focus:ring-offset-0 duration-500 focus:ring-orange-base dark:text-white dark:hover:text-darkMode-base opacity-80 dark:hover:bg-darkMode-orange ">
                      Following
                    </div>
                  ) : (
                    <div
                      className={`border rounded-l-2xl rounded-sm border-orange-base p-1 px-4 cursor-pointer hover:bg-orange-base hover:text-white focus:outline-none  focus:ring-2 focus:ring-offset-0 duration-500 focus:ring-orange-base dark:text-white dark:hover:text-darkMode-base opacity-80 dark:hover:bg-darkMode-orange 
                      ${user.id === UserKey._id ? 'hidden' : 'block'}`}
                    >
                      Follow
                    </div>
                  )}
                </div>
              </div>
            ))
          : <div className="dark:text-white opacity-80"> {fullName} doesn't have follower 🙄</div>}
      </div>
    </div>
  );
};
export default UserFollowers;

UserFollowers.propTypes = {
  followers: PropTypes.array,
  fullName: PropTypes.string
};
