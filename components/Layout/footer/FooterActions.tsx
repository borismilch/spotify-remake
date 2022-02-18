import React from 'react'

import { MdPlaylistPlay, MdOutlineComputer } from '@/icons/.'
import { FooterVolumes } from '.'
import AppIcon from '@/icons/.'

import { useNavigation } from '@/hooks/.'

const FooterActions = () => {

  const { pushRouter, router } = useNavigation()

  const isQueue = router.pathname === '/queue'

  return (
    <div className="flex items-center gap-2 z-10">

      <AppIcon
        onclick={pushRouter.bind(null, '/queue')}
        Icon={<MdPlaylistPlay
           className={'app_icon ' + (isQueue && ' text-green-600')} 
          />}
        
      />

      <AppIcon
        Icon={<MdOutlineComputer className='app_icon' />}

      />

      <FooterVolumes />

    </div>
  )
}

export default FooterActions