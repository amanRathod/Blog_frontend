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
      if (response.status === 200) {
      localStorage.setItem('image',response.image);
      localStorage.setItem('username',response.username);
      dispatch({type: 'fullName', fieldName: 'fullName', payload: response.fullName});
      dispatch({type: 'image', fieldName: 'image', payload: response.image});
      dispatch({type: 'bio', fieldName: 'bio', payload: response.bio});
      notify({type: 'success', message: 'Profile Updated Successfully'});
      }

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
    <ToastContainer />
      <Header />
      <div className=" dark:bg-darkMode-base container h-screen mx-auto max-w-screen-lg">
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
          className=" mb-2 ml-10 bg-transparent hover:bg-orange-base text-orange-base font-semibold hover:text-white py-2 px-4 border border-orange-base hover:border-transparent rounded focus:ring-2 focus:ring-offset-2 duration-500  focus:ring-orange-base"
          onClick={handleUpdate}
        >
          Update Information
        </button>
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
