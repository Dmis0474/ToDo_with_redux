import actionNames from "../actions/actionNames";
import {
  handleSubmit,
  handleDelete,
  taskDone,
  editTasks,
  editSubmit,
} from "../actions/actionCreators";

const initialState = {
  todos: [],
  todosCopyForSearch:[],

};
export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            isDelete: false,
            isDone: false,
            isEdit: false,
            id: Math.random().toString(16).slice(2),
            deadline: action.deadline,
            tasksNow: action.tasksNow,
          },
        ],
      };

    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.id),
      };

    case "DONE":
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.id) {
            return { ...item, isDone: !item.isDone };
          }
          return item;
        }),
      };
    case "EDIT":
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.id) {
            return { ...item, isEdit: !item.isEdit };
          }
          return item;
        }),
      };
    case "EDIT_SUBMIT":
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.isEdit) {
            return {
              ...item,
              text: action.text,
              isDelete: false,
              isEdit: false,
              id: Math.random().toString(16).slice(2),
              deadline: action.deadline,
            };
          }
          return item;
        }),
      };

    case "SORT":
      const todosCopy = state.todos.map((a) => a);
      return {
        ...state,
        todos: todosCopy.sort((a, b) =>
          action.sortMethod === "date"
            ? a.text > b.text
              ? 1
              : -1
            : a.date > b.date
            ? 1
            : -1
        ),
      };

    case "SEARCH":
      
      const unmodifiedTodos = state.todos.filter((a) => a !== action.searchPhrase);
      console.log(unmodifiedTodos);
      console.log(action.searchPhrase)
        return {
          ...state,
          todosCopyForSearch: [...state.todos].filter((item) =>
            item.text.includes(action.searchPhrase))
          ,
        };
      

    default:
      return state;
  }
};
