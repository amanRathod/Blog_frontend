/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import UserContext from '../context/user';
import UserProfile from '../components/profile';
import Header from '../components/header';
import { getUserByUsername } from '../service/backened_call';
import ProfileContext from '../context/profile';

const Profile = () => {
  const { username } = useParams();
  const { user } = useContext(UserContext);

  const [_id, setId] = useState();
  const [followers, setFollowers] = useState();
  const [following, setFollowing] = useState();
  const [fullName, setFullName] = useState();
  const [image, setImage] = useState();
  const [bio, setBio] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    async function getUser(username) {
      const UserData = await getUserByUsername(username);
      setId(UserData._id);
      setFollowers(UserData.followers);
      setFollowing(UserData.following);
      setFullName(UserData.fullName);
      setImage(UserData.image);
      setBio(UserData.bio);
      setEmail(UserData.email);
    }

    getUser(username);

    return () => {
      getUser();
    }
  }, [username]);


  return (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <ProfileContext.Provider
          value={{ _id, email, fullName, image, bio, setBio, followers, following, setFollowers, setFollowing }}
        >
          <UserProfile loggedInUser={user} />
        </ProfileContext.Provider>
      </div>
    </div>
  );
};

export default Profile;
