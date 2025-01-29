import React from "react";
import { InputWrapper, Label, Input } from "./Login.styled";

const InputField = ({ label, type, name, value, onChange }) => {
  return (
    <InputWrapper>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default InputField;
