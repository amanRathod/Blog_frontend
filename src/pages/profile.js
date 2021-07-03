import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import UserContext from '../context/user';
import UserProfile from '../components/profile';
import Header from '../components/header';

const Profile = () => {
  const { username } = useParams();
  const history = useHistory();
  const { user } = useContext(UserContext);

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <UserProfile user={user} />
      </div>
    </div>
  );
};
