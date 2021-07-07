/* eslint-disable no-empty */
/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';
import { func } from 'prop-types';

export async function getUserByUserId( followers ) {
    console.log('id', followers)
    try {
        const  responseObject = await axios.get(`http://localhost:4444/getData/userId/${followers}`)
        return responseObject;
    } catch (err) {
        console.log(err);
    }
    
} 

export async function getAllPosts() {
    try {
        const responseObject  = await axios.get(`http://localhost:4444/getData/allPosts`)
        console.log('All posts',responseObject);
        return responseObject;
    } catch (err) {
        console.log(err);
    }
}

export async function getSingleUserByUserId(userId) {
    try {
        const response = await axios.get(`http://localhost:4444/getData/singleId/${userId}`);
        return response;
    } catch (err) {
        console.error(err)
    }
}

export async function getPostsByUserId(userId) {
    try {
        console.log('backeend call id',userId)
        const response = await axios.get(`http://localhost:4444/getData/postsBYId/${userId}`);
        return response;
    } catch (err) {
        console.error(err)
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