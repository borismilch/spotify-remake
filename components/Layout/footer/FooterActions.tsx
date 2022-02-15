import React from 'react'

import { MdPlaylistPlay, MdOutlineComputer } from '@/icons/.'
import { FooterVolumes } from '.'
import AppIcon from '@/icons/.'

const FooterActions = () => {
  return (
    <div className="flex items-center gap-2 z-10">

      <AppIcon
        Icon={<MdPlaylistPlay className='app_icon' />}
        
      />

      <AppIcon
        Icon={<MdOutlineComputer className='app_icon' />}

      />

      <FooterVolumes />

    </div>
  )
}

export default FooterActions