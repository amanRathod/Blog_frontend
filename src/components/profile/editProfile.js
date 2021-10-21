/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prettier/prettier */
import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../header';
import BasicInfo from './profileUpdate/BasicInfo';
import ProfileInfo from './profileUpdate/profileIdentity';
import UpdateProfile from '../../context/editProfile';
// import Footer from '../footer';
import { updateProfileData } from '../../service/put_backenedCall';
import * as ROUTES from '../../constants/routes';
import Flash from '../flash';

const EditProfile = () => {
  const history = useHistory();
  const location = useLocation();
  const [profile, setProfile] = useState(location.state.profile);
  const [flash, setFlash] = useState({});
  console.log('poictrure', profile);

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
  console.log(state);
  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log('ckick updateee')
    try {
      const formData = new FormData();
      formData.append('file', state.picture);
      formData.append('fullName', state.fullName);
      formData.append('bio', state.bio);
      formData.append('username', state.username);
      const response = await updateProfileData(formData);
      const storeData = {
        id: response._id,
        email: response.email,
        fullName: response.fullName,
        username: response.username,
        image: response.image,
        followers: response.followers,
        following: response.following
      };
  
      localStorage.setItem('user', JSON.stringify(storeData));
      setFlash({success: 'Profile Updated Successfully'})
      
      window.setTimeout(() => {history.push(ROUTES.DASHBOARD)}, 2000);
     
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
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
          <Flash flash={flash} setFlash={setFlash} />
        </UpdateProfile.Provider>
        <button
          type="submit"
          className=" mb-2 ml-10 bg-transparent hover:bg-orange-base text-orange-base font-semibold hover:text-white py-2 px-4 border border-orange-base hover:border-transparent rounded focus:ring-2 focus:ring-offset-2 duration-500  focus:ring-orange-base"
          onClick={handleUpdate}
        >
          Update Information
        </button>
        {/* <Footer /> */}
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
