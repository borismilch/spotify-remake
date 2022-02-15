import { firestore } from '@/lib/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { ITrack } from '../models'

export default class TrackService {
  static async addTrack (albumId: string, track: ITrack): Promise<void> {
    const trackRef = collection(firestore, 'albums', albumId, 'tracks')

    await addDoc(trackRef, {...track, albumId})
  }
}