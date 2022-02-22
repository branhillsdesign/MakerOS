import styled from 'styled-components';

// Animates from grayscale to color on hover.
export const AniToColor = styled.div`
  filter: grayscale(100%);
  ${(props) => props.hoverTarget}:hover & {
    filter: grayscale(0);
  }
`;

// Animates from left to right with a 50% scale up on hover.
export const AniAppearRight = styled.div`
  transform: translateX(-1rem) scale(0.5);
  transition: all 0.2s ease-in;
  opacity: 0;
  ${(props) => props.hoverTarget}:hover & {
    transform: translateX(0) scale(1);
    opacity: 1;
    transition: all 0.2s ease-in;
  }
`;

// Animates by degree of rotation on hover.
export const AniRotate = styled.div`
  transition: 0.3s ease;
  ${(props) => props.hoverTarget}:hover & {
    transform: rotate(${(props) => props.deg || '90deg'});
    transition: 0.3s ease;
  }
`;
