/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../components/public/notification';
import ValidateEmail from '../../utilities/validation/email';
import FormInputEmail from '../../components/input/email';
import * as ROUTES from '../../constants/routes';
import { UserForgotPassword } from '../../service/auth';

const ForgotPassword = () => {
  const [state, setState] = useState({
    email: '',
    error1: ''
  });
  const isInputEmpty = state.email === '' || state.error1 !== '';

  const handleChange = (e) => {
    e.persist();
    ValidateEmail({ value: e.target.value, setState });
    setState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const _handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await UserForgotPassword(state);
      state.email = '';
      notify(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="row h-screen bg-gradient">
      <ToastContainer />
      <div className="glass-morphism">
        <form onSubmit={_handleSubmit} className="box2 card-rounded">
          <fieldset>
            <div>
              <div>
                <label htmlFor="email" className="text-orange-fifty">
                  Email
                </label>
              </div>
              <FormInputEmail value={state.email} handleChange={handleChange} />
              {state.error1 && <p className="error">{state.error1}</p>}
            </div>
          </fieldset>
          <button
            disabled={isInputEmpty}
            type="submit"
            className={`btn focus-ring ${isInputEmpty && 'opacity-70 cursor-not-allowed'}`}
            onClick={_handleSubmit}
          >
            Submit
          </button>
          <div className="text-center text-color mt-4 underline">
            <Link to={ROUTES.LOGIN}>Back to login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
