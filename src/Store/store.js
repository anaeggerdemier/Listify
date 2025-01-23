import { createStore } from 'redux';


const initialState = {
  todos: [],
  user: null,
};


const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';


const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    default:
      return state;
  }
};


const store = createStore(todoReducer);

export default store;
