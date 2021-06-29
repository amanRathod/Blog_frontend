import { Redirect, Route, usehistory } from 'react-router-dom';

const PrivateRoute = ({ user, path }) => {
  if (user) {
    return <Redirect to={path} />;
  }
};
