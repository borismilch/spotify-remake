import React from 'react'

import { FiHeart }  from 'react-icons/fi'
import { PlayButton } from '@/components/reusable'
import { RiMoreLine } from 'react-icons/ri'
import AppIcon from '@/components/icons'
import { ITrack } from '@/models/.'
import { setQueue, setCurrentTrack } from '@/store/actions'
import { useNavigation } from '@/hooks/.'

import { useAppDispatch } from '@/hooks/redux'
import { useAppSelector } from '@/hooks/redux'
import { userSelector } from '@/store/selectors' 

import { FaPen } from 'react-icons/fa'

import { MdDeleteSweep } from 'react-icons/md'

interface ActionButtonsProps {
  selectedTrack: ITrack
  group: string
  canPlay?: boolean
  canLike?: boolean
  tracks: ITrack[]
  deleteFunc?: () => Promise<void>

}

const ActionButtons: React.FC<ActionButtonsProps> = (props) => {
  const { pushRouter } = useNavigation()

  const user = useAppSelector(userSelector)

  const { 
    selectedTrack, 
    group, 
    canPlay = true, 
    canLike = true, 
    tracks,  
    deleteFunc = () => {}
  } = props

  const dispatch = useAppDispatch()

  const addToQueue = () => {
    dispatch(setQueue(tracks))
    dispatch(setCurrentTrack(tracks[0]))
    pushRouter('/queue')
  }

  return (
    <div className='flex  gap-6 pb-5 items-center'>

      {canPlay && <PlayButton 
        tracks={tracks}
        playedElement={selectedTrack}
        category={group}
        big 
      />}

      {canLike && <AppIcon 
        Icon = {<FiHeart className='text-4xl text-desc app_icon' />}
        onclick={ () => {} }
      />}

      { user.uid === selectedTrack?.authorId &&  <AppIcon
        Icon={<FaPen className='text-xl app_icon' />} 
        onclick={
          pushRouter.bind(
          null, '/library/update/' + selectedTrack.albumId)
        }
      />}

      { user.uid === selectedTrack?.authorId &&  <AppIcon
        Icon={<MdDeleteSweep className='text-xl app_icon' />} 
        onclick={deleteFunc}
      />}


    </div>
  )
}

export default ActionButtons