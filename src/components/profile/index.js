import React,{ useContext } from 'react';
import UserContext from '../../context/user';
import Header from './header';
import Profile from './profile';

const Index = () => (
  const { user } = useContext(UserContext);
  
  <div>
    <Header user={ user } />
    <Profile user={ user } />
  </div>
);

export default Index;
