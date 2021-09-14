import React, { Fragment, useContext } from 'react';
import SnippetContext from '../../context/Snippet/snippetContext';
import Snippetitem from './snippetitem';

const Snippets = () => {
  const snippetContext = useContext(SnippetContext);

  const { snippets } = snippetContext;

  return (
    <Fragment>
      {snippets.map((snippet) => (
        <Snippetitem key={snippet.id} snippet={snippet} />
      ))}
    </Fragment>
  );
};

export default Snippets;
