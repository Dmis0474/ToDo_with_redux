import React from "react";
import styles from "./App.module.css";
import Layout from "./components/layout/layout.jsx";
import RegistrationForm from "./components/registrationForm/registrationForm.jsx";
import LoginForm from "./components/loginForm/loginForm.jsx";
import { useState } from "react";

let App = (props) => {
  const [form, setForm] = useState("registr");

  
  const changeForm = (formName) => {
    setForm(formName)
  }

  return (
    <div className={styles.App}>
      {form === 'registr' ? <RegistrationForm changeForm={changeForm} />: <LoginForm changeForm={changeForm}/>}

      {/* <Layout /> */}
    </div>
  );
};

export default App;
