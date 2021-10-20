/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormInputEmail from '../../components/input/email';
import FormInputPassword from '../../components/input/password';
import FormInputName from '../../components/input/name';
import ValidateEmail from '../../utilities/validation/email';
import ValidatePassword from '../../utilities/validation/password';
import ValidateConfirmPassword from '../../utilities/validation/confirm-password';
import { UserRegister } from '../../service/auth';
import notify from '../../components/public/notification';
import * as ROUTES from '../../constants/routes';

export default function RegisterView() {
  const [state, setState] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    error1: '',
    error2: '',
    error3: ''
  });
  const isInputEmpty =
    state.fullName === '' ||
    state.username === '' ||
    state.email === '' ||
    state.password === '' ||
    state.confirmPassword === '' ||
    state.error1 !== '' ||
    state.error2 !== '' ||
    state.error3 !== '';

  const handleChange = (e) => {
    e.persist();
    switch (e.target.name) {
      case 'email':
        ValidateEmail({ value: e.target.value, setState });
        break;
      case 'password':
        ValidatePassword({ value: e.target.value, setState });
        break;
      case 'confirmPassword':
        ValidateConfirmPassword({ value: e.target.value, setState, password: state.password });
        break;
      default:
        break;
    }
    setState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const _handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await UserRegister(state);
      notify(response || {});
      state.fullName = '';
      state.username = '';
      state.email = '';
      state.password = '';
      state.confirmPassword = '';
    } catch (err) {
      notify(err);
    }
  };

  return (
    <div className="row h-screen bg-gradient">
      <ToastContainer />
      <div className="glass-morphism">
        <h1 className="text-white font-black my-12 italic text-4xl tracking-widest font-mono">
          SIGN-UP
        </h1>
        <form onSubmit={_handleSubmit} className="box2 bg-white">
          <fieldset>
            <div>
              <div>
                <label htmlFor="fullName">Full Name</label>
              </div>
              <FormInputName value={state.fullName} handleChange={handleChange} name="fullName" />
            </div>
            <div>
              <div>
                <label htmlFor="username">Role</label>
              </div>
              <FormInputName value={state.username} handleChange={handleChange} name="username" />
            </div>
            <div>
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <FormInputEmail value={state.email} handleChange={handleChange} />
              {state.error1 && <p className="error -pt-6">{state.error1}</p>}
            </div>
            <div>
              <div>
                <label htmlFor="password">Password</label>
              </div>
              <FormInputPassword value={state.password} handleChange={handleChange} />
              {state.error2 && <p className="error">{state.error2}</p>}
            </div>
            <div>
              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
              </div>
              <input
                type="password"
                name="confirmPassword"
                value={state.confirmPassword}
                className="input-control1"
                onChange={handleChange}
                required
              />
              {state.error3 && <p className="error">{state.error3}</p>}
            </div>
          </fieldset>
          <button
            disabled={isInputEmpty}
            type="submit"
            className={`btn focus-ring ${isInputEmpty && 'opacity-70  cursor-not-allowed'}`}
          >
            Register
          </button>
          <p className="break-normal mt-4">
            Already have an account?{' '}
            <Link to={ROUTES.LOGIN} className="text-color ">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
