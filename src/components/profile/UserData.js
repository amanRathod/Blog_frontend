/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import UserFollowers from './UserFollowers';
import UserPosts from './UserPosts';
import UserFollowing from './UserFollowing';

export default function UserData() {
  const [tab, setTab] = useState(1);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  `text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${ 
                  tab === 1
                    ? `text-white bg-orange-base`
                    : `text-orange-base bg-white`}`
                }
                onClick={e => {
                  e.preventDefault();
                  setTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Blogs
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  `text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${ 
                  tab === 2
                    ? `text-white bg-orange-base`
                    : `text-orange-base bg-white`}`
                }
                onClick={e => {
                  e.preventDefault();
                  setTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Followers
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  `text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${ 
                  tab === 3
                    ? `text-white bg-orange-base`
                    : `text-orange-base bg-white`}`
                }
                onClick={e => {
                  e.preventDefault();
                  setTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Following
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={tab === 1 ? 'block' : 'hidden'} id="link1">
                  <UserPosts />
                </div>
                <div className={tab === 2 ? 'block' : 'hidden'} >
                  <UserFollowers />
                </div>
                <div className={tab === 3 ? 'block' : 'hidden'} id="link3">
                  <UserFollowing />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
