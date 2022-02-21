import React from 'react'

import dynamic from 'next/dynamic'

import { firestore } from '@/lib/firebase'
import { collection } from 'firebase/firestore'
import { useCollectionOnce } from 'react-firebase-hooks/firestore'

import { useAppSelector } from '@/hooks/redux'
import { userSelector } from '@/store/selectors'

import Card from '@/components/reusable/albums/Card'

const PlayLibContent = () => {

  const user = useAppSelector(userSelector)
  const PlayLibBanner = dynamic(() => import ('./PlayLibBanner'))

  const fireref = collection(firestore, 'users', user?.uid || 'sss0', 'playlists' )
  const [playlists] = useCollectionOnce(fireref)

  const gettracksRef = (id: string) => {
    return collection(firestore, 'users', user?.uid || 'ss', 'playlists', id, 'tracks')
  }

  const readyArr = playlists?.docs.map(item => ({...item.data(), id: item.id}))

  return (
    <div className='flex flex-col p-9 pt-3'>
      <h1 className='text-title text-2xl font-bold '>Плейлисты</h1>

      <div className=' grid_category gap-5 pt-3'>

        <PlayLibBanner />
        {
          readyArr?.map((item, idx) => (
            <Card 
              key={item.id}
              album={{...item, description: 'Playlist №' + idx + 1} as any} 
              category={'playlist'}
              secondref={gettracksRef(item.id)} 
            />
          ))
        }
      </div>

    </div>
  )
}

export default PlayLibContent