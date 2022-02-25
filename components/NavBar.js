import styled from 'styled-components';
import { theme } from '../utils/ThemeConfig';
import { FlexBox } from '../components/layout/FlexBox';
import { NavMenuPopover } from './NavMenuPopover';
import { Button } from './Button';
import { MakerOsIcon16Px as Icon } from '../public/icons/Duotone/Index';
import {
  navBtn01ListItems,
  navBtn02ListItems,
  navBtn03ListItems,
  navBtn04ListItems,
} from './NavMenuListIndex';

const navMenuBtn = {
  btnText: {
    btn01: 'Events',
    btn02: 'Leagues',
    btn03: 'Course Info',
    btn04: 'Membership',
  },
  btnList: {
    btn01: navBtn01ListItems(),
    btn02: navBtn02ListItems(),
    btn03: navBtn03ListItems(),
    btn04: navBtn04ListItems(),
  },
};

export const NavBar = () => {
  return (
    <>
      <FlexBox
        justifyContent='space-around'
        alignItems='center'
        minWidth='800px'
        bg={theme.colors.background.surface100}
      >
        <Icon color={theme.colors.main} width='2em' height='2em' />
        <FlexBox justifyContent='center' gap='0' flexDirection='row'>
          <NavMenuPopover
            text={navMenuBtn.btnText.btn01}
            list={navMenuBtn.btnList.btn01}
            ctaBtnText='Book An Event'
          />
          <NavMenuPopover
            text={navMenuBtn.btnText.btn02}
            list={navMenuBtn.btnList.btn02}
          />
          <NavMenuPopover
            text={navMenuBtn.btnText.btn03}
            list={navMenuBtn.btnList.btn03}
          />
          <NavMenuPopover
            text={navMenuBtn.btnText.btn04}
            list={navMenuBtn.btnList.btn04}
          />
        </FlexBox>
        <Button size='md' width='null'>
          Book A Tee Time
        </Button>
      </FlexBox>
    </>
  );
};
