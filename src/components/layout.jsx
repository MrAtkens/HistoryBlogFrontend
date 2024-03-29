import React from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import ScrollToTop from 'react-scroll-up';

import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import ScrollUpButton from './scroll-up-button/scroll-up-button';
import ResetCss from './reset-css';
import { theme } from '../../public/theme';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <ResetCss />
        <Sticky top={0} innerZ={9999} activeClass="nav-sticky">
          <Navbar />
        </Sticky>
        {children}
        <Footer>
          Copyright &copy; {new Date().getFullYear()}
          <a href="https://geeknhistory.kz/">Geek'n'History</a>
        </Footer>
        <ScrollToTop
          showUnder={300}
          duration={700}
          easing="easeInOutCubic"
          style={{ bottom: 30, right: 20 }}
        >
          <ScrollUpButton />
        </ScrollToTop>
      </>
    </ThemeProvider>
  );
};

export default Layout;
