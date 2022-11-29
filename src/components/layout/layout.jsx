import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./layout.module.css";
import Task from "../task/task";
import Form from "../form/form";
import { searchItem } from "../../redux/actions/actionCreators";

const Layout = () => {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [tasksDone, setTasksDone] = useState(0);
  const [dateNow, setDateNow] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [editDateValue, setEditDateValue] = useState("");
  const [dateOk, setDateOk] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");

  const dispatch = useDispatch();

  const todos = useSelector((store) => store.tasks.todos);
  const arrayWithSearch = useSelector((store) => store.tasks.arrayWithSearch);

  useEffect(() => {
    getDates();
  }, []);

  const getDates = () => {
    let day =
      new Date().getDate() <= 9
        ? `0${new Date().getDate()}`
        : new Date().getDate();
    console.log(day);
    setDateNow(
      `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${day}`
    );
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const dateListener = (e) => {
    setDeadline(e.target.value.split("-").reverse().join("-"));
    setDateOk(true);
  };

  const inputListener = (event) => {
    setInputValue(event.target.value);
  };

  const editDateListener = (event) => {
    setEditDateValue(event.target.value.split("-").reverse().join("-"));
  };

  const clearInput = () => {
    setTask("");
  };

  const checkDate = () => {
    setDateOk("empty");
  };

  const handleSearch = (e) => {
    setSearchPhrase(e.target.value);
    dispatch(searchItem(searchPhrase));
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    dispatch(searchItem(searchPhrase));
  };

  const taskData = {
    task: task,
    deadline: deadline,
    tasksDone: tasksDone,
    dateNow: dateNow,
    dateOk: dateOk,
  };

  return (
    <div className={styles.layout}>
      <Form
        taskData={taskData}
        handleChange={handleChange}
        clearInput={clearInput}
        dateListener={dateListener}
        checkDate={checkDate}
        searchPhrase={searchPhrase}
        handleSearch={handleSearch}
        searchSubmit={searchSubmit}
      />
      {searchPhrase ? (
        <ul className={styles.tasksList}>
        {arrayWithSearch.map((item) => (
          <li key={item.id}>
            <Task
              dateNow={dateNow}
              item={item}
              inputValue={inputValue}
              editDateValue={editDateValue}
              inputListener={inputListener}
              editDateListener={editDateListener}
            />
          </li>
        ))}
      </ul>
      ) : (
        <ul className={styles.tasksList}>
        {todos.map((item) => (
          <li key={item.id}>
            <Task
              dateNow={dateNow}
              item={item}
              inputValue={inputValue}
              editDateValue={editDateValue}
              inputListener={inputListener}
              editDateListener={editDateListener}
            />
          </li>
        ))}
      </ul>
      )}
      
      
    </div>
  );
};

export default Layout;
