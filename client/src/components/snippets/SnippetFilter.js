import React, { useContext, useRef, useEffect } from 'react';
import SnippetContext from '../../context/Snippet/snippetContext';

const SnippetFilter = () => {
  const snippetContext = useContext(SnippetContext);
  const text = useRef('');

  const { filterSnippet, clearFilter, filtered } = snippetContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterSnippet(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Snippets'
        onChange={onChange}
      />
    </form>
  );
};
export default SnippetFilter;
