import React from "react";
import styles from "./App.module.css";
import Layout from "./components/layout/layout.jsx";

let App = (props) => {
  return (
    <div className={styles.App}>
        <Layout/>
    </div>
  )
};



export default App;
