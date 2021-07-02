/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState,  } from 'react';
import { useParams  } from 'react-router-dom';
import axios from 'axios';

export default function ForgetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const isValid = newPassword === '' || confirmPassword === '';
  const [error, setError] =  useState('');
  const { token }  = useParams();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      data: {
        newPassword,
        confirmPassword,
        token,
      },
      credentials: true,
      url: 'http://localhost:4444/auth/resetPassword'
    }).then((response) => {
      if(response.status === 302){
        setError(response.data.message)
      }
    })
  };

  useEffect(() => {
    document.title = 'Forgot Password - Blog';
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col text-center">
      <div className="flex flex-col text-center">
      <h1>Reset Password</h1>
      {error && <p className="text-sm text-red-primary">{error}</p>}
      </div>
      <input
        className="border-4 rounded "
        placeholder="New Password"
        type="newPassword"
        name="newPassword"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input
        className="border-4 rounded "
        placeholder="Confirm Password"
        type="Password"
        name="Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button
        disabled={isValid}
        className={`px-3 py-2 border-4 rounded1
      ${isValid && 'opcaity-70'}`}
        onSubmit={handleSubmit}
        
      >
        Update Password
      </button>
      </div>
    </div>
  );
}
