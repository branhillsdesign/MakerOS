import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white100};
  border-radius: 8px;
  padding: 0.5rem 1.5rem;
  border: none;
  font-size: ${({ theme }) => theme.label.medium};
  &:hover {
    ${({ theme }) => theme.elevation.hover}
    transition: .3s all ease-out;
  }
  &:focus {
    ${({ theme }) => theme.elevation.inset01}
    background: ${({ theme }) => theme.colors.vivid};
    outline: 2px solid ${({ theme }) => theme.colors.vivid};
    outline-offset: 2px;
  }
`;

export const LargeButton = styled(Button)`
  padding: 1rem 2rem;
  font-size: ${({ theme }) => theme.label.large};
`;

export const SmallButton = styled(Button)`
  padding: 0.25rem 1.25rem;
  font-size: ${({ theme }) => theme.label.small};
`;

export const SecondaryBtn = styled(Button)`
  background: ${({ theme }) => theme.colors.white100};
  outline: 2px solid ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.main};
  &:focus {
    ${({ theme }) => theme.elevation.inset01}
    background: none;
    outline: 2px solid ${({ theme }) => theme.colors.vivid};
    outline-offset: 2px;
  }
`;

export const SecondaryBtnSmall = styled(SecondaryBtn)`
  padding: 0.25rem 1.25rem;
  font-size: ${({ theme }) => theme.label.small};
`;

export const SecondaryBtnLarge = styled(SecondaryBtn)`
  padding: 1rem 2rem;
  font-size: ${({ theme }) => theme.label.large};
`;

export const TertiaryBtn = styled(SecondaryBtn)`
  outline: none;
  ${({ theme }) => theme.elevation.shadow60};
  border-radius: 2rem;
`;

export const TertiaryBtnSmall = styled(TertiaryBtn)`
  padding: 0.25rem 1.25rem;
  font-size: ${({ theme }) => theme.label.small};
`;

export const TertiaryBtnLarge = styled(TertiaryBtn)`
  padding: 1rem 2rem;
  font-size: ${({ theme }) => theme.label.large};
`;