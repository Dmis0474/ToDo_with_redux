import React, { useState } from "react";
import styles from "./form.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  handleSubmit,
  handleSort,
  searchItem,
} from "../../redux/actions/actionCreators";

const Form = (props) => {
  const todos = useSelector((store) => store.tasks.todos);

  const dispatch = useDispatch();

  const [sortMethod, setSortMethod] = useState("");
  const [searchPhrase, setSearchPhrase] = useState("");

  const sortTasks = (e) => {
    setSortMethod(e.target.value);
    dispatch(handleSort(sortMethod));
  };

  const handleSearch = (e) => {
    setSearchPhrase(e.target.value);
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    dispatch(searchItem(searchPhrase));
  }

  const addTask = (event) => {
    event.preventDefault();
    if (props.taskData.task && props.taskData.dateOk) {
      dispatch(
        handleSubmit(
          props.taskData.task,
          props.taskData.deadline,
          props.taskData.dateOk,
          event
        )
      );
      props.clearInput();
    } else if (event.key === "Enter") {
      dispatch(
        handleSubmit(
          props.taskData.task,
          props.taskData.deadline,
          props.taskData.dateOk
        )
      );
      props.clearInput();
    } else {
      props.checkDate();
      return null;
    }
  };

  return (
    <form className={styles.form} onSubmit={(event) => addTask(event)}>
      <div className={styles.taskWrapper}>
        <h3>
          Your
          <br />
          Things
        </h3>
      </div>
      <div className={styles.taskCounter}>
        <div className={styles.counterWrapper}>
          <h2>{todos.length}</h2>
          <p>active</p>
        </div>
        <div className={styles.counterWrapper}>
          <h2>{todos.filter((todo) => todo.isDone).length}</h2>
          <p>done</p>
        </div>
      </div>
      <div className={styles.taskArea}>
        <div className={styles.inputWrapper}>
          <h5>todo:</h5>
          <textarea
            name="task"
            value={props.taskData.task}
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
            defaultValue={props.taskData.dateNow}
            onChange={props.dateListener}
            min={props.taskData.dateNow}
            required
            className={styles.taskInput}
          />
          {props.taskData.dateOk === "empty" ? (
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
      <form className={styles.searchForm} onSubmit={(e) => searchSubmit(e)}>
        <input
          placeholder="search..."
          value={searchPhrase}
          onChange={(e) => handleSearch(e)}
        />
        <button>поиск</button>
      </form>
    </form>
  );
};
export default Form;
