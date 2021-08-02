/* eslint-disable prettier/prettier */
import React, { useEffect, useState, useContext } from 'react';
import WriteBlogContext from '../../context/writeBlog';
import '../../styles/global.css';

const Flash = () => {
  const { flash, setFlash } = useContext(WriteBlogContext);

  useEffect(() => {
    console.log('flashhhh', flash);
    setTimeout(() => setFlash({}), 4000);
  }, [flash, setFlash]);

  return (
    <>
      {flash.error && (
        <div className="flashdiv">
          <div
            className="bg-red-light border flex border-red-secondary text-gray-base px-10 py-3 rounded relative"
            role="alert"
          >
            
            <svg className="w-6 h-6 mr-3 text-red-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {/* <strong className="font-bold">Holy smokes!</strong> */}
            <span className="block sm:inline">{flash.error}</span>
          </div>
        </div>
      )}
      {flash.success && (
        <div className="flashdiv">
          <div
            className="bg-green-primary border flex border-green-base text-gray-base px-10 py-3 rounded relative"
            role="alert"
          >
            
            <svg className="w-6 h-6 mr-3 text-green-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {/* <strong className="font-bold">Holy smokes!</strong> */}
            <span className="block sm:inline font-bold">{flash.success}</span>
          </div>
        </div>
      )}

      {flash.warning && (
        <div className="flashdiv">
          <div
            className="bg-yellow-primary border flex border-yellow-base text-gray-base px-10 py-3 rounded relative"
            role="alert"
          >     
            <svg className="w-6 h-6 mr-3 text-yellow-base" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            {/* <strong className="font-bold"></strong> */}
            <span className="block sm:inline font-bold">{flash.warning}</span>
          </div>
        </div>
      )} 
     
    </>
  );
};

export default Flash;
