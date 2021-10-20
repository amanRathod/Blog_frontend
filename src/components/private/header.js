/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import UserDataContext from '../../utilities/context/userData';
import DarkMode from '../public/dark_mode';
import notify from '../public/notification';

const Header = () => {
  const history = useHistory();
  const { state } = useContext(UserDataContext);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem('token');
      notify({
        type: 'success',
        message: 'Logout successfully'
      });
      history.push('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header className="h-16 bg-white  dark:bg-darkMode-base dark:text-white  border-gray-base shadow-md  border-b ">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className=" text-center felx items-center align-items cursor-pointer">
            <h1 className="flex justify-center w-full">
              <Link to={ROUTES.DASHBOARD} className="m-3 text-color underline-link">
                Blog
              </Link>
            </h1>
          </div>
          <div className="text-center flex items-center align-items">
            <Link
              to={ROUTES.WRITE_BLOG}
              aria-label="Write-Story"
              className="m-3 text-color underline-link"
            >
              <button type="submit" className="focus:outline-none">
                <svg
                  className="w-10 mt-2 mr-2 opacity-80 hover:text-orange-base dark:hover:text-darkMode-orange"
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
            <button className="focus:outline-none" onClick={handleLogout} type="button">
              <svg
                className="w-8 mr-6 text-black-light cursor-pointer hover:text-orange-base dark:hover:text-darkMode-orange"
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
              <Link to={`profile/${state.username}`} className="m-3 text-color underline-link">
                <img
                  className=" rounded-full h-8 w-8 flex"
                  src={`${state.image}`}
                  alt={`${state.username} profile`}
                />
              </Link>
            </div>
            <DarkMode />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
