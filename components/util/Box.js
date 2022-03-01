import styled from 'styled-components';

export const Box = styled.div`
	box-sizing: border-box;
	margin-inline: auto;
	background-color: ${(props) => props.bg || 'null'};
`;
