import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className='bg-gray-900'>
      <div className='container mx-auto grid grid-cols-2 gap-4 items-center py-3'>
        <div className='text-2xl py-2 col'>
          <Link to='/' className=''>
            <i className='fas fa-code me-2 text-white pr-2'></i>
            <span className='text-gray-200'>
              Code Snippet
              <span className='text-gray-400'> Cheat Sheet</span>
            </span>
          </Link>
        </div>
        <ul className='flex justify-end'>
          <li className='inline-block'>
            <Link to='/' className='text-gray-200 mx-3'>
              Home
            </Link>
          </li>
          <li className='inline-block'>
            <Link to='About' className='text-gray-200 inline-block'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
