/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import * as ROUTES from '../constants/routes';
import WriteStory from './story/write-story';

import UserContext from '../context/user';

const Header = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();
  console.log('user', user)
  const [toggle, setToggle] = useState(false)

  const handleLogOut = (e) => {
    e.preventDefault();

    try{
      axios({
        methos: 'GET',
        data: {},
        credentials: true,
        url: 'http://localhost:4444/user/logout',
      }).then((response) => {
        localStorage.clear();
        history.push(ROUTES.LOGIN);
      })
    } catch (err) {
      console.error(err.message)
    }

  }

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

            {/* <Link  aria-label="Write-Blog">
              <button className="inline-flex items-center justify-center w-10 h-10 mr-2  transition-colors duration-150 bg-orange-base rounded-lg focus:shadow-outline focus:ring-2 focus:ring-offset-2 focus:ring-orange-base hover:bg-orange-secondary focus:outline-none">
                <svg className="w-4 h-4 fill-current  text-gray-base" viewBox="0 0 20 20">
                <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
              </button>
            </Link> */}
            <Link to={WriteStory} aria-label="Write-Story">
              <button >
              <svg 
                className="w-10 mt-2 mr-2 opacity-80 hover:text-orange-base" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg">
                <path 
                  strokelinecap="round" 
                  strokelinejoin="round" 
                  strokeWidth={2} 
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              </button>
            </Link>

            <button 
              className="focus:outline-none"
              onClick={handleLogOut}
              onKeyDown={handleLogOut}
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
              <Link>
                <img 
                  className=" rounded-full h-8 w-8 flex"
                  src={`/images/${user.firstName}.jpg`}
                  alt={`${user.firstName} profile`}
                />
              </Link>
            </div>  


            </>
          ): (
            <>
              <Link to={ROUTES.LOGIN} > 
                <button
                  type="button"
                  className="m-2 border-2 border-orange-base px-4 py-1 focus:outline-none  focus:ring-2 focus:ring-offset-0 duration-500 focus:ring-orange-base"
                >
                  Login
                </button>
                <hr className="  text-orange-base border-b-2  hover:visible" />
              </Link>
              <Link to={ROUTES.SIGNUP} > 
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
  
  )};

export default Header;