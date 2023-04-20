import React from "react";
import "./registerOption.css";
import freelancerImg from "../../img/freelancerRegister.webp";
import clientImg from "../../img/clientRegister.jpg";
import { useNavigate } from "react-router-dom";

const RegisterOption = ({ setIsClient, isClient }) => {
  const navigate = useNavigate();

  return (
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
              navigate("/client/register");
              setIsClient(false);
            } else {
              navigate("/freelancer/register");
              setIsClient(false);
            }
          }}
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default RegisterOption;
