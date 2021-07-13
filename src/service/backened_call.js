/* eslint-disable no-empty */
/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';
import { func } from 'prop-types';

export async function getUserByUserId(followers) {
  try {
    const responseObject = await axios.get(`http://localhost:4444/getData/userId/${followers}`);
    return responseObject;
  } catch (err) {
    console.error(err);
  }
}

export async function getAllPosts() {
  try {
    const responseObject = await axios.get(`http://localhost:4444/getData/allPosts`);
    return responseObject;
  } catch (err) {
    console.error(err);
  }
}

export async function getSingleUserByUserId(userId) {
  try {
    const response = await axios.get(`http://localhost:4444/getData/singleId/${userId}`);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function getPostsByUserId(userId) {
  try {
    const response = await axios.get(`http://localhost:4444/getData/postsBYId/${userId}`);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function getUserByUsername(username) {
  try {
    const response = await axios.get(`http://localhost:4444/getData/UserByUsername/${username}`);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function isUserFollow(loggedInUser, profileId) {
  try {
    const response = await axios.get(
      `http://localhost:4444/getData/UserFollow?loggedInUsername=${loggedInUser}&profileId=${profileId}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function togglefollowers(loggedInUsername, profileUsername, toggleValue) {
  try {
    const response = await axios.put(
      `http://localhost:4444/getData/changeFollower?loggedInUsername=${loggedInUsername}&profileUsername=${profileUsername}&toggleValue=${toggleValue}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function updateComment(blogId, comment, loggedInUserId) {
  try {
    const response = await axios.post(`http://localhost:4444/getData/postComment?blogId=${blogId}&comment=${comment}&loggedInUserId=${loggedInUserId}` );
    return response;
  } catch (err) {
    console.error(err);
  }

}

export async function getPostByPostId(Id) {
  try { 
    const response = await axios.get(`http://localhost:4444/getData/postById/${Id}`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function addLikesId(userId, blogId) {
  try {
    const response = await axios.post(`http://localhost:4444/getData/addLikesId?userId=${userId}&blogId=${blogId}`);
    console.log(response);
    return response.data
  } catch (err) {
    console.error(err)
  }
}

export async function addLikesIntoComments(blogId, userId) {
  try  {
    const response = await axios.post(`http://localhost:4444/getData/addLikesforComments?userId=${userId}&blogId=${blogId}`);
    return response.data;
  } catch(err) {
    console.error(err)
  }
}