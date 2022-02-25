import styled from 'styled-components';
import { useState } from 'react';
import { theme } from '../utils/ThemeConfig';
import { NavButton } from './NavButton';
import { Button } from './Button';
import { FlexBox } from './layout/FlexBox';
import { Spacer } from './layout/Spacer';

const Dropdown = styled.div`
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

export const NavMenuPopover = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => setIsOpen(!isOpen);

  return (
    <>
      <Dropdown onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}>
        <NavButton text={props.text} variant='01' hoverTarget={Dropdown} />
        {props.list && isOpen && (
          <DropdownContent>
            <FlexBox flexDirection='column' gap='.25rem'>
              {props.list}
              {props.ctaBtnText && (
                <>
                  <Spacer />
                  <Button size='md'>{props.ctaBtnText}</Button>
                </>
              )}
            </FlexBox>
          </DropdownContent>
        )}
      </Dropdown>
    </>
  );
};
