import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as todoList } from './todoList/todoList-reducer';
import { reducer as details } from './details/details-reducer';


let reducer = combineReducers({
  todoList,
  details,
});

export default function() {
  return createStore(reducer, composeWithDevTools());
}