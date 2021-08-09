/* eslint-disable react/no-unused-prop-types */
import React, { useContext, useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import UserContext from '../context/user';
import UserProfile from '../components/profile';
import Header from '../components/header';
import { getUserByUsername } from '../service/backened_call';
import ProfileContext from '../context/profile';
import Flash from '../components/flash';

const Profile = () => {
  const { username } = useParams();
  const { user } = useContext(UserContext);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'id': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'fullName': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'email': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'bio': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'image': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'following': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'followers': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'blog': {
        return { ...state, [action.fieldName]: action.payload };
      }
      default: {
        return state;
      }
    }
  };

  const initialState = {
    id: '',
    followers: '',
    following: '',
    fullName: '',
    username,
    image: '',
    bio: '',
    email: '',
    blog: ''
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getProfileData = async () => {
      const { UserData, UserBlogs } = await getUserByUsername(username);
      dispatch({ type: 'id', fieldName: 'id', payload: UserData._id });
      dispatch({ type: 'followers', fieldName: 'followers', payload: UserData.followers });
      dispatch({ type: 'following', fieldName: 'following', payload: UserData.following });
      dispatch({ type: 'fullName', fieldName: 'fullName', payload: UserData.fullName });
      dispatch({ type: 'image', fieldName: 'image', payload: UserData.image });
      dispatch({ type: 'bio', fieldName: 'bio', payload: UserData.bio });
      dispatch({ type: 'email', fieldName: 'email', payload: UserData.email });
      dispatch({ type: 'blog', fieldName: 'blog', payload: UserBlogs });
    };
    if (username) {
      getProfileData(username);
    }
    return () => {
      getProfileData();
    };
  }, [username]);

  return (
    <div className="bg-gray-background dark:bg-darkMode-base">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <ProfileContext.Provider
          value={{
            state,
            dispatch
          }}
        >
          <UserProfile />
        </ProfileContext.Provider>
      </div>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string,
  user: PropTypes.object,
  followers: PropTypes.number,
  following: PropTypes.number,
  fullName: PropTypes.string,
  image: PropTypes.string,
  bio: PropTypes.string,
  email: PropTypes.string
};
