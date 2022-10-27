const ADD = "ADD";
const DELETE = "DELETE";
const DONE = "DONE";

const initialState = {
  todos: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.title,
            isDelete: false,
            isDone: false,
            id: Math.random().toString(16).slice(2),
            deadline: action.deadline,
          },
        ],
      };

    case DELETE:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.id),
      };
    case DONE:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.id) {
            return { ...item, isDone: !item.isDone };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export const handleSubmit = (title, deadline) => {
  return (dispatch) => {
    return dispatch({
      type: ADD,
      title: title,
      deadline: deadline,
    });
  };
};

export const handleDelete = (id) => {
  return (dispatch) => {
    return dispatch({
      type: DELETE,
      id: id,
    });
  };
};

export const taskDone = (id) => {
  return (dispatch) => {
    return dispatch({
      type: DONE,
      id: id,
    });
  };
};
