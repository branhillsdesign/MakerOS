import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/ThemeConfig';
import { FlexBox } from './layout/FlexBox';
import Image from 'next/image';
import ArrowRight from '../public/icons/2px/Arrows/Arrow Right.svg';
import ArrowUp from '../public/icons/2px/Arrows/Arrow Up.svg';

// Great styles dumbass, you have it working. Now use the fucking schema from Button.js so you can export all of these with props.

export const NavButton01 = styled.button`
  cursor: pointer;
  border: none;
  background: inherit;
  font-size: ${theme.label.large};
  padding: 1.5rem 1.5rem 0;
  text-align: center;
  &:after {
    content: '';
    display: block;
    height: 0.25rem;
    background: ${theme.colors.main};
    transition: 0.3s ease;
    width: 0;
    transform: translateX(-1.5rem);
    border-radius: 0.25rem 0.25rem 0 0;
    margin-top: 1.25rem;
  }
  &:hover:after {
    width: calc(100% + 3rem);
  }
`;

export const NavButton02 = styled.button`
  cursor: pointer;
  border: none;
  background: inherit;
  font-size: ${theme.label.large};
  padding: 0 1.5rem 1.5rem;
  text-align: center;
  &:hover {
    background: ${theme.colors.background.surface100};
    transition: background 0.3s ease 0s;
    ${theme.elevation.shadow30};
  }
  &:before {
    content: '';
    display: block;
    height: 0.25rem;
    background: ${theme.colors.main};
    transition: 0.3s ease;
    transform: translateX(-1.5rem);
    width: 0;
    border-radius: 0.25rem 0.25rem 0 0;
    margin-bottom: 1.25rem;
  }
  &:hover:before {
    width: calc(100% + 3rem);
  }
`;

export const NavButton03 = styled(NavButton01)`
  &:hover {
    background: ${theme.colors.background.surface100};
    transition: background 0.3s ease 0s;
    ${theme.elevation.inset01};
  }
`;

export const NavButton04 = styled.button`
  cursor: pointer;
  border: none;
  background: inherit;
  font-size: ${theme.label.large};
  padding: 1.5rem 1.5rem 0;
  text-align: center;
`;

const Rotate90 = styled(Image)`
  transition: 0.3s ease;
  button:hover & {
    transform: rotate(90deg);
    transition: 0.3s ease;
  }
`;

const Rotate180 = styled(Image)`
transition: 0.3s ease;
  button:hover & {
    transform: rotate(180deg);
    transition:  0.3s ease;
  }
`;

export const NavButton = () => {
  return (
    <>
      <FlexBox flexDirection='row' gap='0' flexBasis='8rem'>
        <NavButton01>
          <FlexBox justifyContent='center' alignItems='center' gap='0.5rem'>
            Events
            <Rotate90 src={ArrowRight} alt='' />
          </FlexBox>
        </NavButton01>
        <NavButton02>
          <FlexBox justifyContent='center' alignItems='center' gap='0.5rem'>
            Longasswordupinherr
            <Rotate90 src={ArrowRight} alt='' />
          </FlexBox>
        </NavButton02>
        <NavButton03>
          <FlexBox justifyContent='center' alignItems='center' gap='0.5rem'>
            Weddings
            <Rotate90 src={ArrowRight} alt='' />
          </FlexBox>
        </NavButton03>
        <NavButton04>
          <FlexBox
            justifyContent='center'
            flexDirection='column'
            alignItems='center'
            gap='0.5rem'
          >
            Stuff
            <Rotate180 src={ArrowUp} alt='' />
          </FlexBox>
        </NavButton04>
      </FlexBox>
    </>
  );
};
