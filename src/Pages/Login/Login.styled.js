import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 30px;
  background-color: #7aa2f1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #4caf50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
    outline: none;
  }

  &::placeholder {
    color: #bbb;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }

  &:active {
    background-color: #388e3c;
  }
`;

export const ErrorMessage = styled.p`
  color: #f44336;
  font-size: 14px;
  text-align: center;
  margin-top: 12px;
  background-color: #ffe6e6;
  padding: 10px;
  border-radius: 6px;
  width: 100%;
  max-width: 350px;
`;
