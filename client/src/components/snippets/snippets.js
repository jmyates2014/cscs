import React, { Fragment, useContext } from 'react';
import SnippetContext from '../../context/Snippet/snippetContext';
import Snippetitem from './snippetitem';

const Snippets = () => {
  const snippetContext = useContext(SnippetContext);

  const { snippets, filtered } = snippetContext;

  if (snippets.lenght === 0) {
    <h4>Please Add A Snippet</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((snippet) => (
            <Snippetitem key={snippet.id} snippet={snippet} />
          ))
        : snippets.map((snippet) => (
            <Snippetitem key={snippet.id} snippet={snippet} />
          ))}
    </Fragment>
  );
};

export default Snippets;
