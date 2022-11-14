import actionNames from "../actions/actionNames";

export const handleSubmit = (text, deadline, dateOk, event) => {
  event.preventDefault();
  return (dispatch) => {
    return dispatch({
      type: actionNames.ADD,
      text: text,
      deadline: deadline,
      dateOk: dateOk
    });
  };
};

export const handleDelete = (id) => {
  return (dispatch) => {
    return dispatch({
      type: actionNames.DELETE,
      id: id,
    });
  };
};

export const taskDone = (id) => {
  return (dispatch) => {
    return dispatch({
      type: actionNames.DONE,
      id: id,
    });
  };
};

export const editTasks = (id) => {
  return (dispatch) => {
    return dispatch({
      type: actionNames.EDIT,
      id: id,
    });
  };
};

export const editSubmit = (isEdit, inputValue, editDateValue) => {
  if (inputValue && editDateValue) {
    return (dispatch) => {
      return dispatch({
        type: actionNames.EDIT_SUBMIT,
        isEdit: isEdit,
        text: inputValue,
        deadline: editDateValue,
      });
    };
  } else {
    alert(`Заполните поля "задача" и "дата завершения" `);
  }
};

export const handleSort = (sortMethod, text, deadline) => {
  return (dispatch) => {
    return dispatch({
      type: actionNames.SORT,
      sortMethod: sortMethod,
      text: text,
      deadline:deadline
    });
  };
};

export const searchItem = (searchPhrase) => {
  return (dispatch) => {
    return dispatch({
      type: actionNames.SEARCH,
      searchPhrase: searchPhrase
    });
  };
};
