import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { EditProfileSkeleton, EditProfileSkeletons } from '../../../components/skeleton';
import UpdateProfile from '../../../utilities/context/editProfile';

const BasicInfo = () => {
  const { state, dispatch } = useContext(UpdateProfile);
  const [fallback, setFallback] = useState(false);

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const fileImage = e.target.files[0];
    const temperoryLink = URL.createObjectURL(fileImage);
    dispatch({ type: 'image', fieldName: 'image', payload: temperoryLink });
    dispatch({ type: 'picture', fieldName: 'picture', payload: fileImage });
  };

  const reloadSrc = (e) => {
    if (fallback) {
      e.target.src = `/img/blank_profile.png`;
    } else {
      e.target.src = state.image;
      setFallback(true);
    }
  };

  return (
    <>
      {state.image ? (
        <div className="dark:bg-darkMode-base container mb-10 w-full p-8 bg-white border border-gray-primary shadow-sm rounded-lg">
          <h1 className="mb-5 text-xl font-bold text-gray-formbg">Basic Info</h1>
          <div className="mb-6">
            <label htmlFor="full-name" className="block mb-2 text-sm font-semibold text-gray-base">
              Full Name
            </label>
            <input
              type="text"
              name="full-name"
              id="full-name"
              placeholder="Enter Your Name"
              className="px-3 py-3 placeholder-gray-borderbg text-gray-base relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full focus:ring-orange-base"
              value={state.fullName}
              onChange={(e) =>
                dispatch({ type: 'fullName', fieldName: 'fullName', payload: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label htmlFor="bio" className="block mb-2 text-sm font-semibold text-gray-base">
              Bio
            </label>
            <input
              type="text"
              name="bio"
              id="bio"
              placeholder="Developer ..."
              className="px-3 py-3 placeholder-gray-borderbg text-gray-base relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full focus:ring-orange-base"
              value={state.bio}
              onChange={(e) => dispatch({ type: 'bio', fieldName: 'bio', payload: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="Photo" className="block mb-2 text-sm font-semibold text-gray-base">
              Profile Photo
            </label>
            <div className="mt-1 flex items-center">
              <span className="inline-block h-40 w-40 rounded-full overflow-hidden bg-gray-100">
                <img src={`${state.image}`} className="" onError={reloadSrc} alt="profile" />
              </span>
              <label className="btn pl-4 ml-4 btn-primary btn-block btn-lg bg-orange-base hover:bg-orange-secondary text-white  rounded-md shadow-lg px-3 py-1 mb-4">
                <input
                  type="file"
                  name="file"
                  style={{ display: 'none' }}
                  onChange={handleImageUpload}
                />{' '}
                Update Image
              </label>
            </div>
          </div>
        </div>
      ) : (
        <>
          <EditProfileSkeleton />
        </>
      )}
    </>
  );
};
export default BasicInfo;

BasicInfo.propTypes = {
  state: PropTypes.shape({
    fullName: PropTypes.string,
    bio: PropTypes.string,
    image: PropTypes.string
  })
};
