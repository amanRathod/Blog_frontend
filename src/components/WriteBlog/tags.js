import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/global.css';
import { WithContext as ReactTags } from 'react-tag-input';
import WriteBlogContext from '../../context/writeBlog';

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

const suggestions = Geeks.map((geek) => ({
  id: geek,
  text: geek
}));

const KeyCodes = {
  comma: 188,
  enter: 13,
  space: 32,
  tab: 9
};
const delimiters = [KeyCodes.comma, KeyCodes.enter, KeyCodes.space, KeyCodes.tab];

const Tags = () => {
  const { tags, setTags } = useContext(WriteBlogContext);

  // const [tags, setTags] = useState([]);
  console.log('tagssss', tags);

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  return (
    <div className="w-full bg-gray-background h-20 pl-6 mb-4 text-xl focus:outline-none ">
      <ReactTags
        tags={tags}
        suggestions={Geeks}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        inputFieldPosition="bottom"
        autocomplete
        placeholder="Press enter to add tag"
      />
    </div>
  );
};
export default Tags;
