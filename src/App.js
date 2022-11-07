import React from "react";
import styles from "./App.module.css";
import Layout from "./components/layout/layout.jsx";
import RegistrationForm from "./components/registrationForm/registrationForm.jsx"


let App = (props) => {

  return (
    <div className={styles.App}>
      {/* <Layout /> */}
      <RegistrationForm/>
    </div>
  );
};

export default App;
