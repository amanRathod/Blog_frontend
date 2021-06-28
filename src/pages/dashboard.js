/* eslint-disable react/prop-types */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import * as ROUTES from '../constants/routes';


const  Dashboard = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState('');

  const handlelogout = (e) => {
    e.preventDefault();
    try{

      axios({
        method: 'GET',
        data: {},
        credentials: true,
        url: 'http://localhost:4444/user/logout'
      }).then((res) => {
        localStorage.clear();
        history.push(ROUTES.LOGIN);
      })
    }
    catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    document.title = 'Dashboard - Blog'
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setFirstName(loggedInUser.firstName)
      // const foundUser = JSON.parse(loggedInUser);
      console.log('firstaName',loggedInUser.firstName)
    }
  }, [])

  return (
    <div className="flex h-screen justify-center items-center">
      <div>
        <h1>Welcome {firstName}</h1>
        <button type="submit" className="text-white bg-red-secondary px-5 py-2 m-5  bg-opacity-80 border-transparent cursor-pointer border-solid  shadow-2xl rounded-xl tracking-tighter text-base focus:outline-none  focus:ring-2 focus:ring-offset-2 duration-500 hover:bg-red-secondary focus:ring-orange-base"
        onClick={handlelogout}
        >
         logout
        </button>
      </div>
    </div>
  )
}
export default Dashboard;


