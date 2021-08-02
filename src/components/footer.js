import React from 'react';
import PropTypes from 'prop-types';

const Footer = () => {
  const [bool, setBool] = React.useState(false);
  return (
    <>
      <div className=" footer dark:bg-darkMode-primary py-24 mt-8">
        <div className="container">
          <h1 className="text-orange-base font-extrabold  text-4xl text-center">BLOG</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
