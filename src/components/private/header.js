import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import jwt from 'jwt-decode';
import * as ROUTES from '../../constants/routes';
import DarkMode from '../public/dark_mode';
import notify from '../public/notification';

const Header = () => {
  const history = useHistory();
  const decode = jwt(localStorage.getItem('token'));
  const { username } = decode;
  const image = localStorage.getItem('image');

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('image');
      notify({
        type: 'success',
        message: 'Logout successfully'
      });
      history.push(ROUTES.LOGIN);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header className="h-16 bg-white  dark:bg-darkMode-base dark:text-darkMode-orange text-orange-base border-gray-base shadow-md  border-b ">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className=" text-center row cursor-pointer mt-2 mr-2 ">
            <Link to={ROUTES.DASHBOARD} className="m-3 text-3xl underline-link">
              Blog
            </Link>
          </div>
          <div className="text-center row">
            <Link to={ROUTES.WRITE_BLOG} aria-label="Write-Story" className="m-3  underline-link">
              <button type="submit" className="focus:outline-none">
                <svg
                  className="w-10 mt-2 mr-2 "
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
            <Link className="m-3  underline-link">
              <button className="focus:outline-none" onClick={handleLogout} type="button">
                <svg
                  className="w-8 mt-2 mr-2 cursor-pointer"
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
            </Link>

            <Link to={`profile/${username}`} className="m-3 underline-link">
              <button type="submit" className="focus:outline-none">
                <img
                  className=" rounded-full h-8 w-8 mt-2 mr-2 flex"
                  src={`${image}`}
                  alt={`${username} profile`}
                />
              </button>
            </Link>

            <DarkMode />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
