import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig';

export const FlexBox = styled.div`
	display: ${(props) => props.display || 'flex'};
	flex-direction: ${(props) => props.flexDirection || 'row'};
	justify-content: ${(props) => props.justifyContent || 'null'};
	align-items: ${(props) => props.alignItems || 'null'};
	gap: ${(props) => props.gap || 'null'};
	background-color: ${(props) => props.backgroundColor || 'null'};
	flex-grow: ${(props) => props.flexGrow || 'null'};
	flex-shrink: ${(props) => props.flexShrink || 'null'};
	flex-basis: ${(props) => props.flexBasis || 'null'};
	min-width: ${(props) => props.minWidth || 'null'};
	background-color: ${(props) => props.bg || 'null'};
	padding: ${(props) => props.padding || 'null'};
	max-width: ${(props) => props.maxWidth || 'null'};
	flex-wrap: ${(props) => props.flexWrap || 'null'};
	box-sizing: ${(props) => props.boxSizing || 'inherit'};

	> * & {
		margin-block: 0;
	}

	> * + * & {
		margin-block-start: ${(props) => props.gap || 'null'};
	}
`;
