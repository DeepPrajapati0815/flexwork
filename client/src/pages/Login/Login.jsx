import React, { useState } from "react";

import logo from "../../img/png/logo.png";

import axios from "../../utils/axiosInstance";

import "./login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (loginData.username && loginData.password) {
        const res = await axios.post("/auth/login", loginData);
        if (res.data.isLogin) {
          localStorage.setItem("isLogin", true);
          document.cookie = `isLogin=${res.data.isLogin};max-age=${
            60 * 60 * 24 * 2
          }`;
        }
      }
    } catch (error) {}
    setLoginData({
      username: "",
      password: "",
    });
  };
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const linkedIn = () => {
    window.open("http://localhost:5000/auth/linkedin", "_self");
  };

  return (
    <>
      <div className="registerContainer loginContainer">
        <div className="registerLeftContainer ">
          <h1 className="formHeading">Login into Flexwork</h1>
          <img className="loginLogo" src={logo} alt="flexwork" />
          <button onClick={google}>google</button>
          <button onClick={linkedIn}>linkedIn</button>
          <button>Github</button>
        </div>
        <form
          className="registerRightContainer loginForm"
          onSubmit={handleSubmit}
        >
          <input
            className="registerInput"
            type="text"
            required
            value={loginData.username}
            onChange={(e) =>
              setLoginData({ ...loginData, username: e.target.value })
            }
            placeholder="Username or Email"
          ></input>
          <input
            value={loginData.password}
            className="registerInput"
            required
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            type="password"
            placeholder="Password"
          ></input>
          <button type="submit" className="registerBtn">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
