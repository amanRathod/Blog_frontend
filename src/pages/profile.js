/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import UserContext from '../context/user';
import UserProfile from '../components/profile';
import Header from '../components/header';
import { getUserByUsername } from '../service/backened_call';

const Profile = () => {
  const { username } = useParams();
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [users, setUsers] = useState({});

  useEffect(() => {
    async function getUser(username) {
      const UserData = await getUserByUsername(username);
      console.log('user profile data',UserData.data);
      console.log('user profile da',user);
      setUsers(UserData.data);
    }

    getUser(username)
  }, [])

  console.log('usersss',users)

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <UserProfile user={users} />
      </div>
    </div>
  );
};

export default Profile;
