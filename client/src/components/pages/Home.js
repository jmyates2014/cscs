import React from 'react';
import Snippets from '../../components/snippets/snippets';
import SnippetForm from '../../components/snippets/SnippetForm';
import SnippetFilter from '../snippets/SnippetFilter';

const home = () => {
  return (
    <div className='container mx-auto max-w-screen-l'>
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-9'>
          <Snippets />
        </div>
        <div className='col-span-3'>
          <SnippetFilter />
          <SnippetForm />
        </div>
      </div>
    </div>
  );
};

export default home;
