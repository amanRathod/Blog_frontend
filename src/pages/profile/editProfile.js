import React, { useReducer, useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import Header from '../../components/private/header';
import BasicInfo from './profileUpdate/BasicInfo';
import ProfileInfo from './profileUpdate/profileIdentity';
import UpdateProfile from '../../utilities/context/editProfile';
import Footer from '../../components/public/footer';
import { updateProfile, GetUserProfile } from '../../service/user';
import notify from '../../components/public/notification';

const EditProfile = () => {
  const location = useLocation();
  const [profile] = useState(location.state ? location.state.profile : '');

  const reducer = (state, action) => {
    switch (action.type) {
      case 'fullName': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'image': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'email': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'picture': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'username': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'bio': {
        return { ...state, [action.fieldName]: action.payload };
      }
      default: {
        return state;
      }
    }
  };
  const initialState = {
    fullName: profile.fullName,
    bio: profile.bio,
    image: profile.image,
    username: profile.username,
    email: profile.email,
    picture: profile.image
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProfileData = async () => {
    const response = await GetUserProfile(state.username);
    const { image, fullName, bio } = response.data;
    dispatch({ type: 'fullName', fieldName: 'fullName', payload: fullName });
    dispatch({ type: 'image', fieldName: 'image', payload: image });
    dispatch({ type: 'bio', fieldName: 'bio', payload: bio });
  };

  useEffect(() => {
    document.title = 'Setting';
    fetchProfileData();

    const interval = setInterval(() => {
      fetchProfileData();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

      const { fullName, bio, image } = response.data;
      localStorage.setItem('image', image);
      dispatch({ type: 'fullName', fieldName: 'fullName', payload: fullName });
      dispatch({ type: 'image', fieldName: 'image', payload: image });
      dispatch({ type: 'bio', fieldName: 'bio', payload: bio });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="bg-gray-background dark:bg-darkMode-base">
        <ToastContainer />
        <Header />
        <div className=" dark:bg-darkMode-base dark:text-white mx-auto max-w-screen-lg h-full">
          <UpdateProfile.Provider
            value={{
              state,
              dispatch
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
