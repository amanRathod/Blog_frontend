import React, { useState } from 'react';
import WriteBlog from './write_Blog';
import Title from './title';
import Publish from './publish-button';

const BlogBody = () => (
  <div className="container  h-full mx-auto max-w-screen-lg">
    <Title />
    <WriteBlog />
    <Publish />
  </div>
);

export default BlogBody;
