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
  const { _id, followers, setFollowers, following, setFollowing, image, fullName, bio, username, blog } = useContext(ProfileContext);
  const { user } = useContext(UserContext);
   const [userFollow, setUserFollow] = useState(false);
  const btnFollow = username && username !== user.username;

  useEffect(() => {
    document.title = 'Profile-Blog';

    const isUserFollowing = async (loggedInusername, profileId) => {
      const data = await isUserFollow(loggedInusername, profileId);
      setUserFollow(data);
    };

    if (_id) {
      isUserFollowing(user.username, _id);
    }
  }, [user.username, _id]);

  const handleFollowClick = async (e) => {
    e.preventDefault();

    setUserFollow((userFollow) => !userFollow);
    const data = await togglefollowers(user.id, _id, !userFollow);
    setFollowers(data.profile.followers);
    setFollowing(data.profile.following);

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
    <div classNameName="h-screen w-full py-20 px-3">
      <div className="max-w-md mx-auto md:max-w-lg ">
        <div className="w-full">
          {image ? (
            <div className="bg-white p-3 rounded shadow-xl hover:shadow-sm text-center py-5">
              {/* <VerticalDot /> */}
              <div className="flex justify-around">
                <div>
                  <img
                    className="rounded-full ml-36"
                    src={`${image}`}
                    width="100"
                    alt={`${fullName} Profile`}
                  />
                </div>
                <div>
                  <VerticalDot />
                </div>
              </div>

              <div className="text-center">
                <h1 className="text-2xl mt-2">{fullName}</h1>
                <div className="px-5 text-sm">
                  <p className="text-justify">{bio}</p>
                  {/* <Model /> */}
                </div>
                <div className="flex justify-between mt-3 px-4">
                  <div className="flex flex-col">
                    {' '}
                    <span className="font-bold text-2xl">{followers.length}</span>{' '}
                    <span className="text-sm  text-gray-base">
                      {followers.length === 1 || followers.length === 0
                        ? `Follower`
                        : `Followers`}
                    </span>{' '}
                  </div>
                  <div className="flex flex-col">
                    {' '}
                    <span className="font-bold text-2xl">{Object.keys(blog).length}</span>{' '}
                    <span className="text-sm text-gray-base">Blog</span>{' '}
                  </div>
                  <div className="flex flex-col">
                    {' '}
                    <span className="font-bold text-2xl">{following.length}</span>{' '}
                    <span className="text-sm text-gray-base">Following</span>{' '}
                  </div>
                </div>
                {btnFollow && (
                  <div className="flex flex-row justify-center px-4 mt-4">
                    <button
                      type="submit"
                      className="text-lg h-10 w-2/6  text-white text-md rounded bg-orange-base hover:bg-orange-secondary focus:outline-none"
                      onClick={handleFollowClick}
                    >
                      {userFollow ? 'following' : 'follow'}
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
