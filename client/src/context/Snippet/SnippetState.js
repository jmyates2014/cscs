import React, { useReducer } from 'react';
import uuid from 'uuid';
import snippetContext from './snippetContext';
import snippetReducer from './snippetReducer';
import {
  ADD_SNIPPET,
  DELETE_SNIPPET,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_SNIPPET,
  FILTER_SNIPPET,
  CLEAR_FILTER,
} from '../types';

const SnippetState = (props) => {
  const initialState = {
    snippets: [
      {
        id: 1,
        name: 'HTML 5 Boilerplate',
        description: 'This will scaffold out a complete HTML5 Boilerplate',
        content: '<html></html>',
        platform: 'HTML',
        icon: 'fab fa-html5 text-danger',
      },
      {
        id: 2,
        name: 'RAFCE',
        description: 'Scaffolds a react componenet and exports it',
        content: 'RAFCE',
        platform: 'React',
        icon: 'fab fa-react text-primary',
      },
      {
        id: 3,
        name: 'JavaScript Loop Function',
        description: 'This will scaffold out a complete HTML5 Boilerplate',
        content: 'This will create a loop or map function from Javascript',
        platform: 'JavaScript',
        icon: 'fab fa-js-square text-warning',
      },
    ],
  };

  const [state, dispatch] = useReducer(snippetReducer, initialState);

  //Add Snippet

  //Delete Snippet

  //Set Current Snippet

  //Clear Current Snipet

  //Update Snippet

  //Filter Snippet

  //Clear Snippet

  return (
    <snippetContext.Provider
      value={{
        snippets: state.snippets,
      }}
    >
      {props.children}
    </snippetContext.Provider>
  );
};

export default SnippetState;
