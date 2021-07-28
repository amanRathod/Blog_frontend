/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../header';
import BasicInfo from './profileUpdate/BasicInfo';
import ProfileInfo from './profileUpdate/profileIdentity';
import UpdateProfile from '../../context/editProfile';
import { updateProfileData } from '../../service/put_backenedCall';
import * as ROUTES from '../../constants/routes';

const EditProfile = () => {
  const history = useHistory();
  const location = useLocation();
  const [profile, setProfile] = useState(location.state.profile);
  const [fullName, setFullName] = useState(profile.fullName);
  const [bio, setBio] = useState(profile.bio);
  const [image, setImage] = useState(profile.image);
  const [username, setUsername] = useState(profile.username);
  const [email, setEmail] = useState(profile.email);
  const [picture, setPicture] = useState();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('file', picture);
      formData.append('fullName', fullName);
      formData.append('bio', bio);
      formData.append('username', username);
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
      history.push(ROUTES.DASHBOARD);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <div className=" container h-screen mx-auto max-w-screen-lg">
        <UpdateProfile.Provider
          value={{
            setPicture,
            email,
            setEmail,
            username,
            setUsername,
            fullName,
            setFullName,
            bio,
            setBio,
            image,
            setImage
          }}
        >
          <BasicInfo />
          <ProfileInfo />
        </UpdateProfile.Provider>
        <button
          type="submit"
          className="mb-2 ml-10 bg-transparent hover:bg-orange-base text-orange-base font-semibold hover:text-white py-2 px-4 border border-orange-base hover:border-transparent rounded focus:ring-2 focus:ring-offset-2 duration-500  focus:ring-orange-base"
          onClick={handleUpdate}
        >
          Update Information
        </button>
      </div>
    </>
  );
};

export default EditProfile;

EditProfile.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  setProfile: PropTypes.func.isRequired,
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  setFullName: PropTypes.func.isRequired,
  setBio: PropTypes.func.isRequired,
  setPicture: PropTypes.func.isRequired
};
