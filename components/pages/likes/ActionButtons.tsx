import React from 'react'
import dynamic from 'next/dynamic'
import { ITrack } from '@/models/.'

interface PlaylistActionProps {
  tracks: ITrack[],
  group: string, 
}

const LikeActionButtons: React.FC<PlaylistActionProps> = (props) => {

  const { group, tracks } = props
  const ActionButtons = dynamic(() => import('@/components/reusable/buttons/ActionButtons'))
  
  return (
    <>
     <ActionButtons 
       group={group}
       tracks={tracks}
       canPlay={tracks.length > 0}
       selectedTrack={tracks[0]}

       canLike={false} 
    />
    </>
  )
}

export default LikeActionButtons