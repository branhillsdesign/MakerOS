import styled from 'styled-components';

export const FlexBox = styled.div`
  display: ${(props) => props.display || 'flex'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  gap: ${(props) => props.gap || '0'};
  background-color: ${(props) => props.backgroundColor || 'null'};
  flex-grow: ${(props) => props.flexGrow || 'auto'};
  flex-shrink: ${(props) => props.flexShrink || 'auto'};
  flex-basis: ${(props) => props.flexBasis || 'auto'};
  min-width: ${(props) => props.minWidth || 'auto'};
  background-color: ${(props) => props.bg || 'null'};

  > * & {
    margin-block: 0;
  }

  > * + * & {
    margin-block-start: ${(props) => props.gap || 'null'};
  }
`;
