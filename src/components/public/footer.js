import React from 'react';
import { ArrowUpIcon } from '@heroicons/react/solid';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => (
  <>
    <footer className="footer">
      <div className="mx-auto mb-6 lg:mb-8 flex justify-between">
        <h1 className="font-bold dark-nine text-4xl">Blog</h1>
        <a
          onClick={() => window.scrollTo(0, 0)}
          aria-hidden="true"
          className=" text-color opacity-70 row"
        >
          <span>Return to top</span>
          <ArrowUpIcon className="w-6 h-6" />
        </a>
      </div>
      <div className="footer-follow">
        <div className="footer-grid">
          <div className="md:col-span-1 py-1 md:pr-4 dark:border-grey-seven md:border-r-2">
            <h5 className="text-xl font-semibold dark-nine">Follow On</h5>
          </div>
          <nav className="col-span-4 col-start-2 md:pl-12 lg:pl-24">
            <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-12">
              <li>
                <a href="https://twitter.com/amanrathod07" className="footer-icon">
                  <FaTwitter className="h-6 w-6" />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aman-kumar-singh-24b054195/"
                  className="footer-icon"
                >
                  <FaLinkedinIn className="h-6 w-6" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/amanRathod" className="footer-icon">
                  <FaGithub className="h-6 w-6" />
                  <span>Github</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer-copyright">
        <p className="text-sm dark-nine text-center md:text-left">
          &copy;2021 Blog. All rights reserved
        </p>
      </div>
    </footer>
  </>
);

export default Footer;
