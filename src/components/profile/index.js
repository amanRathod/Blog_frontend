/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import UserHeader from './UserHeader';
import UserPosts from './UserPosts';

const Profile = ({ user }) => (
  <>
    <UserHeader />
    <UserPosts />
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
