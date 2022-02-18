import React, { ReactElement } from 'react';

import { Navs, Avatar } from '.'
import { useAppSelector } from '@/hooks/redux';

interface HeaderProps {
  HeaderComponent: ReactElement<any, any>

}

const Header: React.FC<HeaderProps> = (props) => {

  const { HeaderComponent = <></> } = props

  const { currentColor } = useAppSelector((state) => state.color)
  
  return (
    <header 
     className={'flex p-3 relative justify-between transition-all duration-500 w-full'}
     style={{backgroundColor: currentColor  }}
     >

    { currentColor !== '#121212' && <div className='absolute inset-0 bg-black bg-opacity-50' />}

      <div className='flex items-center gap-5'>

        <Navs />

        {HeaderComponent}

      </div>

      <Avatar />

    </header>
  );
};

export default Header;
