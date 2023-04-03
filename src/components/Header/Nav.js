import React, { useState } from 'react';


function Nav({ currentPage, handlePageChange }) {

    



    return (

            <ul>
            <li>
                <a href="#about" onClick={() => handlePageChange('About')}>About Me</a>
            </li>
            <li>
                <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
            </li>
            <li>
                <a href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a>
            </li>
            </ul>
      
    );
}

export default Nav;