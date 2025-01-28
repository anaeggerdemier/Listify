import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #daf66e;
  color: #ffffff;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #2e2d2b; 
  margin: 0; 
`;

export const DeleteAllButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const DeleteAllButton = styled.button`
  width: 11.26rem;
  height: 3.375rem;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.5rem;
  text-align: center;
  background-color: transparent;
  color: #ffffff;
  border: 0.125rem solid #f5f5f5;
  border-radius: 0.9375rem;
  transition: all 0.3s ease;
  cursor: pointer;

  ${({ active }) =>
    active &&
    `
      background: #f5b3cf;
      border: 0.125rem solid #F16D58;
      box-shadow: 0px 0px 0.75rem 0.25rem #F16D58 inset;
      color: #F16D58;
    `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.colors.primaryHover};
  }
`;
