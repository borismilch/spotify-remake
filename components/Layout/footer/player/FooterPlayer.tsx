import React from 'react'

import { PlayerActions, PlayerLine } from './'

import { useAudioPlayer } from '@/hooks/.'
import { useRef } from 'react'

const FooterPlayer = () => {

  const audioref = useRef(null)

  const { togglePaused, changeTime , refreshTime, shuffleCurrentTime} = useAudioPlayer(audioref)

  return (
    <div className='flex z-40 flex-col max-w-[500px] gap-3 w-full justify-center'>

      <PlayerActions 
        refreshTime={refreshTime} 
        togglePaused={togglePaused} 
        shuffleCurrentTime={shuffleCurrentTime}
      />

      <PlayerLine onChangeTime={changeTime} />

      <audio ref={audioref}></audio>
     
    </div>
  )
}

export default FooterPlayer