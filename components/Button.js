import styled from 'styled-components';
import { theme } from '../utils/ThemeConfig';

export const Button = styled.button`
  ${(props) =>
    props.size === 'sm'
      ? 'padding: 0.25rem 1.25rem; font-size: 0.75rem;'
      : props.size === 'lg'
      ? 'padding: 1rem 2rem; font-size: 1rem;'
      : 'padding: 0.5rem 1.5rem; font-size: 0.875rem;'};
  border-radius: 8px;
  ${(props) =>
    props.variant === 'secondary'
      ? `background: ${theme.colors.white100}; outline: 2px solid ${theme.colors.main}; color: ${theme.colors.main};`
      : props.variant === 'tertiary'
      ? `background: ${theme.colors.white100}; outline: none; color: ${theme.colors.main}; border-radius: 8rem; box-shadow: ${theme.elevation.shadow60}`
      : `background: ${theme.colors.main}; outline: none; color: ${theme.colors.white100};`};
  border: none;
  transition: 0.3s all ease-out;

  &:hover,
  &:focus {
    ${(props) =>
      props.variant === 'secondary'
        ? `background: ${theme.colors.background.bg00}; ${theme.elevation.inset01}`
        : props.variant === 'tertiary'
        ? `background: ${theme.colors.background.bg00}; ${theme.elevation.inset01}`
        : `background: ${theme.colors.vivid}; ${theme.elevation.inset01}`};
  }
  &:focus {
    ${(props) =>
      props.variant === 'secondary' || 'tertiary'
        ? `outline: 2px solid ${theme.colors.vivid}; outline-offset: 2px;`
        : `outline: none;`}
  }
`;
