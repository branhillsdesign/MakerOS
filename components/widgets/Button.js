import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig';

const styles = {
	size: {
		sm: 'padding: 0.25rem 0.75rem; font-size: ${theme.label.sm};',
		md: 'padding: 0.5rem 1rem; font-size: ${theme.label.md};',
		lg: 'padding: 0.75rem 1.5rem; font-size: ${theme.label.lg};',
	},
	variant: {
		outline: `background: inherit; outline: 2px solid ${theme.colors.main}; outline-offset: -2px; color: ${theme.colors.main};`,
		pill: `background: ${theme.colors.white100}; outline: none; color: ${theme.colors.main}; border-radius: 8rem; box-shadow: ${theme.elevation.shadow60};`,
		plain: `background: ${theme.colors.main}; outline: none; color: ${theme.colors.white100};`,
		disabled: `background: ${theme.colors.background.bg10}; outline: 2px solid ${theme.colors.text.disabled}; color: ${theme.colors.text.disabled};`,
		link: `background: none; outline: none; color: ${theme.colors.main};`,
	},
	hover: {
		plain: `background: ${theme.colors.vivid}; ${theme.elevation.hover};`,
		outline: `background: none; ${theme.elevation.hover};`,
		pill: `background: ${theme.colors.background.bg00}; ${theme.elevation.hover};`,
		disabled: `background: ${theme.colors.background.bg10}; ${theme.elevation.shadow00}; cursor: not-allowed;`,
		link: `text-decoration: underline 2px solid; text-underline-offset: 2px;`,
	},
	focus: {
		plain: `outline: 2px solid ${theme.colors.main}; outline-offset: 2px;`,
		outline: `outline: 2px solid ${theme.colors.main}; outline-offset: 2px;}`,
		pill: `outline: 2px solid ${theme.colors.main}; outline-offset: 2px;`,
		disabled: `outline: 2px solid ${theme.colors.text.disabled};`,
		link: `outline: 2px solid ${theme.colors.main}; outline-offset: 0px;`,
	},
};

export const Button = styled.button`
	cursor: pointer;
	width: ${(props) => props.width || '100%'};
	border: none;
	transition: 0.3s all ease-out;
	border-radius: 8px;
	${(props) => styles.size[props.size] || styles.size['md']}
	${(props) => styles.variant[props.variant] || styles.variant['plain']};

	&:hover {
		${(props) => styles.hover[props.variant] || styles.hover['plain']};
	}

	&:focus {
		${(props) => styles.focus[props.variant] || styles.focus['plain']};
	}
`;
