import React, { useContext, useEffect } from 'react';
import parse from 'html-react-parser';
import Appreciate from './appreciate';
import BlogContext from '../../utilities/context/blogs';
import PostsHeader from '../blogs/postsHeader';
import Comments from './comments';

const ReadBlog = () => {
  const { state, dispatch } = useContext(BlogContext);
  useEffect(() => {
    document.title = 'Blog';
  }, []);

  return (
    <>
      <div className="mt-5">
        {state.photo && 
          <div className="flex justify-center mr-28">
            <img className ="h-96" src={`${state.photo}`} alt="" />
          </div>
          }
        <div className="mt-4 font-bold text-6xl mb-4">{state.title}</div>

        {state.tags.map((tag) => (
          <li key={tag.id} className="tag">
            #{tag.text}
          </li>
        ))}
        <div className=" grid grid-cols-6 mt-2">
          <div className="container col-span-6 md:col-span-5 bg-orange-fifty dark:bg-darkMode-primary dark:text-white shadow-sm p-10">
            <PostsHeader userData={state.userData} date={state.updatedAt} />
            <div className="mt-4 text-lg ">{parse(state.content)}</div>
          </div>
          <div className=" md:col-span-1">
            <Appreciate state={state} dispatch={dispatch} />
          </div>
        </div>
        <div className="bg-gray-background dark:bg-darkMode-base mt-4 p-10">
          <Comments state={state} dispatch={dispatch} />
        </div>
      </div>
    </>
  );
};

export default ReadBlog;
