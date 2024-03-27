import React from 'react';
import LogoHeader from './LogoHeader';
import NavItems from './NavItems';
import ButtonToggleTheme from './ButtonToggleTheme'; // Import the button component

const Header = () => {
  return (
    <header className='container mx-auto px-6 text-center h-40 md:h-40'>
      <LogoHeader />
      <div
        className='flex items-center justify-center space-x-4 
                   md:space-x-10 md:absolute top-12 right-10'
      >
        <NavItems />
        <ButtonToggleTheme />
      </div>
    </header>
  );
};

export default Header;
