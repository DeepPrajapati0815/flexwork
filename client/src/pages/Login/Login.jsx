import React, { useState } from "react";

import axios from "axios";
import { FaGithub, FaGithubAlt, FaLinkedin } from "react-icons/fa";
import AuthButton from "../../components/AuthButton/AuthButton";
import googleIcon from "../../img/google.ico";
import logo from "../../img/png/logo.png";
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
        const res = await axios.post(
          "https://localhost:5000/auth/login",
          loginData
        );
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

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const logout = async () => {
    try {
      const res = await axios.get("http://localhost:5000/auth/logout", {
        withCredentials: true,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="registerContainer loginContainer">
        <div className="registerLeftContainer ">
          <h1 className="formHeading">Login into Flexwork</h1>
          <img className="loginLogo" src={logo} alt="flexwork" />
          <AuthButton
            icon={
              <img
                src={googleIcon}
                style={{ width: "17px" }}
                alt="google"
              ></img>
            }
            bg={"white"}
            color={"grey"}
            title={"Sign in with google"}
            provider={google}
          ></AuthButton>
          {/* <AuthButton
            icon={<FaLinkedin></FaLinkedin>}
            bg={"#0a66c2"}
            color={"white"}
            title={"Sign in with LinkedIn"}
            provider={linkedIn}
          ></AuthButton> */}
          <AuthButton
            icon={<FaGithub style={{ fontSize: "20px" }}></FaGithub>}
            bg={"#23282c"}
            color={"white"}
            title={"Sign in with Github"}
            provider={github}
          ></AuthButton>
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
