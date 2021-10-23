/* eslint-disable react/no-unused-prop-types */
import React, { useContext, useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { GetUserProfile } from '../../service/user';
import Header from '../../components/private/header';
import UserHeader from './UserHeader';
import UserData from './UserData';
import Footer from '../../components/public/footer';
import ProfileContext from '../../utilities/context/profile';

const Profile = () => {
  const { username } = useParams();
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
      case 'username': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'followers': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'userBlog': {
        return { ...state, [action.fieldName]: action.payload };
      }
      default: {
        return state;
      }
    }
  };

  const initialState = {
    id: '',
    fullName: '',
    username: '',
    image: '',
    bio: '',
    email: '',
    followers: [],
    following: [],
    userBlog: []
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('profile', state);

  const getProfileData = async () => {
    const { data } = await GetUserProfile(username);
    dispatch({ type: 'id', fieldName: 'id', payload: data._id });
    dispatch({ type: 'followers', fieldName: 'followers', payload: data.followers });
    dispatch({ type: 'following', fieldName: 'following', payload: data.following });
    dispatch({ type: 'fullName', fieldName: 'fullName', payload: data.fullName });
    dispatch({ type: 'username', fieldName: 'username', payload: data.username });
    dispatch({ type: 'image', fieldName: 'image', payload: data.image });
    dispatch({ type: 'bio', fieldName: 'bio', payload: data.bio });
    dispatch({ type: 'email', fieldName: 'email', payload: data.email });
    dispatch({ type: 'userBlog', fieldName: 'userBlog', payload: data.blog });
  };
  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div className="bg-gray-background dark:bg-darkMode-base">
      <Header />
      <div className="dark:bg-darkMode-base dark:text-white mx-auto max-w-screen-lg h-full">
        <ProfileContext.Provider
          value={{
            state,
            dispatch
          }}
        >
          <UserHeader />
          <UserData />
        </ProfileContext.Provider>
      </div>
      <Footer />
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
