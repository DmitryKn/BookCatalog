import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link to='/'>Home </Link>
        <Link to='/books/newbook'>AddBook</Link>
      </nav>
    </div>
  );
};

export default Navbar;
