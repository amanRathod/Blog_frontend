/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Tags from './tags';
import WriteBlogContext from '../../context/writeBlog';

const Title = () => {
  const { username } = useParams();
  const { imageSrc, setImageSrc, title, setTitle, coverPicture, setCoverPicture } =
    useContext(WriteBlogContext);

  const handleFileUpload = (e) => {
    const linkObject = e.target.files[0];
    const temperoryLink = URL.createObjectURL(linkObject);
    setImageSrc(temperoryLink);
    setCoverPicture(linkObject);
  };
  useEffect(() => {
    document.title = `${username}-Blog`;
  }, [username]);

  return (
    <>
      <input
        required="true"
        placeholder="Title ..."
        className="w-full bg-gray-background h-20 pl-6 mb-4 text-5xl focus:outline-none "
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="flex justify-between mb-4">
        {/* <div className="ml-4 h-10">
          <label className=" flex">
            <span className="text-gray-700 text-bold cursor-text">Category:</span>       
              <select className="form-select ml-2 rounded-md shadow-lg text-white bg-orange-base block w-full "
                onBlur={(e) => blog.setCategory(e.target.value)}
              >
                <option value="Web Development">Web Development</option>
                <option value="Android Development">Android Development</option>
                <option value="Operating System">Operating System</option>
              </select>
          </label>
        </div> */}
        <div className="">
          <img src={`${imageSrc || coverPicture}`} alt="Cover Photo" />
          <label className="btn pl-4 ml-4 btn-primary btn-block btn-lg bg-orange-base text-white  rounded-md shadow-lg px-3 py-1 mb-4">
            <input
              type="file"
              name="file"
              style={{ display: 'none' }}
              onChange={handleFileUpload}
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
  coverPicture: PropTypes.string,
  setTitle: PropTypes.func,
  setImageSrc: PropTypes.func,
  setCoverPicture: PropTypes.func
};
