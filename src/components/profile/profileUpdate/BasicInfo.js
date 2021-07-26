/* eslint-disable prettier/prettier */
import React, { useContext, useState, useEffect } from 'react';
import UpdateProfile from '../../../context/editProfile';

const BasicInfo = () => {
  const {fullName, setFullName, bio, setBio, image, setImage, setPicture} = useContext(UpdateProfile);
  const [fallback, setFallback] = useState(false);
  
  const handleImageUpload = (e) => {
    e.preventDefault();
    const fileImage = e.target.files[0];
    const src = URL.createObjectURL(fileImage);
    console.log('filemafge', fileImage);
    console.log('sercc', src);
    setImage(src);
    setPicture(fileImage);

  };
  
  const reloadSrc = e => { 
    if(fallback){
      e.target.src = `/img/blank_profile.png`;
    }else{
      e.target.src = image
      setFallback(true)
    }
  }
  
  return (
    <>
      <div className="container mb-10 w-full p-8 bg-white border border-gray-primary shadow-sm rounded-lg">
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
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}

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
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="Photo" className="block mb-2 text-sm font-semibold text-gray-base">
            Profile Photo
          </label>
          <div className="mt-1 flex items-center">
            <span className="inline-block h-40 w-40 rounded-full overflow-hidden bg-gray-100">
              {/* <img 
                src={`${image}`}
                alt={`${fullName} Profile`}
              /> */}
              <img src={`${image}`} className='' onError={reloadSrc} alt="profile"/>
            </span>
            {/* <button
              type="button"
              className="ml-5 bg-orange-base py-2 px-3 border-transparent border-gray-base rounded-md shadow-sm text-md leading-4 font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-base hover:shadow-lg"
              onClick={handleImageUpload}
            >
              Change
            </button> */}
            <input 
              type="file"
              name="file"
              onChange={handleImageUpload}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default BasicInfo;