import styled from 'styled-components';

export const FlexBox = styled.div`
  display: ${(props) => props.display || 'flex'};
  flex-direction: ${(props) => props.flexDirection || 'inherit'};
  justify-content: ${(props) => props.justifyContent || 'inherit'};
  align-items: ${(props) => props.alignItems || 'inherit'};
  gap: ${(props) => props.gap || '1rem'};
  max-width: ${(props) => props.maxWidth || '100%'};
  background-color: ${(props) => props.backgroundColor || 'inherit'};

  &: > * {
    margin-block: 0;
  }

  &: > * + * {
    margin-block-start: ${(props) => props.gap || 'null'};
  }
`;
