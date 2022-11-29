import React from "react";
import EditForm from "../editForm/editForm";
import style from "../task/task.module.css"

const Task = (props) => {
  return (
    <div id={props.item.id} className={style.task}>
      <div className={style.info}>
        <h4 className={style.taskText}
        style={{
          textDecorationLine: props.item.isDone ? "line-through" : "",
        }}
        >{props.item.text}</h4>
        <h5 className={style.taskDate}>{props.item.deadline} </h5>
      </div>
      <EditForm
        increaseTaskDone={props.increaseTaskDone}
        reduceTaskNow={props.reduceTaskNow}
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
