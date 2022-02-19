import styled from 'styled-components';
import Icon from '../public/img/NavButton-arrow-right.svg';
import { FlexBox } from './layout/FlexBox';
import { theme } from '../utils/ThemeConfig';

const ListItem = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 0.375rem;
  gap: 0.5rem;
  &:hover {
    background-color: ${theme.colors.background.bg00};
  }
`;

export const DropdownLI = () => {
  return (
    <>
      <ListItem>
        <FlexBox>
          ${Icon}
          Events
        </FlexBox>
        ${Icon}
      </ListItem>
    </>
  );
};
