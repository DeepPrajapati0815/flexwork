import React, { useState } from "react";
import logo from "../../img/png/logo.png";
import "./register.css";

import axios from "../../utils/axiosInstance";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    state: "",
    city: "",
    isClient: false,
    password: "",
    confirmpassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      registerData.firstName &&
      registerData.lastName &&
      registerData.username &&
      registerData.email &&
      registerData.state &&
      registerData.city &&
      registerData.password &&
      registerData.confirmpassword
    ) {
      try {
        await axios.post("/auth/register", registerData, {
          headers: { "Content-Type": "application/json" },
        });
      } catch (error) {}
    }

    setRegisterData({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      state: "",
      city: "",
      isClient: false,
      password: "",
      confirmpassword: "",
    });
  };

  return (
    <>
      <div className="registerContainer">
        <div className="registerLeftContainer">
          <img src={logo} alt="logo" />
          <h1 className="formHeading">Join as a client or freelancer</h1>
        </div>
        <form className="registerRightContainer" onSubmit={handleSubmit}>
          <div className="mergeInput radioContainer">
            <div className="radioBox">
              <input
                type="radio"
                name="role"
                defaultChecked
                onChange={(e) =>
                  setRegisterData({ ...registerData, isClient: false })
                }
                className="radioInput"
                value={"client"}
              />
              <label className="radioLabel">Looking for a work ?</label>
            </div>
            <div className="radioBox">
              <input
                type="radio"
                name="role"
                className="radioInput"
                onChange={(e) =>
                  setRegisterData({ ...registerData, isClient: true })
                }
                value={"client"}
              />
              <label className="radioLabel">Looking to Hire ?</label>
            </div>
          </div>
          <div className="mergeInput ">
            <input
              className="registerInput inputGap"
              type="text"
              value={registerData.firstName}
              required
              onChange={(e) =>
                setRegisterData({ ...registerData, firstName: e.target.value })
              }
              placeholder="First Name "
            ></input>
            <input
              className="registerInput inputGap "
              type="text"
              value={registerData.lastName}
              required
              onChange={(e) =>
                setRegisterData({ ...registerData, lastName: e.target.value })
              }
              placeholder="Last Name"
            ></input>
          </div>
          <input
            className="registerInput"
            type="text"
            required
            value={registerData.username}
            placeholder="Username"
            onChange={(e) =>
              setRegisterData({ ...registerData, username: e.target.value })
            }
          ></input>
          <input
            className="registerInput"
            type="email"
            required
            value={registerData.email}
            placeholder="Email"
            onChange={(e) =>
              setRegisterData({ ...registerData, email: e.target.value })
            }
          ></input>
          <div className="mergeInput">
            <input
              className="registerInput inputGap"
              type="text"
              value={registerData.state}
              required
              placeholder="State"
              onChange={(e) =>
                setRegisterData({ ...registerData, state: e.target.value })
              }
            ></input>
            <input
              className="registerInput inputGap"
              type="text"
              required
              value={registerData.city}
              onChange={(e) =>
                setRegisterData({ ...registerData, city: e.target.value })
              }
              placeholder="City"
            ></input>
          </div>
          <input
            value={registerData.password}
            className="registerInput"
            type="password"
            required
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
            placeholder="Password"
          ></input>
          <input
            className="registerInput"
            required
            value={registerData.confirmpassword}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                confirmpassword: e.target.value,
              })
            }
            type="password"
            placeholder="Confirm Password"
          ></input>
          <button className="registerBtn">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
