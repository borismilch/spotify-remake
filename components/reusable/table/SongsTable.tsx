import React from 'react'

import { SongsTableItem, SongTableHeader } from '.'
import { ITrack } from '@/models/.'

interface SongTableProps {
  tracks: ITrack[]

}

const SongsTable: React.FC<SongTableProps> = (props) => {

  const { tracks } = props

  return (
    <div className='flex flex-col '> 

     {tracks?.length > 0 && <SongTableHeader />}
     
     <div className='flex flex-col'>

      {tracks?.map((song: ITrack, idx: number) => (
        <SongsTableItem 
          idx={idx} 
          song={song} 
          tracks={tracks}
        />
      ))}
  
     </div>

    </div>
  )
}

export default SongsTable