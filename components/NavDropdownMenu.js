import styled from 'styled-components';
import { theme } from '../utils/ThemeConfig';
import { FlexBox } from './layout/FlexBox';
import { DropdownLI } from './DropdownLI';
import { NavButton } from './NavButton';

const navText = {
  nav01: {
    one: 'Weddings',
    two: 'Parties',
    three: 'Tournaments',
    four: 'Upcoming Events',
    five: 'Placeholder',
  },
  nav02: {
    '01': 'Scramble',
    '02': 'Couples',
    '03': 'Singles',
  },
};

const Dropdown = styled.div`
  display: block;
  position: relative;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 2rem;
  background-color: ${theme.colors.background.surface100};
  z-index: 1;
  border-radius: 0.5rem;
  ${theme.elevation.shadow60};
  ${Dropdown}:hover & {
    display: block;
    transition: all 0.3s ease-in;
  }
`;

export const NavDropDown = () => {
  return (
    // I need to work on generating buttons dynamically from the NavList object.
    <>
      <Dropdown>
        <NavButton variant='01' hoverTarget={Dropdown} text='Events' />
        <DropdownContent>
          <FlexBox flexDirection='column' gap='.25rem'>
            <DropdownLI text={navText.nav01.one} />
            <DropdownLI text={navText.nav01.two} />
            <DropdownLI text={navText.nav01.three} />
            <DropdownLI text={navText.nav01.four} />
          </FlexBox>
        </DropdownContent>
      </Dropdown>
    </>
  );
};
