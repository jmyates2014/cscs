import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((snippet) => (
              <CSSTransition key={snippet.id} timeout={300} classNames='item'>
                <Snippetitem snippet={snippet} />
              </CSSTransition>
            ))
          : snippets.map((snippet) => (
              <CSSTransition key={snippet.id} timeout={300} classNames='item'>
                <Snippetitem snippet={snippet} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Snippets;
