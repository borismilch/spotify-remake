import React, { SyntheticEvent } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'
import { ITrack } from '@/models/.'

import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { setCurrentTrack } from '@/store/actions'

import { setQueue } from '@/store/actions'  

import { IoPlaySharp, IoPauseSharp } from 'react-icons/io5'

import { setPaused } from '@/store/actions'
import { setCurrentIndex, setGroup } from '@/store/reducers/song.reducer'

interface PlayButtonProps {
  onClick?: Function,
  playedElement: ITrack,
  category: string,
  isSong?: boolean,
  big?: boolean,
  thin?: boolean,
  index?: number,
  tracks: ITrack[],
  noShadow?: boolean
}

const PlayButton: React.FC<PlayButtonProps> = (props) => {

  const { 
     playedElement, 
     category, 
     isSong = false,
     big = false,
     thin = false,
     index = 0,
     tracks,
     noShadow = false
  } = props

  const dispatch = useAppDispatch()
  const {currentIndex, currentTrack, group} = useAppSelector(state => state.song)
 
  const { paused } = useAppSelector(state => state.audio)

  const isSameTrack = currentTrack?.albumId === playedElement?.albumId &&  group === category
  const isSameSong = isSameTrack && currentTrack.id === playedElement?.id

  const isActive = isSong ? isSameSong : (isSameTrack)
  const thinButtoClass = isActive ? 'text-green-500' : 'text-title'

  const setOrPauseCurrent = (e: SyntheticEvent<HTMLButtonElement>) => {

    e.stopPropagation()

    if (isActive){
      dispatch(setPaused(!paused))
      
     
    } else {
      dispatch(setCurrentTrack(({...playedElement, category}) as ITrack))
      dispatch(setCurrentIndex(index))
      dispatch(setQueue(tracks))
      dispatch(setGroup(category))
    }
  }
  
  return (
    <>
    {
     !thin ? (
      <button 
        onClick={setOrPauseCurrent.bind(null)}
        className={'play_button ' + (big && ('p-4 text-lg w-[58px] h-[58px] ') + (noShadow && 'shadow-transparent]'))}
      >
        { !(isActive && paused) ? 
          <FaPlay className=' text-black' />: 
          <FaPause className='text-black' />
        }

      </button>
    ) : (
      <button
        onClick={setOrPauseCurrent}
      >
        { !(isActive && paused)  ? 
          <IoPlaySharp className={thinButtoClass + ' text-2xl'} />: 
          <IoPauseSharp className='text-green-500 text-2xl' />
        }
      </button>
    )
    }

    </>
  
  )
}

export default PlayButton