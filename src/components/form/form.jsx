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
        dispatch(handleSubmit(props.task, props.deadline, event));
        props.cleanInput();
        if (event.key === "Enter")
        dispatch(handleSubmit(props.task, props.deadline));
        props.cleanInput();
      }}
      
    >
      <textarea
        name="task"
        value={props.task}
        placeholder="Введите следующее дело..."
        onChange={props.handleChange}
        required
      ></textarea>
      <h4 style={{ margin: 0 }}>Дата завершения</h4>
      <input
        name="forDate"
        type="date"
        defaultValue={props.dateNow}
        onChange={props.dateListener}
        min={props.dateNow}
        required
      />
      <button>Добавить дело!</button>
    </form>
  );
};
export default Form;
