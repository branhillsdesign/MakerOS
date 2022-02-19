import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/ThemeConfig';
import ArrowRight from '../public/icons/2px/Arrows/Arrow Right.svg';
import { FlexBox } from './layout/FlexBox';

export const NavButton01 = styled.button`
  cursor: pointer;
  border: none;
  background: inherit;
  font-size: ${theme.label.large};
  width: ${(props) => (props.width ? props.width : '100%')};
  padding: 1.5rem 0rem 0;
  text-align: center;
  &:after {
    content: '';
    display: block;
    height: 0.25rem;
    background: ${theme.colors.main};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
    border-radius: 0.25rem 0.25rem 0 0;
    margin-top: 1.25rem;
  }
  &:hover:after {
    width: 100%;
  }
`;

const AnimateArrow = styled(ArrowRight)`
  ${NavButton01}:hover & {
    transform: rotate(90deg);
    transition: all .3s ease;
  }
`;

export const NavButton = () => {
  return (
    <>
      <NavButton01>
        <FlexBox justifyContent='center' alignItems='center' gap='0.5rem'>
          Events
          <AnimateArrow />
        </FlexBox>
      </NavButton01>
    </>
  );
};
