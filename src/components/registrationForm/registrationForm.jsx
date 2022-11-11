import React from "react";
import styles from "./registrationForm.module.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const RegistrationForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  useEffect(() => {
    const apiUrl = "http://localhost:3500/";
    fetch(apiUrl).then((response) => console.log(response));
  }, []);

  const sendData = (email, password, e) => {
    console.log("email, pass", email, password);
    e.preventDefault();
    fetch("http://localhost:3500/register", {
      method: "POST",
      body: JSON.stringify({ user: email, pwd: password }),
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  };

  function getData(e) {
    e.preventDefault();
  }

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(String(e.target.value).toLowerCase())) {
      setEmailError("");
    } else {
      setEmailError("Некорректный email");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError("Пароль должен содержать более 3 и менее 8 символов");
      if (!e.target.value) {
        setPasswordError("Пароль не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <form className={styles.registrationForm}>
      <h2 className={styles.header}>Add new things</h2>
      <img src="deals.png" alt="" className={styles.img} />
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="login"
          className={styles.registrationInput}
        />
        <div className={styles.emailWrapper}>
          <input
            value={email}
            type="email"
            name="email"
            placeholder="email@gmail.com"
            className={styles.registrationInput}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => emailHandler(e)}
          />
          {emailError && emailDirty && (
            <div className={styles.error}>{emailError}</div>
          )}
        </div>
        <div className={styles.emailWrapper}>
          <input
            value={password}
            type="password"
            name="password"
            placeholder="password"
            className={styles.registrationInput}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => passwordHandler(e)}
          />
          {passwordError && passwordDirty && (
            <div className={styles.error}>{passwordError}</div>
          )}
        </div>
        <input
          type="text"
          placeholder="place"
          className={styles.registrationInput}
        />
        <input
          type="text"
          placeholder="time"
          className={styles.registrationInput}
        />
      </div>
      <button
        className={styles.registrationButton}
        disabled={!formValid}
        onClick={(e) => sendData(email, password, e)}
      >
        Registr
      </button>
      <a className={styles.switchButton} onClick={props.showLoginForm}>
        Login
      </a>
    </form>
  );
};

export default RegistrationForm;
