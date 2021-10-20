import React, { useEffect, useReducer } from 'react';
import Header from '../../components/private/header';
import UserDataContext from '../../utilities/context/userData';
import { GetUserData } from '../../service/user';

const Home = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'fullName': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'username': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'image': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'bio': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'email': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'followers': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'following': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'allBlog': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'userBlog': {
        return { ...state, [action.fieldName]: action.payload };
      }
      default: {
        return state;
      }
    }
  };

  const InitialState = {
    fullName: '',
    username: '',
    image: '',
    bio: '',
    email: '',
    followers: [],
    following: [],
    allBlog: [],
    userBlog: []
  };

  const [state, dispatch] = useReducer(reducer, InitialState);

  const fetchData = async () => {
    try {
      // get logged-In user Data
      const response = GetUserData();

      const { data, allBlog } = response;
      // store the response data to their respective state
      dispatch({ type: 'fullName', fieldName: 'fullName', payload: data.fullName });
      dispatch({
        type: 'username',
        fieldName: 'username',
        payload: data.username
      });
      dispatch({ type: 'image', fieldName: 'image', payload: data.image });
      dispatch({ type: 'bio', fieldName: 'bio', payload: data.bio });
      dispatch({ type: 'email', fieldName: 'email', payload: data.email });
      dispatch({
        type: 'followers',
        fieldName: 'followers',
        payload: data.followers
      });
      dispatch({
        type: 'following',
        fieldName: 'following',
        payload: data.following
      });
      dispatch({ type: 'allBlog', fieldName: 'allBlog', payload: allBlog });
      dispatch({ type: 'userBlog', fieldName: 'userBlog', payload: data.userBlog });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = 'Home';
    fetchData();
    // update data for every 10 second
    const interval = setInterval(() => {
      fetchData();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <UserDataContext.Provider value={(state, dispatch)}>
        <Header />
      </UserDataContext.Provider>
    </>
  );
};

export default Home;
