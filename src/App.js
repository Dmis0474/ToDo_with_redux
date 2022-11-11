import React from "react";
import styles from "./App.module.css";
import Layout from "./components/layout/layout.jsx";
import RegistrationForm from "./components/registrationForm/registrationForm.jsx";
import LoginForm from "./components/loginForm/liginForm.jsx";
import { useState } from "react";

let App = (props) => {
  const [form, setForm] = useState("login");

  const showRegistrationForm = () => {
    setForm('registr')
  }

  const showLoginForm = () => {
    setForm('login')
  }

  return (
    <div className={styles.App}>
      {/* {form === 'registr' ? <RegistrationForm showLoginForm={showLoginForm} />: <LoginForm showRegistrationForm={showRegistrationForm}/>} */}
      
      
      <Layout />
    </div>
  );
};

export default App;
