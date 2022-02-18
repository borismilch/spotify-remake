import { firestore } from '@/lib/firebase'
import { collection, addDoc, setDoc, deleteDoc, getDoc } from 'firebase/firestore'
import { ITrack } from '../models'

import { doc } from 'firebase/firestore'

export default class TrackService {
  static async addTrack (albumId: string, track: ITrack, albumName: string, albumImg: string): Promise<void> {
    const trackRef = collection(firestore, 'tracks')

    await addDoc(trackRef, {...track, albumId, albumImg: 'https://firebasestorage.googleapis.com/v0/b/spoiityf.appspot.com/o/isaac.jpg?alt=media&token=cc176e7f-cefa-43a6-8640-7f1a6f5ecfe8', albumName})
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
}