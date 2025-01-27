import styled from 'styled-components';

const getThemeColor = (colorKey) => ({ theme }) => theme.colors[colorKey];

export const HeaderWrapper = styled.header`
  background-color: ${getThemeColor('primary')};
  color: ${getThemeColor('text')};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-weight: bold;
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
    padding: 0;
    margin: 0;
  }

  li {
    a {
      text-decoration: none;
      color: ${getThemeColor('text')};
      font-size: 1.2rem;
      transition: color 0.3s ease;

      &:hover {
        color: ${getThemeColor('hover')};
      }
    }
  }
`;
