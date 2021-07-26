import React, { useState } from 'react';
import WriteBlog from './write_Blog';
import Title from './title';
import Publish from './publish-button';
import Tags from './tags';

const BlogBody = () => (
  <div className="container  h-full mx-auto max-w-screen-lg">
    <Title />
    <WriteBlog />
    <Tags />
    <Publish />
  </div>
);

export default BlogBody;
