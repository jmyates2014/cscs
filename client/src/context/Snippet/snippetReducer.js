import {
  ADD_SNIPPET,
  DELETE_SNIPPET,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_SNIPPET,
  FILTER_SNIPPET,
  CLEAR_FILTER,
} from '../types';

const snippetReducer = (state, action) => {
  switch (action.type) {
    case ADD_SNIPPET:
      return {
        ...state,
        snippets: [...state.snippets, action.payload],
      };
    case UPDATE_SNIPPET:
      return {
        ...state,
        snippets: state.snippets.map((snippet) =>
          snippet.id === action.payload.id ? action.payload : snippet
        ),
        current: null,
      };
    case DELETE_SNIPPET:
      return {
        ...state,
        snippets: state.snippets.filter(
          (snippet) => snippet.id !== action.payload
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_SNIPPET:
      return {
        ...state,
        filtered: state.snippets.filter((snippet) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return snippet.name.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};

export default snippetReducer;
