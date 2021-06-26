import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import * as ROUTES from './constants/routes';

const Login = lazy(() => import('./pages/login'));
const Signup = lazy(() => import('./pages/signup'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const ForgetPassword = lazy(() => import('./pages/forgetPassword'));

const renderLoader = () => <p>Loading...</p>;

function App() {
  return (
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
  );
}

export default App;
