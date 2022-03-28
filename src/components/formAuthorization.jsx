import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/form.css";
import {
  auth,
} from "../firebase";

function FormAuthorization(props) {
  const nav = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const [validation, setValidation] = useState(null);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  function passwordVisibilityChange() {
    setPasswordVisibility(!passwordVisibility);
  }

  function formAction(e) {
    e.preventDefault();
    const authorization_action =
      props.typeAction === "Login"
        ? signInWithEmailAndPassword
        : createUserWithEmailAndPassword;

    authorization_action(auth, email.current.value, password.current.value)
      .then((response) => {
        props.changeUser(response);
        setValidation(null);
      })
      .then(() => {
        nav("/success");
      })
      .catch((error) => {
        setValidation(error.code);
      });
  }

  return (
    <form className="form" onSubmit={(e) => formAction(e)}>
      <div className="form__header">{props.typeAction}</div>
      <div className="input-group">
        <label className="input-group__label" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          className="input-group__input"
          id="email"
          ref={email}
        />
        <label className="input-group__label" htmlFor="password">
          Password
        </label>
        <div className="input-group__password">
          <input
            type={!passwordVisibility ? "password" : "text"}
            className="input-group__input"
            ref={password}
            id="password"
          />
          <div
            className="input-group__password-icon clickable"
            onClick={passwordVisibilityChange}
          >
            {!passwordVisibility ? (
              <svg
                className="icon"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="497.301px"
                height="497.301px"
                viewBox="0 0 497.301 497.301"
              >
                <g>
                  <path d="M97.5,342.351C30.6,302.15,0,248.65,0,248.65s76.5-133.9,248.6-133.9c24.9,0,47.8,1.9,68.8,7.6l-15.301,15.3   c-17.199-1.9-34.4-3.8-53.5-3.8c-153,0-225.7,114.8-225.7,114.8s28.7,45.9,88,80.3L97.5,342.351z M172.1,248.65   c0,5.7,0,11.5,1.9,17.2l17.2-17.2c0-15.3,5.7-28.7,17.2-40.2s26.8-17.2,40.2-17.2l17.201-17.2c-5.701-1.9-11.5-1.9-17.201-1.9   C206.5,172.15,172.1,206.55,172.1,248.65z M399.699,154.95l-13.398,13.4c59.299,34.4,88,80.3,88,80.3S401.6,363.45,248.6,363.45   c-19.1,0-36.3-1.899-53.5-3.8l-15.3,15.3c21,5.7,44,7.601,68.9,7.601c172.101,0,248.601-133.9,248.601-133.9   S466.6,195.15,399.699,154.95z M401.4,76.95L76.9,401.45l18.9,18.9l324.6-324.6L401.4,76.95z M288.801,288.851   c-11.5,11.5-24.9,17.2-40.201,17.2l-17.2,17.199c5.7,1.9,11.5,1.9,17.2,1.9c42.099,0,76.5-34.4,76.5-76.5c0-5.7,0-11.5-1.9-17.2   L306,248.65C306,263.95,300.199,277.351,288.801,288.851z" />
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            ) : (
              <svg
                className="icon"
                data-name="Layer 2"
                id="ea45fd26-b78a-4b07-94cc-e94b7852e5cc"
                viewBox="0 0 35 35"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,23.625A6.125,6.125,0,1,1,23.624,17.5,6.132,6.132,0,0,1,17.5,23.625Zm0-9.749A3.625,3.625,0,1,0,21.124,17.5,3.629,3.629,0,0,0,17.5,13.876Z" />
                <path d="M17.494,29.079A19.508,19.508,0,0,1,.831,19.616a4.119,4.119,0,0,1,0-4.232,19.269,19.269,0,0,1,16.66-9.463,19.54,19.54,0,0,1,16.672,9.462,4.118,4.118,0,0,1,0,4.234A19.517,19.517,0,0,1,17.494,29.079Zm0-20.658A16.792,16.792,0,0,0,2.978,16.669a1.643,1.643,0,0,0,0,1.666,16.994,16.994,0,0,0,14.516,8.244,16.784,16.784,0,0,0,14.528-8.244,1.644,1.644,0,0,0,0-1.668A16.8,16.8,0,0,0,17.494,8.421Z" />
              </svg>
            )}
          </div>
        </div>
      </div>

      <div className="form__validation">{validation}</div>
      <button className="btn form__btn clickable">{props.typeAction}</button>
    </form>
  );
}

export default FormAuthorization;
