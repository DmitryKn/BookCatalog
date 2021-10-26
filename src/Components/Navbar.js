import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          Book Catalog
        </Link>
        <div className='d-flex justify-content-start'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
          <Link to='/books/newbook' className='nav-link'>
            AddBook{' '}
          </Link>
          <Link to='/about' className='nav-link'>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
