/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import UserHeader from './UserHeader';
import UserData from './UserData';
import ProfileContext from '../../context/profile';

const Profile = ({ loggedInUser }) => (
    <>
      <UserHeader />
      <UserData />
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
