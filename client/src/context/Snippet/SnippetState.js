import React, { useReducer } from 'react';
import snippetContext from './snippetContext';
import snippetReducer from './snippetReducer';
import { v4 as uuidv4 } from 'uuid';
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
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(snippetReducer, initialState);

  //Add Snippet
  const addSnippet = (snippet) => {
    snippet.id = uuidv4;
    dispatch({ type: ADD_SNIPPET, payload: snippet });
  };

  //Delete Snippet
  const deleteSnippet = (id) => {
    dispatch({ type: DELETE_SNIPPET, payload: id });
  };

  //Set Current Snippet
  const setCurrent = (snippet) => {
    dispatch({ type: SET_CURRENT, payload: snippet });
  };

  //Clear Current Snipet
  const clearCurrent = (snippet) => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //Update Snippet
  const updateSnippet = (snippet) => {
    dispatch({ type: UPDATE_SNIPPET, payload: snippet });
  };

  //Filter Snippet
  const filterSnippet = (text) => {
    dispatch({ type: FILTER_SNIPPET, payload: text });
  };

  //Clear Snippet
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <snippetContext.Provider
      value={{
        snippets: state.snippets,
        current: state.current,
        filtered: state.filtered,
        addSnippet,
        deleteSnippet,
        setCurrent,
        clearCurrent,
        updateSnippet,
        filterSnippet,
        clearFilter,
      }}
    >
      {props.children}
    </snippetContext.Provider>
  );
};

export default SnippetState;
