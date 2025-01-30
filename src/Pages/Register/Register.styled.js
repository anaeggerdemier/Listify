import styled from "styled-components";

export const StyledFormContainer = styled.div`
  max-width: 25rem;
  margin: 0 auto;
  padding: 1.25rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StyledInputField = styled.div`
  margin-bottom: 0.9375rem;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.3125rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.625rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const StyledErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.875rem;
  margin-top: 0.3125rem;
`;
