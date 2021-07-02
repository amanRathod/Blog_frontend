import React, { useEffect, useState } from 'react';

const UserAuthListener = () => {
  const [user, setUser] = useState({});

  const UserExists = () => {
    const userExists = localStorage.getItem('user');
    if (userExists) {
      setUser(JSON.parse(userExists));
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    UserExists();
  }, []);
  console.log('userrrr', user);
  return user;
};
export default UserAuthListener;