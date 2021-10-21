/* eslint-disable no-empty-function */
import axios from 'axios';
import jwt from 'jwt-decode';
import notify from '../components/public/notification';

const link = 'http://localhost:4444/api/v1';

const token = localStorage.getItem('token');

// check if token time is expired or not
const isTokenExpired = () => {
  if (token) {
    const decoded = jwt(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      return true;
    }
    return false;
  }
  return true;
};

// if token is expired, logout user
const checkTokenExpired = () => {
  if (isTokenExpired()) {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
};

// function to check expire-time of token
checkTokenExpired();

export async function GetUserData() {
  try {
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    console.log('token', token);
    const response = await axios.get(`${link}/user`, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function GetData() {}
