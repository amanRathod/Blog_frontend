import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserAuthListener from './hooks/user-auth-listener';
import Theme from './hooks/theme';
import UserContext from './context/user';
import ThemeContext from './context/theme';
import * as ROUTES from './constants/routes';

const Login = lazy(() => import('./pages/login'));
const Signup = lazy(() => import('./pages/signup'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const ForgetPassword = lazy(() => import('./pages/forgetPassword'));
const ResetPassword = lazy(() => import('./pages/resetPassword'));
const Profile = lazy(() => import('./pages/profile'));
const WriteBlog = lazy(() => import('./components/WriteBlog'));
const ReadStory = lazy(() => import('./components/blogContainer'));
const Setting = lazy(() => import('./components/profile/editProfile'));

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
              <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
              <Route path={ROUTES.LOGIN} component={Login} />
              <Route path={ROUTES.SIGNUP} component={Signup} />
              <Route path={ROUTES.PASS_FORGET} component={ForgetPassword} />
              <Route path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
              <Route path={ROUTES.PROFILE} component={Profile} />
              <Route path={ROUTES.WRITE_BLOG} component={WriteBlog} />
              <Route path={ROUTES.READ_STORY} component={ReadStory} />
              <Route path={ROUTES.SETTING} component={Setting} />
            </Switch>
          </Suspense>
        </Router>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
