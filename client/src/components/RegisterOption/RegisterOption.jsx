import React from "react";
import "./registerOption.css";
import freelancerImg from "../../img/freelancerRegister.png";
import clientImg from "../../img/clientRegister.jpg";

const RegisterOption = ({ setIsClient }) => {
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
        <button>Choose</button>
      </div>
    </div>
  );
};

export default RegisterOption;
