import React from "react";
import styles from "./App.module.css";
import Layout from "./components/layout/layout.jsx";
import { useSelector, useDispatch } from "react-redux";

let App = (props) => {
  const title = useSelector((store) => store.tasks.tasks);

  return (
    <div className={styles.App}>
      <Layout />
    </div>
  );
};

export default App;
