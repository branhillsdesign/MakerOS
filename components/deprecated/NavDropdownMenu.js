import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig';
import { FlexBox } from '../layout/FlexBox';
import { DropdownLI } from '../DropdownLI';
import { NavButton } from '../NavButton';
import React, { useState } from 'react';

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
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 2rem;
  background-color: ${theme.colors.background.surface100};
  z-index: 1;
  border-radius: 0.5rem;
  ${theme.elevation.shadow60};
`;

export const NavDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleHover = () => setIsOpen(!isOpen);

  return (
    // I need to work on generating buttons dynamically from the NavList object.
    <>
      <NavButton
        variant='01'
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        text='Events'
      />
      {isOpen && <div>HI!</div>}
    </>
  );
};
