import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/ThemeConfig';
import { FlexBox } from './layout/FlexBox';
import Image from 'next/image';
import ArrowRight from '../public/icons/2px/Arrows/Arrow Right.svg';
import ArrowUp from '../public/icons/2px/Arrows/Arrow Up.svg';

// Great styles dumbass, you have it working. Now use the fucking schema from Button.js so you can export all of these with props.

const styles = {
  variant: {
    '01': `padding: 1.5rem 1.5rem 0;
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
        }`,
    '02': `padding: 0 1.5rem 1.5rem; 
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
        }`,
    '03': `padding: 1.5rem 1.5rem 0;
          &:hover {
          background: ${theme.colors.background.surface100};
          transition: background 0.3s ease 0s;
          ${theme.elevation.inset01};
        }
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
        }`,
    '04': `cursor: pointer;
          border: none;
          background: inherit;
          font-size: ${theme.label.large};
          padding: 1.5rem 1.5rem 0;
          text-align: center;`,
  },
};

const StyledNavButton = styled.button`
  cursor: pointer;
  border: none;
  background: inherit;
  font-size: ${theme.label.large};
  text-align: center;
  transition: all 0.3s ease;
  ${(props) => styles.variant[props.variant] || styles.variant['01']};
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
    transition: 0.3s ease;
  }
`;

export const NavButton = (props) => {
  return (
    <>
      <StyledNavButton>
        <FlexBox justifyContent='center' alignItems='center' gap='0.5rem'>
          {props.text || 'NavButton'}
          <Rotate90 src={ArrowRight} alt='' />
        </FlexBox>
      </StyledNavButton>
    </>
  );
};
