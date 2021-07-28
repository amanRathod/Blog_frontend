/* eslint-disable react/no-unused-prop-types */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const getProfileData = async () => {
      const { UserData, UserBlogs } = await getUserByUsername(username);
      setId(UserData._id);
      setFollowers(UserData.followers);
      setFollowing(UserData.following);
      setFullName(UserData.fullName);
      setImage(UserData.image);
      setBio(UserData.bio);
      setEmail(UserData.email);
      setBlog(UserBlogs);
    };
    if (username) {
      getProfileData(username);
    }
    return () => {
      getProfileData();
    };
  }, [username]);

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <ProfileContext.Provider
          value={{
            _id,
            email,
            fullName,
            image,
            bio,
            setBio,
            followers,
            following,
            setFollowers,
            setFollowing,
            username,
            blog
          }}
        >
          <UserProfile />
        </ProfileContext.Provider>
      </div>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string,
  user: PropTypes.object,
  followers: PropTypes.number,
  following: PropTypes.number,
  fullName: PropTypes.string,
  image: PropTypes.string,
  bio: PropTypes.string,
  email: PropTypes.string,
  setBio: PropTypes.func,
  setEmail: PropTypes.func,
  setFullName: PropTypes.func,
  setImage: PropTypes.func,
  setFollowers: PropTypes.func,
  setFollowing: PropTypes.func
};
