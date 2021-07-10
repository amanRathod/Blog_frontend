/* eslint-disable react/button-has-type */
/* eslint-disable import/named */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { getUserByUserId } from '../../service/backened_call';
import ProfileContext from '../../context/profile';

const fetchData = async (following) => {
  try {
    const response = await getUserByUserId(following);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

const UserFollowing = () => {
  const profile = useContext(ProfileContext);
  const [user, setUser] = useState([]);

  useEffect(() => {
    
    fetchData(profile.following).then((userData) => {
      setUser(userData);
    })

  }, [profile.following])

  return (
      <div className={`flex mx-auto max-w-screen-lg `}>
        <div className="flex flex-wrap justify-between">
          {user ? user.map((UserKey, idx) => (
            
            <div className="card border w-96 hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
              <img className="max-h-20 w-full opacity-80 absolute top-0 " src="https://unsplash.com/photos/h0Vxgz5tyXA/download?force=true&w=640" alt="" />
              <div className="profile w-full flex m-3 ml-4 text-white">
                <img className="w-28 h-28 p-1 bg-white rounded-full z-10" src={UserKey.image} alt=""/>
              </div>
              <div className="flex flex-row ml-6 mb-2">
                <h1 >{UserKey.fullName}</h1>
              </div>
              <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
                <div className=" border rounded-l-2xl rounded-sm border-orange-base p-1 px-4 cursor-pointer hover:bg-orange-base hover:text-white focus:outline-none  focus:ring-2 focus:ring-offset-0 duration-500 focus:ring-orange-base ">
                  Follow
                </div>
              </div>
      
            </div>
          
          )
          ): `${profile.fullName} is not following any one 😑`}
                
        </div>
      </div>
  );
}
export default UserFollowing;

UserFollowing.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.number,
    followers: PropTypes.array,
    following: PropTypes.array,
    email: PropTypes.string,
    fullName: PropTypes.string,
    username: PropTypes.string,
    image: PropTypes.string,
  })
}