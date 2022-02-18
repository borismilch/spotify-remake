import React from 'react'
import dynamic from 'next/dynamic'

import { collection } from 'firebase/firestore'
import { firestore } from '@/lib/firebase'

import { IAlbum } from '@/models/.'

import { useCollection } from 'react-firebase-hooks/firestore'

const AlbumsContainer = React.memo(() => {
  const albumsRef = collection(firestore, 'albums')
  const AlbumsList = dynamic(() => import('@/components/reusable/albums/CardList'))

  const [albums] = useCollection(albumsRef)

  return (
    <div className='flex flex-col'>
      {albums && <AlbumsList title='Most popular' albums={
        albums.docs.map(item => ({...item.data(), id: item.id })) as IAlbum[]
      } />}
    </div>
  )
})

export default AlbumsContainer