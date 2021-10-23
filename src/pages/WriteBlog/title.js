/* eslint-disable react/no-unused-prop-types */
import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import WriteBlogContext from '../../utilities/context/writeBlog';

const Title = () => {
  const { state, dispatch } = useContext(WriteBlogContext);

  const handleFileUpload = (e) => {
    const linkObject = e.target.files[0];
    const temperoryLink = URL.createObjectURL(linkObject);
    dispatch({ type: 'imageSrc', fieldName: 'imageSrc', payload: temperoryLink });
    dispatch({ type: 'coverPicture', fieldName: 'coverPicture', payload: linkObject });
  };

  return (
    <>
      <input
        required="true"
        placeholder="Title ..."
        className="w-full bg-gray-background dark:bg-darkMode-base dark:text-white dark:text-opacity-70 h-20 pl-6 mb-4 text-5xl focus:outline-none "
        value={state.title}
        onChange={(e) => dispatch({ type: 'title', fieldName: 'title', payload: e.target.value })}
      />
      <div className="flex justify-between mb-4">
        <div>
          <img src={state.imageSrc || state.coverPicture} alt="" />
          <label className="btn-transparent ml-5 ">
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
