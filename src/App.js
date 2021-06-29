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

const renderLoader = () => <p>Loading...</p>;

function App() {
  const user = UserAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={renderLoader()}>
          <Switch>
            {/* <PrivateRoute user={user} path={ROUTES.DASHBOARD}> */}
            <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
            {/* </PrivateRoute> */}

            {/* <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.LOGIN}> */}
            <Route path={ROUTES.LOGIN} component={Login} />
            {/* </IsUserLoggedIn> */}

            {/* <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.SIGNUP}> */}
            <Route path={ROUTES.SIGNUP} component={Signup} />
            {/* </IsUserLoggedIn> */}

            <Route path={ROUTES.PASS_FORGET} component={ForgetPassword} />
            <Route path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
