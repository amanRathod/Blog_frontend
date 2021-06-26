/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === ''
  
  useEffect(() => {
    document.title = 'Sign Up - Blog'
  })

  return (
    <div className=" flex  items-center justify-center h-screen bg-gradient-to-l from-black-left  to-black-right">
      <div className="flex flex-col ">
        <div className="flex w-100 h-auto flex-col bg-gray-formbg  bg-opacity-30 items-center p-4  mb-4 rounded-2xl  border-2 border-gray-700 backdrop-blur-md shadow-2xl">
          <h1 className="text-white font-black my-12 italic text-4xl tracking-widest font-mono">
            SIGN-UP
          </h1>
          {error && <p className="text-xl text-red-primary">{error}</p>}
          <form>
            <div>
              <input
                aria-label="Enter your First Name"
                placeholder="First Name"
                name="first name"
                className="m-4 w-80 px-5 py-2 text-white bg-gray-borderbg bg-opacity-30 border-t border-white border-opacity-20 border-solid border-gray-700 shadow-2xl rounded-xl tracking-tighter text-base focus:outline-none "
                type="first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <input
                aria-label="Enter your Last Name"
                placeholder="last Name"
                name="last name"
                type="last name"
                className="m-4 w-80 px-5 py-2 text-white bg-gray-borderbg bg-opacity-30 border-t border-white border-opacity-20 border-solid border-gray-700 shadow-2xl rounded-xl tracking-tighter text-base focus:outline-none "
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <input
                aria-label="Enter your email address"
                placeholder="xyz@gmail.com"
                name="email"
                type="email"
                className="m-4 w-80 px-5 py-2 text-white bg-gray-borderbg bg-opacity-30 border-t border-white border-opacity-20 border-solid border-gray-700 shadow-2xl rounded-xl tracking-tighter text-base focus:outline-none "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                aria-label="Enter your password"
                placeholder="Must have atleast 6 characters"
                name="password"
                type="password"
                className="m-4 w-80 px-5 py-2 text-white bg-gray-borderbg bg-opacity-30 border-t border-white border-opacity-20 border-solid border-gray-700 shadow-2xl rounded-xl tracking-tighter text-base focus:outline-none "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                aria-label="Confirm your password"
                placeholder="Confirm Password"
                name="password"
                type="password"
                className="m-4 w-80 px-5 py-2 text-white bg-gray-borderbg bg-opacity-30 border-t border-white border-opacity-20 border-solid border-gray-700 shadow-2xl rounded-xl tracking-tighter text-base focus:outline-none "
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                disabled={!isInvalid}
                type="submit"
                className={`m-4 w-80 px-5 py-2 flex justify-center text-white bg-orange-base hover:bg-orange-secondary border-transparent border-t border-white border-opacity-20 border-solid border-gray-700 shadow-2xl rounded-xl tracking-tighter text-base focus:outline-none  focus:ring-2 focus:ring-offset-2 duration-500 focus:ring-orange-base
                ${isInvalid && 'opacity-70'}`}
              >
                Sign Up
              </button>
            </div>
          </form>

          <hr className="text-white opacity-70 w-80 mt-2"/>
          <div className="flex justify-center items-center mt-3">
          <p className="text-lg text-white opacity-30">
            Have an account?{` `}</p>
            <Link to={ROUTES.LOGIN} className="font-bold px-2 text-white bg-opacity-0">
              Login
            </Link>
          
        </div>
        
        </div>
      </div>
    </div>
  );
}
