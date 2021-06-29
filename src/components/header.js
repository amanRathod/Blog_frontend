/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import UserContext from '../context/user'

const Header = () => {
  const { user } = useContext(UserContext);

  return (
  <header className="h-16 bg-white border-b border-gray-primary mb-8">
    <div className="container mx-auto max-w-screen-lg h-full">
      <div className="flex justify-between h-full">
        
        <div className=" text-center felx items-center align-items cursor-pointer">
          <h1 className="flex justify-center w-full">
            <Link to={ROUTES.DASHBOARD}>
              <h1 className="wt-2 mt-6 w-6/12">Blog</h1>
            </Link>
          </h1>
        </div>

        <div className="text-center flex items-center align-items">
          <Link to={ROUTES.LOGIN} > 
            <button
              type="button"
              className="w-20 h-8 mr-4 bg-white  border-transparent border-t border-white border-opacity-20 border-solid  shadow-2xl rounded-xl tracking-tighter text-base focus:outline-none  focus:ring-2 focus:ring-offset-2 duration-500 focus:ring-orange-base"
            >
              Login
            </button>
          </Link>
          <Link to={ROUTES.SIGNUP} > 
            <button
              type="button"
              className="w-40 h-8 bg-orange-base  border-transparent text-white border-t border-white border-opacity-20 border-solid  shadow-2xl rounded-xl tracking-tighter text-base focus:outline-none  focus:ring-2 focus:ring-offset-2 duration-500 focus:ring-orange-base "
            >
              Create Account
            </button>
          </Link>

        </div>

      </div>
    </div>
  </header>
  
  )};

export default Header;
