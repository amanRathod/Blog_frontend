/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import { createPopper } from '@popperjs/core';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import ProfileContext from '../../context/profile';
import { deleteComment } from '../../service/delete_backenedCall';

const DropDown = ({ commentId, blogId, setComments }) => {
  const history = useHistory();
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

  const handleDelete = async () => {
    try {
      const response = await deleteComment(commentId, blogId);
      console.log('res[onse', response);
      setComments(response);
    } catch (err) {
      console.log(err);
    }
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
                // onClick={}
              >
                Edit Profile
              </button>

              <button
                type="submit"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-gray-primary text-gray-base dark:text-white dark:hover:bg-darkMode-orange dark:hover:text-darkMode-base dark:text-opacity-90  focus:outline-none"
                onClick={(e) => handleDelete(e)}
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

export default DropDown;
