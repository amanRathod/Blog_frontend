/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import chalk from 'chalk';
import Dashboard from './dashboard';
import * as ROUTES from '../constants/routes';

export default function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = email === '' || password === '';

  const handleLocalAuth = (e) => {
    e.preventDefault();

    try {
      axios({
        method: 'POST',
        data: {
          email,
          password
        },
        credentials: true,
        url: 'http://localhost:4444/user/login'
      }).then((res) => {
        if (res.status === 203) {
          console.log(res.data);
          setError(res.data.message);
        } else {
          console.log('response data', res.data);
          const storedata = {
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            id: res.data._id,
            email: res.data.email,
            image: res.data.image
          };
          localStorage.setItem('user', JSON.stringify(storedata));
          history.push(ROUTES.DASHBOARD);
        }
      });
    } catch (err) {
      setEmail('');
      setPassword('');
      console.error(err.message);
      setError(err.message);
    }
  };

  const handleGithubAuth = (e) => {
    e.preventDefault();

      fetch('http://localhost:4444/auth/github'
        // method: 'GET',
        // mode: 'cors',
        // headers: {
        //   Accept: 'application/json',
        //   'Content-Type': 'application/json',
        //   'Access-Control-Allow-Credentials': true,
        // }
      )
      .then((response) => {
        console.log('dta ->', response.json());
        const storeData = {
          id: response.data._id,
          email: response.data.email,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          image: response.data.image
        };
        if(response.status === 200){
        localStorage.setItem('user', JSON.stringify(storeData));
        history.push(ROUTES.DASHBOARD);
        }
      })
      .catch(error => {
        console.log('failed to auth')
      });
  };

  const handleGoogleAuth = (e) => {
    e.preventDefault();
    try {
      axios({
        url: 'http://localhost:4444/auth/google',
        credentials: true,
        method: 'GET',
      }).then((response) => {
        const storeData = {
          id: response.data._id,
          email: response.data.email,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          image: response.data.image
        };

        localStorage.setItem('user', JSON.stringify(storeData));
        history.push(ROUTES.DASHBOARD);
      });
    } catch (err) {
      console.error(err);
      console.log('fail to connect')
    }
  };

  useEffect(() => {
    document.title = 'Login - Blog';
  });

  return (
    <div className=" flex  items-center justify-center h-screen bg-gradient-to-l from-black-left  to-black-right">
      <div className="flex flex-col">
        <div className="flex w-100 h-auto flex-col bg-gray-formbg  bg-opacity-30 items-center p-4  mb-4 rounded-2xl  border-2 border-gray-700 backdrop-blur-md shadow-2xl">
          <h1 className="text-white font-black my-12 italic text-4xl tracking-widest font-mono">
            LOGIN
          </h1>
          {error && <p className="text-xl text-red-primary">{error}</p>}
          <form>
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
              <button
                disabled={isInvalid}
                type="submit"
                className={`m-4 w-80 px-5 py-2 flex justify-center text-white bg-orange-base hover:bg-orange-secondary border-transparent border-t border-white border-opacity-20 border-solid  shadow-2xl rounded-xl tracking-tighter text-base focus:outline-none  focus:ring-2 focus:ring-offset-2 duration-500 focus:ring-orange-base
              ${isInvalid && 'opacity-70'}`}
                onClick={handleLocalAuth}
              >
                Log in
              </button>
            </div>
          </form>

          <div className="flex  items-center mb-5 justify-between">
            <span className="relative cursor-pointer text-white opacity-90 left-0 inset-y-0 flex items-center pl-4 pr-16 ">
              <Link to={ROUTES.PASS_FORGET} className="font-bold">
                Forgot Password
              </Link>
            </span>

            <span className="relative cursor-pointer text-white opacity-90 right-0 inset-y-0 flex items-center pl-20 pr-5">
              <Link to={ROUTES.SIGNUP} className="font-bold">
                Signup
              </Link>
            </span>
          </div>

          <hr className="text-white opacity-70 w-80" />

          <div className="flex items-center justify-between mt-4">
            <button
              type="submit"
              className="text-white bg-red-secondary px-5 py-2 m-5  bg-opacity-80 border-transparent cursor-pointer border-solid  shadow-2xl rounded-xl tracking-tighter text-base focus:outline-none  focus:ring-2 focus:ring-offset-2 duration-500 hover:bg-red-secondary focus:ring-orange-base"
              onClick={handleGoogleAuth}
            >
              Google
            </button>
            <button
              type="submit"
              className="text-white bg-black-left px-5 py-2 m-5  bg-opacity-80 border-transparent cursor-pointer border-solid  shadow-2xl rounded-xl tracking-tighter text-base focus:outline-none  focus:ring-2 focus:ring-offset-2 duration-500 hover:bg-black-left focus:ring-orange-base"
              onClick={handleGithubAuth}
            >
              Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
