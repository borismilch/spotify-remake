import React from 'react';

import { Navs, Avatar } from '.'
import { useAppSelector } from '@/hooks/redux';

const Header = () => {

  const { currentColor } = useAppSelector((state) => state.color)
  
  return (
    <header 
     className={'flex p-3 relative justify-between transition-all duration-500 w-full'}
     style={{backgroundColor: currentColor  }}
     >

    { currentColor !== '#121212' && <div className='absolute inset-0 bg-black bg-opacity-50' />}

      <Navs />

      <Avatar />

    </header>
  );
};

export default Header;
