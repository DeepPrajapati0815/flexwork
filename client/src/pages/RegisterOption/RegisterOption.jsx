import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import clientImg from "../../img/clientRegister.jpg";
import freelancerImg from "../../img/freelancerRegister.webp";
import "./registerOption.css";

const RegisterOption = ({ isUserClient, isLogin, setIsClient, isClient }) => {
  const navigate = useNavigate();

  return !isLogin ? (
    <div className="registerOptionContainer">
      <div className=" optionContainer">
        <div className="radioBox">
          <input
            type="radio"
            name="role"
            defaultChecked
            onChange={(e) => setIsClient(false)}
            className="radioInput"
            value={"client"}
          />
          <label className="radioLabel">Looking for a work ?</label>

          <img className="optionImg" src={freelancerImg} alt="freelancer"></img>
        </div>

        <div className="radioBox">
          <input
            type="radio"
            name="role"
            className="radioInput"
            onChange={(e) => setIsClient(true)}
            value={"client"}
          />
          <label className="radioLabel">Looking to Hire ?</label>

          <img className="optionImg" src={clientImg} alt="freelancer"></img>
        </div>
        <button
          className="optionBtn"
          onClick={() => {
            console.log(isClient);
            if (isClient) {
              navigate("/register/client");
              setIsClient(false);
            } else {
              navigate("/register/freelancer");
              setIsClient(false);
            }
          }}
        >
          Join
        </button>
      </div>
    </div>
  ) : isUserClient ? (
    <Navigate to={"/client"}></Navigate>
  ) : (
    <Navigate to={"/freelancer"}></Navigate>
  );
};

export default RegisterOption;
