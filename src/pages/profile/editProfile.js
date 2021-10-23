/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prettier/prettier */
import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../../components/private/header';
import BasicInfo from './profileUpdate/BasicInfo';
import ProfileInfo from './profileUpdate/profileIdentity';
import UpdateProfile from '../../utilities/context/editProfile';
import Footer from '../../components/public/footer';
import { updateProfile } from '../../service/user';
import notify from '../../components/public/notification';

const EditProfile = () => {
  const location = useLocation();
  const [profile, setProfile] = useState(location.state? location.state.profile: '');

  const reducer = (state, action) => {
    switch (action.type) {
      case 'fullName': {
        return {...state, [action.fieldName]: action.payload};
      }
      case 'image': {
        return {...state, [action.fieldName]: action.payload};
      }
      case 'email': {
        return {...state, [action.fieldName]: action.payload};
      }
      case 'picture': {
        return {...state, [action.fieldName]: action.payload};
      }
      case 'username': {
        return {...state, [action.fieldName]: action.payload};
      }
      case 'bio': {
        return {...state, [action.fieldName]: action.payload};
      }
      default: {
        return state;
      }
        
    }
  }
  const initialState = {
    fullName: profile.fullName,
    bio: profile.bio,
    image: profile.image,
    username: profile.username,
    email: profile.email,
    picture: profile.image,
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('file', state.picture);
      formData.append('fullName', state.fullName);
      formData.append('bio', state.bio);
      formData.append('image', state.image);

      const response = await updateProfile(formData);
      notify(response);

      const { fullName, bio, image} = response.data;
      console.log(response.data);
      console.log('fulll', fullName);
      localStorage.setItem('image',image);
      dispatch({type: 'fullName', fieldName: 'fullName', payload: fullName});
      dispatch({type: 'image', fieldName: 'image', payload: image});
      dispatch({type: 'bio', fieldName: 'bio', payload: bio});
      

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
    <div className="bg-gray-background dark:bg-darkMode-base">
    <ToastContainer />
      <Header />
      <div className=" dark:bg-darkMode-base dark:text-white mx-auto max-w-screen-lg h-full">
        <UpdateProfile.Provider
          value={{
            state,
            dispatch,
          }}
        >
          <BasicInfo />
          <ProfileInfo />
        </UpdateProfile.Provider>
        <button
          type="submit"
          className="btn-transparent mb-10 ml-28 sm:ml-56 md:ml-80 lg:ml-96"
          onClick={handleUpdate}
        >
          Update Information
        </button>
      </div>
        <Footer />
      </div>
    </>
  );
};

export default EditProfile;

EditProfile.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
