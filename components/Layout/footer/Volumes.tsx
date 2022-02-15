import React, { ChangeEvent } from 'react'

import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { setVolume } from '@/store/actions'

import { getVolumeIcon } from '@/utils/helpers/VolumeIcon'
import { useState } from 'react'

const FooterVolumes = () => {

  const [savedVolume, setSavedVolume] = useState<number>(0)

  const { volume } = useAppSelector(state => state.song)
  const dispatch = useAppDispatch()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setVolume(+e.target.value))
  }

  const muteVolume = () => {
    if (volume) { 
      setSavedVolume(volume)
      dispatch(setVolume(0))
    } else {
      dispatch(setVolume(savedVolume))
    }
  }

  const VolumeIcon = getVolumeIcon(volume)

  return (
    <div className='flex items-center'>

      <VolumeIcon 
        onClick={muteVolume}
        className='app_icon mx-2 text-sm' />

      <input 
        type="range" 
        min={1} 
        max={100} 
        style={{height: 2}}
        value={volume}
        onChange={onChange}
      />

    </div>
  )
}

export default FooterVolumes