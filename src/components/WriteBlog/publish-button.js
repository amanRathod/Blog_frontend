/* eslint-disable react/no-unused-prop-types */
/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import WriteBlogContext from '../../context/writeBlog';
import { addBlog } from '../../service/post_backenedCalls';
import { saveBlog } from '../../service/put_backenedCall';
import * as ROUTES from '../../constants/routes';
import UserContext from '../../context/user';

const Publish = () => {
  const { blogData, title, tags, coverPicture, content, status, setStatus } =
    useContext(WriteBlogContext);
  const history = useHistory();
  const { user } = useContext(UserContext);

  const handlePublish = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('tags', JSON.stringify(tags));
      formData.append('file', coverPicture);
      formData.append('content', content);
      formData.append('status', status);
      formData.append('userId', user.id);
      const response = await addBlog(formData);
      history.push(ROUTES.DASHBOARD);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('file', coverPicture);
      formData.append('title', title);
      formData.append('tags', JSON.stringify(tags));
      formData.append('content', content);
      formData.append('status', status);
      formData.append('blogId', blogData._id);
      const response = await saveBlog(formData);
      history.push(ROUTES.DASHBOARD);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex">
        {!blogData ? (
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
          onBlur={(e) => setStatus(e.target.value)}
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

Publish.propTypes = {
  blogData: PropTypes.object,
  title: PropTypes.string,
  tags: PropTypes.array,
  coverPicture: PropTypes.object,
  content: PropTypes.string,
  status: PropTypes.string,
  setStatus: PropTypes.func,
}