import React from 'react';
import TopBar from './TopBar';
import Header from './Header';
import NavBar from './NavBar';
import StickyNavbar from './StickyNavbar';
import MobileHeader from './MobileHeader';

const HeaderClient = () => {
    return (
        <header>
          <TopBar />

          <div className="hidden lg:block">
            <Header />
            <NavBar />
            <StickyNavbar />
          </div>

          <div className="block lg:hidden">
            <MobileHeader />
          </div>
        </header>
    );
};

export default HeaderClient;