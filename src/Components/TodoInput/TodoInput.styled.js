import styled from 'styled-components';

const getThemeColor = (colorKey) => ({ theme }) => theme.colors[colorKey];

const inputButtonPadding = '10px';
const borderRadius = '4px';

export const InputContainer = styled.div`
  margin: 20px 0;
`;

export const Input = styled.input`
  padding: ${inputButtonPadding};
  font-size: 16px;
  margin-right: 10px;
  border: 1px solid ${getThemeColor('border')};
  border-radius: ${borderRadius};
`;

export const Button = styled.button`
  padding: ${inputButtonPadding} 20px;
  background-color: ${getThemeColor('primary')};
  color: ${getThemeColor('text')};
  border: none;
  border-radius: ${borderRadius};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${getThemeColor('hover')};
  }
`;
