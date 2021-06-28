import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserAuthListener from './hooks/user-auth-listener';
import UserContext from './context/user';
import * as ROUTES from './constants/routes';

const Login = lazy(() => import('./pages/login'));
const Signup = lazy(() => import('./pages/signup'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const ForgetPassword = lazy(() => import('./pages/forgetPassword'));

const renderLoader = () => <p>Loading...</p>;

function App() {
  const user = UserAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={renderLoader()}>
          <Switch>
            <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGNUP} component={Signup} />
            <Route path={ROUTES.PASS_FORGET} component={ForgetPassword} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
