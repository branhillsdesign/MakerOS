import styled from 'styled-components';

export const Spacer = styled.div`
  display: block;
  height: ${(props) => props.height || '1rem'};
`;
