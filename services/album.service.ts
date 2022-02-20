import { IAlbum, IUser } from '@/models/.'

import { firestore } from '@/lib/firebase'
import { doc, deleteDoc, updateDoc, setDoc} from 'firebase/firestore'

import { defaultImage } from './playlist.service'

import { uuid } from '@/utils/helpers'


export default class AlbumService {

  static async addNewAlbum (album: IAlbum) {
    const fireref = doc(firestore, 'albums', album.id)

    const newAlbum = {...album, id: fireref.id}

    return await setDoc(fireref, newAlbum)
  }

  static async deleteAlbum (albumId: string) {
    const fireref = doc(firestore, 'albums', albumId)

    await deleteDoc(fireref)
  }

  static async updateAlbum (albumId: string, album: IAlbum) {
    const fireref = doc(firestore, 'albums', albumId)

    await updateDoc(fireref, album as any)

  }

  static createAlbum (user: IUser, name: string, description: string): IAlbum {
    
    const newPlaylist: IAlbum = {
      name,
      artist: user.displayName,
      artistId: user.uid,
      banner: defaultImage,
      bindColor: '#212121',
      creationDate: { seconds: Date.now() },
      description,
      title: name,
      genre: 'metal',
      id: uuid()
    }

    return newPlaylist
  }
}