import React from "react";
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
      <EditForm
        dateNow={props.dateNow}
        item={props.item}
        inputListener={props.inputListener}
        editDateListener={props.editDateListener}
        inputValue={props.inputValue}
        editDateValue={props.editDateValue}
      />
    </div>
  );
};

export default Task;
