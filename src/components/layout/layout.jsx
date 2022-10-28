import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./layout.module.css";
import Task from "../task/task";
import Form from "../form/form";

const Layout = () => {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [dateNow, setDateNow] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [editDateValue, setEditDateValue] = useState("");

  const todos = useSelector((store) => store.tasks.todos);

  useEffect(() => {
    getDates();
  }, []);

  const getDates = () => {
    setDateNow(
      `${new Date().getFullYear()}-${
        new Date().getMonth() + 1
      }-${new Date().getDate()}`
    );
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const dateListener = (e) => {
    setDeadline(e.target.value.split("-").reverse().join("-"));
  };

  const inputListener = (event) => {
    setInputValue(event.target.value);
  };

  const editDateListener = (event) => {
    setEditDateValue(event.target.value.split("-").reverse().join("-"));
  };

  const cleanInput = () => {
    setTask("");
  };

  return (
    <div>
      <h3>Введите следующее запланированное действие:</h3>
      <Form
        task={task}
        deadline={deadline}
        handleChange={handleChange}
        cleanInput={cleanInput}
        dateListener={dateListener}
        dateNow={dateNow}
      />
      <ul>
        {todos.map((item) => (
          <Task
            dateNow={dateNow}
            key={item.id}
            item={item}
            inputValue={inputValue}
            editDateValue={editDateValue}
            inputListener={inputListener}
            editDateListener={editDateListener}
          />
        ))}
      </ul>
    </div>
  );
};

export default Layout;
