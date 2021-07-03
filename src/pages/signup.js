/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import chalk from 'chalk';
import * as ROUTES from '../constants/routes';

export default function Signup() {
  const history = useHistory();

  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState([]);
  const isInvalid = fullName === '' ||  username === '' || email === '' || password === '' || confirmPassword === ''
  
  const handlesubmit =  (e) => {
    console.log('hello')
    e.preventDefault();
    // setError([]);

    try{
      axios({
        method: 'POST',
        data: {
          fullName,
          username,
          email,
          password,
          confirmPassword,      
        },
        credentails: true,
        url: 'http://localhost:4444/user/register',
      }).then((res) => {
          console.log(res)

          /** Best way to set values into array */
          // setError([...error, ...res.data.error]);

          const objValue=[];
          if(res.status === 203) {
            Object.keys(res.data.error).forEach((errorKey, idx) => {

              const value = res.data.error[errorKey];
              console.log(value)
              // setError([...error, value]);
              objValue.push(value)

            })
            setError(objValue)
            console.log('error array',error)  
            }
          else {
            history.push(ROUTES.LOGIN)
          }
          
        
      });
    }
    catch(err){
      console.error(err)
    }
    
   
  };
  
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
          {/* {error && <p>{error}</p>} */}
            <ol>
              {
                error.map((errorValue, errorIdx) => (
                  <li key={errorIdx} className="text-xl overflow-hidden  text-center text-red-primary">{errorValue}</li>
                ))
              }
            </ol>
          
          
          <form >
            <div>
              <input
                aria-label="Enter your Full Name"
                placeholder="Full Name"
                name="full name"
                className="m-4 w-80 px-5 py-2 text-white bg-gray-borderbg bg-opacity-30 border-t border-white border-opacity-20 border-solid border-gray-700 shadow-2xl rounded-xl tracking-tighter text-base focus:outline-none "
                type="full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <input
                aria-label="Enter your username"
                placeholder="Username"
                name="username"
                type="username"
                className="m-4 w-80 px-5 py-2 text-white bg-gray-borderbg bg-opacity-30 border-t border-white border-opacity-20 border-solid border-gray-700 shadow-2xl rounded-xl tracking-tighter text-base focus:outline-none "
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                disabled={isInvalid}
                type="submit"
                className={`m-4 w-80 px-5 py-2 flex justify-center text-white bg-orange-base hover:bg-orange-secondary border-transparent border-t border-white border-opacity-20 border-solid border-gray-700 shadow-2xl rounded-xl tracking-tighter text-base focus:outline-none  focus:ring-2 focus:ring-offset-2 duration-500 focus:ring-orange-base
                ${isInvalid && 'opacity-70'}`}
                onClick={handlesubmit}
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
