import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import ProfileContext from '../../utilities/context/profile';

const UserFollowing = () => {
  const [userFollow, setUserFollow] = useState(false);
  const { state } = useContext(ProfileContext);
  const username = localStorage.getItem('username');

  useEffect(() => {
    if (state.following && state.following.length > 0) {
      const isFollowing = state.following.find((following) => following.username === username);
      if (isFollowing) {
        setUserFollow(true);
      } else {
        setUserFollow(false);
      }
    }
  }, []);

  return (
    <div className={`flex mx-auto max-w-screen-lg `}>
      <div className="flex flex-wrap justify-between">
        {state.following ? (
          state.following.map((userData, idx) => (
            <div
              key={idx}
              className="card border w-96 hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5"
            >
              <img
                className="max-h-20 w-full opacity-80 absolute top-0 "
                src="https://unsplash.com/photos/h0Vxgz5tyXA/download?force=true&w=640"
                alt=""
              />
              <div className="profile w-full flex m-3 ml-4 text-white">
                <img
                  className="w-28 h-28 p-1 bg-white dark:bg-darkMode-primary rounded-full z-10"
                  src={userData.image}
                  alt=""
                />
              </div>
              <div className="flex flex-row ml-6 mb-2 dark:text-white opacity-80">
                <h1>{userData.fullName}</h1>
              </div>
              <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
                {userFollow ? (
                  <div className=" border rounded-l-2xl rounded-sm border-orange-base p-1 px-4 cursor-pointer hover:bg-orange-base hover:text-white focus:outline-none  focus:ring-2 focus:ring-offset-0 duration-500 focus:ring-orange-base dark:text-white dark:hover:text-darkMode-base opacity-80 dark:hover:bg-darkMode-orange ">
                    Following
                  </div>
                ) : (
                  <div
                    className={`border rounded-l-2xl rounded-sm border-orange-base p-1 px-4 cursor-pointer hover:bg-orange-base hover:text-white focus:outline-none  focus:ring-2 focus:ring-offset-0 duration-500 focus:ring-orange-base dark:text-white dark:hover:text-darkMode-base opacity-80 dark:hover:bg-darkMode-orange 
                      ${username === userData.username ? 'hidden' : 'block'}`}
                  >
                    Follow
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="dark:text-white opacity-80">
            {' '}
            {state.fullName} is not following any one 😑
          </div>
        )}
      </div>
    </div>
  );
};
export default UserFollowing;

UserFollowing.propTypes = {
  state: PropTypes.shape({
    following: PropTypes.array,
    fullName: PropTypes.string
  })
};
