import { firestore } from "@/lib/firebase"; 
import { collection, addDoc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore' 

import { IAlbum, IPlayList, ITrack, IUser } from '@/models/.'
import { serverTimestamp } from "firebase/firestore";

import { doc } from "firebase/firestore";

const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5H4KVg2u4M7V1dCgIRcZ_WpoZrPP_3iELfQ&usqp=CAU'

export interface PlaylistPayload {
  banner: string,
  title: string,
  bindColor: string
}


export default class PlaylistService {
  static async addPlaylist (user: IUser) {

    const name = prompt('enter playlist name')

    if (!name) {
      return
    }

    const fireref = collection(firestore, 'users', user.uid, 'playlists')
    const newPlaylist = this.createPlaylist(user, name)

    await addDoc(fireref, newPlaylist)

  }

  static async addTrackToPlaylist (playlistId: string, userId: string, track: ITrack) {
    const docref = doc(firestore, 'users', userId, 'playlists', playlistId)
    const fireref = doc(docref, 'tracks', track.id)
    const excludeRef = doc(docref, 'exclude', track.id)

    await setDoc(fireref, track)
    await setDoc(excludeRef, { id: track.id })
  }

  static async deleteTrackFromPlaylist (playlistId: string, trackId: string, userId: string) {
    const fireref = doc(firestore, 'users', userId, 'playlists', playlistId)

    const itemref = doc(fireref, 'tracks', trackId)
    const excludeRef = doc(fireref, 'exclude', trackId)

    console.log(trackId)

    await deleteDoc(itemref)
    await deleteDoc(excludeRef)
  }

  static async deletePlayist (playlistId: string, userId: string) {
    const fireref = doc(firestore, 'users', userId, 'playlists', playlistId)

    await deleteDoc(fireref)
  }

  static async updatePlaylist (
    data: PlaylistPayload, userId: string, playlistId: string
  ) 
  {
    const fireref = doc(firestore, 'users', userId, 'playlists', playlistId)

    await updateDoc(fireref, data as any)
  }

  static createPlaylist (user: IUser, name: string): IAlbum {

    const newPlaylist: IAlbum = {
      name,
      artist: user.displayName,

      artistId: user.uid,
      banner: defaultImage,
      bindColor: '#212121',
      creationDate: serverTimestamp() as any,
      description: '',
      title: name,
      tracks: [],
      genre: 'playlist'
    }

    return newPlaylist
  }
}