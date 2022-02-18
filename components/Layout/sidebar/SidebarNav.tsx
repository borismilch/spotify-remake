import React, { ReactElement } from 'react'

import { SidebarLogo } from '@/components/icons'
import { ISidebarLink } from '@/models/.'
import { sidebarItems } from '@/utils/mock/sidebartems'
import { SidebarLink } from '.'

const SidearNav = () => {
  return (
    <div className='flex flex-col w-full'>

      <div className='p-6'>
      <SidebarLogo  />
      </div>
      

      <div className='flex flex-col p-4 pt-0'>
        {
          sidebarItems.map(item => (
            <SidebarLink key={item.text} sidebarItem={item} />
          ))
        }
      </div>

      
    </div>
  )
}

export default SidearNav