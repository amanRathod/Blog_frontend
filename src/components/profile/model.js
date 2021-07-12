/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import axios  from 'axios';
import React, { useState, Fragment, useContext } from 'react';
import ProfileContext from '../../context/profile';
import UserContext from '../../context/login_user';

export default function Model() {

  const profile = useContext(ProfileContext);
  const user = useContext(UserContext);
  const [description, setDescription] = useState(profile.bio);
  const [showModal, setShowModal] = useState(false);
  const btnEdit = profile.username && profile.username === user.username;

  const updateDescription = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:4444/getData/updateBio?bio=${description}&id=${profile._id}`);
      profile.setBio(response.data.bio);
      
    } catch (err) {
      console.error(err.message);
    }
  };

 

  return (
    <>
    
      <button
        type="button"
        className="m-2 border-2 border-orange-base px-4 py-1 focus:outline-none  focus:ring-2 focus:ring-offset-0 duration-500 focus:ring-orange-base"
        onClick={(e) =>  setShowModal(true)  }
      >
        Edit
      </button>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex 
            overflow-x-hidden overflow-y-auto fixed inset-0 z-50 
            outline-none focus:outline-none"
          >
            <div className="relative w-80 my-6 mx-auto max-w-8xl">
              {/* content */}
              <div
                className="border-0 rounded-lg shadow-lg relative
               flex flex-col w-full bg-white outline-none focus:outline-none"
              >
                {/* header */}
                <div
                  className="flex items-start justify-between p-5
                 border-b border-solid border-blueGray-200 rounded-t"
                >
                  <h3 className="text-3xl font-semibold">Edit Bio</h3>
                  <button
                    type="button"
                    className="p-1 ml-auto  border-0 text-black  
                    float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    // onClick={() => setShowModal(false)}
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/* body */}
                <div className="relative  flex-auto mb-3 pt-0">
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                {/* footer */}
                <div
                  className="flex items-center justify-end p-6 
                border-t border-solid border-blueGray-200 rounded-b"
                >
                  <button
                    className="bg-red-light background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    data-dismiss="modal"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-lg h-10 w-3/2  text-white text-md rounded bg-orange-base hover:bg-orange-secondary focus:outline-none"
                    type="button"
                    data-dismiss="modal"
                    onClick={(e) => updateDescription(e) && setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
      
    </>
  );
}
