import React, { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('Hello World React');

  return (
    <h1>{title}</h1>
  );
};

export default App;
