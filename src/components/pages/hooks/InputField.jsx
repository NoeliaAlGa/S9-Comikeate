import React from 'react'
import {
    DivLogInSignUp,
    LabelsLogInSignUp,
  } from "../style/LogInSignUpStyle";

const InputField = ({ label, type, value, placeholder, onChange }) => {
    return (
      <DivLogInSignUp>
        <LabelsLogInSignUp>{label}</LabelsLogInSignUp>
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </DivLogInSignUp>
    );
  };

export default InputField