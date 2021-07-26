/* eslint-disable no-restricted-syntax */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
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
      console.log('pict',picture)
      formData.append('file', picture);
      formData.append('fullName', fullName);
      formData.append('bio', bio);
      formData.append('username', username);
      console.log('formmm', formData);
    //   const config = {
    //     headers: {
    //         'content-type': 'multipart/form-data'
    //     }
    // };
    //   axios.post('http://localhost:4444/putData/updateProfile', formData, config)
    //   .then((response) => {
    //     alert('The file is successfully uploaded');
    //   }).catch((error) => {
    //     console.log(error);
    //   });
      const response = await updateProfileData(formData);
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
