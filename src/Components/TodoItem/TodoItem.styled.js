import styled from 'styled-components';

const getThemeColor = (colorKey) => ({ theme }) => theme.colors[colorKey];

const buttonPadding = '5px 10px';
const borderRadius = '4px';

export const TodoItemContainer = styled.li`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid ${getThemeColor('border')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ completed }) =>
    completed ? getThemeColor('completed') : '#fff'};
  color: ${({ completed }) => (completed ? getThemeColor('text') : '#000')};
`;

export const TodoText = styled.span`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

export const Button = styled.button`
  padding: ${buttonPadding};
  background-color: ${getThemeColor('primary')};
  color: ${getThemeColor('text')};
  border: none;
  border-radius: ${borderRadius};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${getThemeColor('hover')};
  }
`;
