import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./layout.module.css";
import Task from "../task/task";
import Form from "../form/form";


const Layout = () => {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [dateNow, setDateNow] = useState("");

  const todos = useSelector((store) => store.tasks.todos);
  const dispatch = useDispatch();
  console.log(todos);
  // const [tasks, setTasks] = useState([]);
  // const [inputValue, setInputValue] = useState("");
  // const [editMode, setEditMode] = useState(false);
  // const [edtiableTaskId, setEdtiableTaskId] = useState("");
  // const [editDateValue, setEditDateValue] = useState("");

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

  const cleanInput = () => {
    setTask("");
  };

  // const taskDone = (e) => {
  //   const modifiedTasks = tasks.map((task) =>
  //     task.id === e.target.parentNode.getAttribute("id")
  //       ? { ...task, done: true }
  //       : { ...task }
  //   );
  //   setTasks([...modifiedTasks]);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (task) {
  //     const generatedId = Math.random().toString(16).slice(2);
  //     const newTask = {
  //       id: generatedId,
  //       text: task,
  //       deadline: deadline,
  //       done: false,
  //     };
  //     setTasks([...tasks, newTask]);
  //   }
  //   setTask("");
  //   setDeadline("");
  // };

  // const editSubmit = (e) => {
  //   const editedTasks = tasks.map((task) =>
  //     task.id === e.target.parentNode.getAttribute("id")
  //       ? {
  //           ...task,
  //           text: inputValue || task.text,
  //           deadline: editDateValue || task.deadline,
  //         }
  //       : { ...task }
  //   );
  //   setTasks(editedTasks);
  //   setEditMode(false);
  //   console.log(tasks);
  // };

  // const editTasks = (e) => {
  //   setEditMode(!editMode);
  //   setEdtiableTaskId(e.target.parentNode.getAttribute("id"));
  //   console.log(tasks);
  // };

  // const inputListener = (event) => {
  //   setInputValue(event.target.value);
  // };

  // const editDateListener = (event) => {
  //   setEditDateValue(event.target.value.split("-").reverse().join("-"));
  //   console.log(`11111:${editDateValue}`);
  // };

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
          <Task key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Layout;
