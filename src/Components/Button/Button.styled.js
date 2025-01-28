import styled from "styled-components";

export const StyledButton = styled.button`
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

  &.active {
    background: #000000e5;
    border: 0.125rem solid #F16D58;
    box-shadow: 0px 0px 0.75rem 0.25rem #F16D58 inset;
    color: #F16D58;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
