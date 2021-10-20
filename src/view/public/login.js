/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as ROUTES from '../../constants/routes';
import FormInputEmail from '../../components/input/email';
import FormInputPassword from '../../components/input/password';
import ValidateEmail from '../../utilities/validation/email';
import { UserLogin } from '../../service/auth';
import notify from '../../components/public/notification';

export default function LoginView() {
  const [state, setState] = useState({
    email: '',
    password: '',
    error1: ''
  });

  const isInputEmpty = state.email === '' || state.password === '';
  const history = useHistory();

  const handleChange = (e) => {
    e.persist();
    if (e.target.name === 'email') {
      ValidateEmail({ value: e.target.value, setState });
    }
    setState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const _handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await UserLogin(state);
      notify(response);
      if (response.type === 'success') {
        localStorage.setItem('accessToken', response.token);
        history.push(ROUTES.HOME);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (
    <div className="row h-screen bg-gradient">
      <ToastContainer />
      <div className="glass-morphism">
        <h1 className="text-white font-black my-12 italic text-4xl tracking-widest font-mono">
          LOGIN
        </h1>
        <form className="box2 bg-white">
          <fieldset>
            <div>
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <FormInputEmail value={state.email} handleChange={handleChange} />
              {state.error1 && <p className="error">{state.error1}</p>}
            </div>
            <div>
              <div>
                <label htmlFor="password">Password</label>
              </div>
              <FormInputPassword value={state.password} handleChange={handleChange} />
            </div>
          </fieldset>

          <p className="pl-48 underline">
            <Link to={ROUTES.FORGOT_PASSWORD} className="text-color">
              forgot password
            </Link>
          </p>
          <div className="button">
            <button
              type="submit"
              onClick={_handleSubmit}
              className={`btn focus-ring ${isInputEmpty && 'opacity-70 cursor-not-allowed'}`}
              disabled={isInputEmpty}
            >
              Login
            </button>
          </div>
          <p className="mt-4">
            Don't have an account?{' '}
            <Link to={ROUTES.SIGNUP} className="text-color">
              Singup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}