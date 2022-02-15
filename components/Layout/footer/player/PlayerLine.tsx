import React, { ChangeEvent } from 'react'

import { toHHMMSS } from '@/utils/helpers/'

import { useAppSelector } from '@/hooks/redux'

interface PlayerLine {
  onChangeTime: (e: ChangeEvent<HTMLInputElement>) => void
}

const PlayerLine: React.FC<PlayerLine> = ({onChangeTime}) => {

  const { currentTime, fullTime } = useAppSelector(state => state.song)

  return (
    <div className='flex items-center gap-2 '>
      <p className='text-xs text-desc font-semibold'>{toHHMMSS(currentTime.toString())}</p>
    
      <input 
        type="range" 
        value={currentTime} 
        style={{height: 3}} 
        className='w-full mx-auto' 
        onChange={onChangeTime}
        max={fullTime}

      />

      <p className='text-xs text-desc font-semibold'>{toHHMMSS(fullTime.toString())}</p>
    </div>
  )
}

export default PlayerLine