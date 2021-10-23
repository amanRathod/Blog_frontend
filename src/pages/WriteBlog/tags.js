import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import '../../styles/global.css';
import { WithContext as ReactTags } from 'react-tag-input';
import WriteBlogContext from '../../utilities/context/writeBlog';

const Geeks = [
  { id: 'react', text: 'react' },
  { id: 'react-hooks', text: 'react-hooks' },
  { id: 'javascript', text: 'javascript' },
  { id: 'aws', text: 'aws' },
  { id: 'draftjs', text: 'draftjs' },
  { id: 'python', text: 'python' },
  { id: 'c++', text: 'c++' },
  { id: 'data-structure', text: 'data-structure' }
];

const KeyCodes = {
  comma: 188,
  enter: 13,
  space: 32,
  tab: 9
};
const delimiters = [KeyCodes.comma, KeyCodes.enter, KeyCodes.space, KeyCodes.tab];

const Tags = () => {
  const { state, dispatch } = useContext(WriteBlogContext);

  const handleDelete = (i) => {
    dispatch({
      type: 'tags',
      fieldName: 'tags',
      payload: state.tags.filter((tag, index) => index !== i)
    });
  };

  const handleAddition = (tag) => {
    dispatch({ type: 'tags', fieldName: 'tags', payload: [...state.tags, tag] });
  };
  const handleDrag = (tag, currPos, newPos) => {
    const newTags = state.tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    dispatch({ type: 'tags', fieldName: 'tags', payload: newTags });
  };

  return (
    <div className="w-full  pl-6 mb-4 text-xl focus:outline-none ">
      <label htmlFor="full-name" className="profile-label text-xl pt-10">
        Enter Tags
      </label>
      <ReactTags
        tags={state.tags}
        suggestions={Geeks}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        inputFieldPosition="bottom"
        autocomplete
        className="bg-orange-fifty"
        placeholder="Press enter to add tag "
      />
    </div>
  );
};
export default Tags;

Tags.prototype = {
  tags: PropTypes.array,
  handleDelete: PropTypes.func,
  handleAddition: PropTypes.func,
  handleDrag: PropTypes.func,
  suggestions: PropTypes.array,
  delimiters: PropTypes.array,
  autocomplete: PropTypes.bool,
  inputFieldPosition: PropTypes.string,
  placeholder: PropTypes.string
};
