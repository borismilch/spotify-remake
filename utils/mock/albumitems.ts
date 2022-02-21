import {tracks} from './trackItems'
import { IAlbum } from '@/models/.'

import { serverTimestamp } from 'firebase/firestore'

export const albumItems: IAlbum[] = [
  {
    name: 'Doom',
    artist: "builo",
    creationDate: serverTimestamp() as any,
    artistId: '5lgBgxRzJSP7geezvq9IHVkEuzt1',
    description: 'some description',
    genre: 'Metal',
    banner: 'https://firebasestorage.googleapis.com/v0/b/spoiityf.appspot.com/o/isaac.jpg?alt=media&token=cc176e7f-cefa-43a6-8640-7f1a6f5ecfe8',
    title: 'Antibirth',
   
    bindColor: '#212121'
  },
  {
    name: 'Doooma',
    artist: "builo",
    creationDate: serverTimestamp() as any,
    artistId: '5lgBgxRzJSP7geezvq9IHVkEuzt1',
    description: 'some very very long description about this album and all tracks or songs, not matter what he is iincluding rigth now',
    genre: 'Metal',
    banner: 'https://firebasestorage.googleapis.com/v0/b/spoiityf.appspot.com/o/isaac.jpg?alt=media&token=cc176e7f-cefa-43a6-8640-7f1a6f5ecfe8',
    title: 'Doooma',
    
    bindColor: '#212121'
  }
]