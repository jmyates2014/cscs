import React from 'react';
import Snippets from '../../components/snippets/snippets';
import SnippetForm from '../../components/snippets/SnippetForm';

const home = () => {
  return (
    <div className='container mx-auto'>
      <SnippetForm />
      <Snippets />
    </div>
  );
};

export default home;
