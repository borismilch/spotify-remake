import React from 'react'

import { useAppSelector } from '@/hooks/redux'
import { firestore } from '@/lib/firebase'
import { doc } from 'firebase/firestore'

import { EditTrigger } from '@/components/reusable/index'

import { IPlayList } from '@/models/.'

import { PlaylistService } from '@/service/.'
import { PlaylistPayload } from '@/service/playlist.service'

interface EditPlaylistTriggerProps {
  playlist: IPlayList
}

const EditPlaylistTrigger: React.FC<EditPlaylistTriggerProps> = ({playlist}) => {

  const { user } = useAppSelector(state => state.user)
  const playlistRef = doc(firestore, 'users', user?.uid || 'dd', 'playlists', playlist.id)

  const submitChage = async (value: string, url: string, bindColor: string) => {
    const data: PlaylistPayload = { title: value, banner: url, bindColor }

    await PlaylistService.updatePlaylist(data, user.uid, playlist.id)
  }

  return (
    <>
      <EditTrigger 
        onComplete={submitChage}
        startValue={{ image: playlist.banner, text: playlist.title }}
       
      />
    </>
  )
}

export default React.memo(EditPlaylistTrigger)