/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { EditProfileSkeletons } from '../../../components/skeleton';
import UpdateProfile from '../../../utilities/context/editProfile';

const ProfileInfo = () => {
  const {state, dispatch} = useContext(UpdateProfile);
  return (
    <>
    {state.email? (
      <div className="profile-container">
        <h1 className="mb-5 text-xl font-bold text-orange-base dark:text-darkMode-orange">User Info</h1>
        <div className="mb-6">
          <label htmlFor="Email" className="profile-label">
            Email
          </label>
          <input
            disabled='true'
            type="text"
            name="email"
            id="email"
            placeholder="Email@"
            className="profile-input cursor-not-allowed"
            value={state.email}
            onChange={(e) => dispatch({ type: 'email', fieldName: 'email', payload: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="Username" className="profile-label">
            Username
          </label>
          <input
            disabled='true'
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="profile-input cursor-not-allowed"
            value={state.username}
            onChange={(e) => dispatch({ type: 'username', fieldName: 'username', payload: e.target.value })}
          />
        </div>
      </div>
    ) : (
      <EditProfileSkeletons />
    )}
    </>
  );
};

export default ProfileInfo;

ProfileInfo.prototype = {
  propTypes: {
    username: PropTypes.string,
    email: PropTypes.string,
  }
}