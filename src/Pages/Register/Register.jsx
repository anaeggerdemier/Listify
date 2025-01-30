import React, { useState } from "react";
import {
  StyledFormContainer,
  StyledInputField,
  StyledLabel,
  StyledInput,
  StyledErrorMessage,
} from "./Register.styled";
import Button from "../../Components/Button/Button";


const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      setError("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    console.log("Cadastro realizado com:", email, password);
    setError("");
  };

  return (
    <StyledFormContainer>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <StyledInputField>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            aria-describedby="emailError"
          />
        </StyledInputField>

        <StyledInputField>
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledInput
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            aria-describedby="passwordError"
          />
        </StyledInputField>

        <StyledInputField>
          <StyledLabel htmlFor="confirmPassword">Confirm Password</StyledLabel>
          <StyledInput
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            aria-describedby="confirmPasswordError"
          />
        </StyledInputField>

        {error && <StyledErrorMessage id="formError">{error}</StyledErrorMessage>}
        <div style={{ textAlign: "center" }}>
          <Button type="submit" primary>Register</Button>
        </div>
      </form>
    </StyledFormContainer>
  );
};

export default Register;
