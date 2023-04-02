import React, { useState } from 'react';
import './App.css';

import Main from './components/Main.js';
import Nav from './components/Nav.js';

function App() {
  const [pages] = useState([
    {
      name: 'about'
    },
    {
      name: 'portfolio'
    },
    {
      name: 'contact'
    },
    {
      name: 'resume'
    }
  ]);

const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    <Nav
    pages={pages}
    setCurrentPage={currentPage}
    currentPage={currentPage}
    />
      <Main />
  );
}

export default App;
