import React from 'react';

export const Navbar = () => {
  return (
    <header className='bg-dark navbar-expand-sm navbar navbar-dark shadow p-3'>
      <div className='container'>
        <div className='navbar-brand'>CSCS</div>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link active' aria-current='page' href='/'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/'>
              Login
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
