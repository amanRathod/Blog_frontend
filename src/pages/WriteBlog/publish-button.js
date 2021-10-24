import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import WriteBlogContext from '../../utilities/context/writeBlog';
import { createBlog, updateBlog } from '../../service/blog';
import * as ROUTES from '../../constants/routes';
import notify from '../../components/public/notification';

const Publish = () => {
  const { state, dispatch, blogData } = useContext(WriteBlogContext);
  const history = useHistory();

  const handlePublish = async (e) => {
    e.preventDefault();
    try {
      if (state.title === '' || state.tags.length === 0 || state.content === '') {
        if (state.title === '') {
          notify({ type: 'warning', message: 'Title is required' });
        }
        if (state.tags.length === 0) {
          notify({ type: 'warning', message: 'Tags is required' });
        }
        if (state.content === '') {
          notify({ type: 'warning', message: 'Content is required' });
        }
        return;
      }
      const formData = new FormData();
      formData.append('title', state.title);
      formData.append('tag', JSON.stringify(state.tags));
      formData.append('file', state.coverPicture);
      formData.append('content', state.content);
      formData.append('status', state.status);

      const response = await createBlog(formData);
      notify(response);
      history.push(ROUTES.DASHBOARD);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('file', state.coverPicture);
      formData.append('title', state.title);
      formData.append('tag', JSON.stringify(state.tags));
      formData.append('content', state.content);
      formData.append('status', state.status);
      formData.append('blogId', blogData._id);

      if (state.title === '' || state.tags.length === 0 || state.content === '') {
        if (state.title === '') {
          notify({ type: 'warning', message: 'Title is required' });
        }
        if (state.tags.length === 0) {
          notify({ type: 'warning', message: 'Tags is required' });
        }
        if (state.content === '') {
          notify({ type: 'warning', message: 'Content is required' });
        }
        return;
      }

      const response = await updateBlog(formData);
      notify(response);
      history.push(ROUTES.DASHBOARD);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex-col mb-10 ml-28 sm:ml-56 md:ml-80 lg:ml-96">
        {!blogData ? (
          <button className="btn-blog" type="submit" onClick={handlePublish}>
            Publish
          </button>
        ) : (
          <button className="btn-blog" type="submit" onClick={handleSave}>
            Save
          </button>
        )}
        <select
          className="form-select px-4 py-2 mt-4 font-bold rounded-full shadow-lg ml-4 border-collapse  border-r-full text-white bg-black-base hover:bg-black-dark "
          onBlur={(e) => dispatch({ type: 'status', fieldName: 'status', payload: e.target.value })}
        >
          <option value="Public">Public</option>
          <option value="Private">Private</option>
        </select>
      </div>
    </>
  );
};

export default Publish;

Publish.propTypes = {
  state: PropTypes.shape({
    title: PropTypes.string,
    tags: PropTypes.array,
    coverPicture: PropTypes.object,
    content: PropTypes.string,
    status: PropTypes.string
  })
};
