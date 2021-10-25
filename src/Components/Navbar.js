import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container-fluid'>
          <Link to='/' className=''>
            Home
          </Link>
          <Link to='/books/newbook'>AddBook</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
