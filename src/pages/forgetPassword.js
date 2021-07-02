/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function ForgetPassword() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios({
        method: 'POST',
        data: {
          email
        },
        credentials: true,
        url: 'http://localhost:4444/auth/forgotPassword'
      }).then((response) => {
        setError(response.data.message);
        history.push(ROUTES.RESET_PASSWORD);
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    document.title = 'Forgot Password - Blog';
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col text-center">
        <div>
          <h1>Forget Password</h1>
          {error && <p className="text-sm text-red-primary">{error}</p>}
        </div>
        <input
          className="border-4 rounded "
          placeholder="Enter is your Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="px-3 mt-2 py-2 bg-orange-base border-4 rounded" onClick={handleSubmit}>
          Reset Password
        </button>
      </div>
    </div>
  );
}
