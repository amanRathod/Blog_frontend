/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { createPopper } from '@popperjs/core';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import ProfileContext from '../../context/profile';
import EditProfile from './editProfile';

const VerticalDot = () => {
  const history = useHistory();
  const { username } = useParams();
  const profile = useContext(ProfileContext);
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-end'
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
 console.log('typeee', typeof profile);
 console.log('profielee', profile);
 const obj = JSON.parse(JSON.stringify(profile));
 console.log('objj', obj);
 obj.username = username;
  const goToEditPage = () => {
    history.push({
      pathname: '/setting',
      state: {profile: obj}
    })
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
              }}
            >
              <DotsVerticalIcon
                className="absolute mb-8 focus:outline-none h-6 w-6 hover:text-orange-base focus:text-orange-secondary"
                aria-hidden="false"
              />
            </button>
            <div
              ref={popoverDropdownRef}
              className={`${dropdownPopoverShow ? 'block ' : 'hidden '}
              bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mb-1`}
              style={{ minWidth: '12rem' }}
            >
              <button
                type="submit"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-base hover:bg-red-light focus:outline-none"
                onClick={goToEditPage}
              >
                Edit Profile
              
              </button>

              <button
                type="submit"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-base hover:bg-red-light"
                // onClick={(e) => handleDelete(e)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerticalDot;
