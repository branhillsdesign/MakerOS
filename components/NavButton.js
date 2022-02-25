import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/ThemeConfig';
import { FlexBox } from './layout/FlexBox';
import { ArrowRight } from '../public/icons/2px/Index';
import { ArrowUp } from '../public/icons/2px/Index';
import { AniRotate } from '../utils/Animations';

// Great styles dumbass, you have it working. Now use the fucking schema from Button.js so you can export all of these with props.

const styles = {
  deg: {
    90: 'rotate(90deg);',
    180: 'rotate(180deg);',
  },
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
          };
          
          `,
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
        `,
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
    '04': `padding: 1.5rem 1.5rem 0;
          text-align: center;`,
    '05': `padding: 1.5rem 1.5rem 0;
          text-align: center;`,
  },
};

const StyledNavButton = styled.div`
  cursor: pointer;
  border: none;
  background: inherit;
  font-size: ${theme.label.large};
  text-align: center;
  transition: all 0.3s ease;
  ${(props) => styles.variant[props.variant] || styles.variant['01']};
  ${(props) => props.hoverTarget}:hover & {
    &:after {
      width: calc(100% + 3rem);
    }
  }
  ${(props) => props.hoverTarget}:hover & {
    &:before {
      width: calc(100% + 3rem);
    }
  }
`;

export const NavButton = (props) => {
  return (
    <>
      <StyledNavButton variant={props.variant} hoverTarget={props.hoverTarget}>
        <FlexBox
          justifyContent='center'
          alignItems='center'
          gap='0.5rem'
          flexDirection={props.variant === '04' ? 'column' : 'row'}
        >
          {props.text || 'NavButton'}
          <AniRotate
            hoverTarget={props.hoverTarget}
            deg={props.variant === '04' ? '180deg' : '90deg'}
          >
            {props.variant === '04' ? (
              <ArrowUp color={theme.colors.main} />
            ) : (
              <ArrowRight color={theme.colors.main} />
            )}
          </AniRotate>
        </FlexBox>
      </StyledNavButton>
    </>
  );
};
