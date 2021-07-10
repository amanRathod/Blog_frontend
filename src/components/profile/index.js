/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import UserHeader from './UserHeader';
import UserData from './UserData';

const Profile = ({ user, loggedInUser }) => (
  <>
    <UserHeader loggedInUser={loggedInUser} profile={user} />
    <UserData userData={user} />
  </>
);

export default Profile;

Profile.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    username: Profile.string,
    fullName: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number,
    following: PropTypes.array,
    followers: PropTypes.array
  })
};
