import React from "react";
import Form from "../form/form";

const Task = (props) => {
  return (
    <div id={props.task.id}>
      <p>Дата завершения: {props.task.deadline}</p>
      {props.task.done ? (
        <p style={{ textDecorationLine: "line-through" }}>
          Задача: {props.task.text}
        </p>
      ) : (
        <p>Задача: {props.task.text}</p>
      )}
      <Form
        updateTask={true}
        task={props.task}
        key={props.task.id}
        editMode={props.editMode}
        editTasks={props.editTasks}
        inputListener={props.inputListener}
        edtiableTaskId={props.edtiableTaskId}
        editSubmit={props.editSubmit}
        taskDone={props.taskDone}
        handleDelete={props.handleDelete}
        dateNow={props.dateNow}
        editDateListener={props.editDateListener}
      />
    </div>
  );
};

export default Task;
