import React from "react";
import "../styles/LoginForm.css";
import { FaRegUser, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { BsBagPlus } from "react-icons/bs";
const LoginForm = ({
  username,
  setUsername,
  password,
  setPassword,
  usernameError,
  setUsernameError,
  setPasswordError,
  Addmessagesucessfully,
  handleSubmit,
  passwordError,
}) => {
  return (
    <div className="login__container">
      <div className="login__logo">
        <h1 className="login__title">login</h1>
      </div>
      <form className="form container" onSubmit={handleSubmit}>
        <div className="username__box">
          <label className="username">username</label>
          <div className="username__input__box">
            <FaRegUser className="username__fareguser" />
            <input
              type="text"
              className="username__input"
              placeholder="type user name"
              required
              value={username}
              onChange={({ target }) => {
                setUsername(target.value);
                setUsernameError(false);
              }}
            />
          </div>

          {usernameError && (
            <span style={{ color: "red" }}>Required Field</span>
          )}
        </div>

        <div className="username__box">
          <label className="username">password</label>
          <div className="username__input__box">
            <BsBagPlus className="username__fareguser" />
            <input
              type="password"
              className="username__input"
              placeholder="type user password"
              required
              value={password}
              onChange={({ target }) => {
                setPassword(target.value);

                setPasswordError(false);
              }}
            />
          </div>

          {passwordError && (
            <span style={{ color: "red" }}>Required Field</span>
          )}
        </div>
        <div className="forget__box">
          <p className="forgt">forgot password</p>
        </div>

        <div className="form__btn__box">
          <button className="btn">login</button>
          {Addmessagesucessfully && (
            <div style={{ color: "green" }}>Add sucessfully message</div>
          )}
        </div>
      </form>
      <div className="sign__login">
        <p className="sign__title">or sign up using</p>
      </div>

      <div className="social__media">
        <FaFacebook className="facebook" />
        <FaGithub className="github" />
        <FaInstagram className="instagram" />
      </div>
    </div>
  );
};

export default LoginForm;
