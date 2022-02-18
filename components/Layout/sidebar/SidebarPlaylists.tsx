import React, { useEffect } from 'react'

import { useCollection } from 'react-firebase-hooks/firestore'
import {firestore} from '@/lib/firebase'
import { collection } from 'firebase/firestore'

import { useAppSelector } from '@/hooks/redux'

import Link from 'next/link'

const SidebarPlaylists = () => {

  const { user } = useAppSelector(state => state.user)

  const playlistRef = collection(firestore, 'users', user?.uid || 's', 'playlists')
  const [playlists] = useCollection(playlistRef)

  return (
    <div className='flex flex-col text-desc font-semibold px-5 overflow-auto h-full'>

      {
        playlists?.docs.map(item => (
          <Link 
            key={item.id}
            href={'/playlist/' + item.id}
          >
            <p className='sidebar_playlist_link'>
             { item.data().title[0].toUpperCase() + item.data().title.slice(1) }

            </p>
          </Link>
        ))
      }

      {!playlists?.docs.length && (
        <p className='text-title font-semibold'>
          No active playlists!
        </p>
      )}

    </div>
  )
}

export default React.memo(SidebarPlaylists)