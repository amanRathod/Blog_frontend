import React, { useState, useContext, useEffect } from 'react';
import { Link, History, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserContext from '../../context/user';

const Profile = () => {
  // const { user } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    document.title = 'Profile-Blog';
  }, []);

  return (
    <div>
      <h1>{`My name is `}</h1>
    </div>
  );
};

export default Profile;
