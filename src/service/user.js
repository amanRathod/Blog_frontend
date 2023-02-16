import axios from 'axios';
import jwt from 'jwt-decode';

const link = 'https://blogthese.herokuapp.com/api/v1/user';

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
    localStorage.removeItem('username');
    localStorage.removeItem('image');
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
    const response = await axios.get(`${link}/user-data`, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function GetUserProfile(username) {
  try {
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    const state = {
      username
    };
    const response = await axios.post(`${link}/user-profile`, state, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function togglefollowers(profileId, toggle) {
  try {
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    const state = {
      profileId
    };
    let response;

    if (toggle) {
      response = await axios.post(`${link}/add-follower`, state, config);
    } else {
      response = await axios.post(`${link}/remove-follower`, state, config);
    }
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function updateProfile(formData) {
  try {
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };

    const response = await axios.post(`${link}/update-profile`, formData, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
