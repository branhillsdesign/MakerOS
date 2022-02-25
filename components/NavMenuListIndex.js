import * as Icon from '../public/icons/Duotone/Index';
import { theme } from '../utils/ThemeConfig';
import Link from 'next/link';
import { Fragment } from 'react';
import { DropdownLI } from './DropdownLI';

// Change main navigation dropdown button01 menu list items here.
const navBtn01DropdownListData = {
  navDropdownList: [
    {
      id: '1',
      text: 'Events',
      href: '#',
      icon: (
        <Icon.DiamondRing
          width='1.2rem'
          height='1.2rem'
          color={theme.colors.main}
        />
      ),
    },
    {
      id: '2',
      text: 'Leagues',
      href: '#',
      icon: (
        <Icon.Beer width='1.2rem' height='1.2rem' color={theme.colors.main} />
      ),
    },
    {
      id: '3',
      text: 'Membership',
      href: '#',
      icon: (
        <Icon.GolfFlag
          width='1.2rem'
          height='1.2rem'
          color={theme.colors.main}
        />
      ),
    },
    {
      id: '4',
      text: 'Course Information',
      href: '#',
      icon: (
        <Icon.CalendarEvent
          width='1.2rem'
          height='1.2rem'
          color={theme.colors.main}
        />
      ),
    },
  ],
};

export const navBtn01ListItems = () => {
  const data = navBtn01DropdownListData.navDropdownList;
  const navList = data.map((item) => (
    <Fragment key={item.id}>
      <Link href={item.href} passHref>
        <DropdownLI text={item.text} icon={item.icon} />
      </Link>
    </Fragment>
  ));
  return navList;
};

// Change main navigation dropdown button02 menu list items here.
const navBtn02DropdownListData = {
  navDropdownList: [
    {
      id: '1',
      text: `Men's Scramble`,
      href: '#',
      icon: (
        <Icon.Users width='1.2rem' height='1.2rem' color={theme.colors.main} />
      ),
    },
    {
      id: '2',
      text: `Couple's Scramble`,
      href: '#',
      icon: (
        <Icon.Beer width='1.2rem' height='1.2rem' color={theme.colors.main} />
      ),
    },
    {
      id: '3',
      text: `Men's Singles`,
      href: '#',
      icon: (
        <Icon.GolfFlag
          width='1.2rem'
          height='1.2rem'
          color={theme.colors.main}
        />
      ),
    },
    {
      id: '4',
      text: 'Course Information',
      href: '#',
      icon: (
        <Icon.CalendarEvent
          width='1.2rem'
          height='1.2rem'
          color={theme.colors.main}
        />
      ),
    },
  ],
};

export const navBtn02ListItems = () => {
  const data = navBtn02DropdownListData.navDropdownList;
  const navList = data.map((item) => (
    <Fragment key={item.id}>
      <Link href={item.href} passHref>
        <DropdownLI text={item.text} icon={item.icon} />
      </Link>
    </Fragment>
  ));
  return navList;
};

// Change main navigation dropdown button03 menu list items here.
const navBtn03DropdownListData = {
  navDropdownList: [
    {
      id: '1',
      text: `Facilities`,
      href: '#',
      icon: (
        <Icon.Users width='1.2rem' height='1.2rem' color={theme.colors.main} />
      ),
    },
    {
      id: '2',
      text: `Course Details`,
      href: '#',
      icon: (
        <Icon.Beer width='1.2rem' height='1.2rem' color={theme.colors.main} />
      ),
    },
  ],
};

export const navBtn03ListItems = () => {
  const data = navBtn03DropdownListData.navDropdownList;
  const navList = data.map((item) => (
    <Fragment key={item.id}>
      <Link href={item.href} passHref>
        <DropdownLI text={item.text} icon={item.icon} />
      </Link>
    </Fragment>
  ));
  return navList;
};

// Change main navigation dropdown button02 menu list items here.
const navBtn04DropdownListData = {
  navDropdownList: [
    {
      id: '1',
      text: `Men's Scramble`,
      href: '#',
      icon: (
        <Icon.Users width='1.2rem' height='1.2rem' color={theme.colors.main} />
      ),
    },
    {
      id: '2',
      text: `Couple's Scramble`,
      href: '#',
      icon: (
        <Icon.Beer width='1.2rem' height='1.2rem' color={theme.colors.main} />
      ),
    },
    {
      id: '3',
      text: `Men's Singles`,
      href: '#',
      icon: (
        <Icon.GolfFlag
          width='1.2rem'
          height='1.2rem'
          color={theme.colors.main}
        />
      ),
    },
    {
      id: '4',
      text: 'Course Information',
      href: '#',
      icon: (
        <Icon.CalendarEvent
          width='1.2rem'
          height='1.2rem'
          color={theme.colors.main}
        />
      ),
    },
  ],
};

export const navBtn04ListItems = () => {
  const data = navBtn04DropdownListData.navDropdownList;
  const navList = data.map((item) => (
    <Fragment key={item.id}>
      <Link href={item.href} passHref>
        <DropdownLI text={item.text} icon={item.icon} />
      </Link>
    </Fragment>
  ));
  return navList;
};
