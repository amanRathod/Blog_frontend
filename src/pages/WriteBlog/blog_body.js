import React from 'react';
import WriteBlog from './write_Blog';
import Title from './title';
import Publish from './publish-button';
import Tags from './tags';

const BlogBody = () => (
  <div className="mt-10">
    <Title />
    <WriteBlog />
    <Tags />
    <Publish />
  </div>
);

export default BlogBody;
