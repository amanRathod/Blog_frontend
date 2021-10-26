/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import warning from '../../asserts/warning-sign.svg';

const ErrorFallback = ({ error, componentStack, resetErrorBoundary }) => (
  <div
    role="alert"
    className="flex justify-center items-center h-screen bg-darkMode-base text-darkMode-orange"
  >
    <img src={warning} alt="Loading..." />
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <pre>{componentStack}</pre>
    <button onClick={resetErrorBoundary} className="btn">
      Try again
    </button>
  </div>
);

export default ErrorFallback;

ErrorFallback.propTypes = {
  error: PropTypes.object.isRequired,
  componentStack: PropTypes.string.isRequired,
  resetErrorBoundary: PropTypes.func.isRequired
};
