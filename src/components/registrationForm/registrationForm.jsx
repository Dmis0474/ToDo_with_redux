import React from "react";
import styles from "./registrationForm.module.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const RegistrationForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);
  const [passwordDoNotMAtch, setPasswordDoNotMAtch] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState([false, false]);

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
    e.preventDefault();
    let result;
    if (password === passwordConfirm) {
      fetch("http://localhost:3500/register", {
        method: "POST",
        body: JSON.stringify({ user: email, pwd: password }),
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
        .then((response) => response.json())
        .then(function (response) {
          let answerArr = response.success.split(" ");
          result = answerArr[answerArr.length - 1];
          console.log(result);
          if(result=== "created!") {
            props.showLoginForm()
          }
        });
        
    } else {
      setPasswordDoNotMAtch("Пароли не совпадают ;(");
    }
  };

 const doPasswordVisible = (i) => {
   
    if (i === 0) {
      setPasswordVisible([!passwordVisible[0], passwordVisible[1]]);
    }
    if (i === 1) {
      setPasswordVisible([passwordVisible[0], !passwordVisible[1]]);
    }
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

  const passwordHandler = (e, method) => {
    method(e.target.value);
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
            type={passwordVisible[0] ? "text" : "password"}
            name="password"
            placeholder="password"
            className={styles.registrationInput}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => passwordHandler(e, setPassword)}
          />
          {passwordError && passwordDirty && (
            <div className={styles.error}>{passwordError}</div>
          )}
          <img
            src="showPassword.png"
            className={styles.showPassword}
            onClick={() => doPasswordVisible(0)}
          />
        </div>
        <div className={styles.emailWrapper}>
          <input
            value={passwordConfirm}
            type={passwordVisible[1] ? "text" : "password"}
            name="password"
            placeholder="password confirm"
            className={styles.registrationInput}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => passwordHandler(e, setPasswordConfirm)}
          />
          {passwordError && passwordDirty && (
            <div className={styles.error}>{passwordError}</div>
          )}
          <img
            src="showPassword.png"
            className={styles.showPassword}
            onClick={() => doPasswordVisible( 1)}
          />
        </div>
      </div>
      <div className={styles.registrationButtonWrapper}>
        <button
          className={styles.registrationButton}
          disabled={!formValid}
          onClick={(e) => sendData(email, password, e)}
        >
          Registr
        </button>
        {passwordDoNotMAtch ? (
          <div className={`${styles.error} ${styles.mismatch}`}>
            {passwordDoNotMAtch}
          </div>
        ) : null}
      </div>
      <a className={styles.switchButton} onClick={props.showLoginForm}>
        Login
      </a>
    </form>
  );
};

export default RegistrationForm;
