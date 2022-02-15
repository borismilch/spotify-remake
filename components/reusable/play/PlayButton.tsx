import React from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'
import { ITrack } from '@/models/.'

import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { setCurrentTrack } from '@/store/actions'

import { setPaused } from '@/store/actions'

interface PlayButtonProps {
  onClick: Function,
  playedElement: ITrack,
  category: string,
  isAlbum?: boolean 
}

const PlayButton: React.FC<PlayButtonProps> = (props) => {

  const { onClick, playedElement, category, isAlbum = false } = props

  const dispatch = useAppDispatch()
  const {paused, currentIndex, currentTrack} = useAppSelector(state => state.song)
 
  const isSameTrack = currentTrack?.albumId === playedElement?.albumId 

  const setOrPauseCurrent = () => {
    console.log('calll')
    if (isSameTrack){
      dispatch(setPaused(!paused))
      console.log('sss', currentTrack, playedElement.albumId, paused)
    } else {
      dispatch(setCurrentTrack(({...playedElement, category}) as ITrack))
      console.log('nonono')
    }
  }
  
  return (
    <button 
      onClick={setOrPauseCurrent.bind(null)}
      className='play_button'
    >
      { !(isSameTrack && paused) ? 
         <FaPlay className=' text-black' />: 
         <FaPause className='text-black' />
      }

    </button>
  )
}

export default PlayButton