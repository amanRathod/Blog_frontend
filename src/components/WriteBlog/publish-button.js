/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import WriteBlogContext from '../../context/writeBlog';
import { addBlog } from '../../service/post_backenedCalls';
import { saveBlog } from '../../service/put_backenedCall';
import * as ROUTES from '../../constants/routes';

const Publish = () => {
  const blog = useContext(WriteBlogContext);
  const history = useHistory();

  const handlePublish = async (e) => {
    e.preventDefault();
    try {
      const response = await addBlog(blog);
      history.push(ROUTES.DASHBOARD);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await saveBlog(blog);
      history.push(ROUTES.DASHBOARD);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex">
        {!blog.blogData ? (
          <button
            className="px-4 py-2 mt-4 font-bold rounded-full shadow-lg ml-4 border-collapse border-r-full text-white bg-orange-base hover:bg-red-secondary "
            type="submit"
            onClick={handlePublish}
          >
            Publish
          </button>
        ) : (
          <button
            className="px-4 py-2 mt-4 font-bold rounded-full shadow-lg ml-4 border-collapse border-r-full text-white bg-orange-base hover:bg-red-secondary "
            type="submit"
            onClick={handleSave}
          >
            Save
          </button>
        )}
        <select
          className="form-select px-4 py-2 mt-4 font-bold rounded-full shadow-lg ml-4 border-collapse  border-r-full text-white bg-black-base hover:bg-black-dark "
          onBlur={(e) => blog.setStatus(e.target.value)}
        >
          <option value="Public">Public</option>
          <option value="Private">Private</option>
        </select>
      </div>
      {/* <div>{blog.content}</div> */}
    </>
  );
};

export default Publish;
