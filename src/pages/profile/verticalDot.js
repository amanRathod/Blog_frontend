/* eslint-disable react/no-unused-prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createPopper } from '@popperjs/core';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import ProfileContext from '../../utilities/context/profile';

const VerticalDot = () => {
  const history = useHistory();
  const {state} = useContext(ProfileContext);
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
  const userData = JSON.parse(JSON.stringify(state));
  const goToEditPage = () => {
    history.push({
      pathname: '/setting',
      state: { profile: userData }
    });
  };

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
              bg-white dark:bg-darkMode-base  text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mb-1`}
              style={{ minWidth: '12rem' }}
            >
              <button
                type="submit"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-gray-primary text-gray-base dark:text-white  dark:hover:bg-darkMode-orange dark:hover:text-darkMode-base dark:text-opacity-90 focus:outline-none"
                onClick={goToEditPage}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerticalDot;

VerticalDot.propTypes = {
  username: PropTypes.string.isRequired,
  
}
