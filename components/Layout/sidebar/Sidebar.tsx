import React from 'react'

import dynamic from 'next/dynamic'
import { BsArrowDownCircle } from '@/icons/.'

const Sidebar = () => {

  const SidebarNav = dynamic(() => import('./SidebarNav'))
  const SidebarPlaylist = dynamic(() => import ('./SidebarPlaylists'))
  const SidebarActions = dynamic(() => import('./SidebarActions'))

  return (
    <div className='flex flex-col bg-black max-h-screen flex-shrink-0 w-[250px]'>

      <SidebarNav />  

      <SidebarActions />

      <SidebarPlaylist />  

      <div className='button border-gray-400 font-normal'>
        <BsArrowDownCircle className='ml-6' />

        <p>Download this app</p>
      </div>

    </div>
  )
}

export default Sidebar