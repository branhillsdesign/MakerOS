import styled from 'styled-components';
import { theme } from '../utils/ThemeConfig';
import { ResetInput } from '../utils/FormReset';

const styles = {
  type: {
    text: 'text',
    button: 'button',
    checkbox: 'checkbox',
    email: 'email',
    image: 'image',
    number: 'number',
    password: 'password',
    radio: 'radio',
    range: 'range',
    search: 'search',
    tel: 'tel',
    textarea: 'textarea',
    url: 'url',
  },
  state: {
    disabled: 'outline: 2px solid ${theme.colors.text.disabled};',
    error: 'outline: 2px solid ${theme.colors.red00};',
    focus: 'outline: 2px solid ${theme.colors.main};',
    active: 'outline: 2px solid ${theme.colors.main};',
    success: 'outline: 2px solid ${theme.colors.green00};',
  },
};

export const TextBox = styled.input`
  ${ResetInput};
  appearance: none;
  type: ${(props) => styles.type[props.type] || styles.type.text};
  placeholder: ${(props) => props.placeholder};
  ${theme.body.p1}
  transition: 0.1s all ease-out;
  border-radius: 8px;
  border: none;
  padding: 0.5rem 1rem;
  color: ${theme.colors.text.vivid};
  background: ${theme.colors.background.surface100};
  outline: 2px solid ${theme.colors.text.disabled};

  &:hover {
    ${theme.elevation.hover};
  }
  &:focus {
    outline: 2px solid ${theme.colors.main};
  }

  &:active {
    outline: 2px solid ${theme.colors.main};
  }
`;

export const InputLabel = styled.label`
  for: ${(props) => props.for};
  ${theme.body.p1}
  margin-left: 1rem;
`;
