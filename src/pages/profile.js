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
  const [profile, setProfile] = useState({});

  const [_id, setId] = useState(profile._id);
  const [followers, setFollowers] = useState(profile.followers);
  const [following, setFollowing] = useState(profile.following);
  const [fullName, setFullName] = useState(profile.fullName);
  const [image, setImage] = useState(profile.image);
  const [bio, setBio] = useState(profile.bio);

  useEffect(() => {
    async function getUser(username) {
      const UserData = await getUserByUsername(username);
      setId(UserData.data._id);
      setFollowers(UserData.data.followers);
      setFollowing(UserData.data.following);
      setFullName(UserData.data.fullName);
      setImage(UserData.data.image);
      setBio(UserData.data.bio);
    }

    getUser(username);
  }, [username]);


  return (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <ProfileContext.Provider
          value={{ _id, fullName, image, bio, setBio, followers, following, setFollowers, setFollowing }}
        >
          <UserProfile loggedInUser={user} />
        </ProfileContext.Provider>
      </div>
    </div>
  );
};

export default Profile;
