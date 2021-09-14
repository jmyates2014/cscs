import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className='bg-dark navbar-expand-sm navbar navbar-dark shadow p-3'>
      <div className='container'>
        <div className='navbar-brand'>
          <Link to='/' className='nav-link'>
            <i className='fas fa-code me-2'></i>
            <span className='text-white'>
              Code Snippet
              <span className='text-secondary link-secondary'>
                {' '}
                sCheat Sheet
              </span>
            </span>
          </Link>
        </div>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='About' className='nav-link'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
