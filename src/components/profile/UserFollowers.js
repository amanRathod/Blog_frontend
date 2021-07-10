/* eslint-disable react/button-has-type */
/* eslint-disable import/named */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */

import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import Skelton from 'react-loading-skeleton';
import ProfileContext from '../../context/profile';
import { getUserByUserId } from '../../service/backened_call';

const fetchData = async (followers) => {
  try {
    console.log('followersss', followers);
    const response = await getUserByUserId(followers);
    console.log('fetch follow', response.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const UserFollowers = () => {
  const profile = useContext(ProfileContext);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchData(profile.followers).then((userData) => {
      setUser(userData);
    });
  }, [profile.followers]);
  console.log('user follower', user);

  return (
    <div className={`flex mx-auto max-w-screen-lg `}>
      <div className="flex flex-wrap justify-between">
        {user
          ? user.map((UserKey, idx) => (
              <div className="card border w-96 hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
                <img
                  className="max-h-20 w-full opacity-80 absolute top-0 "
                  src="https://unsplash.com/photos/h0Vxgz5tyXA/download?force=true&w=640"
                  alt=""
                />
                <div className="profile w-full flex m-3 ml-4 text-white">
                  {UserKey.image ? (
                    <img
                      className="w-28 h-28 p-1 bg-white rounded-full z-10"
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
                <div className="flex flex-row ml-6 mb-2">
                  {UserKey.fullName ? (
                    <h1>{UserKey.fullName}</h1>
                  ) : (
                    <Skelton text height={20} width={100} />
                  )}
                </div>
                <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
                  {UserKey.fullName ? (
                    <div className=" border rounded-l-2xl rounded-sm border-orange-base p-1 px-4 cursor-pointer hover:bg-orange-base hover:text-white focus:outline-none  focus:ring-2 focus:ring-offset-0 duration-500 focus:ring-orange-base ">
                      Follow
                    </div>
                  ) : (
                    <Skelton rect height={30} width={70} />
                  )}
                </div>
              </div>
            ))
          : `${profile.fullName} doesn't have follower 🙄`}
      </div>
    </div>
  );
};
export default UserFollowers;
