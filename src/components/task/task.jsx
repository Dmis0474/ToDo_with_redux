import React from "react";
import Form from "../form/form";
import EditForm from "../editForm/editForm";

const Task = (props) => {
  return (
    <div id={props.item.id}>
      <p>Дата завершения:{props.item.deadline} </p>
      <p
        style={{
          textDecorationLine: props.item.isDone ? "line-through" : "",
        }}
      >
        Задача: {props.item.title}
      </p>
      <EditForm item={props.item} />
    </div>
  );
};
{
  /* : (
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
}; */
}

export default Task;
