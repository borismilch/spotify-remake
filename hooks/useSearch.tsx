import React from 'react'

import { IAlbum, ITrack } from '../models' 

import { firestore } from '@/lib/firebase'
import { useCollectionData, useCollectionDataOnce, useCollectionOnce } from 'react-firebase-hooks/firestore' 
import { collection } from 'firebase/firestore' 
import { useAppSelector } from './redux'


const useSearch = (query: string, excludeId: string) => {
  const { user } = useAppSelector(state => state.user)

  const collectionRef = collection(firestore, 'tracks')
  const playlistExclude = collection(firestore, 'users', user?.uid || 's', 'playlists', excludeId, 'exclude')
  const [songs] = useCollectionOnce(collectionRef)
  const [excludeItems] = useCollectionData(playlistExclude)
  const exclude = excludeItems?.map(item => item.id)

  const [albums] = useCollectionDataOnce(collection(firestore, 'albums'))

  const newSongs: ITrack[] = songs?.docs.map(item => ({...item.data(), id: item.id} as any))


  console.log(exclude, newSongs?.map(song => song.id))
  const includeQuery = (str: string) => str.trim().toLowerCase().includes(query.trim().toLowerCase())

  const filteredSongs = newSongs?.filter(item => (
    (includeQuery(item.title) || includeQuery(item.albumName)) && !exclude?.includes(item.id as any)
  ))

  const filteredAlbums = albums?.map(item => ({ ...item, tracks: [] } as IAlbum))
  .filter(item => includeQuery(item.title) || includeQuery(item.artist))

  return {filteredSongs, filteredAlbums}
   
}

export default useSearch