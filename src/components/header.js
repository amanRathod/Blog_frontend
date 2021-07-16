/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */

import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import * as ROUTES from '../constants/routes';

import UserContext from '../context/user';

const Header = () => {
  const  { user }  = useContext(UserContext);
  const history = useHistory();

  const handleLogOut = (e) => {
    e.preventDefault();

    try {
      axios({
        methos: 'GET',
        data: {},
        credentials: true,
        url: 'http://localhost:4444/user/logout'
      }).then((response) => {
        localStorage.clear();
        history.push(ROUTES.LOGIN);
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  // const handleWriteBlog = (e) => {
  //   e.preventDefault();

  //   history.push(Index);
  // };

  return (
    <header className="h-16 bg-white border-b border-gray-primary mb-8">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className=" text-center felx items-center align-items cursor-pointer">
            <h1 className="flex justify-center w-full">
              <Link to={ROUTES.DASHBOARD}>
                <h1 className="wt-2 mt-6 ml-3 w-6/12">Blog</h1>
                <hr className="  text-orange-base border-b-2 w-16 mt-2 hover:visible" />
              </Link>
            </h1>
          </div>

          <div className="text-center flex items-center align-items">
            {user ? (
              <>
                <Link to={`/write-blog/${user.username}`} aria-label="Write-Story">
                  <button type="submit" className="focus:outline-none">
                    <svg
                      className="w-10 mt-2 mr-2 opacity-80 hover:text-orange-base "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </Link>

                <button
                  className="focus:outline-none"
                  onClick={handleLogOut}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleLogOut();
                    }
                  }}
                  type="button"
                >
                  <svg
                    className="w-8 mr-6 text-black-light cursor-pointer hover:text-orange-base"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>

                <div className="flex items-center cursor-pointer mr-2">
                  <Link to={`profile/${user.username}`}>
                    <img
                      className=" rounded-full h-8 w-8 flex"
                      src={`${user.image}`}
                      alt={`${user.username} profile`}
                    />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN}>
                  <button
                    type="button"
                    className="m-2 border-2 border-orange-base px-4 py-1 focus:outline-none  focus:ring-2 focus:ring-offset-0 duration-500 focus:ring-orange-base"
                  >
                    Login
                  </button>
                  <hr className="  text-orange-base border-b-2  hover:visible" />
                </Link>
                <Link to={ROUTES.SIGNUP}>
                  <button
                    type="button"
                    className={` px-4 py-1 m-2 bg-orange-base  text-white border-t border-white   shadow-2xl rounded-xl tracking-tighter focus:outline-none  focus:ring-2 focus:ring-offset-2 duration-500 focus:ring-orange-base  `}
                  >
                    Create Account
                  </button>
                  <hr className="visible text-orange-base border-b-2  hover:invisible" />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
