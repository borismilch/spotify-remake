import { firestore } from '@/lib/firebase'
import { setDoc, deleteDoc, getDoc } from 'firebase/firestore'
import { IAlbum, ITrack, IUser } from '../models'

import { doc } from 'firebase/firestore'

import { uuid } from '@/utils/helpers'

export default class TrackService {
  static async addTrack (albumId: string, track: ITrack): Promise<void> {
    const trackRef = doc(firestore, 'tracks', track.id)
    const trackInAlbumRef = doc(firestore, 'albums', albumId, 'tracks', track.id)

    await setDoc(trackRef, track)
    await setDoc(trackInAlbumRef, track)
  }

  static async deleteTrack (albumId: string, trackId: string) {
    await deleteDoc(doc(firestore, 'albums', albumId, 'tracks', trackId))
  }

  static async likeOrDislikeTrack (track: ITrack, userId: string) {
    const trackref = doc(firestore, 'users', userId, 'likes', track.id)

    const liked = await getDoc(trackref)

    if (liked.data()) {
      await deleteDoc(trackref)
    }
    else {
      await setDoc(trackref,  track)
    }
  }

  static createTrack (
    user: IUser, album: IAlbum, data: {title: string, audio: string}
  ): ITrack {
    const id = uuid()

    const newTrack: ITrack = {
      audio: data.audio,
      authorId: user.uid,
      description: '...',
      duration: 0,
      title: data.title,
      albumId: album.id,
      albumImg: album.banner,
      albumName: album.title,
      authorName: user.displayName,
      category: '',
      id,
      createdAt: Date.now()
    }

    return newTrack
   
  }
}