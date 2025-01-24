import styled from 'styled-components';

export const TodoListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 18px;
  color: ${(props) => props.theme.colors.text};
`;
