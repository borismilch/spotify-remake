import React from 'react'

import { PlayerActions, PlayerLine } from './'

import { useAudioPlayer } from '@/hooks/.'

const FooterPlayer = () => {

  const { togglePaused, changeTime , refreshTime, shuffleCurrentTime} = useAudioPlayer()

  return (
    <div className='flex z-40 flex-col max-w-[500px] gap-3 w-full justify-center'>

      <PlayerActions 
        refreshTime={refreshTime} 
        togglePaused={togglePaused} 
        shuffleCurrentTime={shuffleCurrentTime}
      />

      <PlayerLine onChangeTime={changeTime} />
     
    </div>
  )
}

export default FooterPlayer