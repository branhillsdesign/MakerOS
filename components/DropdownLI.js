import styled, { keyframes } from 'styled-components';
import FullArrowRight from '../public/img/FullArrowRight';
import { FlexBox } from '../components/layout/FlexBox';
import DiamondRing from '../public/icons/Duotone/Love/Diamond Ring.svg';
import { theme } from '../utils/ThemeConfig';

const ListItem = styled.li`
  width: 16rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
  &:hover {
    background-color: ${theme.colors.background.bg00};
  }
`;

const AniFullArrowRight = styled(FullArrowRight)`
  path:nth-child(1) {
    stroke: ${theme.colors.main};
  }
  transform: translateX(-1rem) scale(0.5);
  transition: all 0.2s ease-in;
  opacity: 0;
  ${ListItem}:hover & {
    transform: translateX(0) scale(1);
    opacity: 1;
    transition: all 0.2s ease-in;
  }
`;

const AniDiamondRing = styled(DiamondRing)`
  filter: grayscale(100%);
  ${ListItem}:hover & {
    filter: grayscale(0);
  }
`;

export const DropdownLI = () => {
  return (
    <>
      <ListItem>
        <FlexBox>
          <AniDiamondRing />
          Events
        </FlexBox>
        <AniFullArrowRight />
      </ListItem>
    </>
  );
};
