import styled from 'styled-components';
import { theme } from '../utils/ThemeConfig';
import { FlexBox } from './layout/FlexBox';
import { DropdownLI } from './DropdownLI';
import { NavButton } from './NavButton';

const NavList = ['Default', 'Default', 'Default', 'Default'];

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  padding: 2rem;
  min-width: 16rem;
  background-color: ${theme.colors.background.surface100};
  z-index: 1;
  border-radius: 0.5rem;
  left: -50%;
  ${theme.elevation.shadow30};
  ${Dropdown}:hover & {
    display: block;
  }
`;

export const NavDropDown = () => {
  return (
    // I need to work on generating buttons dynamically from the NavList array
    <>
      <Dropdown>
        <NavButton variant='01' hoverTarget={Dropdown} text='Events' />
        <DropdownContent>
          <FlexBox flexDirection='column' gap='.25rem'>
            <DropdownLI text='Weddings' />
            <DropdownLI text='Weddings' />
            <DropdownLI text='Weddings' />
          </FlexBox>
        </DropdownContent>
      </Dropdown>
    </>
  );
};
