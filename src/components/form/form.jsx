import React from "react";

import EditForm from "../editForm/editForm";
import styles from "./form.module.css";

const Form = (props) => {
  return (
    <div id={props.task.id}>
      {props.updateTask ? (
        <EditForm
          task={props.task}
          editMode={props.editMode}
          dateNow={props.dateNow}
          editDateListener={props.editDateListener}
          inputListener={props.inputListener}
          editSubmit={props.editSubmit}
          editTasks={props.editTasks}
          taskDone={props.taskDone}
          handleDelete={props.handleDelete}
          edtiableTaskId={props.edtiableTaskId}
        />
      ) : (
        <form
          className={styles.form}
          onSubmit={props.handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") props.handleSubmit(e);
          }}
        >
          <textarea
            name="task"
            value={props.task}
            placeholder="Введите следующее дело..."
            onChange={props.handleChange}
          ></textarea>
          <h4 style={{ margin: 0 }}>Дата завершения</h4>
          <input
            type="date"
            defaultValue={props.dateNow}
            onChange={props.dateListener}
            min={props.dateNow}
          />
          <button>Добавить дело!</button>
        </form>
      )}
    </div>
  );
};
export default Form;
