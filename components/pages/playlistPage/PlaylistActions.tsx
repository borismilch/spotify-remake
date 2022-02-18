import React from 'react'

import dynamic from 'next/dynamic'
import { ITrack } from '@/models/.'
import { setQueue, setCurrentTrack, setCurrentIndex, setCurrentTime, setFullTime } from '@/store/actions'

import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { selectCurrentTrack, selectGroup, userSelector } from '@/store/selectors'
import { PlaylistService } from '@/service/.'

import { useNavigation } from '@/hooks/.'

interface PlaylistActionProps {
  tracks: ITrack[],
  group: string, 
  playlistId: string
}

const PlaylistActions: React.FC<PlaylistActionProps> = (props) => {

  const { group, tracks, playlistId } = props

  const { pushRouter } = useNavigation()

  const currenttrack = useAppSelector(selectCurrentTrack)
  const currentGroup = useAppSelector(selectGroup)
  const user = useAppSelector(userSelector)

  const ActionButtons = dynamic(() => import('@/components/reusable/buttons/ActionButtons'))

  const dispatch = useAppDispatch()

  const deleteCondition = tracks.map(item => item.id).includes(currenttrack?.id) 
  && currentGroup === group

  const deleteAlbum = async () => {
    if (deleteCondition) {
      dispatch(setCurrentTrack(null))
      dispatch(setCurrentIndex(0))
      dispatch(setQueue([]))
      dispatch(setCurrentTime(0))
      dispatch(setFullTime(0))
    }

    pushRouter('/')

    await PlaylistService.deletePlayist(playlistId, user.uid) 

  }
  
  return (
    <>
     <ActionButtons 
       group={group}
       tracks={tracks}
       canPlay={tracks.length > 0}
       selectedTrack={tracks[0]}
       deleteFunc={deleteAlbum}
      canLike={false} 
    />
    </>
  )
}

export default PlaylistActions