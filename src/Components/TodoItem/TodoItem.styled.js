import styled from 'styled-components';

export const TodoItemContainer = styled.li`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.completed ? props.theme.colors.completed : '#fff')};
  color: ${(props) => (props.completed ? props.theme.colors.text : '#000')};
`;

export const TodoText = styled.span`
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;

export const Button = styled.button`
  padding: 5px 10px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
`;
