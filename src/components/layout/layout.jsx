import React, { useState, useEffect } from "react";
import styles from "./layout.module.css";
import Task from "../task/task";
import Form from "../form/form";

const Layout = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [edtiableTaskId, setEdtiableTaskId] = useState("");
  const [deadline, setDeadline] = useState("");
  const [dateNow, setDateNow] = useState("");
  const [taskDoneStyle, setTaskDoneStyle] = useState(false);

  const [editDateValue, setEditDateValue] = useState("");
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

  const handleDelete = (e) => {
    setTasks(
      tasks.filter((task) => task.id !== e.target.parentNode.getAttribute("id"))
    );
  };

  const taskDone = (e) => {
    const modifiedTasks = tasks.map((task) =>
      task.id === e.target.parentNode.getAttribute("id")
        ? { ...task, done: true }
        : { ...task }
    );
    setTasks([...modifiedTasks]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      const generatedId = Math.random().toString(16).slice(2);
      const newTask = {
        id: generatedId,
        text: task,
        deadline: deadline,
        done: false,
      };
      setTasks([...tasks, newTask]);
    }
    setTask("");
    setDeadline("");
  };

  const editSubmit = (e) => {
    const editedTasks = tasks.map((task) =>
      task.id === e.target.parentNode.getAttribute("id")
        ? {
            ...task,
            text: inputValue || task.text,
            deadline: editDateValue || task.deadline,
          }
        : { ...task }
    );
    setTasks(editedTasks);
    setEditMode(false);
    console.log(tasks);
  };

  const editTasks = (e) => {
    setEditMode(!editMode);
    setEdtiableTaskId(e.target.parentNode.getAttribute("id"));
    console.log(tasks);
  };

  const inputListener = (event) => {
    setInputValue(event.target.value);
  };

  const dateListener = (e) => {
    setDeadline(e.target.value.split("-").reverse().join("-"));
  };

  const editDateListener = (event) => {
    setEditDateValue(event.target.value.split("-").reverse().join("-"));
    console.log(`11111:${editDateValue}`);
  };

  return (
    <div>
      <h3>Введите следующее запланированное действие:</h3>
      <Form
        dateNow={dateNow}
        deadline={deadline}
        updateTask={false}
        task={task}
        key={task.id}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        dateListener={dateListener}
      />

      <div>
        {tasks.map((task, i) => {
          return (
            <Task
              task={task}
              key={task.text + i}
              editMode={editMode}
              edtiableTaskId={edtiableTaskId}
              handleDelete={handleDelete}
              taskDone={taskDone}
              editSubmit={editSubmit}
              editTasks={editTasks}
              inputListener={inputListener}
              dateListener={dateListener}
              dateNow={dateNow}
              editDateListener={editDateListener}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Layout;
