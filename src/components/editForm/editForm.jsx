import React from "react";

const EditForm = (props) => {
  return (
    <div id={props.task.id}>
      {props.editMode && props.task.id === props.edtiableTaskId ? (
        <div id={props.task.id}>
          <input
            type="date"
            defaultValue={props.dateNow}
            onChange={props.editDateListener}
            min={props.dateNow}
          />
          <input
            type="text"
            defaultValue={props.task.text}
            key={props.task.id}
            id={props.task.id}
            title={props.task.text}
            onChange={props.inputListener}
          />
          <button onClick={props.editSubmit}>Сохранить</button>
        </div>
      ) : (
        <div id={props.task.id}>
          <button onClick={props.editTasks}>Редактировать</button>
          <button onClick={props.taskDone}>Задача выполнена</button>
          <button onClick={props.handleDelete}>Удалить</button>
        </div>
      )}
    </div>
  );
};

export default EditForm;
