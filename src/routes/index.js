import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import UserAuthListener from '../constants/user-auth-listener';
import Theme from '../constants/theme';
import UserContext from '../utilities/context/user';
import ThemeContext from '../utilities/context/theme';
import * as ROUTES from '../constants/routes';

import PublicRoute from './public-route';
import PrivateRoute from './private-route';

const Login = lazy(() => import('../view/public/login'));
const Signup = lazy(() => import('../view/public/register'));
const Dashboard = lazy(() => import('../pages/dashboard'));
const ForgetPassword = lazy(() => import('../view/public/forgot-password'));
const ResetPassword = lazy(() => import('../view/public/set-password'));
const Profile = lazy(() => import('../pages/profile'));
const WriteBlog = lazy(() => import('../components/WriteBlog'));
const ReadStory = lazy(() => import('../components/blogContainer'));
const Setting = lazy(() => import('../components/profile/editProfile'));

const renderLoader = () => <p>Loading...</p>;

function App() {
  const user = UserAuthListener();
  const { theme, setTheme } = Theme();
  return (
    <UserContext.Provider value={{ user }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Router>
          <Suspense fallback={renderLoader()}>
            <Switch>
              <PublicRoute path={ROUTES.LOGIN} component={Login} />
              <PublicRoute path={ROUTES.SIGNUP} component={Signup} />
              <PublicRoute path={ROUTES.FORGOT_PASSWORD} component={ForgetPassword} />
              <PublicRoute path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
              <PrivateRoute path={ROUTES.DASHBOARD} component={Dashboard} exact />
              <PrivateRoute path={ROUTES.PROFILE} component={Profile} />
              <PrivateRoute path={ROUTES.WRITE_BLOG} component={WriteBlog} />
              <PrivateRoute path={ROUTES.READ_STORY} component={ReadStory} />
              <PrivateRoute path={ROUTES.SETTING} component={Setting} />
            </Switch>
          </Suspense>
        </Router>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
