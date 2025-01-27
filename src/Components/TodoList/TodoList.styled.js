import styled from 'styled-components';

const getThemeColor = (colorKey) => ({ theme }) => theme.colors[colorKey];

export const TodoListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 18px;
  color: ${getThemeColor('text')};
`;
