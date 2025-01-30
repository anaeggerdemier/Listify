import React, { useState } from "react";
import InputField from "./InputField";
import { FormContainer, ErrorMessage } from "./Login.styled";
import Button from "../../Components/Button/Button";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { email, password } = formData;
    if (!email || !password) return "Both email and password are required!";
    if (!/\S+@\S+\.\S+/.test(email)) return "Please enter a valid email address.";
    return "";
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const errorMessage = validateForm();
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    console.log("Login realizado com:", formData.email, formData.password);
    setError("");
  };

  return (
    <FormContainer>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <div style={{ textAlign: "center" }}>
          <Button type="submit" primary>Register</Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default Login;
