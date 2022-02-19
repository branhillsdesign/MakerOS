import styled from 'styled-components';
import { theme } from '../utils/ThemeConfig';
import { FlexBox } from './layout/FlexBox';
import { DropdownLI } from './DropdownLI';
import { NavButton01 } from './NavButton';

const NavList = ['Default', 'Default', 'Default', 'Default'];

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  Image:hover & {
    transform: rotate(90deg);
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  min-width: 20rem;
  padding: 2rem;
  background-color: ${theme.colors.background.surface100};
  z-index: 1;
  border-radius: 0.5rem;
  left: -4rem;
  ${Dropdown}:hover & {
    display: block;
  }
`;

const Spacer = styled.span`
  display: inline-block;
  width: ${(props) => props.w || '.5rem'};
`;

const IconFrame = styled.div`
  ${Dropdown}:hover & {
    transform: rotate(90deg);
    transition: 0.3s ease;
  }
`;

const Nav = () => {
  return (
    // I need to work on generating buttons dynamically from the NavList array
    <>
      <Dropdown>
        <NavButton01 />
        <DropdownContent>
          <DropdownLI />
        </DropdownContent>
      </Dropdown>
    </>
  );
};

export const NavDropdownMenu = () => {
  return (
    <>
      <FlexBox
        gap='3rem'
        backgroundColor='${theme.colors.main}'
        justifyContent='space-around'
      >
        <NavButton01 />
        <NavButton01 />
        <NavButton01 />
        <NavButton01 />
      </FlexBox>
    </>
  );
};
