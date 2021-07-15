import React, { useState } from 'react';
import WriteBlog from './write_Blog';

const Index = () => {
  const [bool, setBool] = useState();

  return (
    <>
      {/* <Header /> */}
      <WriteBlog />
    </>
  );
};

export default Index;
