import React, { useState, useEffect } from 'react';
import { manifest } from '../utils/helperFunctions';

const App = () => {
  const [title] = useState('Hello World React');

  useEffect(() => {
    manifest();
  });

  return (
    <h1>{title}</h1>
  );
};

export default App;
