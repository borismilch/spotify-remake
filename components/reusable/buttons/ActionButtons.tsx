import React from 'react'

import { FiHeart }  from 'react-icons/fi'
import { PlayButton } from '@/components/reusable'
import { RiMoreLine } from 'react-icons/ri'
import AppIcon from '@/components/icons'
import { ITrack } from '@/models/.'

import dynamic from 'next/dynamic'

import { setQueue, setCurrentTrack } from '@/store/actions'
import { useNavigation } from '@/hooks/.'

import { useAppDispatch } from '@/hooks/redux'
import { useToggle } from '@/hooks/.'

import { IDropItem } from '@/models/.'

interface ActionButtonsProps {
  selectedTrack: ITrack
  group: string
  canPlay?: boolean
  canLike?: boolean
  tracks: ITrack[]
  deleteFunc?: () => Promise<void>

}

const ActionButtons: React.FC<ActionButtonsProps> = (props) => {

  const DropList = dynamic(() => import('@/components/reusable/dropList/DropList'))

  const { pushRouter } = useNavigation()

  const { 
    selectedTrack, 
    group, 
    canPlay = true, 
    canLike = true, 
    tracks,  
    deleteFunc = () => {}
  } = props

  const [ open, changeOpen ] = useToggle(false)

  const dispatch = useAppDispatch()

  const addToQueue = () => {
    dispatch(setQueue(tracks))
    dispatch(setCurrentTrack(tracks[0]))
    pushRouter('/queue')
  }


  const dropItems: IDropItem[] = [
    {
      title: 'delete',
      onClick: deleteFunc,
      Icon: () => <></>
    },
    {
      title: 'start playing',
      onClick: addToQueue,
      Icon: () => <></>
    }
  ]

  return (
    <div className='flex  gap-6 pb-5 items-center'>

    { canPlay && <PlayButton 
        tracks={tracks}
        playedElement={selectedTrack}
        category={group}
        big 
      />}

     {canLike && <AppIcon 
        Icon = {<FiHeart className='text-4xl text-desc app_icon' />}
        onclick={ () => {} }
      />}


      <div className='relative'>
      <AppIcon
      
        Icon={<RiMoreLine className='text-4xl app_icon' />} 
        onclick={changeOpen.bind(null, !open)}
      />

      <div className='absolute'>
        <DropList 
          close={changeOpen.bind(null, false)} 
          open={open} 
          items={dropItems} 
        />
      </div>
      
      </div>


    </div>
  )
}

export default ActionButtons