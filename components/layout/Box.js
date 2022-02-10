import styled from 'styled-components';

export const Box = styled.div`
  display: ${(props) => props.display || 'flex'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  gap: ${(props) => props.gap || '1rem'};
  max-width: ${(props) => props.maxWidth || '100%'};
  
  &: > * {
    margin-block: 0;
  }

  &:> * + * {
    margin-block-start: ${(props) => props.gap || 'null'};
  }
`;
