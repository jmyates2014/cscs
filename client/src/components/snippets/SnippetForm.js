import React, { useState } from 'react';

const SnippetForm = () => {
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

  return (
    <div>
      <form>
        <h2 className='text-primary'>Add Snippet</h2>
        <input
          type='text'
          placeholder='name'
          name='name'
          value={name}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='description'
          name='description'
          value={description}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='content'
          name='content'
          value={content}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='platform'
          name='platform'
          value={platform}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='icon'
          name='icon'
          value={icon}
          onChange={onChange}
        />
        <div>
          <input
            type='submit'
            value='Add Snippet'
            className='btn btn-primary'
          />
        </div>
      </form>
    </div>
  );
};

export default SnippetForm;
