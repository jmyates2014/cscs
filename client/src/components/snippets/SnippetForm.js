import React, { useState, useContext, useEffect } from 'react';
import SnippetContext from '../../context/Snippet/snippetContext';
import { CLEAR_CURRENT } from '../../context/types';

const SnippetForm = () => {
  const snippetContext = useContext(SnippetContext);

  const { addSnippet, updateSnippet, clearCurrent, current } = snippetContext;

  useEffect(() => {
    if (current !== null) {
      setSnippet(current);
    } else {
      setSnippet({
        name: '',
        description: '',
        content: '',
        platform: '',
        icon: '',
      });
    }
  }, [snippetContext, current]);

  const [snippet, setSnippet] = useState({
    name: '',
    description: '',
    content: '',
    platform: '',
    icon: '',
  });

  const { name, description, content, platform, icon } = snippet;

  const onChange = (e) =>
    setSnippet({ ...snippet, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addSnippet(snippet);
    } else {
      updateSnippet(snippet);
    }
    addSnippet(snippet);
    setSnippet({
      name: '',
      description: '',
      content: '',
      platform: '',
      icon: '',
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <div className='container border-2 rounded-md my-5 text-lg shadow-sm p-5'>
      <h2 className='text-sm'>{current ? 'Edit Snippet' : 'Add Snippet'}</h2>
      <form onSubmit={onSubmit} className=''>
        <label htmlFor='name' className='text-xs'>
          Snippet Name:
        </label>
        <input
          className='w-full my-1 border-2 rounded-md p-1'
          type='text'
          placeholder='Snippet Name'
          name='name'
          value={name}
          onChange={onChange}
        />
        <input
          className='w-full my-1 border-2 rounded-md p-1'
          type='text'
          placeholder='description'
          name='description'
          value={description}
          onChange={onChange}
        />
        <input
          className='w-full my-1 border-2 rounded-md p-1'
          type='text'
          placeholder='content'
          name='content'
          value={content}
          onChange={onChange}
        />
        <input
          className='w-full my-1 border-2 rounded-md p-1'
          type='text'
          placeholder='platform'
          name='platform'
          value={platform}
          onChange={onChange}
        />
        <input
          className='w-full my-1 border-2 rounded-md p-1'
          type='text'
          placeholder='icon'
          name='icon'
          value={icon}
          onChange={onChange}
        />
        <div>
          <input
            className='w-full border-2 rounded-md p-2 mt-2'
            type='submit'
            value={current ? 'Update Snippet' : 'Add Snippet'}
          />
        </div>
        {current && (
          <div>
            <button onClick={clearAll}>Clear</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default SnippetForm;
