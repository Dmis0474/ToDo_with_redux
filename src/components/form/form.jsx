import React, { useState } from "react";
import styles from "./form.module.css";
import { useDispatch } from "react-redux";
import {
  handleSubmit,
  handleSort,
  searchItem,
} from "../../redux/actions/actionCreators";

const Form = (props) => {
  const dispatch = useDispatch();

  const [dateFieldState, setDateFieldState] = useState("");
  const [sortMethod, setSortMethod] = useState("");
  const [searchPhrase, setSearchPhrase] = useState("");

  const sortTasks = (e) => {
    setSortMethod(e.target.value);
    dispatch(handleSort(sortMethod));
    
  };

  const handleSearch = (e) => {
    setSearchPhrase(e.target.value);
    dispatch(searchItem(searchPhrase));
    console.log(searchPhrase);
  };

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        if (props.task && props.deadline) {
          dispatch(
            handleSubmit(props.task, props.deadline, props.tasksNow, event)
          );
          props.cleanInput();
          props.increaseTaskNow();
        } 
        if (event.key === "Enter")
          dispatch(handleSubmit(props.task, props.deadline, props.tasksNow));
        props.cleanInput();
        props.increaseTaskNow();
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
          {dateFieldState ? (
            <div className={styles.error}>поле не заполнено!</div>
          ) : null}
        </div>

        <img src="" />
        <button className={styles.add}></button>
      </div>
      <select onChange={(event) => sortTasks(event)}>
        <option value="">сортировка по:</option>
        <option value="name">по имени</option>
        <option value="date">по дате</option>
      </select>
      <form className={styles.searchForm} >
        <input placeholder="search..." value={searchPhrase} onChange={(e) => handleSearch(e)} />
      </form>
    </form>
  );
};
export default Form;
