/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Skelton from 'react-loading-skeleton';
import { isUserFollow } from '../../service/backened_call';
import { togglefollowers } from '../../service/put_backenedCall';
import { ProfileSKeleton } from '../skeleton';
import ProfileContext from '../../context/profile';
import VerticalDot from './verticalDot.js';
import UserContext from '../../context/user';

const UserHeader = () => {
  const {state, dispatch} = useContext(ProfileContext);
  const { user } = useContext(UserContext);
   const [userFollow, setUserFollow] = useState(false);
  const btnFollow = state.username && state.username !== user.username;

  useEffect(() => {
    document.title = 'Profile-Blog';

    const isUserFollowing = async (loggedInusername, profileId) => {
      const data = await isUserFollow(loggedInusername, profileId);
      setUserFollow(data);
    };

    if (state.id) {
      isUserFollowing(user.username, state.id);
    }
  }, [user.username, state.id]);

  const handleFollowClick = async (e) => {
    e.preventDefault();

    setUserFollow((userFollow) => !userFollow);
    const data = await togglefollowers(user.id, state.id, !userFollow);
    dispatch({type: 'followers', fieldName: 'followers', payload: data.profile.followers});
    dispatch({type: 'following', fieldName: 'following', payload: data.profile.following});

    const storeData = {
      id: data.loggedIn._id,
      email: data.loggedIn.email,
      fullName: data.loggedIn.fullName,
      username: data.loggedIn.username,
      image: data.loggedIn.image,
      followers: data.loggedIn.followers,
      following: data.loggedIn.following
    };

    localStorage.setItem('user', JSON.stringify(storeData));
  };
  return (
    <div className="w-full py-20 px-3">
      <div className="max-w-md mx-auto md:max-w-lg ">
        <div className="w-full">
          {state.image ? (
            <div className="container  bg-white dark:text-white dark:bg-darkMode-primary rounded shadow-xl hover:shadow-sm text-center py-5">
              {/* <VerticalDot /> */}
              <div className="flex justify-around">
                <div>
                  <img
                    className="w-32 h-32 rounded-full ml-16 sm:ml-36"
                    src={`${state.image}`}
                    
                    alt={`${state.fullName} Profile`}
                  />
                  <h1 className="text-2xl mt-2 ml-12 sm:ml-32">{state.fullName}</h1>
                </div>
                <div>
                  <VerticalDot />
                </div>
              </div>

              <div className="text-center">
                {/* <h1 className="text-2xl mt-2 ">{fullName}</h1> */}
                <div className="px-5 text-sm">
                  <p className="text-justify">{state.bio}</p>
                  {/* <Model /> */}
                </div>
                <div className="flex justify-between mt-3 px-4">
                  <div className="flex flex-col">
                    {' '}
                    <span className="font-bold text-2xl">{state.followers.length}</span>{' '}
                    <span className="text-sm  text-gray-base">
                      {state.followers.length === 1 || state.followers.length === 0
                        ? `Follower`
                        : `Followers`}
                    </span>{' '}
                  </div>
                  <div className="flex flex-col">
                    {' '}
                    <span className="font-bold text-2xl">{Object.keys(state.blog).length}</span>{' '}
                    <span className="text-sm text-gray-base">Blog</span>{' '}
                  </div>
                  <div className="flex flex-col">
                    {' '}
                    <span className="font-bold text-2xl">{state.following.length}</span>{' '}
                    <span className="text-sm text-gray-base">Following</span>{' '}
                  </div>
                </div>
                {btnFollow && (
                  <div className="flex flex-row justify-center px-4 mt-4">
                    <button
                      type="submit"
                      className="text-lg h-10 w-2/6  text-white text-md rounded bg-orange-base hover:bg-orange-secondary dark:bg-darkMode-orange dark:text-darkMode-base focus:outline-none"
                      onClick={handleFollowClick}
                    >
                      {userFollow ? 'Following' : 'Follow'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <>
              <ProfileSKeleton />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
