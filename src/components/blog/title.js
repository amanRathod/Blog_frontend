/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import WriteBlogContext from '../../context/writeBlog';

const Title = () => {
  const { username } = useParams();
  const blog = useContext(WriteBlogContext);

  // const [title, setTitle] = useState('');
  // const [tags, setTags] = useState('');

  useEffect(() => {
    document.title = `${username}-Blog`;
  }, [username]);

  return (
    <>
      <input
      required="true"
        placeholder="Title ..."    
        className="w-full bg-gray-background h-20 pl-6 mb-4 text-xl focus:outline-none "
        value={blog.title}
        onChange={(e) => blog.setTitle(e.target.value)}
      />
      <div className="flex justify-between mb-4">
        <div className="ml-4 h-10">
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
        </div>
        <div className="mr-4">
          <input 
            required='true'
            placeholder="#tag1, #tag2 .."
            className="h-10 bg-gray-background focus:outline-none"
            value={blog.tags}
            onChange={(e) => blog.setTags(e.target.value) }

          />
        </div>
      </div>
    </>
  );
};

export default Title;
