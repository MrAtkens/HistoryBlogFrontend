import React, { useContext } from 'react';
import { IoIosClose } from 'react-icons/io';
import Link from "next/link";

import Drawer from '../drawer/drawer';
import { DrawerContext } from '../drawer/drawer-context';
import Menu from './menu';
import {
  MobileMenuWrapper,
  DrawerContentWrapper,
  DrawerHead,
  DrawerLogo,
  DrawerClose,
  HamburgerIcon,
} from './navbar.style';


const MobileMenu = ({
  items,
  logo,
  ...props
}) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleDrawer = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <MobileMenuWrapper {...props}>
      <Drawer
        width="285px"
        placement="left"
        drawerHandler={
          <HamburgerIcon>
            <span />
            <span />
            <span />
          </HamburgerIcon>
        }
        open={state.isOpen}
        toggleHandler={toggleDrawer}
      >
        <DrawerContentWrapper>
          <DrawerHead>
            <DrawerLogo>
              <Link href="/">
                <img src={logo} alt="logo" />
              </Link>
            </DrawerLogo>
            <DrawerClose onClick={toggleDrawer}>
              <IoIosClose />
            </DrawerClose>
          </DrawerHead>
          <Menu items={items} className="mobile-menu" />
        </DrawerContentWrapper>
      </Drawer>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
