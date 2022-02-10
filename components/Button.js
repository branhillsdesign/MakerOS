import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white100};
  border-radius: 8px;
  padding: 0.5rem 1rem;
  border: none;
  &:hover {
    ${({ theme }) => theme.elevation.hover}
  }
  &:focus {
    ${({ theme }) => theme.elevation.focus}
  }
`;
