import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { EditProfileSkeleton } from '../../../components/skeleton';
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
        <div className="profile-container">
          <h1 className="mb-5 text-xl font-bold text-orange-base dark:text-darkMode-orange">
            Basic Info
          </h1>
          <div className="mb-6">
            <label htmlFor="full-name" className="profile-label">
              Full Name
            </label>
            <input
              type="text"
              name="full-name"
              id="full-name"
              placeholder="Enter Your Name"
              className="profile-input"
              value={state.fullName}
              onChange={(e) =>
                dispatch({ type: 'fullName', fieldName: 'fullName', payload: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label htmlFor="bio" className="profile-label">
              Bio
            </label>
            <input
              type="text"
              name="bio"
              id="bio"
              placeholder="Developer ..."
              className="profile-input"
              value={state.bio}
              onChange={(e) => dispatch({ type: 'bio', fieldName: 'bio', payload: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="Photo" className="profile-label">
              Profile Photo
            </label>
            <div className="mt-1 flex items-center">
              <span className="inline-block h-40 w-40 rounded-full overflow-hidden bg-gray-100">
                <img src={`${state.image}`} className="" onError={reloadSrc} alt="profile" />
              </span>
              <label className="btn-transparent">
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
