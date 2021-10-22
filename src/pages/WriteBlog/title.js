/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Tags from './tags';
import WriteBlogContext from '../../utilities/context/writeBlog';

const Title = () => {
  const { username } = useParams();
  const { state, dispatch } = useContext(WriteBlogContext);

  const handleFileUpload = (e) => {
    const linkObject = e.target.files[0];
    const temperoryLink = URL.createObjectURL(linkObject);
    dispatch({ type: 'imageSrc', fieldName: 'imageSrc', payload: temperoryLink });
    dispatch({ type: 'coverPicture', fieldName: 'coverPicture', payload: linkObject });
  };
  useEffect(() => {
    document.title = `${username}-Blog`;
  }, [username]);

  return (
    <>
      <input
        required="true"
        placeholder="Title ..."
        className="w-full bg-gray-background dark:bg-darkMode-primary dark:text-white dark:text-opacity-70 h-20 pl-6 mb-4 text-5xl focus:outline-none "
        value={state.title}
        onChange={(e) => dispatch({ type: 'title', fieldName: 'title', payload: e.target.value })}
        required
      />
      <div className="flex justify-between mb-4">
        <div>
          <img src={`${state.imageSrc || state.picture}`} alt="" />
          <label className="btn pl-4 ml-4 btn-primary btn-block btn-lg bg-orange-base dark:bg-darkMode-orange dark:text-darkMode-base text-white  rounded-md shadow-lg px-3 py-1 mb-4">
            <input
              type="file"
              name="file"
              style={{ display: 'none' }}
              onChange={handleFileUpload}
              required
            />{' '}
            Add Cover Photo
          </label>
        </div>
      </div>
    </>
  );
};

export default Title;

Title.propTypes = {
  username: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  coverPicture: PropTypes.string
};
