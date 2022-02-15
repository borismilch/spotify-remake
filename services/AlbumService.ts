import { IAlbum } from '@/models/.'

import { firestore } from '@/lib/firebase'
import { collection, addDoc } from 'firebase/firestore'

export default class AlbumService {

  static async addNewAlbum (album: IAlbum) {
    const fireref = collection(firestore, 'albums')

    const newAlbum = {...album, id: fireref.id, 
      tracks: album.tracks
      .map(item => ({...item, albumId: fireref.id, albumName: album.name, albumImg: album.banner}))}

    return  await addDoc(fireref, newAlbum)
  }

}