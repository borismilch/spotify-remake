import React from 'react'

import { SongsTableItem } from '@/components/reusable/table' 

import { useAppSelector } from '@/hooks/redux'
import { TableContext, TableContextProps } from '@/context/TableContext'

const QueueCurrent = () => {

  const { currentTrack, currentIndex, queue, group } = useAppSelector(state => state.song)

  console.log('rerererendered current itr,e')

  const contextValue: TableContextProps = {group, showAlbum: true, isSearch: true}

  return (
    <TableContext.Provider value={contextValue}>
     { currentTrack &&  <SongsTableItem 
        idx={currentIndex}
        song={currentTrack}
        tracks={queue}

      />}

      {!currentTrack && (
        <p className='text-xl text-title'>No track selected</p>
      )}
    </TableContext.Provider>
  )
}

export default QueueCurrent