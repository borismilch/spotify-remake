import React from 'react'

import Mainlayout from '@/components/Layout'
import { ProtectedRoute } from '@/components/auth'

import dynamic from 'next/dynamic'

import { useNavigation } from '@/hooks/.'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/lib/firebase'

import { firestore } from '@/lib/firebase'
import { doc } from 'firebase/firestore'
import { useDocument } from 'react-firebase-hooks/firestore'
import { IAlbum } from '@/models/.'

const ComponentsHrefs = {
  Content: '@/components/pages/playlistPage/PlaylistPageContent'
}

const PlaylistRoute = () => {

  const [user] = useAuthState(auth)

  const { query: { id: playlistId } } = useNavigation()
  const playlistRef = doc(firestore, 'users', user?.uid || 'ss', 'playlists', playlistId? playlistId.toString() : 'ddd')

  const [playlist] = useDocument(playlistRef)

  const PlayListContent = dynamic(() => import(
    '@/components/pages/playlistPage/PlaylistContent'))

  return (
    <ProtectedRoute>
      <Mainlayout title={playlist?.data()?.title + ' | playlists'} >

      {playlist && playlistId && <PlayListContent playlist={{ ...playlist.data(), id: playlist.id } as IAlbum} />}

      </Mainlayout>
    </ProtectedRoute>
  )
}

export default React.memo(PlaylistRoute)