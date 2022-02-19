import styled from 'styled-components';
import { theme } from '../utils/ThemeConfig';
import ArrowRightSVG from '../public/img/NavButton-arrow-right.svg';
import Image from 'next/image';
import { FlexBox } from './layout/FlexBox';

const NavList = ['Default', 'Default', 'Default', 'Default'];

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  Image:hover & {
    transform: rotate(90deg);
  }
`;

const NavButton = styled.button`
  border: none;
  background: ${theme.colors.background.surface100};
  font-size: ${theme.label.medium};
  width: 100%;
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
const DropdownItem = styled.div`
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

const NavButton01 = () => {
  return (
    // I need to work on generating buttons dynamically from the NavList array
    <>
      <Dropdown>
        <NavButton>
          {NavList[0]}
          <Spacer />
          <IconFrame>
            <Image src={ArrowRightSVG} alt='' />
          </IconFrame>
        </NavButton>
        <DropdownContent>
          <DropdownItem>
            <FlexBox>
              <Image src={ArrowRightSVG} alt='' />
              Weddings
            </FlexBox>
            <Image src={ArrowRightSVG} alt='' />
          </DropdownItem>
          <DropdownItem>
            <FlexBox>
              <Image src={ArrowRightSVG} alt='' />
              Events
            </FlexBox>
            <Image src={ArrowRightSVG} alt='' />
          </DropdownItem>
          <DropdownItem>
            <FlexBox>
              <Image src={ArrowRightSVG} alt='' />
              Parties
            </FlexBox>
            <Image src={ArrowRightSVG} alt='' />
          </DropdownItem>
          <DropdownItem>
            <FlexBox>
              <Image src={ArrowRightSVG} alt='' />
              Tournaments
            </FlexBox>
            <Image src={ArrowRightSVG} alt='' />
          </DropdownItem>
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
