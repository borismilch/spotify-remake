import React from 'react'

import dynamic from 'next/dynamic'
import type { TableContextProps } from 'contexts/'

import useSearch from '@/hooks/useSearch'
import { IPlayList } from '@/models/.'

import { SongsTableItem } from '@/components/reusable/table'
import { TableContext } from 'contexts/'

interface SongSearchTableProps {
  query: string,
  playlist: IPlayList
}

const SongSearchTable: React.FC<SongSearchTableProps> = (props) => {
  const AlbumTableItem = dynamic(() => import('@/components/reusable/table/tableItem/AlbumTableItem'))  

  const {query, playlist} = props

  const { filteredAlbums, filteredSongs } = useSearch(query, playlist.id)

  const contextValue: TableContextProps = {
    group: 'search',
    isSearch: true,
    isPlaylist: !!playlist.title,
    playlistId: playlist.id,
  }
  return (
    <div className='flex flex-col'>

      <TableContext.Provider value={contextValue}>
        {
          filteredSongs?.map((item, idx) => (
            <React.Suspense key={item.id} fallback={<p>Loading...</p>}>
            <SongsTableItem 
              idx={idx} 
              song={item}
              tracks={filteredSongs} 
            />
            </React.Suspense>
          ))
        }
       </TableContext.Provider>

        {
         filteredAlbums?.map((item, idx) => (
          <React.Suspense key={item.id} fallback={<p>Loading...</p>}>
            <AlbumTableItem 
              album={item} 
              index={idx + filteredSongs.length} 
            />
         
          </React.Suspense>
         ))
       }

       {!filteredAlbums?.length && !filteredSongs?.length && <p className='text-title text-xl'>No results found...</p>}
    
    </div>
  )
}

export default React.memo(SongSearchTable)