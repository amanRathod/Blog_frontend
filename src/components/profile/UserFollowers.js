/* eslint-disable import/named */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, {useState, useEffect } from 'react';
import { getUserByUserId } from '../../service/backened_call';

const fetchData = async (followers) => {
  try {
    console.log('followersss', followers)
    const response = await getUserByUserId(followers);
    console.log('fetch', response.data);
    return response.data;
  } catch (err) {
    console.errror(err);
  }
}

const UserFollowers = ({
  userData:{
    id,
    fullName,
    username,
    email,
    followers,
    following,
  }
}) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    
    fetchData(followers).then((userData) => {
      console.log('dataaa',  userData);
      console.log('userrrrr', userData);
      setUser(userData);
    })
  }, [])
  console.log('fff',followers)
  console.log('user follower',user)

  return (
      <div className={`flex mx-auto max-w-screen-lg `}>
        <div className="flex flex-wrap">
          {user.map((UserKey, idx) => (
            <div className="card border w-96 hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
          <img className="max-h-20 w-full opacity-80 absolute top-0 " src="https://unsplash.com/photos/h0Vxgz5tyXA/download?force=true&w=640" alt="" />
            <div className="profile w-full flex m-3 ml-4 text-white">
              <img className="w-28 h-28 p-1 bg-white rounded-full z-10" src={user.image} alt=""/>
            </div>
            <div className="flex flex-row ml-6 mb-2">
              <h1 >{UserKey.fullName}</h1>
            </div>
            <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
              <div className="add border rounded-l-2xl rounded-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">Follow</div>
            </div>
          </div>
          )
          )}
          <div className="card border w-96 hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
          <img className="max-h-20 w-full opacity-80 absolute top-0 " src="https://unsplash.com/photos/h0Vxgz5tyXA/download?force=true&w=640" alt="" />
            <div className="profile w-full flex m-3 ml-4 text-white">
              <img className="w-28 h-28 p-1 bg-white rounded-full z-10" src={user.image} alt=""/>
            </div>
            <div className="flex flex-row ml-6 mb-2">
              <h1 >{user.fullName}</h1>
            </div>
            <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
              <div className="add border rounded-l-2xl rounded-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">Follow</div>
            </div>
          </div>

          <div className="card border w-96 hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
          <img className="max-h-20 w-full opacity-80 absolute top-0 " src="https://unsplash.com/photos/h0Vxgz5tyXA/download?force=true&w=640" alt="" />
            <div className="profile w-full flex m-3 ml-4 text-white">
              <img className="w-28 h-28 p-1 bg-white rounded-full z-10" src="" alt=""/>
            </div>
            <div className="flex flex-row ml-10 mb-2">
              <h1 >{followers[1]}</h1>
            </div>
            <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
              <div className="add border rounded-l-2xl rounded-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">Follow</div>
            </div>
          </div>

          <div className="card border w-96 hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
          <img className="max-h-20 w-full opacity-80 absolute top-0 " src="https://unsplash.com/photos/h0Vxgz5tyXA/download?force=true&w=640" alt="" />
            <div className="profile w-full flex m-3 ml-4 text-white">
              <img className="w-28 h-28 p-1 bg-white rounded-full z-10" src="" alt=""/>
            </div>
            <div className="flex flex-row ml-10 mb-2">
              <h1 >Rathod</h1>
            </div>
            <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
              <div className="add border rounded-l-2xl rounded-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">Follow</div>
            </div>
          </div>
                
        </div>
      </div>
  );
}
export default UserFollowers;