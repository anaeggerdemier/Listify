import styled from 'styled-components';

export const InputContainer = styled.div`
  margin: 20px 0;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
`;
