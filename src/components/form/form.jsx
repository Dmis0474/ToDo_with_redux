import React from "react";

import EditForm from "../editForm/editForm";
import styles from "./form.module.css";

import { useDispatch, useSelector } from "react-redux";
import { handleSubmit } from "../../redux/reducers/tasks";

const Form = (props) => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.tasks.todos);

  return (
    <form
    // className={styles.form}
    // onSubmit={props.handleSubmit}
    // onKeyDown={(e) => {
    //   if (e.key === "Enter") props.handleSubmit(e);
    // }}
    >
      <textarea
        name="task"
        value={props.task}
        placeholder="Введите следующее дело..."
        onChange={props.handleChange}
      ></textarea>
      {/* <h4 style={{ margin: 0 }}>Дата завершения</h4>
          <input
            type="date"
            defaultValue={props.dateNow}
            onChange={props.dateListener}
            min={props.dateNow}
          /> */}
      <button
        type="button"
        onClick={() => {
          dispatch(handleSubmit(props.task));
          props.cleanInput()
        }}
      >
        Добавить дело!
      </button>
    </form>
  );
};
export default Form;
