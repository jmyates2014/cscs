import React from 'react';

const Snippetitem = ({ snippet }) => {
  const { name, description, content, icon } = snippet;

  return (
    <div className='container mx-auto'>
      <div className='card-header fs-5'>
        <div className=''>
          <div className='pe-4 fs-1'>
            <i className={icon}></i>
          </div>
          <div className='pe-2'>{name}</div>
        </div>
      </div>

      <div className='container py-4'>Description: {description}</div>
      <div className='container bg-dark text-light p-5'>
        <pre>
          <code>{content}</code>
        </pre>
      </div>
    </div>
  );
};

export default Snippetitem;
