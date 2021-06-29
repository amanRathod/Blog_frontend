import { Redirect, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const IsUserLoggedIn = ({ user, loggedInPath, path, ...rest }) => {
  if (user) {
    return <Redirect to={loggedInPath} />;
  }
};

export default IsUserLoggedIn;
