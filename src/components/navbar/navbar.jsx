import React, { useState } from 'react';
import { IoIosSearch, IoIosClose } from 'react-icons/io';
import Image from "material-ui-image"
import Router from 'next/router'

import HeaderWrapper, {
  NavbarWrapper,
  Logo,
  MenuWrapper,
  NavSearchButton,
  NavSearchWrapper,
  SearchCloseButton,
  NavSearchFromWrapper,
} from './navbar.style';

import SearchContainer from '~/containers/search/search';
import {HOME, CONTACT, ABOUT, BLOGS} from "~/settings/constants";
import { DrawerProvider } from '../drawer/drawer-context';
import MobileMenu from './mobile-menu';
import Menu from './menu';

const MenuItems = [
  {
    label: 'Главная',
    url: HOME,
  },
  {
    label: 'Статьи',
    url: BLOGS,
  },
  {
    label: 'О нас',
    url: ABOUT,
  },
  {
    label: 'Контакты',
    url: CONTACT,
  },
];

const Navbar = ({
  className,
  ...props
}) => {
  const [state, setState] = useState({
    toggle: false,
    search: '',
  });

  const toggleHandle = () => {
    setState({
      ...state,
      toggle: !state.toggle,
    });
  };

  const redirectToHome = async () => {
    await Router.push('/')
  }

  // Add all classs to an array
  const addAllClasses = ['header'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <HeaderWrapper className={addAllClasses.join(' ')} {...props}>
      <NavbarWrapper className="navbar">
        <DrawerProvider>
          <MobileMenu items={MenuItems} logo='/static/image/logo.png'/>
        </DrawerProvider>
        <Logo>
          <Image width={250} height={30} src='/static/image/logo.png' alt="logo" onClick={redirectToHome} />
        </Logo>
        <MenuWrapper>
          <Menu items={MenuItems} />
        </MenuWrapper>
        <NavSearchButton
          type="button"
          aria-label="search"
          onClick={toggleHandle}
        >
          <IoIosSearch size="23px" />
        </NavSearchButton>
      </NavbarWrapper>

      <NavSearchWrapper className={state.toggle === true ? 'expand' : ''}>
        <NavSearchFromWrapper>
          <SearchContainer />
          <SearchCloseButton
            type="submit"
            aria-label="close"
            onClick={toggleHandle}
          >
            <IoIosClose />
          </SearchCloseButton>
        </NavSearchFromWrapper>
      </NavSearchWrapper>
    </HeaderWrapper>
  );
};

export default Navbar;
