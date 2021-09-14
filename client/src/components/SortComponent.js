import React from 'react';

export const SortComponent = () => {
  return (
    <div className='bg-light'>
      <div className='container text-center py-4'>
        <div className='justify-content-md-center lead'>
          <div className='btn' role='group'>
            <button type='button' className='btn btn-warning mx-1'>
              All
            </button>
            <button type='button' className='btn btn-warning mx-1'>
              React
            </button>
            <button type='button' className='btn btn-warning mx-1'>
              HTML
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
