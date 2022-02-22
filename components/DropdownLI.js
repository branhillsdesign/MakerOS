import styled from 'styled-components';
import ArrowRight from '../public/icons/2px/Arrows/Full Arrow Right.svg';
import { FlexBox } from './layout/FlexBox';
import { theme } from '../utils/ThemeConfig';

const ListItem = styled.li`
  width: 16rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
  &:hover {
    background-color: ${theme.colors.background.surface100};
  }
`;

const AnimateIcon = styled.img`
  li:hover & {
  }
`;

export const DropdownLI = () => {
  return (
    <>
      <ListItem>
        <FlexBox>
          <ArrowRight style='path'/>
          Events
        </FlexBox>
        <ArrowRight stroke='pink'/>
      </ListItem>
    </>
  );
};
