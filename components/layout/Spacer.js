import styled from "styled-components";

export const Spacer = styled.div`
  display: inline-block;
  height: ${(props) => props.height || "1rem"};
`;