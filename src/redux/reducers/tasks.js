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
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionNames.ADD:
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
            tasksNow: action.tasksNow
          },
        ],
      };

    case actionNames.DELETE:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.id),
      };
    case actionNames.DONE:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.id) {
            return { ...item, isDone: !item.isDone };
          }
          return item;
        }),
      };
    case actionNames.EDIT:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.id) {
            return { ...item, isEdit: !item.isEdit };
          }
          return item;
        }),
      };
    case actionNames.EDIT_SUBMIT:
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
    default:
      return state;
  }
};
