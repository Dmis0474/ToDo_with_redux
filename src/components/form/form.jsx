import React from "react";
import styles from "./form.module.css";
import { useDispatch } from "react-redux";
import { handleSubmit } from "../../redux/actions/actionCreators";

const Form = (props) => {
  const dispatch = useDispatch();

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        dispatch(handleSubmit(props.task, props.deadline, props.tasksNow, event));
        props.cleanInput();
        props.increaseTaskNow()
        if (event.key === "Enter")
          dispatch(handleSubmit(props.task, props.deadline, props.tasksNow));
        props.cleanInput();
        props.increaseTaskNow()
      }}
    >
      <div className={styles.taskWrapper}>
        <h3>
          Your
          <br />
          Things
        </h3>
        
      </div>
      <div className={styles.taskCounter}>
        <div>
        <h2>{props.tasksNow}</h2>
        <p>done</p>
        </div>
        <div>
        <h2>{props.tasksDone}</h2>
        <p>done</p>
        </div>
      </div>
      <div className={styles.taskArea}>
          <div className={styles.inputWrapper}>
            <h5>todo:</h5>
            <textarea
              name="task"
              value={props.task}
              placeholder="Введите следующее дело..."
              onChange={props.handleChange}
              required
              className={styles.taskInput}
            ></textarea>
          </div>
          <div className={styles.inputWrapper}>
            <h5>deadline:</h5>
            <input
              name="forDate"
              type="date"
              defaultValue={props.dateNow}
              onChange={props.dateListener}
              min={props.dateNow}
              required
              className={styles.taskInput}
            />
          </div>
          <img src="" />
          <button className={styles.add}></button>
        </div>
    </form>
  );
};
export default Form;
