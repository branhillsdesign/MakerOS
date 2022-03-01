import styled from 'styled-components';

export const BigCenter = styled.div`
	max-width: 1440px;
	margin-left: auto;
	margin-right: auto;
	background-color: ${(props) => props.bg || 'null'};
`;
