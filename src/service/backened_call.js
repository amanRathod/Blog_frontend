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
        console.log()
        const responseObject  = await axios.get(`http://localhost:4444/getData/allPosts`)
        console.log(responseObject);
        return responseObject;
    } catch (err) {
        console.log(err);
    }
}