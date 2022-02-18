import React from 'react'

import dynamic from 'next/dynamic'

import { useAppSelector } from '@/hooks/redux'
import { collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { firestore } from '@/lib/firebase'

import { TableContext, TableContextProps } from '@/context/.'
import PlaylistService from '@/service/playlist.service'

import { PlaylistActions } from '.'

interface SongListProps {
  playlistId: string
}

const SongList: React.FC<SongListProps> = ({playlistId}) => {

  const { user } = useAppSelector(state => state.user)

  const contextValue: TableContextProps = {
    group: 'playlist',
    isPlaylist: false, 
    needDelete: true, 
    playlistId, 
    isSearch: false,
    showAlbum: true,
    onDelete: PlaylistService.deleteTrackFromPlaylist
  }

  const fireref = collection(
    firestore, 'users', user?.uid || 'ss', 
    'playlists', playlistId, 'tracks'
  )

  const [tracks] = useCollection(fireref)
  const readyTracks: any[] = tracks?.docs
   .map(item => ({...item.data(), id: item.id}))

  const SongsTable = dynamic(() => import('@/components/reusable/table/SongsTable'))

  return (
    <>
      <div className='p-2'>
        <PlaylistActions playlistId={playlistId} group={contextValue.group} tracks={readyTracks ? readyTracks : []} />
      </div>

      <TableContext.Provider value={contextValue}>
        <SongsTable 
          tracks={readyTracks? readyTracks : []} 
        />
      </TableContext.Provider>
    </>
  )
}

export default SongList