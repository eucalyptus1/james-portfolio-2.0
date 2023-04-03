import React, { useState } from 'react';
import './App.css';

import Home from './components/Home.js';
import Header from './components/Header';
import Nav from './components/Header/Nav.js'
import Footer from './components/Footer';
import About from './components/About.js';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact.js';
// import Resume from './components/resume.js';


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

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    // return <Resume />;
  };

const [currentPage, setCurrentPage] = useState(pages[0]);

const handlePageChange = (page) => setCurrentPage(page);
  

  return (
    <div>
    <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
      <main>
        {/* <Home 
          pages={pages}
          handlePageChange={currentPage}
          currentPage={currentPage}/> */}

      {renderPage()}
      </main>
      <Footer />
      </div>
  );
}

export default App;
