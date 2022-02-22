import styled from 'styled-components';
import FullArrowRight from '../public/icons/2px/FullArrowRight';
import { FlexBox } from '../components/layout/FlexBox';
import DiamondRing from '../public/icons/Duotone/DiamondRing';
import { theme } from '../utils/ThemeConfig';
import { AniAppearRight } from '../utils/Animations';
import { AniToColor } from '../utils/Animations';

const ListItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  min-width: 10rem;
  padding: 0.5rem;
  border-radius: 0.375rem;
  &:hover {
    background-color: ${theme.colors.background.bg00};
  }
`;

export const DropdownLI = (props) => {
  return (
    <>
      <ListItem>
        <FlexBox>
          <AniToColor hoverTarget={ListItem}>
            <DiamondRing color={theme.colors.main} width='1rem' height='1rem' />
          </AniToColor>
          {props.text || 'DropDownLI'}
        </FlexBox>
        <AniAppearRight hoverTarget={ListItem}>
          <FullArrowRight
            color={theme.colors.main}
            width='1.2rem'
            height='1.2rem'
          />
        </AniAppearRight>
      </ListItem>
    </>
  );
};
