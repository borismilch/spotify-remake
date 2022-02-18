import React from 'react'
import dynamic from 'next/dynamic'

import { useAppSelector } from '@/hooks/redux'
import { collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { firestore } from '@/lib/firebase'
import { TableContext, TableContextProps } from '@/context/.'

import { LikesActionButton, LikesPlaceholder } from '.'
import { ITrack } from '@/models/.'

const SongList: React.FC = () => {

  const { user } = useAppSelector(state => state.user)

  const fireref = collection(firestore, 'users', user?.uid || 'dd', 'likes')
  const [likes] = useCollection(fireref)

  const readyLikes = likes?.docs?.map(item => ({...item.data(), id: item.id} as ITrack))


  const contextValue: TableContextProps = {
    group: 'likes',
    isPlaylist: false, 
    needDelete: false, 
  
    isSearch: false,
    showAlbum: true,
   
  }
  const SongsTable = dynamic(() => import('@/components/reusable/table/SongsTable'))

  return (
    <>
      <div className='p-2'>
        <LikesActionButton  group={contextValue.group} tracks={readyLikes ? readyLikes : []} />
      </div>

      <TableContext.Provider value={contextValue}>
        <SongsTable 
          tracks={readyLikes ? readyLikes : []} 
        />

        {!readyLikes?.length && <LikesPlaceholder />}
      </TableContext.Provider>
    </>
  )
}

export default SongList