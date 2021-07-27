/* eslint-disable no-unused-expressions */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import { createPopper } from '@popperjs/core';
import deleteBlog from '../service/delete_backenedCall';
import UserContext from '../context/user';

const DropDown = ({ postData, setPosts }) => {
  const { user } = useContext(UserContext);
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

  const goToNextPage = () => {
    history.push({
      pathname: `/write-blog/${user.username}`,
      state: { blogData: postData }
    });
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await deleteBlog(postData._id);
      setPosts(response);
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
                className="absolute focus:outline-none h-6 w-6 hover:text-orange-base focus:text-orange-secondary"
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
                type="button"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-base hover:bg-red-light"
                onClick={goToNextPage}
              >
                Edit
              </button>

              <button
                type="button"
                href="#pab"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-base hover:bg-red-light"
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

DropDown.propTypes = {
  postData: PropTypes.object.isRequired,
  setPosts: PropTypes.func.isRequired
};
