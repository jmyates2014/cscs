import React from 'react';
import SnippetContext from '../../context/Snippet/snippetContext';
import { useContext } from 'react';
import { set } from 'mongoose';

const Snippetitem = ({ snippet }) => {
  const snippetContext = useContext(SnippetContext);

  const { deleteSnippet, setCurrent, clearCurrent } = snippetContext;

  const { id, name, description, content, icon } = snippet;

  const onDelete = () => {
    deleteSnippet(id);
    clearCurrent();
  };

  return (
    <div className='container border-2 rounded-md overflow-hidden my-5 text-lg'>
      <div className='bg-gray-100 p-2'>
        <div className='inline-block px-3 text text-2xl align-middle'>
          <i className={icon}></i>
        </div>
        <div className='inline-block align-middle'>{name}</div>
      </div>

      <div className='container p-5'>Description: {description}</div>
      <div className='container p-5 bg-gray-900 text-white'>
        <pre>
          <code>{content}</code>
        </pre>
      </div>
      <div className='bg-gray-200 pl-5'>
        <button className='col inline-block text-xs mr-2' onClick={onDelete}>
          Delete
        </button>
        <button
          className='col inline-block text-xs'
          onClick={() => {
            setCurrent(snippet);
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Snippetitem;
