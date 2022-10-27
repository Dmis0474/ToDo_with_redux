import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./layout.module.css";
import Task from "../task/task";
import Form from "../form/form";
import { handleDelete, handleSubmit, taskDone } from "../../redux/reducers/tasks";

const Layout = () => {
  const [task, setTask] = useState("");

  const todos = useSelector((store) => store.tasks.todos);
  const dispatch = useDispatch()
  console.log(todos);
  // const [tasks, setTasks] = useState([]);
  // const [inputValue, setInputValue] = useState("");
  // const [editMode, setEditMode] = useState(false);
  // const [edtiableTaskId, setEdtiableTaskId] = useState("");
  // const [deadline, setDeadline] = useState("");
  // const [dateNow, setDateNow] = useState("");

  // const [editDateValue, setEditDateValue] = useState("");
  // useEffect(() => {
  //   getDates();
  // }, []);

  // const getDates = () => {
  //   setDateNow(
  //     `${new Date().getFullYear()}-${
  //       new Date().getMonth() + 1
  //     }-${new Date().getDate()}`
  //   );
  // };

  const handleChange = (e) => {
    setTask(e.target.value);
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

  // const dateListener = (e) => {
  //   setDeadline(e.target.value.split("-").reverse().join("-"));
  // };

  // const editDateListener = (event) => {
  //   setEditDateValue(event.target.value.split("-").reverse().join("-"));
  //   console.log(`11111:${editDateValue}`);
  // };

  return (
    <div>
      <h3>Введите следующее запланированное действие:</h3>
      <Form task={task} handleChange={handleChange} cleanInput={cleanInput} />

      {todos.map((item) => (
        <ul>
          <li key={item.id}>
          <p style={{textDecorationLine: item.isDone ? "line-through" : ''}}>{item.title}</p>
          <button style={{margin:'0 20px'}} onClick={()=>dispatch(handleDelete(item.id))}>Удалить</button>
          <button style={{margin:'0 px'}} onClick={()=>dispatch(taskDone(item.id))}>Выполнена</button>
          </li>
        </ul>
        
      ))}
    </div>
  );
};

export default Layout;
