/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import UpdateProfile from '../../../context/editProfile';

const ProfileInfo = () => {
  const { email, setEmail, username, setUsername } = useContext(UpdateProfile);
  return (
    <>
      <div className="container mb-10 w-full p-8 bg-white border border-gray-primary shadow-sm rounded-lg">
        <h1 className="mb-5 text-xl font-bold text-gray-formbg">User Info</h1>
        <div className="mb-6">
          <label htmlFor="Email" className="block mb-2 text-sm font-semibold text-gray-base">
            Email
          </label>
          <input
            disabled='true'
            type="text"
            name="email"
            id="email"
            placeholder="Email@"
            className="px-3 py-3 placeholder-gray-borderbg text-gray-base relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full focus:ring-orange-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="Username" className="block mb-2 text-sm font-semibold text-gray-base">
            Username
          </label>
          <input
            disabled='true'
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="px-3 py-3 placeholder-gray-borderbg text-gray-base relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full focus:ring-orange-base"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
