import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserAuthListener from './hooks/user-auth-listener';
import UserContext from './context/user';
import * as ROUTES from './constants/routes';
import PrivateRoute from './helper/private-route.js';
import IsUserLoggedIn from './helper/is-user-loggedIn';

const Login = lazy(() => import('./pages/login'));
const Signup = lazy(() => import('./pages/signup'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const ForgetPassword = lazy(() => import('./pages/forgetPassword'));
const ResetPassword = lazy(() => import('./pages/resetPassword'));
const Profile = lazy(() => import('./components/profile/profile'));

const renderLoader = () => <p>Loading...</p>;

function App() {
  const user = UserAuthListener();
  console.log('userrrrrr', user);
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={renderLoader()}>
          <Switch>
            <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGNUP} component={Signup} />
            <Route path={ROUTES.PASS_FORGET} component={ForgetPassword} />
            <Route path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
            <Route path={ROUTES.PROFILE} component={Profile} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;