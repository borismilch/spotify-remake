import React from 'react'
import { ISidebarAction } from '@/models/.'
import { AiTwotoneHeart } from '@/icons/.'

import { SidebarAction } from '.'
import { IoMdAdd } from 'react-icons/io'

const SidebarActions = () => {

  const actions: ISidebarAction[] = [
    {
      Icon: IoMdAdd,
      text: 'Add New Playlist',
      onClick: () => {},
      classes: 'text-gray-700'
    },
    {
      Icon: AiTwotoneHeart,
      text: 'Loved tracks',
      onClick: () => {},
      classes: 'bg-gradient-to-br from-[#452ea6] via-[#452ea6] to-white text-white'
    }
  ] 

  return (
    <div className='flex  flex-col p-4 pt-2 pb-1 '>

      <div className='flex flex-col pb-4 border-b  border-gray-400 border-opacity-20'>
        {
          actions.map(item => (
            <SidebarAction action={item} />
          ))
        }
      </div>

    </div>
  )
}

export default SidebarActions