import React from 'react'

import dynamic from 'next/dynamic'

import { firestore } from '@/lib/firebase'
import { collection } from 'firebase/firestore'
import { useCollectionOnce } from 'react-firebase-hooks/firestore'

import { query, where } from 'firebase/firestore'

import { useAppSelector } from '@/hooks/redux'
import { userSelector } from '@/store/selectors'

import Card from '@/components/reusable/albums/Card'

const PlayLibContent = () => {
  const AlbumLibBanner = dynamic(() => import ('./AlbumsBanner'))

  const fireref = collection(firestore, 'albums' )
  const user = useAppSelector(userSelector)
  const [albums] = useCollectionOnce(query(fireref, where('artistId', '==', user?.uid || 'd')))

  const readyArr = albums?.docs.map(item => ({...item.data(), id: item.id}))

  return (
    <div className='flex flex-col p-9 pt-3'>
      <h1 className='text-title text-2xl font-bold '>Abums</h1>

      <div className='grid_category gap-5 pt-3'>

        <AlbumLibBanner />
        {
          readyArr?.map((item, idx) => (
            <Card 
              
              editable={true}
              album={{...item, description: 'Playlist №' + idx + 1} as any} 
              category={'playlist'}
            />
          ))
        }
      </div>

    </div>
  )
}

export default PlayLibContent