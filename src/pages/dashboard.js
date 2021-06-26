/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Link, History } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function Dashboard() {

  useEffect(() => {
    document.title = 'Dashboard - Blog'
  })

  return (
    <div className="flex h-screen justify-center items-center">
      <div>
        <button type="submit" className="text-white bg-red-secondary px-5 py-2 m-5  bg-opacity-80 border-transparent cursor-pointer border-solid  shadow-2xl rounded-xl tracking-tighter text-base focus:outline-none  focus:ring-2 focus:ring-offset-2 duration-500 hover:bg-red-secondary focus:ring-orange-base">
          <Link
          to='http://localhost:4444/auth/logout'
          >Log Out</Link>
        </button>
      </div>
    </div>
  )
}
